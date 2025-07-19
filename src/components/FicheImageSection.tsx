"use client";
import Image from 'next/image';
import PhoneImageViewer from './PhoneImageViewer';

export default function FicheImageSection({ phone, discount }: { phone: any, discount: number }) {
  // Images Samsung Galaxy A14
  if (phone.slug === "samsung-galaxy-a14") {
    const samsungA14Images = [
      { src: "/images/real/samsung-galaxy-a14/front.jpg", alt: "Vue avant Samsung Galaxy A14" },
      { src: "/images/real/samsung-galaxy-a14/back.jpg", alt: "Vue arrière Samsung Galaxy A14" },
      { src: "/images/real/samsung-galaxy-a14/side-one.jpg", alt: "Vue latérale 1 Samsung Galaxy A14" },
      { src: "/images/real/samsung-galaxy-a14/side-two.jpg", alt: "Vue latérale 2 Samsung Galaxy A14" },
      { src: "/images/real/samsung-galaxy-a14/font-back.jpg", alt: "Vue avant-arrière Samsung Galaxy A14" },
      { src: "/images/real/samsung-galaxy-a14/turn.jpg", alt: "Vue rotation Samsung Galaxy A14" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={samsungA14Images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Vues réelles – Samsung Galaxy A14 noir</p>
      </section>
    );
  }

  // Images Xiaomi Redmi Note 12
  if (phone.slug === "xiaomi-redmi-note-12") {
    const xiaomiRedmiNote12Images = [
      { src: "/images/real/Xiaomi Redmi Note 12/front.jpg", alt: "Vue avant Xiaomi Redmi Note 12" },
      { src: "/images/real/Xiaomi Redmi Note 12/back.jpg", alt: "Vue arrière Xiaomi Redmi Note 12" },
      { src: "/images/real/Xiaomi Redmi Note 12/left.jpg", alt: "Vue gauche Xiaomi Redmi Note 12" },
      { src: "/images/real/Xiaomi Redmi Note 12/right.jpg", alt: "Vue droite Xiaomi Redmi Note 12" },
      { src: "/images/real/Xiaomi Redmi Note 12/down.jpg", alt: "Vue bas Xiaomi Redmi Note 12" },
      { src: "/images/real/Xiaomi Redmi Note 12/font-back.jpg", alt: "Vue avant-arrière Xiaomi Redmi Note 12" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={xiaomiRedmiNote12Images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Vues réelles – Xiaomi Redmi Note 12</p>
      </section>
    );
  }

  // Images Motorola Moto G84
  if (phone.slug === "motorola-moto-g84") {
    const motorolaMotoG84Images = [
      { src: "/images/real/Motorola Moto G84/front.jpg", alt: "Vue avant Motorola Moto G84" },
      { src: "/images/real/Motorola Moto G84/back.jpg", alt: "Vue arrière Motorola Moto G84" },
      { src: "/images/real/Motorola Moto G84/left.jpg", alt: "Vue gauche Motorola Moto G84" },
      { src: "/images/real/Motorola Moto G84/right.jpg", alt: "Vue droite Motorola Moto G84" },
      { src: "/images/real/Motorola Moto G84/front-turn.jpg", alt: "Vue avant rotation Motorola Moto G84" },
      { src: "/images/real/Motorola Moto G84/back-turn.jpg", alt: "Vue arrière rotation Motorola Moto G84" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={motorolaMotoG84Images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Vues réelles – Motorola Moto G84</p>
      </section>
    );
  }

  // Images Realme 10
  if (phone.slug === "realme-10") {
    const realme10Images = [
      { src: "/images/real/Realme 10/front.jpg", alt: "Vue avant Realme 10" },
      { src: "/images/real/Realme 10/back.jpg", alt: "Vue arrière Realme 10" },
      { src: "/images/real/Realme 10/front-back.jpg", alt: "Vue avant-arrière Realme 10" },
      { src: "/images/real/Realme 10/left-right.jpg", alt: "Vue gauche-droite Realme 10" },
      { src: "/images/real/Realme 10/turn.jpg", alt: "Vue rotation Realme 10" },
      { src: "/images/real/Realme 10/up-down.jpg", alt: "Vue haut-bas Realme 10" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={realme10Images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Vues réelles – Realme 10</p>
      </section>
    );
  }

  // Images Nokia G60
  if (phone.slug === "nokia-g60") {
    const nokiaG60Images = [
      { src: "/images/real/Nokia G60/front-back-one.jpg", alt: "Vue avant-arrière 1 Nokia G60" },
      { src: "/images/real/Nokia G60/front-back-two.jpg", alt: "Vue avant-arrière 2 Nokia G60" },
      { src: "/images/real/Nokia G60/left.jpg", alt: "Vue gauche Nokia G60" },
      { src: "/images/real/Nokia G60/right.jpg", alt: "Vue droite Nokia G60" },
      { src: "/images/real/Nokia G60/back.jpg", alt: "Vue arrière Nokia G60" },
      { src: "/images/real/Nokia G60/turn.jpg", alt: "Vue rotation Nokia G60" },
    ];

    return (
      <section className="bg-white/80 dark:bg-neutral-800/60 py-6 px-4 rounded-2xl shadow-glass-light">
        <PhoneImageViewer phoneSlug={phone.slug} images={nokiaG60Images} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Vues réelles – Nokia G60</p>
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