"use client";

import Image from 'next/image';
import { Phone } from '@/data/phones';
import { getTop2HeroImage } from '@/lib/image-utils';
import { motion } from 'framer-motion';

interface ProductHeroProps {
  phone: Phone;
  discount?: number;
}

export function ProductHero({ phone, discount }: ProductHeroProps) {
  const heroImage = getTop2HeroImage(phone);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      {/* Container iOS 26.2 Style - Fond clair, soft, dégradé très léger */}
      <div
        className="relative rounded-[32px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.33)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
        }}
      >
        {/* Badge de réduction - Style iOS */}
        {discount && discount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute top-6 right-6 z-10 px-4 py-2 rounded-full text-white font-semibold text-sm"
            style={{
              background: 'linear-gradient(135deg, #ff3b30 0%, #ff2d55 100%)',
              boxShadow: '0 8px 16px rgba(255, 59, 48, 0.3)',
            }}
          >
            -{discount}%
          </motion.div>
        )}

        {/* Image HERO - Grande et premium, style Apple */}
        <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-10">
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={heroImage}
                alt={`${phone.name} - Vue HERO premium`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, (max-width: 1280px) 90vw, 1400px"
                quality={95}
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))',
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
