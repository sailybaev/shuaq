'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FullWidthSlider } from './full-width-slider';

interface Photo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface PhotoSliderProps {
  photos: Photo[];
  aspectRatio?: 'square' | 'video' | 'auto';
  className?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  auto: 'aspect-auto',
};

export function PhotoSlider({
  photos,
  aspectRatio = 'video',
  className,
  showArrows = true,
  showDots = true,
  autoPlay = true,
  interval = 5000,
}: PhotoSliderProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  return (
    <FullWidthSlider
      className={className}
      showArrows={showArrows}
      showDots={showDots}
      autoPlay={autoPlay}
      interval={interval}
    >
      {photos.map((photo, index) => (
        <div
          key={photo.src}
          className={`relative w-full ${aspectRatioClasses[aspectRatio]} bg-gray-100`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            className={`
              object-cover
              transition-opacity duration-300
              ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'}
            `}
            priority={index === 0}
            onLoad={() => handleImageLoad(index)}
          />
          {!loadedImages.has(index) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            </div>
          )}
        </div>
      ))}
    </FullWidthSlider>
  );
} 