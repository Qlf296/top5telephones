import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

/**
 * Obtient l'image thumbnail d'un téléphone si disponible, sinon retourne l'image principale
 */
export function getThumbnailImage(phoneImage: string): string {
  // Si l'image est dans /images/top5/, utiliser thumbnail.png
  if (phoneImage.includes('/images/top5/')) {
    return phoneImage.replace('/front.png', '/thumbnail.png');
  }
  // Sinon, retourner l'image principale
  return phoneImage;
}

/**
 * Obtient l'image OG (Open Graph) d'un téléphone si disponible
 */
export function getOGImage(phoneImage: string): string {
  // Si l'image est dans /images/top5/, utiliser og-image.png
  if (phoneImage.includes('/images/top5/')) {
    return phoneImage.replace('/front.png', '/og-image.png');
  }
  // Sinon, utiliser l'image OG par défaut
  return '/images/og-image.jpg';
}

export function calculateDiscount(originalPrice: number, currentPrice: number): number {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

export function generateStars(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '') + '☆'.repeat(emptyStars);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function getRandomColor(): string {
  const colors = [
    'bg-ios-blue-100',
    'bg-ios-blue-200', 
    'bg-ios-blue-300',
    'bg-ios-blue-400',
    'bg-ios-blue-500'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
} 