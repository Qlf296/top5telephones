#!/usr/bin/env node

/**
 * Script de test d'accessibilité basique
 * Vérifie les éléments d'accessibilité dans le code
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];
const success = [];

console.log('♿ Test d\'accessibilité (a11y)...\n');

// Fonction pour lire récursivement les fichiers
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Ignorer certains dossiers
      if (!['node_modules', '.next', 'backend', 'public'].includes(file)) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Vérifier les fichiers React/Next.js
const srcDir = path.join(process.cwd(), 'src');
if (fs.existsSync(srcDir)) {
  const files = getAllFiles(srcDir);
  
  files.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Vérifier les images ont un alt
    const imgMatches = content.match(/<img[^>]*>/g);
    if (imgMatches) {
      imgMatches.forEach((img) => {
        if (!img.includes('alt=') && !img.includes('alt =')) {
          warnings.push(`⚠️  Image sans alt dans ${relativePath}`);
        }
      });
    }
    
    // Vérifier les boutons ont un aria-label ou du texte
    const buttonMatches = content.match(/<button[^>]*>[\s\S]*?<\/button>/g);
    if (buttonMatches) {
      buttonMatches.forEach((button) => {
        const hasAriaLabel = button.includes('aria-label');
        const hasText = button.replace(/<[^>]*>/g, '').trim().length > 0;
        const hasSrOnly = button.includes('sr-only');
        
        if (!hasAriaLabel && !hasText && !hasSrOnly) {
          warnings.push(`⚠️  Bouton sans label dans ${relativePath}`);
        }
      });
    }
    
    // Vérifier les liens ont un texte ou aria-label
    const linkMatches = content.match(/<a[^>]*>[\s\S]*?<\/a>/g);
    if (linkMatches) {
      linkMatches.forEach((link) => {
        const hasAriaLabel = link.includes('aria-label');
        const hasText = link.replace(/<[^>]*>/g, '').trim().length > 0;
        const hasImage = link.includes('<img');
        
        if (!hasAriaLabel && !hasText && !hasImage) {
          warnings.push(`⚠️  Lien sans texte dans ${relativePath}`);
        }
      });
    }
    
    // Vérifier les formulaires ont des labels
    const inputMatches = content.match(/<input[^>]*>/g);
    if (inputMatches) {
      inputMatches.forEach((input) => {
        if (!input.includes('aria-label') && !input.includes('aria-labelledby') && !input.includes('id=')) {
          // Vérifier si un label existe avant
          const fileContent = content;
          const inputIndex = fileContent.indexOf(input);
          const beforeInput = fileContent.substring(Math.max(0, inputIndex - 200), inputIndex);
          
          if (!beforeInput.includes('<label') && !input.includes('type="hidden"')) {
            warnings.push(`⚠️  Input sans label dans ${relativePath}`);
          }
        }
      });
    }
    
    // Vérifier les headings sont dans l'ordre
    const headingMatches = content.match(/<h([1-6])[^>]*>/g);
    if (headingMatches && headingMatches.length > 0) {
      let lastLevel = 0;
      headingMatches.forEach((heading) => {
        const level = parseInt(heading.match(/<h([1-6])/)[1]);
        if (level > lastLevel + 1 && lastLevel > 0) {
          warnings.push(`⚠️  Saut de niveau de heading (h${lastLevel} → h${level}) dans ${relativePath}`);
        }
        lastLevel = level;
      });
    }
  });
  
  success.push(`✅ ${files.length} fichiers analysés`);
} else {
  errors.push('❌ Dossier src/ manquant');
}

// Vérifier le lang dans layout
const layoutFile = path.join(process.cwd(), 'src/app/layout.tsx');
if (fs.existsSync(layoutFile)) {
  const content = fs.readFileSync(layoutFile, 'utf8');
  if (content.includes('lang=') || content.includes('lang =')) {
    success.push('✅ Attribut lang présent dans layout');
  } else {
    warnings.push('⚠️  Attribut lang manquant dans layout.tsx');
  }
} else {
  errors.push('❌ layout.tsx manquant');
}

// Résumé
console.log('\n📊 Résumé du test d\'accessibilité :\n');

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
  console.log('🎉 Aucun problème d\'accessibilité détecté !\n');
} else if (errors.length === 0) {
  console.log('✅ Tests d\'accessibilité terminés.');
  console.log('⚠️  Vérifiez les avertissements ci-dessus pour améliorer l\'accessibilité.\n');
}

process.exit(errors.length > 0 ? 1 : 0);

