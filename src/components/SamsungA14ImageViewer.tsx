"use client";
import PhoneImageViewer from './PhoneImageViewer';

export default function SamsungA14ImageViewer() {
  const samsungA14Images = [
    { src: "/images/real/samsung-galaxy-a14/front.jpg", alt: "Vue avant Samsung Galaxy A14" },
    { src: "/images/real/samsung-galaxy-a14/back.jpg", alt: "Vue arrière Samsung Galaxy A14" },
    { src: "/images/real/samsung-galaxy-a14/side-one.jpg", alt: "Vue latérale 1 Samsung Galaxy A14" },
    { src: "/images/real/samsung-galaxy-a14/side-two.jpg", alt: "Vue latérale 2 Samsung Galaxy A14" },
    { src: "/images/real/samsung-galaxy-a14/font-back.jpg", alt: "Vue avant-arrière Samsung Galaxy A14" },
    { src: "/images/real/samsung-galaxy-a14/turn.jpg", alt: "Vue rotation Samsung Galaxy A14" },
  ];

  return (
    <div className="flex justify-center p-8">
      <PhoneImageViewer 
        phoneSlug="samsung-galaxy-a14" 
        images={samsungA14Images} 
      />
    </div>
  );
} 