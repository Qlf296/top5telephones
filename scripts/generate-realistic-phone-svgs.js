#!/usr/bin/env node

/**
 * Script pour générer des SVG très détaillés et réalistes de téléphones
 * Ces SVG peuvent servir d'images temporaires ou être convertis en PNG
 */

const fs = require('fs');
const path = require('path');

const phones = [
  {
    name: 'Xiaomi Redmi Note 14 5G',
    slug: 'xiaomi-redmi-note-14-5g',
    primaryColor: '#FF6900',
    secondaryColor: '#FF8533',
    screenColor: '#000000',
    bezelColor: '#1a1a1a',
    cameraColor: '#FF6900',
  },
  {
    name: 'Samsung Galaxy A35 5G',
    slug: 'samsung-galaxy-a35-5g',
    primaryColor: '#1428A0',
    secondaryColor: '#1e3a8a',
    screenColor: '#000000',
    bezelColor: '#0f172a',
    cameraColor: '#1428A0',
  },
  {
    name: 'Poco X7 Pro',
    slug: 'poco-x7-pro',
    primaryColor: '#FF6900',
    secondaryColor: '#FF8533',
    screenColor: '#000000',
    bezelColor: '#1a1a1a',
    cameraColor: '#FF6900',
  },
  {
    name: 'Motorola Edge 50 Fusion',
    slug: 'motorola-edge-50-fusion',
    primaryColor: '#5C88DA',
    secondaryColor: '#7BA3E8',
    screenColor: '#000000',
    bezelColor: '#1a1a1a',
    cameraColor: '#5C88DA',
  },
  {
    name: 'Samsung Galaxy A26 5G',
    slug: 'samsung-galaxy-a26-5g',
    primaryColor: '#1428A0',
    secondaryColor: '#1e3a8a',
    screenColor: '#000000',
    bezelColor: '#0f172a',
    cameraColor: '#1428A0',
  },
];

function generateFrontView(phone, size) {
  const phoneW = size * 0.5;
  const phoneH = size * 0.85;
  const phoneX = (size - phoneW) / 2;
  const phoneY = (size - phoneH) / 2;
  const cornerRadius = size * 0.03;
  const screenW = phoneW * 0.9;
  const screenH = phoneH * 0.75;
  const screenX = phoneX + (phoneW - screenW) / 2;
  const screenY = phoneY + phoneH * 0.12;
  
  return `
    <!-- Ombre portée -->
    <ellipse cx="${phoneX + phoneW/2}" cy="${phoneY + phoneH + size*0.02}" 
             rx="${phoneW * 0.4}" ry="${size * 0.015}" 
             fill="rgba(0,0,0,0.15)" opacity="0.6"/>
    
    <!-- Corps du téléphone -->
    <rect x="${phoneX}" y="${phoneY}" width="${phoneW}" height="${phoneH}" 
          rx="${cornerRadius}" fill="white" 
          stroke="${phone.primaryColor}" stroke-width="${size * 0.004}" 
          opacity="0.98"/>
    
    <!-- Bordure métallique -->
    <rect x="${phoneX + size*0.002}" y="${phoneY + size*0.002}" 
          width="${phoneW - size*0.004}" height="${phoneH - size*0.004}" 
          rx="${cornerRadius * 0.9}" fill="none" 
          stroke="rgba(200,200,200,0.3)" stroke-width="${size * 0.001}"/>
    
    <!-- Écran -->
    <rect x="${screenX}" y="${screenY}" width="${screenW}" height="${screenH}" 
          rx="${cornerRadius * 0.6}" fill="${phone.screenColor}" opacity="0.95"/>
    
    <!-- Contenu de l'écran (simulation) -->
    <rect x="${screenX + screenW * 0.1}" y="${screenY + screenH * 0.15}" 
          width="${screenW * 0.8}" height="${screenH * 0.4}" 
          rx="${size * 0.01}" fill="#0a84ff" opacity="0.2"/>
    <circle cx="${screenX + screenW * 0.5}" cy="${screenY + screenH * 0.6}" 
            r="${size * 0.02}" fill="#30d158"/>
    
    <!-- Encoche caméra frontale -->
    <rect x="${phoneX + phoneW * 0.4}" y="${phoneY + phoneH * 0.05}" 
          width="${phoneW * 0.2}" height="${phoneH * 0.03}" 
          rx="${size * 0.008}" fill="${phone.bezelColor}"/>
    <circle cx="${phoneX + phoneW * 0.5}" cy="${phoneY + phoneH * 0.065}" 
            r="${size * 0.006}" fill="rgba(255,255,255,0.3)"/>
    
    <!-- Boutons latéraux (visibles) -->
    <rect x="${phoneX - size * 0.01}" y="${phoneY + phoneH * 0.3}" 
          width="${size * 0.015}" height="${phoneH * 0.15}" 
          rx="${size * 0.003}" fill="rgba(200,200,200,0.5)"/>
    <rect x="${phoneX + phoneW}" y="${phoneY + phoneH * 0.25}" 
          width="${size * 0.015}" height="${phoneH * 0.2}" 
          rx="${size * 0.003}" fill="rgba(200,200,200,0.5)"/>
  `;
}

