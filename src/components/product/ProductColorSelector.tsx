"use client";

import { useState } from 'react';
import { PhoneColor } from '@/data/phones';
import { motion } from 'framer-motion';

interface ProductColorSelectorProps {
  colors: PhoneColor[];
  phoneName: string;
  selectedColor?: PhoneColor;
  onColorChange?: (color: PhoneColor) => void;
}

export function ProductColorSelector({
  colors,
  phoneName,
  selectedColor: externalSelectedColor,
  onColorChange,
}: ProductColorSelectorProps) {
  const [internalSelectedColor, setInternalSelectedColor] = useState<PhoneColor>(
    externalSelectedColor || colors[0]
  );

  const selectedColor = externalSelectedColor || internalSelectedColor;

  const handleColorSelect = (color: PhoneColor) => {
    setInternalSelectedColor(color);
    if (onColorChange) {
      onColorChange(color);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Couleurs disponibles</h3>
      <div className="flex flex-wrap gap-6 sm:gap-8">
        {colors.map((color, index) => {
          const isSelected = selectedColor.slug === color.slug;
          return (
            <motion.button
              key={color.slug}
              onClick={() => handleColorSelect(color)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex flex-col items-center gap-3"
              aria-label={`Couleur ${color.name} pour ${phoneName}`}
            >
              {/* Cercle de couleur iOS Style - Plus grand */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: color.hex,
                  border: isSelected 
                    ? '3px solid rgba(59, 130, 246, 0.7)' 
                    : '2px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: isSelected
                    ? '0 6px 16px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(59, 130, 246, 0.25)'
                    : '0 3px 10px rgba(0, 0, 0, 0.12)',
                  transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                }}
              />

              {/* Nom de la couleur affiché en dessous avec plus d'espace */}
              <div className="mt-1">
                <span
                  className={`text-sm font-medium transition-colors ${
                    isSelected ? 'text-ios-blue-700 font-semibold' : 'text-slate-600'
                  }`}
                >
                  {color.name}
                </span>
              </div>

              {/* Indicateur de sélection - Checkmark iOS */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-6 h-6 bg-ios-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    boxShadow: '0 3px 10px rgba(59, 130, 246, 0.5)',
                  }}
                >
                  <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Affichage de la couleur sélectionnée */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <p className="text-sm text-slate-600">
          Couleur sélectionnée : <span className="font-semibold text-slate-900 text-base">{selectedColor.name}</span>
        </p>
      </div>
    </div>
  );
}
