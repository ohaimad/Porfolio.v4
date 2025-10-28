'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  fill?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  style,
  fill = false
}) => {
  const [imageError, setImageError] = useState(false);
  const [webpError, setWebpError] = useState(false);

  // Extract filename without extension
  const getImagePaths = (originalSrc: string) => {
    const fileName = originalSrc.split('/').pop()?.split('.')[0];
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    
    // For SVG files, use original
    if (extension === 'svg') {
      return {
        webp: originalSrc,
        fallback: originalSrc,
        isVector: true
      };
    }

    return {
      webp: `/images/optimized/${fileName}.webp`,
      fallback: `/images/optimized/fallback/${fileName}.${extension}`,
      original: originalSrc,
      isVector: false
    };
  };

  const { webp, fallback, original, isVector } = getImagePaths(src);

  // For vector images, use the original
  if (isVector) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        sizes={sizes}
        style={style}
        fill={fill}
        unoptimized={true}
      />
    );
  }

  // For raster images, try WebP first, then fallback
  const imageSrc = imageError 
    ? (webpError ? (original || src) : fallback)
    : webp;

  return (
    <picture>
      {!webpError && !imageError && (
        <source srcSet={webp} type="image/webp" />
      )}
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        sizes={sizes}
        style={style}
        fill={fill}
        unoptimized={true}
        onError={() => {
          if (!webpError && imageSrc === webp) {
            setWebpError(true);
          } else if (!imageError) {
            setImageError(true);
          }
        }}
      />
    </picture>
  );
};

export default OptimizedImage;