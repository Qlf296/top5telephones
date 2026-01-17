"use client";
import Image from 'next/image';
import PhoneImageViewer from './PhoneImageViewer';

export default function FicheImageSection({ phone, discount }: { phone: any, discount: number }) {
  // Images Xiaomi Redmi Note 14 5G
  if (phone.slug === "xiaomi-redmi-note-14-5g") {
    const xiaomiRedmiNote14Images = [
      { src: "/images/top5/xiaomi-redmi-note-14-5g/front.png", alt: "Vue avant Xiaomi Redmi Note 14 5G" },
      { src: "/images/top5/xiaomi-redmi-note-14-5g/back.png", alt: "Vue arrière Xiaomi Redmi Note 14 5G" },
      { src: "/images/top5/xiaomi-redmi-note-14-5g/side-left.png", alt: "Vue côté gauche Xiaomi Redmi Note 14 5G" },
      { src: "/images/top5/xiaomi-redmi-note-14-5g/side-right.png", alt: "Vue côté droit Xiaomi Redmi Note 14 5G" },
      { src: "/images/top5/xiaomi-redmi-note-14-5g/angle-3d.png", alt: "Vue perspective 3D Xiaomi Redmi Note 14 5G" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={xiaomiRedmiNote14Images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Vues professionnelles – Xiaomi Redmi Note 14 5G</p>
      </section>
    );
  }

  // Images Samsung Galaxy A35 5G
  if (phone.slug === "samsung-galaxy-a35-5g") {
    const samsungA35Images = [
      { src: "/images/top5/samsung-galaxy-a35-5g/front.png", alt: "Vue avant Samsung Galaxy A35 5G" },
      { src: "/images/top5/samsung-galaxy-a35-5g/back.png", alt: "Vue arrière Samsung Galaxy A35 5G" },
      { src: "/images/top5/samsung-galaxy-a35-5g/side-left.png", alt: "Vue côté gauche Samsung Galaxy A35 5G" },
      { src: "/images/top5/samsung-galaxy-a35-5g/side-right.png", alt: "Vue côté droit Samsung Galaxy A35 5G" },
      { src: "/images/top5/samsung-galaxy-a35-5g/angle-3d.png", alt: "Vue perspective 3D Samsung Galaxy A35 5G" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={samsungA35Images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Vues professionnelles – Samsung Galaxy A35 5G</p>
      </section>
    );
  }

  // Images Poco X7 Pro
  if (phone.slug === "poco-x7-pro") {
    const pocoX7ProImages = [
      { src: "/images/top5/poco-x7-pro/front.png", alt: "Vue avant Poco X7 Pro" },
      { src: "/images/top5/poco-x7-pro/back.png", alt: "Vue arrière Poco X7 Pro" },
      { src: "/images/top5/poco-x7-pro/side-left.png", alt: "Vue côté gauche Poco X7 Pro" },
      { src: "/images/top5/poco-x7-pro/side-right.png", alt: "Vue côté droit Poco X7 Pro" },
      { src: "/images/top5/poco-x7-pro/angle-3d.png", alt: "Vue perspective 3D Poco X7 Pro" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={pocoX7ProImages} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Vues professionnelles – Poco X7 Pro</p>
      </section>
    );
  }

  // Images Motorola Edge 50 Fusion
  if (phone.slug === "motorola-edge-50-fusion") {
    const motorolaEdge50Images = [
      { src: "/images/top5/motorola-edge-50-fusion/front.png", alt: "Vue avant Motorola Edge 50 Fusion" },
      { src: "/images/top5/motorola-edge-50-fusion/back.png", alt: "Vue arrière Motorola Edge 50 Fusion" },
      { src: "/images/top5/motorola-edge-50-fusion/side-left.png", alt: "Vue côté gauche Motorola Edge 50 Fusion" },
      { src: "/images/top5/motorola-edge-50-fusion/side-right.png", alt: "Vue côté droit Motorola Edge 50 Fusion" },
      { src: "/images/top5/motorola-edge-50-fusion/angle-3d.png", alt: "Vue perspective 3D Motorola Edge 50 Fusion" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={motorolaEdge50Images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Vues professionnelles – Motorola Edge 50 Fusion</p>
      </section>
    );
  }

  // Images Samsung Galaxy A26 5G
  if (phone.slug === "samsung-galaxy-a26-5g") {
    const samsungA26Images = [
      { src: "/images/top5/samsung-galaxy-a26-5g/front.png", alt: "Vue avant Samsung Galaxy A26 5G" },
      { src: "/images/top5/samsung-galaxy-a26-5g/back.png", alt: "Vue arrière Samsung Galaxy A26 5G" },
      { src: "/images/top5/samsung-galaxy-a26-5g/side-left.png", alt: "Vue côté gauche Samsung Galaxy A26 5G" },
      { src: "/images/top5/samsung-galaxy-a26-5g/side-right.png", alt: "Vue côté droit Samsung Galaxy A26 5G" },
      { src: "/images/top5/samsung-galaxy-a26-5g/angle-3d.png", alt: "Vue perspective 3D Samsung Galaxy A26 5G" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={samsungA26Images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Vues professionnelles – Samsung Galaxy A26 5G</p>
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