"use client";

import { useState } from 'react';
import Image from 'next/image';
import PhoneImageViewer from './PhoneImageViewer';
import { PhoneColor } from '@/data/phones';

interface FicheImageSectionWithColorProps {
  phone: any;
  discount: number;
  selectedColor?: PhoneColor;
  onColorChange?: (color: PhoneColor) => void;
}

export default function FicheImageSectionWithColor({
  phone,
  discount,
  selectedColor,
  onColorChange,
}: FicheImageSectionWithColorProps) {
  // Utiliser la couleur sélectionnée ou la première couleur par défaut
  const currentColor = selectedColor || phone.colors?.[0];
  const colorPrefix = currentColor ? `/${currentColor.slug}` : '';

  // Images Xiaomi Redmi Note 14 5G
  if (phone.slug === "xiaomi-redmi-note-14-5g") {
    const basePath = `/images/top5/xiaomi-redmi-note-14-5g${colorPrefix}`;
    const images = [
      { src: `${basePath}/front.png`, alt: `Vue avant Xiaomi Redmi Note 14 5G - ${currentColor?.name || 'Noir'}` },
      { src: `/images/top5/xiaomi-redmi-note-14-5g/back.png`, alt: "Vue arrière Xiaomi Redmi Note 14 5G" },
      { src: `/images/top5/xiaomi-redmi-note-14-5g/side-left.png`, alt: "Vue côté gauche Xiaomi Redmi Note 14 5G" },
      { src: `/images/top5/xiaomi-redmi-note-14-5g/side-right.png`, alt: "Vue côté droit Xiaomi Redmi Note 14 5G" },
      { src: `/images/top5/xiaomi-redmi-note-14-5g/angle-3d.png`, alt: "Vue perspective 3D Xiaomi Redmi Note 14 5G" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Vues professionnelles – Xiaomi Redmi Note 14 5G {currentColor?.name && `(${currentColor.name})`}
        </p>
      </section>
    );
  }

  // Images Samsung Galaxy A35 5G
  if (phone.slug === "samsung-galaxy-a35-5g") {
    const basePath = `/images/top5/samsung-galaxy-a35-5g${colorPrefix}`;
    const images = [
      { src: `${basePath}/front.png`, alt: `Vue avant Samsung Galaxy A35 5G - ${currentColor?.name || 'Noir'}` },
      { src: `/images/top5/samsung-galaxy-a35-5g/back.png`, alt: "Vue arrière Samsung Galaxy A35 5G" },
      { src: `/images/top5/samsung-galaxy-a35-5g/side-left.png`, alt: "Vue côté gauche Samsung Galaxy A35 5G" },
      { src: `/images/top5/samsung-galaxy-a35-5g/side-right.png`, alt: "Vue côté droit Samsung Galaxy A35 5G" },
      { src: `/images/top5/samsung-galaxy-a35-5g/angle-3d.png`, alt: "Vue perspective 3D Samsung Galaxy A35 5G" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Vues professionnelles – Samsung Galaxy A35 5G {currentColor?.name && `(${currentColor.name})`}
        </p>
      </section>
    );
  }

  // Images Poco X7 Pro
  if (phone.slug === "poco-x7-pro") {
    const basePath = `/images/top5/poco-x7-pro${colorPrefix}`;
    const images = [
      { src: `${basePath}/front.png`, alt: `Vue avant Poco X7 Pro - ${currentColor?.name || 'Noir'}` },
      { src: `/images/top5/poco-x7-pro/back.png`, alt: "Vue arrière Poco X7 Pro" },
      { src: `/images/top5/poco-x7-pro/side-left.png`, alt: "Vue côté gauche Poco X7 Pro" },
      { src: `/images/top5/poco-x7-pro/side-right.png`, alt: "Vue côté droit Poco X7 Pro" },
      { src: `/images/top5/poco-x7-pro/angle-3d.png`, alt: "Vue perspective 3D Poco X7 Pro" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Vues professionnelles – Poco X7 Pro {currentColor?.name && `(${currentColor.name})`}
        </p>
      </section>
    );
  }

  // Images Motorola Edge 50 Fusion
  if (phone.slug === "motorola-edge-50-fusion") {
    const basePath = `/images/top5/motorola-edge-50-fusion${colorPrefix}`;
    const images = [
      { src: `${basePath}/front.png`, alt: `Vue avant Motorola Edge 50 Fusion - ${currentColor?.name || 'Noir'}` },
      { src: `/images/top5/motorola-edge-50-fusion/back.png`, alt: "Vue arrière Motorola Edge 50 Fusion" },
      { src: `/images/top5/motorola-edge-50-fusion/side-left.png`, alt: "Vue côté gauche Motorola Edge 50 Fusion" },
      { src: `/images/top5/motorola-edge-50-fusion/side-right.png`, alt: "Vue côté droit Motorola Edge 50 Fusion" },
      { src: `/images/top5/motorola-edge-50-fusion/angle-3d.png`, alt: "Vue perspective 3D Motorola Edge 50 Fusion" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-6 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Vues professionnelles – Motorola Edge 50 Fusion {currentColor?.name && `(${currentColor.name})`}
        </p>
      </section>
    );
  }

  // Images Samsung Galaxy A26 5G
  if (phone.slug === "samsung-galaxy-a26-5g") {
    const basePath = `/images/top5/samsung-galaxy-a26-5g${colorPrefix}`;
    const images = [
      { src: `${basePath}/front.png`, alt: `Vue avant Samsung Galaxy A26 5G - ${currentColor?.name || 'Noir'}` },
      { src: `/images/top5/samsung-galaxy-a26-5g/back.png`, alt: "Vue arrière Samsung Galaxy A26 5G" },
      { src: `/images/top5/samsung-galaxy-a26-5g/side-left.png`, alt: "Vue côté gauche Samsung Galaxy A26 5G" },
      { src: `/images/top5/samsung-galaxy-a26-5g/side-right.png`, alt: "Vue côté droit Samsung Galaxy A26 5G" },
      { src: `/images/top5/samsung-galaxy-a26-5g/angle-3d.png`, alt: "Vue perspective 3D Samsung Galaxy A26 5G" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Vues professionnelles – Samsung Galaxy A26 5G {currentColor?.name && `(${currentColor.name})`}
        </p>
      </section>
    );
  }

  // Pour les autres téléphones (images SVG par défaut)
  return (
    <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-white shadow-glass-light flex items-center justify-center">
      <Image
        src={phone.image}
        alt={phone.name}
        width={600}
        height={600}
        className="w-full h-auto rounded-2xl shadow-md object-contain bg-white dark:bg-neutral-800"
      />
      {discount > 0 && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
          -{discount}%
        </div>
      )}
    </div>
  );
}

