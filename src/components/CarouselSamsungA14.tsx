"use client";
import dynamic from 'next/dynamic';

// Import dynamique de keen-slider pour réduire le bundle initial
const KeenSlider = dynamic(() => import('./KeenSliderWrapper'), {
  ssr: false,
  loading: () => (
    <div className="h-80 sm:h-96 flex items-center justify-center bg-white/80 rounded-2xl">
      <div className="animate-pulse text-slate-400">Chargement...</div>
    </div>
  ),
});

export default function CarouselSamsungA14() {
  const images = [
    { src: "/images/real/samsung-galaxy-a14/front.jpg", alt: "Vue avant Samsung Galaxy A14" },
    { src: "/images/real/samsung-galaxy-a14/back.jpg", alt: "Vue arrière Samsung Galaxy A14" },
    { src: "/images/real/samsung-galaxy-a14/side-one.jpg", alt: "Vue latérale 1 Samsung Galaxy A14" },
    { src: "/images/real/samsung-galaxy-a14/side-two.jpg", alt: "Vue latérale 2 Samsung Galaxy A14" },
    { src: "/images/real/samsung-galaxy-a14/font-back.jpg", alt: "Vue avant-arrière Samsung Galaxy A14" },
    { src: "/images/real/samsung-galaxy-a14/turn.jpg", alt: "Vue rotation Samsung Galaxy A14" },
  ];

  return <KeenSlider images={images} />;
} 