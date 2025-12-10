"use client";

import { useState, useCallback } from 'react';
import { getAllPhones, Phone } from '@/data/phones';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionShell } from '@/components/ui/SectionShell';
import { ProductFilters } from './ProductFilters';
import Image from 'next/image';
import { formatPrice, generateStars } from '@/lib/utils';
import { getTop2HeroImage } from '@/lib/image-utils';
import { FavoriteButton } from './FavoriteButton';

export function Top5WithFilters() {
  const allPhones = getAllPhones();
  const [filteredPhones, setFilteredPhones] = useState<Phone[]>(allPhones);
  
  // Mémoriser la fonction callback pour éviter les re-renders
  const handleFilteredPhonesChange = useCallback((filtered: Phone[]) => {
    setFilteredPhones(filtered);
  }, []);

  return (
    <SectionShell
      id="top5"
      eyebrow="Sélection rigoureuse 2025"
      title="Les meilleurs téléphones à moins de 300€"
      subtitle="Basé sur des tests réels, performances, qualité et rapport qualité-prix exceptionnel."
    >
      <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Sidebar avec filtres */}
        <div className="lg:col-span-1">
          <ProductFilters phones={allPhones} onFilteredPhonesChange={handleFilteredPhonesChange} />
        </div>

        {/* Grille de résultats */}
        <div className="lg:col-span-3">
          {filteredPhones.length === 0 ? (
            <GlassCard className="p-12 text-center">
              <p className="text-slate-600 text-lg">Aucun téléphone ne correspond à vos critères.</p>
              <p className="text-slate-500 text-sm mt-2">Essayez de modifier vos filtres.</p>
            </GlassCard>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {filteredPhones.map((phone, index) => (
                <GlassCard key={phone.id} className="flex flex-col gap-5 relative group">
                  {/* Badge numéro 1 pour le premier */}
                  {index === 0 && filteredPhones.length === allPhones.length && (
                    <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-br from-ios-blue-500 to-ios-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      #1 Recommandé
                    </div>
                  )}
                  
                  {/* Bouton favoris */}
                  <div className="absolute top-4 right-4 z-10">
                    <FavoriteButton phone={phone} size="sm" />
                  </div>
                  
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/70 border border-white/25 group-hover:border-ios-blue-500/30 transition-all duration-300">
                    <Image
                      src={getTop2HeroImage(phone)}
                      alt={phone.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                      loading={index < 3 ? 'eager' : 'lazy'}
                      quality={85}
                    />
                  </div>
                  
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-ios-blue-600 text-xs font-semibold uppercase tracking-wide">{phone.brand}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-sm">★</span>
                          <span className="text-sm font-medium text-slate-700">{phone.rating}/5</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">{phone.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-900">{phone.price}€</span>
                        {phone.originalPrice && phone.originalPrice > phone.price && (
                          <span className="text-sm text-slate-500 line-through">{phone.originalPrice}€</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3 flex-1">
                      <div>
                        <h4 className="font-medium text-slate-900 text-sm mb-2">Points forts</h4>
                        <ul className="space-y-1.5">
                          {phone.pros.slice(0, 3).map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                              <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <Button as="link" href={`/fiche/${phone.slug}`} size="sm" className="w-full">
                        Détails
                      </Button>
                      <Button
                        as="link"
                        href={phone.affiliateLinks.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        className="w-full"
                      >
                        Acheter
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}

