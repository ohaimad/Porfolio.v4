#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const inputDir = 'public/images-source';
const outputDir = 'public/images';

async function optimizeImages() {
  try {
    // Check if source directory exists
    if (!fs.existsSync(inputDir)) {
      console.log(`ℹ️  Source directory ${inputDir} not found. Using existing optimized images.`);
      return;
    }

    // Ensure output directories exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    if (!fs.existsSync(`${outputDir}/fallback`)) {
      fs.mkdirSync(`${outputDir}/fallback`, { recursive: true });
    }

    console.log('🚀 Starting image optimization...\n');

    // Get all image files
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file)
    );
    const svgFiles = files.filter(file => 
      /\.svg$/i.test(file)
    );

    let webpCount = 0;
    let fallbackCount = 0;

    // Process each image file
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const fileName = path.parse(file).name;
      const ext = path.parse(file).ext.toLowerCase();
      
      console.log(`Processing: ${file}`);

      try {
        // Create WebP version
        const webpPath = path.join(outputDir, `${fileName}.webp`);
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(webpPath);
        webpCount++;

        // Create optimized fallback version
        const fallbackPath = path.join(`${outputDir}/fallback`, file);
        if (ext === '.png') {
          await sharp(inputPath)
            .png({ quality: 85, compressionLevel: 9 })
            .toFile(fallbackPath);
        } else {
          await sharp(inputPath)
            .jpeg({ quality: 85, progressive: true })
            .toFile(fallbackPath);
        }
        fallbackCount++;

      } catch (err) {
        console.warn(`⚠️  Failed to process ${file}:`, err.message);
      }
    }

    // Copy SVG files as-is
    svgFiles.forEach(file => {
      const srcPath = path.join(inputDir, file);
      const destPath = path.join(outputDir, file);
      fs.copyFileSync(srcPath, destPath);
    });

    console.log('\n✅ Image optimization complete!');
    console.log(`📦 WebP files created: ${webpCount}`);
    console.log(`📦 Fallback files created: ${fallbackCount}`);
    console.log(`📦 SVG files copied: ${svgFiles.length}`);
    console.log(`📁 Output directory: ${outputDir}\n`);

    // Calculate size savings
    const originalSize = calculateDirectorySize(inputDir);
    const optimizedSize = calculateDirectorySize(outputDir);
    const savings = originalSize > 0 ? ((originalSize - optimizedSize) / originalSize * 100).toFixed(1) : 0;
    
    console.log(`💾 Original size: ${formatBytes(originalSize)}`);
    console.log(`💾 Optimized size: ${formatBytes(optimizedSize)}`);
    console.log(`🎉 Size reduction: ${savings}%`);

  } catch (error) {
    console.error('❌ Error optimizing images:', error);
    process.exit(1);
  }
}

function calculateDirectorySize(dirPath) {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dirPath, file.name);
    if (file.isDirectory()) {
      totalSize += calculateDirectorySize(filePath);
    } else {
      totalSize += fs.statSync(filePath).size;
    }
  }
  
  return totalSize;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run the optimization
optimizeImages();