function generateBackView(phone, size) {
  const phoneW = size * 0.5;
  const phoneH = size * 0.85;
  const phoneX = (size - phoneW) / 2;
  const phoneY = (size - phoneH) / 2;
  const cornerRadius = size * 0.03;
  
  return `
    <!-- Ombre portée -->
    <ellipse cx="${phoneX + phoneW/2}" cy="${phoneY + phoneH + size*0.02}" 
             rx="${phoneW * 0.4}" ry="${size * 0.015}" 
             fill="rgba(0,0,0,0.15)" opacity="0.6"/>
    
    <!-- Corps du téléphone -->
    <rect x="${phoneX}" y="${phoneY}" width="${phoneW}" height="${phoneH}" 
          rx="${cornerRadius}" fill="white" 
          stroke="${phone.primaryColor}" stroke-width="${size * 0.004}" 
          opacity="0.98"/>
    
    <!-- Module caméra -->
    <rect x="${phoneX + phoneW * 0.25}" y="${phoneY + phoneH * 0.15}" 
          width="${phoneW * 0.5}" height="${phoneH * 0.25}" 
          rx="${size * 0.015}" fill="${phone.primaryColor}" opacity="0.15"/>
    
    <!-- Caméras -->
    <circle cx="${phoneX + phoneW * 0.4}" cy="${phoneY + phoneH * 0.22}" 
            r="${size * 0.025}" fill="${phone.cameraColor}" opacity="0.8"/>
    <circle cx="${phoneX + phoneW * 0.4}" cy="${phoneY + phoneH * 0.22}" 
            r="${size * 0.015}" fill="white" opacity="0.9"/>
    <circle cx="${phoneX + phoneW * 0.6}" cy="${phoneY + phoneH * 0.22}" 
            r="${size * 0.015}" fill="${phone.cameraColor}" opacity="0.6"/>
    <circle cx="${phoneX + phoneW * 0.5}" cy="${phoneY + phoneH * 0.28}" 
            r="${size * 0.01}" fill="${phone.cameraColor}" opacity="0.5"/>
    
    <!-- Flash LED -->
    <rect x="${phoneX + phoneW * 0.45}" y="${phoneY + phoneH * 0.32}" 
          width="${phoneW * 0.1}" height="${phoneH * 0.02}" 
          rx="${size * 0.003}" fill="rgba(255,255,255,0.6)"/>
    
    <!-- Logo marque -->
    <text x="${phoneX + phoneW * 0.5}" y="${phoneY + phoneH * 0.6}" 
          font-family="Arial, sans-serif" font-size="${size * 0.04}" 
          fill="${phone.primaryColor}" text-anchor="middle" 
          font-weight="bold" opacity="0.7">${phone.name.split(' ')[0]}</text>
  `;
}

