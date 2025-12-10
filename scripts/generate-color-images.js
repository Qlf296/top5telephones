#!/usr/bin/env node

/**
 * Script pour générer des images SVG par couleur pour chaque téléphone
 * Ces images peuvent être remplacées par de vraies images plus tard
 */

const fs = require('fs');
const path = require('path');

const phones = [
  {
    slug: 'xiaomi-redmi-note-14-5g',
    colors: [
      { name: 'Noir', hex: '#1a1a1a', slug: 'noir' },
      { name: 'Bleu', hex: '#0ea5e9', slug: 'bleu' },
      { name: 'Vert', hex: '#10b981', slug: 'vert' },
    ],
  },
  {
    slug: 'samsung-galaxy-a35-5g',
    colors: [
      { name: 'Noir', hex: '#0f172a', slug: 'noir' },
      { name: 'Bleu', hex: '#1428A0', slug: 'bleu' },
      { name: 'Violet', hex: '#9333ea', slug: 'violet' },
      { name: 'Jaune', hex: '#CDDC39', slug: 'jaune' },
    ],
  },
  {
    slug: 'poco-x7-pro',
    colors: [
      { name: 'Noir', hex: '#1a1a1a', slug: 'noir' },
      { name: 'Bleu', hex: '#3b82f6', slug: 'bleu' },
      { name: 'Jaune', hex: '#fbbf24', slug: 'jaune' },
    ],
  },
  {
    slug: 'motorola-edge-50-fusion',
    colors: [
      { name: 'Noir', hex: '#1a1a1a', slug: 'noir' },
      { name: 'Bleu', hex: '#5C88DA', slug: 'bleu' },
      { name: 'Rose', hex: '#ec4899', slug: 'rose' },
    ],
  },
  {
    slug: 'samsung-galaxy-a26-5g',
    colors: [
      { name: 'Noir', hex: '#0f172a', slug: 'noir' },
      { name: 'Bleu', hex: '#1428A0', slug: 'bleu' },
      { name: 'Vert', hex: '#059669', slug: 'vert' },
    ],
  },
];

function generatePhoneSVGByColor(phoneSlug, color, size = 800) {
  const phoneW = size * 0.5;
  const phoneH = size * 0.85;
  const phoneX = (size - phoneW) / 2;
  const phoneY = (size - phoneH) / 2;
  const cornerRadius = size * 0.03;
  const screenW = phoneW * 0.9;
  const screenH = phoneH * 0.75;
  const screenX = phoneX + (phoneW - screenW) / 2;
  const screenY = phoneY + phoneH * 0.12;
  
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad-${phoneSlug}-${color.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f9ff;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#bgGrad-${phoneSlug}-${color.slug})"/>
  
  <!-- Ombre portée -->
  <ellipse cx="${phoneX + phoneW/2}" cy="${phoneY + phoneH + size*0.02}" 
           rx="${phoneW * 0.4}" ry="${size * 0.015}" 
           fill="rgba(0,0,0,0.15)" opacity="0.6"/>
  
  <!-- Corps du téléphone avec la couleur -->
  <rect x="${phoneX}" y="${phoneY}" width="${phoneW}" height="${phoneH}" 
        rx="${cornerRadius}" fill="${color.hex}" 
        stroke="${color.hex}" stroke-width="${size * 0.004}" 
        opacity="0.95"/>
  
  <!-- Bordure métallique -->
  <rect x="${phoneX + size*0.002}" y="${phoneY + size*0.002}" 
        width="${phoneW - size*0.004}" height="${phoneH - size*0.004}" 
        rx="${cornerRadius * 0.9}" fill="none" 
        stroke="rgba(255,255,255,0.3)" stroke-width="${size * 0.001}"/>
  
  <!-- Écran -->
  <rect x="${screenX}" y="${screenY}" width="${screenW}" height="${screenH}" 
        rx="${cornerRadius * 0.6}" fill="#000000" opacity="0.95"/>
  
  <!-- Contenu de l'écran (simulation) -->
  <rect x="${screenX + screenW * 0.1}" y="${screenY + screenH * 0.15}" 
        width="${screenW * 0.8}" height="${screenH * 0.4}" 
        rx="${size * 0.01}" fill="#0a84ff" opacity="0.2"/>
  <circle cx="${screenX + screenW * 0.5}" cy="${screenY + screenH * 0.6}" 
          r="${size * 0.02}" fill="#30d158"/>
  
  <!-- Encoche caméra frontale -->
  <rect x="${phoneX + phoneW * 0.4}" y="${phoneY + phoneH * 0.05}" 
        width="${phoneW * 0.2}" height="${phoneH * 0.03}" 
        rx="${size * 0.008}" fill="#1a1a1a"/>
  <circle cx="${phoneX + phoneW * 0.5}" cy="${phoneY + phoneH * 0.065}" 
          r="${size * 0.006}" fill="rgba(255,255,255,0.3)"/>
</svg>`;
}

// Générer les images pour chaque téléphone et chaque couleur
phones.forEach(phone => {
  phone.colors.forEach(color => {
    const colorDir = path.join(process.cwd(), 'public/images/top5', phone.slug, color.slug);
    
    if (!fs.existsSync(colorDir)) {
      fs.mkdirSync(colorDir, { recursive: true });
    }

    // Générer front.png pour cette couleur
    const svg = generatePhoneSVGByColor(phone.slug, color, 800);
    const svgPath = path.join(colorDir, 'front.svg');
    fs.writeFileSync(svgPath, svg);
    
    console.log(`✅ Créé : ${phone.slug}/${color.slug}/front.svg`);
  });
});

console.log('\n✅ Toutes les images par couleur ont été générées !');
console.log('📝 Note : Convertir les SVG en PNG avec ImageMagick si nécessaire.');
console.log('💡 Commande : convert -background none -resize 800x800 front.svg front.png');

