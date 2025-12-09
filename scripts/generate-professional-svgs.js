#!/usr/bin/env node

/**
 * Script pour générer des placeholders SVG professionnels et détaillés
 * Ces SVG peuvent servir de base ou être convertis en PNG
 */

const fs = require('fs');
const path = require('path');

const phones = [
  {
    name: 'Xiaomi Redmi Note 14 5G',
    slug: 'xiaomi-redmi-note-14-5g',
    color: '#FF6900',
    brandColor: '#FF6900',
    screenColor: '#1a1a1a',
  },
  {
    name: 'Samsung Galaxy A35 5G',
    slug: 'samsung-galaxy-a35-5g',
    color: '#1428A0',
    brandColor: '#1428A0',
    screenColor: '#000000',
  },
  {
    name: 'Poco X7 Pro',
    slug: 'poco-x7-pro',
    color: '#FF6900',
    brandColor: '#FF6900',
    screenColor: '#1a1a1a',
  },
  {
    name: 'Motorola Edge 50 Fusion',
    slug: 'motorola-edge-50-fusion',
    color: '#5C88DA',
    brandColor: '#5C88DA',
    screenColor: '#000000',
  },
  {
    name: 'Samsung Galaxy A26 5G',
    slug: 'samsung-galaxy-a26-5g',
    color: '#1428A0',
    brandColor: '#1428A0',
    screenColor: '#000000',
  },
];

// Générer un SVG de téléphone professionnel
function generatePhoneSVG(phone, angle = 'front', size = 800) {
  const isOG = size === 1200;
  const height = isOG ? 630 : size;
  
  // Dimensions du téléphone (proportionnel)
  const phoneWidth = size * 0.4;
  const phoneHeight = size * 0.7;
  const phoneX = (size - phoneWidth) / 2;
  const phoneY = (size - phoneHeight) / 2;
  
  // Pour OG image, ajuster les positions
  const ogPhoneX = isOG ? 100 : phoneX;
  const ogPhoneY = isOG ? 50 : phoneY;
  const ogPhoneWidth = isOG ? 400 : phoneWidth;
  const ogPhoneHeight = isOG ? 530 : phoneHeight;
  
  let phoneBody = '';
  let screen = '';
  let camera = '';
  let details = '';
  
  if (angle === 'front') {
    // Vue avant
    phoneBody = `
      <rect x="${ogPhoneX}" y="${ogPhoneY}" width="${ogPhoneWidth}" height="${ogPhoneHeight}" rx="${size * 0.04}" fill="white" stroke="${phone.color}" stroke-width="${size * 0.008}" opacity="0.95"/>
      <rect x="${ogPhoneX + ogPhoneWidth * 0.05}" y="${ogPhoneY + ogPhoneHeight * 0.08}" width="${ogPhoneWidth * 0.9}" height="${ogPhoneHeight * 0.75}" rx="${size * 0.02}" fill="${phone.screenColor}"/>
      <rect x="${ogPhoneX + ogPhoneWidth * 0.1}" y="${ogPhoneY + ogPhoneHeight * 0.12}" width="${ogPhoneWidth * 0.8}" height="${ogPhoneHeight * 0.65}" rx="${size * 0.015}" fill="#0a84ff" opacity="0.3"/>
      <circle cx="${ogPhoneX + ogPhoneWidth * 0.5}" cy="${ogPhoneY + ogPhoneHeight * 0.15}" r="${size * 0.015}" fill="white" opacity="0.8"/>
    `;
    camera = `
      <circle cx="${ogPhoneX + ogPhoneWidth * 0.5}" cy="${ogPhoneY + ogPhoneHeight * 0.05}" r="${size * 0.01}" fill="${phone.color}"/>
    `;
  } else if (angle === 'back') {
    // Vue arrière
    phoneBody = `
      <rect x="${ogPhoneX}" y="${ogPhoneY}" width="${ogPhoneWidth}" height="${ogPhoneHeight}" rx="${size * 0.04}" fill="white" stroke="${phone.color}" stroke-width="${size * 0.008}" opacity="0.95"/>
      <rect x="${ogPhoneX + ogPhoneWidth * 0.2}" y="${ogPhoneY + ogPhoneHeight * 0.15}" width="${ogPhoneWidth * 0.6}" height="${ogPhoneHeight * 0.2}" rx="${size * 0.02}" fill="${phone.color}" opacity="0.2"/>
      <circle cx="${ogPhoneX + ogPhoneWidth * 0.5}" cy="${ogPhoneY + ogPhoneHeight * 0.25}" r="${size * 0.025}" fill="${phone.color}"/>
      <circle cx="${ogPhoneX + ogPhoneWidth * 0.5}" cy="${ogPhoneY + ogPhoneHeight * 0.25}" r="${size * 0.015}" fill="white"/>
    `;
    details = `
      <text x="${ogPhoneX + ogPhoneWidth * 0.5}" y="${ogPhoneY + ogPhoneHeight * 0.5}" font-family="Arial, sans-serif" font-size="${size * 0.03}" fill="${phone.color}" text-anchor="middle" font-weight="bold">${phone.name.split(' ')[0]}</text>
    `;
  } else if (angle === 'side-left' || angle === 'side-right') {
    // Vue latérale
    const isLeft = angle === 'side-left';
    phoneBody = `
      <rect x="${ogPhoneX}" y="${ogPhoneY}" width="${ogPhoneWidth * 0.3}" height="${ogPhoneHeight}" rx="${size * 0.02}" fill="white" stroke="${phone.color}" stroke-width="${size * 0.008}" opacity="0.95"/>
      <rect x="${ogPhoneX + (isLeft ? ogPhoneWidth * 0.25 : 0)}" y="${ogPhoneY + ogPhoneHeight * 0.1}" width="${ogPhoneWidth * 0.05}" height="${ogPhoneHeight * 0.15}" rx="${size * 0.01}" fill="${phone.color}"/>
      <rect x="${ogPhoneX + (isLeft ? ogPhoneWidth * 0.25 : 0)}" y="${ogPhoneY + ogPhoneHeight * 0.3}" width="${ogPhoneWidth * 0.05}" height="${ogPhoneHeight * 0.1}" rx="${size * 0.01}" fill="${phone.color}"/>
    `;
  } else if (angle === 'angle-3d') {
    // Vue perspective 3D
    phoneBody = `
      <rect x="${ogPhoneX}" y="${ogPhoneY}" width="${ogPhoneWidth}" height="${ogPhoneHeight}" rx="${size * 0.04}" fill="white" stroke="${phone.color}" stroke-width="${size * 0.008}" opacity="0.95" transform="rotate(-5 ${ogPhoneX + ogPhoneWidth/2} ${ogPhoneY + ogPhoneHeight/2})"/>
      <rect x="${ogPhoneX + ogPhoneWidth * 0.05}" y="${ogPhoneY + ogPhoneHeight * 0.08}" width="${ogPhoneWidth * 0.9}" height="${ogPhoneHeight * 0.75}" rx="${size * 0.02}" fill="${phone.screenColor}" transform="rotate(-5 ${ogPhoneX + ogPhoneWidth/2} ${ogPhoneY + ogPhoneHeight/2})"/>
    `;
    camera = `
      <circle cx="${ogPhoneX + ogPhoneWidth * 0.5}" cy="${ogPhoneY + ogPhoneHeight * 0.05}" r="${size * 0.01}" fill="${phone.color}" transform="rotate(-5 ${ogPhoneX + ogPhoneWidth/2} ${ogPhoneY + ogPhoneHeight/2})"/>
    `;
  }
  
  // Ombre
  const shadow = `
    <ellipse cx="${ogPhoneX + ogPhoneWidth/2}" cy="${ogPhoneY + ogPhoneHeight + size * 0.05}" rx="${ogPhoneWidth * 0.4}" ry="${size * 0.02}" fill="rgba(0,0,0,0.1)"/>
  `;
  
  // Texte pour OG image
  let ogText = '';
  if (isOG) {
    ogText = `
      <text x="600" y="280" font-family="Arial, sans-serif" font-size="42" fill="#1f2937" font-weight="bold">${phone.name}</text>
      <text x="600" y="330" font-family="Arial, sans-serif" font-size="28" fill="#6b7280">Top 5 Smartphones 2025</text>
      <text x="600" y="380" font-family="Arial, sans-serif" font-size="24" fill="#9ca3af">Meilleur rapport qualité-prix</text>
    `;
  }
  
  return `<svg width="${size}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad-${phone.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f9ff;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow-${phone.slug}">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="0" dy="2" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="${size}" height="${height}" fill="url(#bgGrad-${phone.slug})"/>
  ${shadow}
  ${phoneBody}
  ${screen}
  ${camera}
  ${details}
  ${ogText}
</svg>`;
}

