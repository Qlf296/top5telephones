const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration des icônes PWA
const iconConfig = [
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 72, name: 'icon-72.png' },
  { size: 96, name: 'icon-96.png' },
  { size: 128, name: 'icon-128.png' },
  { size: 144, name: 'icon-144.png' },
  { size: 152, name: 'icon-152.png' },
  { size: 384, name: 'icon-384.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
];

// SVG pour l'icône principale
const mainIconSVG = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="100" fill="#3B82F6"/>
  <rect x="50" y="50" width="412" height="412" rx="80" fill="white"/>
  <path d="M150 200 L362 200 L362 220 L150 220 Z" fill="#3B82F6"/>
  <path d="M150 240 L362 240 L362 260 L150 260 Z" fill="#3B82F6"/>
  <path d="M150 280 L362 280 L362 300 L150 300 Z" fill="#3B82F6"/>
  <circle cx="256" cy="350" r="30" fill="#3B82F6"/>
  <text x="256" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white">5</text>
</svg>
`;

// SVG pour l'icône Apple Touch
const appleIconSVG = `
<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="35" fill="#3B82F6"/>
  <rect x="17.5" y="17.5" width="145" height="145" rx="28" fill="white"/>
  <path d="M52.5 70 L127.5 70 L127.5 77.5 L52.5 77.5 Z" fill="#3B82F6"/>
  <path d="M52.5 84 L127.5 84 L127.5 91.5 L52.5 91.5 Z" fill="#3B82F6"/>
  <path d="M52.5 98 L127.5 98 L127.5 105.5 L52.5 105.5 Z" fill="#3B82F6"/>
  <circle cx="90" cy="123" r="10.5" fill="#3B82F6"/>
  <text x="90" y="126" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="white">5</text>
</svg>
`;

// SVG pour les favicons
const faviconSVG = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#3B82F6"/>
  <rect x="3" y="3" width="26" height="26" rx="5" fill="white"/>
  <path d="M9.375 12.5 L22.625 12.5 L22.625 13.75 L9.375 13.75 Z" fill="#3B82F6"/>
  <path d="M9.375 15.625 L22.625 15.625 L22.625 16.875 L9.375 16.875 Z" fill="#3B82F6"/>
  <path d="M9.375 18.75 L22.625 18.75 L22.625 20 L9.375 20 Z" fill="#3B82F6"/>
  <circle cx="16" cy="23" r="1.875" fill="#3B82F6"/>
  <text x="16" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="1.5" font-weight="bold" fill="white">5</text>
</svg>
`;

async function createPNGIcon(size, filename, svgContent) {
  try {
    const publicDir = path.join(__dirname, '..', 'public');
    const imagesDir = path.join(publicDir, 'images');
    
    // Créer le dossier images s'il n'existe pas
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    
    const pngPath = path.join(imagesDir, filename);
    
    // Convertir SVG en PNG avec Sharp
    await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png()
      .toFile(pngPath);
    
    console.log(`✅ Icône créée: ${filename} (${size}x${size})`);
  } catch (error) {
    console.error(`❌ Erreur lors de la création de ${filename}:`, error.message);
  }
}

async function generateAllIcons() {
  console.log('🎨 Génération des icônes PWA...');
  
  // Générer les icônes principales
  for (const config of iconConfig) {
    if (config.name.includes('apple-touch')) {
      await createPNGIcon(config.size, config.name, appleIconSVG);
    } else if (config.name.includes('favicon')) {
      await createPNGIcon(config.size, config.name, faviconSVG);
    } else {
      await createPNGIcon(config.size, config.name, mainIconSVG);
    }
  }
  
  console.log('✅ Toutes les icônes PWA ont été générées !');
}

// Exécuter le script
generateAllIcons().catch(console.error); 