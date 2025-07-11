const fs = require('fs');
const path = require('path');

const phones = [
  { name: 'samsung-galaxy-a14', brand: 'Samsung', model: 'Galaxy A14' },
  { name: 'xiaomi-redmi-note-12', brand: 'Xiaomi', model: 'Redmi Note 12' },
  { name: 'motorola-moto-g84', brand: 'Motorola', model: 'Moto G84' },
  { name: 'nokia-g60', brand: 'Nokia', model: 'G60' },
  { name: 'realme-10', brand: 'Realme', model: '10' }
];

const generateSVG = (phone) => {
  return `<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#f8fafc"/>
  <rect x="150" y="50" width="100" height="200" rx="20" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="160" y="70" width="80" height="120" rx="5" fill="#94a3b8"/>
  <circle cx="200" cy="210" r="8" fill="#64748b"/>
  <text x="200" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#64748b" font-weight="bold">${phone.brand}</text>
  <text x="200" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#64748b">${phone.model}</text>
</svg>`;
};

// Créer le dossier images s'il n'existe pas
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Générer les images placeholder
phones.forEach(phone => {
  const svg = generateSVG(phone);
  const filePath = path.join(imagesDir, `${phone.name}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`✅ Généré: ${phone.name}.svg`);
});

console.log('\n🎉 Toutes les images placeholder ont été générées !'); 