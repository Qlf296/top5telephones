"use client";

import { useState, useEffect } from 'react';
import { Phone } from '@/data/phones';
import { motion } from 'framer-motion';

interface FavoriteButtonProps {
  phone: Phone;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function FavoriteButton({ phone, size = 'md', showLabel = false }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Charger les favoris depuis localStorage
    const favorites = JSON.parse(localStorage.getItem('favoritePhones') || '[]');
    setIsFavorite(favorites.includes(phone.id));
  }, [phone.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoritePhones') || '[]');
    let newFavorites: string[];

    if (isFavorite) {
      newFavorites = favorites.filter((id: string) => id !== phone.id);
    } else {
      newFavorites = [...favorites, phone.id];
    }

    localStorage.setItem('favoritePhones', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full transition-all duration-200 ${
        isFavorite
          ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30'
          : 'bg-white/60 text-slate-600 hover:bg-white/80 border border-white/40'
      }`}
      aria-label={isFavorite ? `Retirer ${phone.name} des favoris` : `Ajouter ${phone.name} aux favoris`}
    >
      <motion.svg
        width={size === 'sm' ? 16 : size === 'md' ? 20 : 24}
        height={size === 'sm' ? 16 : size === 'md' ? 20 : 24}
        fill={isFavorite ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
        animate={{ scale: isFavorite ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </motion.svg>
      {showLabel && (
        <span className="ml-2 text-sm font-medium">
          {isFavorite ? 'Retirer' : 'Ajouter'}
        </span>
      )}
    </button>
  );
}

