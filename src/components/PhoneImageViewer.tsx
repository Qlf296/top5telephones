"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface PhoneImageViewerProps {
  phoneSlug: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export default function PhoneImageViewer({ phoneSlug, images }: PhoneImageViewerProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const mainImageRef = useRef<HTMLDivElement>(null);

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
    setIsZoomed(false);
  };

  const handleMainImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isZoomed) {
        if (e.key === 'Escape') {
          setIsZoomed(false);
        }
        return;
      }

      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          setIsZoomed(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed, images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center w-full max-w-[300px] h-[400px] sm:h-[500px] bg-gray-100 dark:bg-gray-800 rounded-xl">
        <p className="text-gray-500 dark:text-gray-400">Aucune image disponible</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4 w-full max-w-[350px] mx-auto">
      {/* Image principale avec zoom et navigation */}
      <div className="relative w-full">
        <div 
          ref={mainImageRef}
          className={`relative w-full max-w-[300px] h-[350px] sm:h-[500px] bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 ${
            isZoomed ? 'z-50 fixed inset-0 bg-black/95 flex items-center justify-center' : ''
          }`}
          onClick={handleMainImageClick}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Image
            src={images[activeImageIndex].src}
            alt={images[activeImageIndex].alt}
            width={isZoomed ? 800 : 280}
            height={isZoomed ? 1400 : 480}
            className={`max-w-full max-h-full object-contain transition-all duration-300 ease-in-out ${
              isZoomed ? 'w-auto h-auto max-w-[95vw] max-h-[95vh]' : ''
            }`}
            priority={activeImageIndex === 0}
            sizes={isZoomed ? "95vw" : "(max-width: 640px) 100vw, 280px"}
          />
          
          {/* Indicateur de zoom */}
          {!isZoomed && (
            <div className="absolute top-2 right-2 bg-black/60 text-white px-2 sm:px-3 py-1 rounded-lg text-xs backdrop-blur-sm">
              Cliquez pour zoomer
            </div>
          )}
          
          {/* Navigation arrows */}
          {!isZoomed && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
                aria-label="Image précédente"
              >
                <svg width="16" height="16" className="sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
                aria-label="Image suivante"
              >
                <svg width="16" height="16" className="sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </>
          )}
          
          {/* Bouton fermer en mode zoom */}
          {isZoomed && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(false);
              }}
              className="absolute top-4 right-4 bg-black/60 text-white p-2 sm:p-3 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
              aria-label="Fermer le zoom"
            >
              <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          )}

          {/* Navigation en mode zoom */}
          {isZoomed && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 sm:p-3 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
                aria-label="Image précédente"
              >
                <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 sm:p-3 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
                aria-label="Image suivante"
              >
                <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Miniatures améliorées */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-full px-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => handleThumbnailClick(index)}
            className={`relative w-[60px] h-[90px] sm:w-[80px] sm:h-[120px] rounded-lg sm:rounded-xl overflow-hidden transition-all duration-200 ease-in-out hover:scale-105 flex items-center justify-center group ${
              index === activeImageIndex
                ? 'ring-2 ring-blue-500 ring-offset-1 sm:ring-offset-2 shadow-lg'
                : 'ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-blue-300'
            }`}
            aria-label={`Voir ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={50}
              height={80}
              className="max-w-full max-h-full object-contain bg-white dark:bg-neutral-800"
              sizes="(max-width: 640px) 60px, 80px"
            />
            
            {/* Overlay au hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-lg sm:rounded-xl" />
            
            {/* Indicateur de sélection amélioré */}
            {index === activeImageIndex && (
              <div className="absolute top-1 right-1 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                <svg width="6" height="6" className="sm:w-2 sm:h-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Indicateur de position amélioré */}
      <div className="flex justify-center space-x-1.5 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === activeImageIndex
                ? 'bg-blue-500 scale-125 shadow-lg'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Image ${index + 1} sur ${images.length}`}
          />
        ))}
      </div>

      {/* Compteur d'images et raccourcis */}
      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
        <div>{activeImageIndex + 1} / {images.length}</div>
        <div className="text-xs mt-1 opacity-75">Utilisez ← → ou swipe pour naviguer</div>
      </div>
    </div>
  );
} 