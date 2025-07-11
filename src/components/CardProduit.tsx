'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from '@/data/phones';
import { formatPrice, calculateDiscount, generateStars } from '@/lib/utils';

interface CardProduitProps {
  phone: Phone;
  showRank?: boolean;
  rank?: number;
}

export default function CardProduit({ phone, showRank = false, rank }: CardProduitProps) {
  const discount = phone.originalPrice ? calculateDiscount(phone.originalPrice, phone.price) : 0;

  return (
    <div className="group relative bg-glass-white backdrop-blur-md rounded-2xl p-6 shadow-glass-light border border-glass-light hover:shadow-glass transition-all duration-300 hover:-translate-y-1">
      {/* Rank badge */}
      {showRank && rank && (
        <div className="absolute -top-3 -left-3 w-12 h-12 bg-ios-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">#{rank}</span>
        </div>
      )}

      {/* Discount badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
          -{discount}%
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
        <Image
          src={phone.image}
          alt={phone.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Brand & Name */}
        <div>
          <span className="text-ios-blue-600 text-sm font-medium">{phone.brand}</span>
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{phone.name}</h3>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-sm">{generateStars(phone.rating)}</span>
          <span className="text-gray-600 text-sm">({phone.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">{formatPrice(phone.price)}</span>
          {phone.originalPrice && (
            <span className="text-gray-500 line-through">{formatPrice(phone.originalPrice)}</span>
          )}
        </div>

        {/* Key specs */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div>
            <span className="font-medium">Écran:</span> {phone.specs.screen}
          </div>
          <div>
            <span className="font-medium">RAM:</span> {phone.specs.ram}
          </div>
          <div>
            <span className="font-medium">Stockage:</span> {phone.specs.storage}
          </div>
          <div>
            <span className="font-medium">Batterie:</span> {phone.specs.battery}
          </div>
        </div>

        {/* Pros */}
        <div className="space-y-1">
          <h4 className="text-sm font-medium text-gray-900">Points forts:</h4>
          <ul className="space-y-1">
            {phone.pros.slice(0, 2).map((pro, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-2 pt-2">
          <Link
            href={`/fiche/${phone.slug}`}
            className="flex-1 bg-ios-blue-500 hover:bg-ios-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            Voir détails
          </Link>
          <a
            href={phone.affiliateLinks.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            Acheter
          </a>
        </div>
      </div>
    </div>
  );
} 