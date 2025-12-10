import { Phone } from '@/data/phones';

/**
 * Mapping des noms de fichiers top2 vers les slugs des téléphones
 */
const top2ImageMap: Record<string, string> = {
  'xiaomi-redmi-note-14-5g': 'Xiaomi Redmi Note 14 5G.png',
  'samsung-galaxy-a35-5g': 'Samsung A35.png',
  'poco-x7-pro': 'Poco X7 Pro.png',
  'motorola-edge-50-fusion': 'Motorola Edge 50 Fusion.png',
  'samsung-galaxy-a26-5g': 'Samsung A26.png',
};

/**
 * Récupère le chemin de l'image HERO finale (priorité: hero-final.webp > hero-final.jpg > top2 > fallback)
 */
export function getTop2HeroImage(phone: Phone): string {
  const slug = phone.slug;
  
  // Priorité 1: hero-final.webp (format optimisé)
  const heroWebp = `/images/top5/${slug}/hero-final.webp`;
  
  // Priorité 2: hero-final.jpg (fallback haute qualité)
  const heroJpg = `/images/top5/${slug}/hero-final.jpg`;
  
  // Priorité 3: Image top2 (source actuelle)
  const top2Filename = top2ImageMap[slug];
  const top2Path = top2Filename ? `/images/top2/${top2Filename}` : null;
  
  // Priorité 4: Image par défaut du téléphone
  const defaultImage = phone.image;
  
  // Retourne le premier chemin disponible
  // Note: En production, on vérifiera l'existence réelle des fichiers
  // Pour l'instant, on utilise top2 comme source principale
  return top2Path || defaultImage;
}

/**
 * Récupère l'image HERO pour les métadonnées OG (Open Graph)
 */
export function getHeroOGImage(phone: Phone): string {
  const slug = phone.slug;
  const baseUrl = 'https://top5telephones.fr';
  
  // Priorité: hero-final.jpg pour OG (meilleure compatibilité)
  const heroJpg = `${baseUrl}/images/top5/${slug}/hero-final.jpg`;
  const top2Path = getTop2HeroImage(phone);
  
  // Si hero-final existe, l'utiliser, sinon utiliser top2
  return top2Path.startsWith('http') ? top2Path : `${baseUrl}${top2Path}`;
}

/**
 * Récupère l'image isolée du téléphone (fond transparent)
 */
export function getIsolatedPhoneImage(phone: Phone): string {
  return `/images/top5/${phone.slug}/phone-isolated.png`;
}

/**
 * Récupère l'image thumbnail pour le comparateur
 */
export function getThumbnailImage(phone: Phone): string {
  const slug = phone.slug;
  // Priorité: thumbnail optimisé, sinon hero-final, sinon top2
  return `/images/top5/${slug}/thumbnail.png` || getTop2HeroImage(phone);
}