function generateSideView(phone, size, side = 'left') {
  const phoneW = size * 0.15;
  const phoneH = size * 0.85;
  const phoneX = (size - phoneW) / 2;
  const phoneY = (size - phoneH) / 2;
  const cornerRadius = size * 0.02;
  const isLeft = side === 'left';
  
  return `
    <!-- Ombre portée -->
    <ellipse cx="${phoneX + phoneW/2}" cy="${phoneY + phoneH + size*0.02}" 
             rx="${phoneW * 0.6}" ry="${size * 0.015}" 
             fill="rgba(0,0,0,0.15)" opacity="0.6"/>
    
    <!-- Corps du téléphone (profil) -->
    <rect x="${phoneX}" y="${phoneY}" width="${phoneW}" height="${phoneH}" 
          rx="${cornerRadius}" fill="white" 
          stroke="${phone.primaryColor}" stroke-width="${size * 0.004}" 
          opacity="0.98"/>
    
    <!-- Boutons de volume -->
    <rect x="${phoneX + (isLeft ? phoneW * 0.8 : -size * 0.01)}" 
          y="${phoneY + phoneH * 0.25}" 
          width="${size * 0.02}" height="${phoneH * 0.12}" 
          rx="${size * 0.004}" fill="rgba(200,200,200,0.6)"/>
    
    <!-- Bouton power -->
    <rect x="${phoneX + (isLeft ? phoneW * 0.8 : -size * 0.01)}" 
          y="${phoneY + phoneH * 0.4}" 
          width="${size * 0.02}" height="${phoneH * 0.08}" 
          rx="${size * 0.004}" fill="${phone.primaryColor}" opacity="0.7"/>
    
    <!-- Port USB-C -->
    <rect x="${phoneX + phoneW * 0.3}" y="${phoneY + phoneH * 0.95}" 
          width="${phoneW * 0.4}" height="${phoneH * 0.03}" 
          rx="${size * 0.003}" fill="rgba(100,100,100,0.5)"/>
    
    <!-- Haut-parleur -->
    <line x1="${phoneX + phoneW * 0.2}" y1="${phoneY + phoneH * 0.05}" 
          x2="${phoneX + phoneW * 0.8}" y2="${phoneY + phoneH * 0.05}" 
          stroke="rgba(100,100,100,0.4)" stroke-width="${size * 0.002}"/>
  `;
}

function generate3DAngle(phone, size) {
  const phoneW = size * 0.5;
  const phoneH = size * 0.85;
  const phoneX = (size - phoneW) / 2;
  const phoneY = (size - phoneH) / 2;
  const cornerRadius = size * 0.03;
  const rotation = -8;
  const centerX = phoneX + phoneW / 2;
  const centerY = phoneY + phoneH / 2;
  
  return `
    <!-- Ombre portée (transformée) -->
    <ellipse cx="${centerX}" cy="${phoneY + phoneH + size*0.02}" 
             rx="${phoneW * 0.5}" ry="${size * 0.02}" 
             fill="rgba(0,0,0,0.2)" opacity="0.7"
             transform="rotate(${rotation} ${centerX} ${centerY})"/>
    
    <!-- Corps du téléphone (perspective) -->
    <rect x="${phoneX}" y="${phoneY}" width="${phoneW}" height="${phoneH}" 
          rx="${cornerRadius}" fill="white" 
          stroke="${phone.primaryColor}" stroke-width="${size * 0.004}" 
          opacity="0.98"
          transform="rotate(${rotation} ${centerX} ${centerY})"/>
    
    <!-- Écran (perspective) -->
    <rect x="${phoneX + phoneW * 0.05}" y="${phoneY + phoneH * 0.12}" 
          width="${phoneW * 0.9}" height="${phoneH * 0.75}" 
          rx="${cornerRadius * 0.6}" fill="${phone.screenColor}" opacity="0.95"
          transform="rotate(${rotation} ${centerX} ${centerY})"/>
    
    <!-- Module caméra (visible sur le côté) -->
    <rect x="${phoneX + phoneW * 0.25}" y="${phoneY + phoneH * 0.15}" 
          width="${phoneW * 0.5}" height="${phoneH * 0.2}" 
          rx="${size * 0.015}" fill="${phone.primaryColor}" opacity="0.2"
          transform="rotate(${rotation} ${centerX} ${centerY})"/>
  `;
}

