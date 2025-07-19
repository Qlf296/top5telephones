const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration des images sociales
const socialImages = [
  {
    name: 'og-image.jpg',
    width: 1200,
    height: 630,
    title: 'Top 5 Téléphones à moins de 300€',
    subtitle: 'Les meilleurs smartphones en 2024'
  },
  {
    name: 'twitter-image.jpg',
    width: 1200,
    height: 600,
    title: 'Top 5 Téléphones à moins de 300€',
    subtitle: 'Les meilleurs smartphones en 2024'
  }
];

// SVG template pour les images sociales
const createSocialImageSVG = (title, subtitle, width, height) => `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)"/>
  
  <!-- Background pattern -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#pattern)" opacity="0.1"/>
  
  <!-- Main content -->
  <g transform="translate(${width * 0.1}, ${height * 0.2})">
    <!-- Logo -->
    <rect x="0" y="0" width="80" height="80" rx="20" fill="white"/>
    <text x="40" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#3B82F6">5</text>
    
    <!-- Title -->
    <text x="100" y="35" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white">${title}</text>
    
    <!-- Subtitle -->
    <text x="100" y="70" font-family="Arial, sans-serif" font-size="24" fill="white" opacity="0.9">${subtitle}</text>
  </g>
  
  <!-- Bottom info -->
  <g transform="translate(${width * 0.1}, ${height * 0.8})">
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="18" fill="white" opacity="0.8">Comparaisons détaillées • Tests • Conseils d'achat</text>
  </g>
  
  <!-- Pattern definition -->
  <defs>
    <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="2" fill="white" opacity="0.1"/>
    </pattern>
  </defs>
</svg>
`;

async function generateSocialImages() {
  console.log('🎨 Génération des images sociales...');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const imagesDir = path.join(publicDir, 'images');
  
  // Créer le dossier images s'il n'existe pas
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  for (const config of socialImages) {
    try {
      const svgContent = createSocialImageSVG(
        config.title,
        config.subtitle,
        config.width,
        config.height
      );
      
      const imagePath = path.join(imagesDir, config.name);
      
      await sharp(Buffer.from(svgContent))
        .resize(config.width, config.height)
        .jpeg({ quality: 90 })
        .toFile(imagePath);
      
      console.log(`✅ Image sociale créée: ${config.name} (${config.width}x${config.height})`);
    } catch (error) {
      console.error(`❌ Erreur lors de la création de ${config.name}:`, error.message);
    }
  }
  
  console.log('✅ Toutes les images sociales ont été générées !');
}

// Exécuter le script
generateSocialImages().catch(console.error); 