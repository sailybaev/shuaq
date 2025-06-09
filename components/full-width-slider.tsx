'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Photo {
  src: string;
  alt: string;
}

interface FullWidthSliderProps {
  photos: Photo[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'auto' | 'ultrawide';
  maxHeight?: string;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  auto: 'aspect-auto',
  ultrawide: 'aspect-[21/9]',
};

export function FullWidthSlider({
  photos,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className,
  aspectRatio = 'ultrawide',
  maxHeight = '400px',
}: FullWidthSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isAutoPlaying, interval, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(autoPlay);

  return (
    <div
      className={cn('relative w-full overflow-hidden', className)}
      style={{ maxHeight }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            className={cn(
              'w-full flex-shrink-0 relative',
              aspectRatioClasses[aspectRatio],
              'bg-gray-100'
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              className={cn(
                'object-cover transition-opacity duration-300',
                loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
              )}
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
      </div>

      {showArrows && photos.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {showDots && photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-colors',
                currentSlide === index
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
