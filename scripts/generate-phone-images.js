const fs = require('fs');
const path = require('path');

const phones = [
  {
    name: 'Samsung Galaxy A14',
    brand: 'Samsung',
    filename: 'samsung-galaxy-a14.jpg'
  },
  {
    name: 'Xiaomi Redmi Note 12',
    brand: 'Xiaomi',
    filename: 'xiaomi-redmi-note-12.jpg'
  },
  {
    name: 'Motorola Moto G84',
    brand: 'Motorola',
    filename: 'motorola-moto-g84.jpg'
  },
  {
    name: 'Nokia G60',
    brand: 'Nokia',
    filename: 'nokia-g60.jpg'
  },
  {
    name: 'Realme 10',
    brand: 'Realme',
    filename: 'realme-10.jpg'
  }
];

// Créer le dossier images s'il n'existe pas
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Générer des images SVG placeholder pour chaque téléphone
phones.forEach(phone => {
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f0f9ff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e0f2fe;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Fond -->
  <rect width="400" height="300" fill="url(#grad1)" rx="20" ry="20"/>
  
  <!-- Téléphone -->
  <rect x="150" y="50" width="100" height="200" rx="15" ry="15" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/>
  
  <!-- Écran -->
  <rect x="155" y="60" width="90" height="140" rx="8" ry="8" fill="#f8fafc"/>
  
  <!-- Marque -->
  <text x="200" y="220" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#0ea5e9">${phone.brand}</text>
  
  <!-- Nom du modèle -->
  <text x="200" y="240" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#64748b">${phone.name}</text>
  
  <!-- Icône téléphone -->
  <circle cx="200" cy="130" r="25" fill="#0ea5e9" opacity="0.1"/>
  <path d="M200 115 L200 145 M185 130 L215 130" stroke="#0ea5e9" stroke-width="2" fill="none"/>
</svg>`;

  const svgPath = path.join(imagesDir, phone.filename.replace('.jpg', '.svg'));
  fs.writeFileSync(svgPath, svgContent);
  console.log(`✅ Généré: ${phone.filename.replace('.jpg', '.svg')}`);
});

console.log('\n📱 Images placeholder générées !');
console.log('💡 Pour ajouter de vraies photos :');
console.log('1. Télécharge des images des téléphones');
console.log('2. Renomme-les selon le format : samsung-galaxy-a14.jpg, etc.');
console.log('3. Place-les dans public/images/');
console.log('4. Les images s\'afficheront automatiquement sur le site !'); 