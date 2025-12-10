"use client";

import { useState, useMemo, useEffect } from 'react';
import { Phone } from '@/data/phones';
import { motion } from 'framer-motion';

interface ProductFiltersProps {
  phones: Phone[];
  onFilteredPhonesChange: (filtered: Phone[]) => void;
}

export function ProductFilters({ phones, onFilteredPhonesChange }: ProductFiltersProps) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 200, max: 300 });
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'name'>('rating');
  const [searchQuery, setSearchQuery] = useState('');

  // Extraire les marques uniques
  const brands = useMemo(() => {
    const uniqueBrands = Array.from(new Set(phones.map(p => p.brand)));
    return uniqueBrands;
  }, [phones]);

  // Features disponibles - Mémorisé pour éviter les re-renders
  const availableFeatures = useMemo(() => [
    { id: '5g', label: '5G', check: (phone: Phone) => phone.name.includes('5G') || phone.specs.processor.includes('5G') },
    { id: 'amoled', label: 'AMOLED', check: (phone: Phone) => phone.specs.screen.includes('AMOLED') },
    { id: '120hz', label: '120Hz', check: (phone: Phone) => phone.specs.screen.includes('120Hz') },
    { id: 'fast-charge', label: 'Charge rapide', check: (phone: Phone) => {
      const chargeMatch = phone.specs.battery.match(/(\d+)W/);
      return chargeMatch && parseInt(chargeMatch[1]) >= 30;
    }},
  ], []);

  // Filtrer et trier
  const filteredPhones = useMemo(() => {
    let filtered = [...phones];

    // Recherche textuelle
    if (searchQuery) {
      filtered = filtered.filter(phone =>
        phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        phone.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filtre par marque
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(phone => selectedBrands.includes(phone.brand));
    }

    // Filtre par prix
    filtered = filtered.filter(phone =>
      phone.price >= priceRange.min && phone.price <= priceRange.max
    );

    // Filtre par caractéristiques
    if (selectedFeatures.length > 0) {
      filtered = filtered.filter(phone => {
        return selectedFeatures.every(featureId => {
          const feature = availableFeatures.find(f => f.id === featureId);
          return feature ? feature.check(phone) : false;
        });
      });
    }

    // Tri
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [phones, searchQuery, selectedBrands, priceRange, selectedFeatures, sortBy, availableFeatures]);

  // Notifier le parent des changements (après le rendu)
  // Utiliser useRef pour éviter les boucles infinies si onFilteredPhonesChange change
  useEffect(() => {
    onFilteredPhonesChange(filteredPhones);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredPhones]); // Retirer onFilteredPhonesChange des dépendances

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId) ? prev.filter(f => f !== featureId) : [...prev, featureId]
    );
  };

  const resetFilters = () => {
    setSelectedBrands([]);
    setPriceRange({ min: 200, max: 300 });
    setSelectedFeatures([]);
    setSearchQuery('');
    setSortBy('rating');
  };

  return (
    <div className="space-y-6">
      {/* Barre de recherche */}
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher un téléphone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-2xl border border-white/40 bg-white/80 backdrop-blur-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-ios-blue-500 focus:border-transparent transition-all"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Filtres */}
      <div
        className="rounded-[24px] p-6 space-y-6"
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.33)',
          boxShadow: '0 10px 28px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Tri */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Trier par</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'name')}
            className="w-full px-4 py-2 rounded-xl border border-white/40 bg-white/60 text-slate-900 focus:outline-none focus:ring-2 focus:ring-ios-blue-500"
          >
            <option value="rating">Note (meilleur en premier)</option>
            <option value="price">Prix (croissant)</option>
            <option value="name">Nom (A-Z)</option>
          </select>
        </div>

        {/* Prix */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Prix : {priceRange.min}€ - {priceRange.max}€
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="200"
              max="300"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-slate-600">
              <span>200€</span>
              <span>300€</span>
            </div>
          </div>
        </div>

        {/* Marques */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">Marques</label>
          <div className="flex flex-wrap gap-2">
            {brands.map(brand => {
              const isSelected = selectedBrands.includes(brand);
              return (
                <button
                  key={brand}
                  onClick={() => toggleBrand(brand)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-ios-blue-500 text-white shadow-md'
                      : 'bg-white/60 text-slate-700 border border-white/40 hover:bg-white/80'
                  }`}
                >
                  {brand}
                </button>
              );
            })}
          </div>
        </div>

        {/* Caractéristiques */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">Caractéristiques</label>
          <div className="flex flex-wrap gap-2">
            {availableFeatures.map(feature => {
              const isSelected = selectedFeatures.includes(feature.id);
              return (
                <button
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-ios-blue-500 text-white shadow-md'
                      : 'bg-white/60 text-slate-700 border border-white/40 hover:bg-white/80'
                  }`}
                >
                  {feature.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reset */}
        {(selectedBrands.length > 0 || selectedFeatures.length > 0 || priceRange.max < 300 || searchQuery) && (
          <button
            onClick={resetFilters}
            className="w-full px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors"
          >
            Réinitialiser les filtres
          </button>
        )}

        {/* Résultats */}
        <div className="pt-4 border-t border-white/20">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">{filteredPhones.length}</span> téléphone{filteredPhones.length > 1 ? 's' : ''} trouvé{filteredPhones.length > 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </div>
  );
}

