"use client";
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface KeenSliderWrapperProps {
  images: Array<{ src: string; alt: string }>;
}

export default function KeenSliderWrapper({ images }: KeenSliderWrapperProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 16 },
  });

  return (
    <div className="keen-slider relative rounded-2xl overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-80 sm:h-96">
        {images.map((img, idx) => (
          <div className="keen-slider__slide flex items-center justify-center" key={img.src}>
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl shadow-md object-contain transition-transform duration-300 hover:scale-105 bg-white dark:bg-neutral-800"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
      {/* Navigation */}
      <button 
        onClick={() => instanceRef.current?.prev()} 
        aria-label="Image précédente" 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-800/60 rounded-full p-2 shadow-md hover:scale-110 transition-transform z-10"
      >
        <span className="sr-only">Précédent</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button 
        onClick={() => instanceRef.current?.next()} 
        aria-label="Image suivante" 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-800/60 rounded-full p-2 shadow-md hover:scale-110 transition-transform z-10"
      >
        <span className="sr-only">Suivant</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
}

