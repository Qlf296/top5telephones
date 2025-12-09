#!/usr/bin/env node

/**
 * Script de test des liens
 * Vérifie que tous les liens internes sont valides
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];
const success = [];

console.log('🔗 Test des liens...\n');

// Fonction pour lire récursivement les fichiers
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!['node_modules', '.next', 'backend', 'public'].includes(file)) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Pages disponibles (basé sur la structure)
const availablePages = [
  '/',
  '/comparateur',
  '/quiz',
  '/a-propos',
  '/contact',
  '/guide-achat-smartphone',
  '/comparatif-samsung-xiaomi',
  '/top-5-smartphones-300euros',
  '/mentions-legales',
  '/politique-confidentialite',
  '/fiche/samsung-galaxy-a14',
  '/fiche/xiaomi-redmi-note-12',
  '/fiche/motorola-moto-g84',
  '/fiche/nokia-g60',
  '/fiche/realme-10',
];

// Vérifier les fichiers
const srcDir = path.join(process.cwd(), 'src');
if (fs.existsSync(srcDir)) {
  const files = getAllFiles(srcDir);
  const internalLinks = [];
  const externalLinks = [];
  
  files.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Trouver les liens href
    const hrefMatches = content.match(/href=["']([^"']+)["']/g);
    if (hrefMatches) {
      hrefMatches.forEach((match) => {
        const href = match.replace(/href=["']/, '').replace(/["']$/, '');
        
        // Ignorer les liens externes, mailto, tel, etc.
        if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('//')) {
          externalLinks.push({ href, file: relativePath });
        } else if (href.startsWith('/')) {
          // Ignorer les assets (images, fonts, etc.)
          const isAsset = href.match(/\.(jpg|jpeg|png|gif|svg|webp|avif|ico|woff|woff2|ttf|eot|css|js|json|xml|pdf)$/i);
          
          if (!isAsset) {
            // Lien interne
            internalLinks.push({ href, file: relativePath });
            
            // Vérifier si la page existe
            if (!availablePages.includes(href) && !href.startsWith('/fiche/') && !href.startsWith('/_next/') && !href.startsWith('/api/')) {
              warnings.push(`⚠️  Lien interne potentiellement cassé : ${href} dans ${relativePath}`);
            }
          }
        }
      });
    }
  });
  
  success.push(`✅ ${internalLinks.length} liens internes trouvés`);
  success.push(`✅ ${externalLinks.length} liens externes trouvés`);
  
  // Vérifier les pages de fiches produits
  const ficheLinks = internalLinks.filter(link => link.href.startsWith('/fiche/'));
  if (ficheLinks.length > 0) {
    const uniqueFiches = [...new Set(ficheLinks.map(link => link.href))];
    success.push(`✅ ${uniqueFiches.length} liens vers fiches produits trouvés`);
  }
} else {
  errors.push('❌ Dossier src/ manquant');
}

// Résumé
console.log('\n📊 Résumé du test des liens :\n');

if (success.length > 0) {
  console.log('✅ SUCCÈS :');
  success.forEach(msg => console.log(`  ${msg}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  AVERTISSEMENTS :');
  warnings.slice(0, 10).forEach(warning => console.log(`  ${warning}`));
  if (warnings.length > 10) {
    console.log(`  ... et ${warnings.length - 10} autres avertissements`);
  }
  console.log('');
}

if (errors.length > 0) {
  console.log('❌ ERREURS :');
  errors.forEach(error => console.log(`  ${error}`));
  console.log('');
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('🎉 Tous les liens semblent valides !\n');
} else if (errors.length === 0) {
  console.log('✅ Test des liens terminé.');
  console.log('⚠️  Vérifiez les avertissements ci-dessus.\n');
}

process.exit(errors.length > 0 ? 1 : 0);

