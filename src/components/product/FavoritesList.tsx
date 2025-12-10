"use client";

import { useState, useEffect } from 'react';
import { Phone } from '@/data/phones';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { formatPrice, generateStars } from '@/lib/utils';
import { getTop2HeroImage } from '@/lib/image-utils';
import { FavoriteButton } from './FavoriteButton';
import Link from 'next/link';

interface FavoritesListProps {
  allPhones: Phone[];
}

export function FavoritesList({ allPhones }: FavoritesListProps) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [favoritePhones, setFavoritePhones] = useState<Phone[]>([]);

  useEffect(() => {
    // Charger les favoris depuis localStorage
    const favorites = JSON.parse(localStorage.getItem('favoritePhones') || '[]');
    setFavoriteIds(favorites);
    setFavoritePhones(allPhones.filter(phone => favorites.includes(phone.id)));
  }, [allPhones]);

  const removeFavorite = (phoneId: string) => {
    const newFavorites = favoriteIds.filter(id => id !== phoneId);
    localStorage.setItem('favoritePhones', JSON.stringify(newFavorites));
    setFavoriteIds(newFavorites);
    setFavoritePhones(favoritePhones.filter(p => p.id !== phoneId));
  };

  if (favoritePhones.length === 0) {
    return (
      <GlassCard className="p-12 text-center">
        <div className="space-y-4">
          <svg
            className="w-16 h-16 mx-auto text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-slate-900">Aucun favori pour le moment</h3>
          <p className="text-slate-600">Commencez à ajouter des téléphones à vos favoris en cliquant sur l'icône cœur.</p>
          <Link href="/">
            <Button size="lg">Découvrir les téléphones</Button>
          </Link>
        </div>
      </GlassCard>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-slate-600">
          <span className="font-semibold text-slate-900">{favoritePhones.length}</span> téléphone{favoritePhones.length > 1 ? 's' : ''} sauvegardé{favoritePhones.length > 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritePhones.map((phone) => (
          <GlassCard key={phone.id} className="flex flex-col gap-5 relative group">
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
    </div>
  );
}