// Créer les images pour chaque téléphone
phones.forEach(phone => {
  const phoneDir = path.join(process.cwd(), 'public/images/top5', phone.slug);
  
  if (!fs.existsSync(phoneDir)) {
    fs.mkdirSync(phoneDir, { recursive: true });
  }

  // Supprimer les anciens SVG
  const oldSvgs = fs.readdirSync(phoneDir).filter(f => f.endsWith('.svg'));
  oldSvgs.forEach(f => fs.unlinkSync(path.join(phoneDir, f)));

  // Générer les nouvelles images
  const images = [
    { name: 'front.png', angle: 'front', size: 800 },
    { name: 'back.png', angle: 'back', size: 800 },
    { name: 'side-left.png', angle: 'side-left', size: 800 },
    { name: 'side-right.png', angle: 'side-right', size: 800 },
    { name: 'angle-3d.png', angle: 'angle-3d', size: 800 },
    { name: 'thumbnail.png', angle: 'front', size: 400 },
    { name: 'og-image.png', angle: 'front', size: 1200 },
  ];

  images.forEach(img => {
    const filePath = path.join(phoneDir, img.name.replace('.png', '.svg'));
    const svg = generatePhoneSVG(phone, img.angle, img.size);
    fs.writeFileSync(filePath, svg);
    console.log(`✅ Créé : ${phone.slug}/${img.name.replace('.png', '.svg')}`);
  });
});

console.log('\n✅ Tous les placeholders SVG professionnels ont été créés !');
console.log('📝 Note : Ces SVG peuvent être convertis en PNG avec un outil comme Inkscape ou ImageMagick.');
console.log('📝 Ou utilisez un service en ligne pour générer de vraies images de téléphones.');

