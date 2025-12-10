"use client";

import { Phone } from '@/data/phones';
import { formatPrice, calculateDiscount, generateStars } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Pill } from '@/components/ui/Pill';
import { motion } from 'framer-motion';

interface ProductOverviewProps {
  phone: Phone;
  discount?: number;
}

export function ProductOverview({ phone, discount }: ProductOverviewProps) {
  const calculatedDiscount = discount ?? (phone.originalPrice ? calculateDiscount(phone.originalPrice, phone.price) : 0);

  // Caractéristiques principales (3-4 max) - Écran, Batterie, Caméra, 5G
  const mainFeatures = [
    phone.specs.screen,
    phone.specs.battery,
    phone.specs.camera,
    phone.specs.processor.includes('5G') || phone.name.includes('5G') ? '5G intégré' : null,
  ].filter(Boolean).slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      {/* Nom complet du téléphone */}
      <div>
        <Pill className="mb-3">{phone.brand}</Pill>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2 leading-tight">
          {phone.name}
        </h1>
      </div>

      {/* Prix */}
      <div className="flex items-baseline gap-4">
        <span className="text-4xl font-bold text-slate-900">{formatPrice(phone.price)}</span>
        {phone.originalPrice && (
          <>
            <span className="text-2xl text-slate-500 line-through">
              {formatPrice(phone.originalPrice)}
            </span>
            {calculatedDiscount > 0 && (
              <Pill className="bg-green-500/10 text-green-700 border-green-500/20">
                -{calculatedDiscount}%
              </Pill>
            )}
          </>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="text-yellow-400 text-xl">{generateStars(phone.rating)}</span>
        <span className="text-slate-600 font-medium">({phone.rating}/5)</span>
      </div>

      {/* Caractéristiques principales - Style iOS 26.2 */}
      <div
        className="rounded-[24px] p-6 space-y-3"
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.33)',
          boxShadow: '0 10px 28px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Caractéristiques principales</h3>
        <ul className="space-y-3">
          {mainFeatures.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 text-slate-700"
            >
              <span className="text-ios-blue-500 text-lg font-bold">•</span>
              <span className="text-base">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* CTA - "Voir les détails" / "En savoir plus" */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button
          as="link"
          href={phone.affiliateLinks.amazon}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="flex-1"
        >
          Acheter sur Amazon
        </Button>
        {phone.affiliateLinks.cdiscount && (
          <Button
            as="link"
            href={phone.affiliateLinks.cdiscount}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            className="flex-1"
          >
            Acheter sur CDiscount
          </Button>
        )}
      </div>
    </motion.div>
  );
}