function generateThumbnail(phone, size) {
  return generateFrontView(phone, size);
}

function generateOGImage(phone, width, height) {
  const phoneSize = Math.min(width, height) * 0.6;
  const phoneW = phoneSize * 0.5;
  const phoneH = phoneSize * 0.85;
  const phoneX = width * 0.15;
  const phoneY = (height - phoneH) / 2;
  
  return `
    <defs>
      <linearGradient id="ogGrad-${phone.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f0f9ff;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#ogGrad-${phone.slug})"/>
    
    ${generateFrontView(phone, phoneSize).replace(
      `x="${(phoneSize - phoneW) / 2}"`, 
      `x="${phoneX}"`
    ).replace(
      `y="${(phoneSize - phoneH) / 2}"`, 
      `y="${phoneY}"`
    )}
    
    <!-- Texte à droite -->
    <text x="${width * 0.65}" y="${height * 0.35}" 
          font-family="Arial, sans-serif" font-size="42" 
          fill="#1f2937" font-weight="bold">${phone.name}</text>
    <text x="${width * 0.65}" y="${height * 0.45}" 
          font-family="Arial, sans-serif" font-size="28" 
          fill="#6b7280">Top 5 Smartphones 2025</text>
    <text x="${width * 0.65}" y="${height * 0.55}" 
          font-family="Arial, sans-serif" font-size="24" 
          fill="#9ca3af">Meilleur rapport qualité-prix</text>
  `;
}

// Générer toutes les images
phones.forEach(phone => {
  const phoneDir = path.join(process.cwd(), 'public/images/top5', phone.slug);
  
  if (!fs.existsSync(phoneDir)) {
    fs.mkdirSync(phoneDir, { recursive: true });
  }

  // Supprimer les anciens SVG
  const oldSvgs = fs.readdirSync(phoneDir).filter(f => f.endsWith('.svg'));
  oldSvgs.forEach(f => fs.unlinkSync(path.join(phoneDir, f)));

  const images = [
    { name: 'front.svg', generator: (p, s) => generateFrontView(p, s), size: 800 },
    { name: 'back.svg', generator: (p, s) => generateBackView(p, s), size: 800 },
    { name: 'side-left.svg', generator: (p, s) => generateSideView(p, s, 'left'), size: 800 },
    { name: 'side-right.svg', generator: (p, s) => generateSideView(p, s, 'right'), size: 800 },
    { name: 'angle-3d.svg', generator: (p, s) => generate3DAngle(p, s), size: 800 },
    { name: 'thumbnail.svg', generator: (p, s) => generateThumbnail(p, s), size: 400 },
  ];

  images.forEach(img => {
    const svg = `<svg width="${img.size}" height="${img.size}" xmlns="http://www.w3.org/2000/svg">
  ${img.generator(phone, img.size)}
</svg>`;
    fs.writeFileSync(path.join(phoneDir, img.name), svg);
    console.log(`✅ Créé : ${phone.slug}/${img.name}`);
  });

  // OG Image spéciale
  const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  ${generateOGImage(phone, 1200, 630)}
</svg>`;
  fs.writeFileSync(path.join(phoneDir, 'og-image.svg'), ogSvg);
  console.log(`✅ Créé : ${phone.slug}/og-image.svg`);
});

console.log('\n✅ Tous les SVG réalistes ont été générés !');
console.log('📝 Ces SVG peuvent être utilisés directement ou convertis en PNG.');
console.log('💡 Pour convertir en PNG : ./scripts/convert-svg-to-png.sh');

