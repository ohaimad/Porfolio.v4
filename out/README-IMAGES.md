# Optimized Images Structure

## 📁 Directory Structure
```
public/
├── images/                    # 🚀 Optimized images (9.4MB) - DEPLOYED
│   ├── *.webp                # WebP versions (78% smaller)
│   ├── *.svg                 # SVG files (copied as-is)
│   └── fallback/
│       └── *.png/jpg         # Compressed fallbacks
└── images-source/            # 📦 Original images (43MB) - NOT DEPLOYED
    └── *.png/jpg/jpeg        # Source files for optimization
```

## 🎯 Key Benefits
- **Deployment size**: 9.4MB vs 43MB (78% reduction)
- **Load speed**: WebP format loads much faster
- **Browser support**: Automatic fallbacks for older browsers

## 📝 Usage in Components
```tsx
<picture>
  <source srcSet="/images/your-image.webp" type="image/webp" />
  <img src="/images/fallback/your-image.png" alt="Description" />
</picture>
```

## 🔄 Adding New Images
1. Add source images to `public/images-source/`
2. Run `npm run optimize:images`
3. Use the optimized versions from `public/images/`

## 📊 Size Comparison
- **Before**: 43MB of original images
- **After**: 9.4MB of optimized images
- **Savings**: 78% reduction in deployment size!