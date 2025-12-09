#!/usr/bin/env node

/**
 * Script pour créer des placeholders SVG pour les images manquantes
 * Ces placeholders peuvent être remplacés par de vraies images plus tard
 */

const fs = require('fs');
const path = require('path');

const phones = [
  {
    name: 'Xiaomi Redmi Note 14 5G',
    slug: 'xiaomi-redmi-note-14-5g',
    color: '#FF6900', // Orange Xiaomi
  },
  {
    name: 'Samsung Galaxy A35 5G',
    slug: 'samsung-galaxy-a35-5g',
    color: '#1428A0', // Bleu Samsung
  },
  {
    name: 'Poco X7 Pro',
    slug: 'poco-x7-pro',
    color: '#FF6900', // Orange Poco
  },
  {
    name: 'Motorola Edge 50 Fusion',
    slug: 'motorola-edge-50-fusion',
    color: '#5C88DA', // Bleu Motorola
  },
  {
    name: 'Samsung Galaxy A26 5G',
    slug: 'samsung-galaxy-a26-5g',
    color: '#1428A0', // Bleu Samsung
  },
];

// Générer un SVG placeholder pour une image
function generatePlaceholderSVG(phoneName, color, size = 800) {
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f9ff;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#grad)"/>
  <rect x="${size * 0.2}" y="${size * 0.15}" width="${size * 0.6}" height="${size * 0.7}" rx="${size * 0.05}" fill="white" stroke="${color}" stroke-width="3" opacity="0.9"/>
  <rect x="${size * 0.25}" y="${size * 0.2}" width="${size * 0.5}" height="${size * 0.35}" rx="${size * 0.02}" fill="#e5e7eb"/>
  <circle cx="${size * 0.5}" cy="${size * 0.65}" r="${size * 0.08}" fill="${color}"/>
  <text x="${size * 0.5}" y="${size * 0.85}" font-family="Arial, sans-serif" font-size="${size * 0.06}" fill="#6b7280" text-anchor="middle" font-weight="bold">${phoneName}</text>
  <text x="${size * 0.5}" y="${size * 0.92}" font-family="Arial, sans-serif" font-size="${size * 0.04}" fill="#9ca3af" text-anchor="middle">Image à générer</text>
</svg>`;
}

// Créer les placeholders pour chaque téléphone
phones.forEach(phone => {
  const phoneDir = path.join(process.cwd(), 'public/images/top5', phone.slug);
  
  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(phoneDir)) {
    fs.mkdirSync(phoneDir, { recursive: true });
  }

  // Générer les images multi-angles
  const images = [
    { name: 'front.png', size: 800 },
    { name: 'back.png', size: 800 },
    { name: 'side-left.png', size: 800 },
    { name: 'side-right.png', size: 800 },
    { name: 'angle-3d.png', size: 800 },
    { name: 'thumbnail.png', size: 400 },
    { name: 'og-image.png', size: 1200, height: 630 },
  ];

  images.forEach(img => {
    const filePath = path.join(phoneDir, img.name);
    const height = img.height || img.size;
    const svg = generatePlaceholderSVG(phone.name, phone.color, img.size);
    
    // Pour og-image, créer un SVG rectangulaire
    if (img.name === 'og-image.png') {
      const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f9ff;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#grad)"/>
  <rect x="200" y="100" width="300" height="430" rx="20" fill="white" stroke="${phone.color}" stroke-width="4" opacity="0.9"/>
  <rect x="250" y="150" width="200" height="150" rx="10" fill="#e5e7eb"/>
  <circle cx="350" cy="400" r="30" fill="${phone.color}"/>
  <text x="600" y="300" font-family="Arial, sans-serif" font-size="48" fill="#1f2937" font-weight="bold">${phone.name}</text>
  <text x="600" y="360" font-family="Arial, sans-serif" font-size="32" fill="#6b7280">Top 5 Smartphones 2025</text>
  <text x="600" y="420" font-family="Arial, sans-serif" font-size="24" fill="#9ca3af">Image à générer</text>
</svg>`;
      fs.writeFileSync(filePath.replace('.png', '.svg'), ogSvg);
    } else {
      fs.writeFileSync(filePath.replace('.png', '.svg'), svg);
    }
    
    console.log(`✅ Créé : ${phone.slug}/${img.name.replace('.png', '.svg')}`);
  });
});

console.log('\n✅ Tous les placeholders SVG ont été créés !');
console.log('📝 Note : Remplacez ces fichiers SVG par de vraies images PNG une fois générées.');
console.log('📁 Dossiers : public/images/top5/[slug]/');

