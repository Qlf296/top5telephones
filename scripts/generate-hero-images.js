#!/usr/bin/env node

/**
 * Script de génération des images HERO pour les téléphones
 * 
 * Ce script prépare la structure et génère des placeholders
 * pour les images HERO finales qui doivent être créées manuellement
 * avec un logiciel de retouche (Photoshop, Figma, etc.)
 * 
 * Usage: node scripts/generate-hero-images.js
 */

const fs = require('fs');
const path = require('path');

const phones = [
  { slug: 'xiaomi-redmi-note-14-5g', name: 'Xiaomi Redmi Note 14 5G' },
  { slug: 'samsung-galaxy-a35-5g', name: 'Samsung Galaxy A35 5G' },
  { slug: 'poco-x7-pro', name: 'Poco X7 Pro' },
  { slug: 'motorola-edge-50-fusion', name: 'Motorola Edge 50 Fusion' },
  { slug: 'samsung-galaxy-a26-5g', name: 'Samsung Galaxy A26 5G' },
];

const imageSizes = {
  heroDesktop: { width: 3000, height: 1800, name: 'hero-final' },
  heroRetina: { width: 6000, height: 3600, name: 'hero-final-2x' },
  thumbnail: { width: 800, height: 800, name: 'thumbnail' },
  ogImage: { width: 1200, height: 630, name: 'og-image' },
  mobile: { width: 1200, height: 1600, name: 'hero-mobile' },
  isolated: { width: 2000, height: 2000, name: 'phone-isolated' },
};

function createPlaceholderSVG(width, height, name) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(255,255,255,0.98);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgba(250,250,255,0.95);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)" rx="32"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" fill="#666" text-anchor="middle" dominant-baseline="middle">
    ${name} - ${width}×${height}px
  </text>
  <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="24" fill="#999" text-anchor="middle" dominant-baseline="middle">
    Image à générer
  </text>
</svg>`;
}

function generateImageStructure() {
  console.log('🎨 Génération de la structure des images HERO...\n');

  phones.forEach(phone => {
    const phoneDir = path.join(__dirname, '..', 'public', 'images', 'top5', phone.slug);
    const colorsDir = path.join(phoneDir, 'colors');

    // Créer les dossiers
    if (!fs.existsSync(phoneDir)) {
      fs.mkdirSync(phoneDir, { recursive: true });
    }
    if (!fs.existsSync(colorsDir)) {
      fs.mkdirSync(colorsDir, { recursive: true });
    }

    console.log(`📁 ${phone.name} (${phone.slug})`);

    // Générer les placeholders SVG pour chaque taille
    Object.entries(imageSizes).forEach(([key, size]) => {
      const svgPath = path.join(phoneDir, `${size.name}.svg`);
      const svgContent = createPlaceholderSVG(size.width, size.height, size.name);
      
      if (!fs.existsSync(svgPath)) {
        fs.writeFileSync(svgPath, svgContent);
        console.log(`   ✅ ${size.name}.svg (${size.width}×${size.height}px)`);
      } else {
        console.log(`   ⏭️  ${size.name}.svg existe déjà`);
      }
    });

    // Créer un fichier README pour les instructions
    const readmePath = path.join(phoneDir, 'HERO-README.md');
    const readmeContent = `# Images HERO - ${phone.name}

## 📋 Fichiers à générer

### Images principales
- \`hero-final.webp\` - 3000×1800px (format WebP, qualité 85-90%)
- \`hero-final.jpg\` - 3000×1800px (format JPG, qualité 90-95%, fallback)
- \`phone-isolated.png\` - 2000×2000px (fond transparent)

### Variantes
- \`thumbnail.png\` - 800×800px (comparateur)
- \`og-image.jpg\` - 1200×630px (Open Graph)
- \`hero-mobile.webp\` - 1200×1600px (mobile portrait)

## 🎨 Style iOS 26.2

- Fond: Dégradé clair \`rgba(255, 255, 255, 0.98)\` → \`rgba(250, 250, 255, 0.95)\`
- Ombre: \`0 20px 40px rgba(0, 0, 0, 0.12)\`
- Bordure: \`rgba(255, 255, 255, 0.33)\` (1px)
- Radius: 32px
- Téléphone: Centré, ombre portée douce

## 📝 Instructions

1. Utiliser l'image source depuis \`/public/images/top2/${phone.name}.png\`
2. Détourer le téléphone (background removal)
3. Composer l'image HERO avec le style iOS 26.2
4. Exporter en WebP (prioritaire) + JPG (fallback)
5. Générer les variantes (thumbnail, OG, mobile)

Voir \`GUIDE_GENERATION_IMAGES_HERO.md\` pour les détails complets.
`;

    if (!fs.existsSync(readmePath)) {
      fs.writeFileSync(readmePath, readmeContent);
      console.log(`   ✅ HERO-README.md créé`);
    }

    console.log('');
  });

  console.log('✅ Structure générée avec succès!\n');
  console.log('📝 Prochaines étapes:');
  console.log('   1. Générer les images HERO avec un logiciel de retouche');
  console.log('   2. Placer les fichiers dans les dossiers correspondants');
  console.log('   3. Vérifier le rendu sur le site');
  console.log('\n📖 Voir GUIDE_GENERATION_IMAGES_HERO.md pour les instructions détaillées.\n');
}

// Exécuter
generateImageStructure();

