"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { PhoneColor } from '@/data/phones';

interface ColorSelectorProps {
  colors: PhoneColor[];
  phoneName: string;
  phoneSlug: string;
  defaultColor?: string;
  onColorChange?: (color: PhoneColor) => void;
  showImage?: boolean;
}

export function ColorSelector({
  colors,
  phoneName,
  phoneSlug,
  defaultColor,
  onColorChange,
  showImage = true,
}: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState<PhoneColor>(
    colors.find(c => c.slug === defaultColor) || colors[0]
  );

  const handleColorSelect = (color: PhoneColor) => {
    setSelectedColor(color);
    if (onColorChange) {
      onColorChange(color);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          Couleurs disponibles
        </h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => {
            const isSelected = selectedColor.slug === color.slug;
            return (
              <button
                key={color.slug}
                onClick={() => handleColorSelect(color)}
                className={`
                  relative group flex flex-col items-center gap-2 p-3 rounded-2xl
                  border-2 transition-all duration-200
                  ${
                    isSelected
                      ? 'border-ios-blue-500 bg-ios-blue-50/50 shadow-lg scale-105'
                      : 'border-white/40 bg-white/60 hover:border-ios-blue-300 hover:shadow-md'
                  }
                `}
                aria-label={`Couleur ${color.name}`}
              >
                {/* Pastille de couleur */}
                <div
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  style={{ backgroundColor: color.hex }}
                />
                
                {/* Nom de la couleur */}
                <span
                  className={`text-xs font-medium ${
                    isSelected ? 'text-ios-blue-700' : 'text-slate-600'
                  }`}
                >
                  {color.name}
                </span>

                {/* Indicateur de sélection */}
                {isSelected && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-ios-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Image de la couleur sélectionnée */}
      {showImage && selectedColor.image && (
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/70 border border-white/25">
          <Image
            src={selectedColor.image}
            alt={`${phoneName} - ${selectedColor.name}`}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={(e) => {
              // Fallback vers l'image principale si l'image couleur n'existe pas
              const target = e.target as HTMLImageElement;
              target.src = `/images/top5/${phoneSlug}/front.png`;
            }}
          />
        </div>
      )}
    </div>
  );
}

