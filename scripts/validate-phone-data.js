const fs = require('fs');
const path = require('path');

// Lire et parser le fichier phones.ts
function parsePhonesFile() {
  const filePath = path.join(__dirname, '../src/data/phones.ts');
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extraire le tableau phones avec une regex
  const phonesMatch = content.match(/export const phones: Phone\[\] = (\[[\s\S]*?\]);/);
  if (!phonesMatch) {
    throw new Error('Impossible de trouver le tableau phones dans le fichier');
  }
  
  // Convertir le code TypeScript en JSON valide
  let phonesJson = phonesMatch[1];
  
  // Remplacer les propriétés TypeScript par du JSON valide
  phonesJson = phonesJson
    .replace(/(\w+):/g, '"$1":') // Clés sans guillemets
    .replace(/\/\/.*$/gm, '') // Commentaires
    .replace(/\/\*[\s\S]*?\*\//g, '') // Commentaires multi-lignes
    .replace(/'/g, '"') // Simple quotes en double quotes
    .replace(/,\s*]/g, ']') // Virgules finales
    .replace(/,\s*}/g, '}'); // Virgules finales
  
  try {
    return JSON.parse(phonesJson);
  } catch (e) {
    // Si le parsing échoue, utiliser une méthode alternative
    return extractPhonesManually(content);
  }
}

// Méthode alternative pour extraire les données
function extractPhonesManually(content) {
  const phones = [];
  const phoneBlocks = content.match(/{\s*id:[\s\S]*?lastUpdated:[\s\S]*?}/g);
  
  if (!phoneBlocks) {
    throw new Error('Impossible d\'extraire les données des téléphones');
  }
  
  phoneBlocks.forEach((block, index) => {
    const phone = {};
    
    // Extraire les propriétés de base
    const idMatch = block.match(/id:\s*"(\d+)"/);
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    const brandMatch = block.match(/brand:\s*"([^"]+)"/);
    const priceMatch = block.match(/price:\s*(\d+)/);
    const originalPriceMatch = block.match(/originalPrice:\s*(\d+)/);
    const imageMatch = block.match(/image:\s*"([^"]+)"/);
    const slugMatch = block.match(/slug:\s*"([^"]+)"/);
    const ratingMatch = block.match(/rating:\s*([\d.]+)/);
    const descriptionMatch = block.match(/description:\s*"([^"]+)"/);
    const lastUpdatedMatch = block.match(/lastUpdated:\s*"([^"]+)"/);
    
    phone.id = idMatch ? idMatch[1] : String(index + 1);
    phone.name = nameMatch ? nameMatch[1] : '';
    phone.brand = brandMatch ? brandMatch[1] : '';
    phone.price = priceMatch ? parseInt(priceMatch[1]) : 0;
    phone.originalPrice = originalPriceMatch ? parseInt(originalPriceMatch[1]) : undefined;
    phone.image = imageMatch ? imageMatch[1] : '';
    phone.slug = slugMatch ? slugMatch[1] : '';
    phone.rating = ratingMatch ? parseFloat(ratingMatch[1]) : 0;
    phone.description = descriptionMatch ? descriptionMatch[1] : '';
    phone.lastUpdated = lastUpdatedMatch ? lastUpdatedMatch[1] : '';
    
    // Extraire les spécifications
    const specsMatch = block.match(/specs:\s*{([^}]+)}/);
    if (specsMatch) {
      phone.specs = {};
      const specsContent = specsMatch[1];
      ['screen', 'processor', 'ram', 'storage', 'camera', 'battery', 'os'].forEach(spec => {
        const specMatch = specsContent.match(new RegExp(`${spec}:\\s*"([^"]+)"`));
        if (specMatch) phone.specs[spec] = specMatch[1];
      });
    }
    
    // Extraire les pros
    const prosMatch = block.match(/pros:\s*\[([^\]]+)\]/);
    if (prosMatch) {
      phone.pros = prosMatch[1].match(/"([^"]+)"/g)?.map(m => m.replace(/"/g, '')) || [];
    }
    
    // Extraire les cons
    const consMatch = block.match(/cons:\s*\[([^\]]+)\]/);
    if (consMatch) {
      phone.cons = consMatch[1].match(/"([^"]+)"/g)?.map(m => m.replace(/"/g, '')) || [];
    }
    
    // Extraire les liens d'affiliation
    const affiliateMatch = block.match(/affiliateLinks:\s*{([^}]+)}/);
    if (affiliateMatch) {
      phone.affiliateLinks = {};
      const linksContent = affiliateMatch[1];
      const amazonMatch = linksContent.match(/amazon:\s*"([^"]+)"/);
      const cdiscountMatch = linksContent.match(/cdiscount:\s*"([^"]+)"/);
      if (amazonMatch) phone.affiliateLinks.amazon = amazonMatch[1];
      if (cdiscountMatch) phone.affiliateLinks.cdiscount = cdiscountMatch[1];
    }
    
    // Extraire les couleurs
    const colorsMatch = block.match(/colors:\s*\[([^\]]+)\]/);
    if (colorsMatch) {
      phone.colors = [];
      const colorBlocks = colorsMatch[1].match(/{[^}]+}/g) || [];
      colorBlocks.forEach(colorBlock => {
        const color = {};
        const nameMatch = colorBlock.match(/name:\s*"([^"]+)"/);
        const hexMatch = colorBlock.match(/hex:\s*"([^"]+)"/);
        const slugMatch = colorBlock.match(/slug:\s*"([^"]+)"/);
        const imageMatch = colorBlock.match(/image:\s*"([^"]+)"/);
        if (nameMatch) color.name = nameMatch[1];
        if (hexMatch) color.hex = hexMatch[1];
        if (slugMatch) color.slug = slugMatch[1];
        if (imageMatch) color.image = imageMatch[1];
        if (color.name) phone.colors.push(color);
      });
    }
    
    phones.push(phone);
  });
  
  return phones;
}

const phones = parsePhonesFile();

// Fonction pour vérifier si un fichier existe
function fileExists(filePath) {
  const fullPath = path.join(__dirname, '..', 'public', filePath);
  return fs.existsSync(fullPath);
}

// Fonction pour valider un téléphone
function validatePhone(phone, index) {
  const errors = [];
  const warnings = [];

  // 1. Vérifier l'ID
  if (!phone.id) {
    errors.push('❌ ID manquant');
  } else if (phone.id !== String(index + 1)) {
    // L'ID doit correspondre à l'index + 1 (1-based)
    warnings.push(`⚠️ ID: "${phone.id}" (attendu "${index + 1}") - vérifier la cohérence`);
  }

  // 2. Vérifier le nom
  if (!phone.name || phone.name.trim().length === 0) {
    errors.push('❌ Nom manquant ou vide');
  }

  // 3. Vérifier la marque
  if (!phone.brand || phone.brand.trim().length === 0) {
    errors.push('❌ Marque manquante ou vide');
  }

  // 4. Vérifier le prix
  if (phone.price <= 0 || phone.price >= 300) {
    errors.push(`❌ Prix invalide: ${phone.price}€ (doit être entre 1€ et 299€)`);
  }
  if (phone.originalPrice && phone.originalPrice <= phone.price) {
    warnings.push(`⚠️ Prix original (${phone.originalPrice}€) inférieur ou égal au prix actuel (${phone.price}€)`);
  }

  // 5. Vérifier l'image principale
  if (!phone.image || !phone.image.startsWith('/images/')) {
    errors.push(`❌ Chemin image invalide: ${phone.image}`);
  } else if (!fileExists(phone.image)) {
    warnings.push(`⚠️ Image principale introuvable: ${phone.image}`);
  }

  // 6. Vérifier les spécifications
  const requiredSpecs = ['screen', 'processor', 'ram', 'storage', 'camera', 'battery', 'os'];
  for (const spec of requiredSpecs) {
    if (!phone.specs[spec] || phone.specs[spec].trim().length === 0) {
      errors.push(`❌ Spécification "${spec}" manquante ou vide`);
    }
  }

  // Vérifier le format des spécifications
  if (phone.specs.ram && !phone.specs.ram.match(/^\d+GB$/)) {
    warnings.push(`⚠️ Format RAM suspect: ${phone.specs.ram} (attendu: "XGB")`);
  }
  if (phone.specs.storage && !phone.specs.storage.match(/^\d+GB$/)) {
    warnings.push(`⚠️ Format stockage suspect: ${phone.specs.storage} (attendu: "XGB")`);
  }
  if (phone.specs.battery && !phone.specs.battery.match(/\d+mAh/)) {
    warnings.push(`⚠️ Format batterie suspect: ${phone.specs.battery} (attendu: "XmAh")`);
  }

  // 7. Vérifier les points forts/faibles
  if (!phone.pros || phone.pros.length === 0) {
    errors.push('❌ Aucun point fort défini');
  } else if (phone.pros.length < 3) {
    warnings.push(`⚠️ Seulement ${phone.pros.length} point(s) fort(s) (recommandé: 3-5)`);
  }
  if (!phone.cons || phone.cons.length === 0) {
    errors.push('❌ Aucun point faible défini');
  } else if (phone.cons.length < 2) {
    warnings.push(`⚠️ Seulement ${phone.cons.length} point(s) faible(s) (recommandé: 2-4)`);
  }

  // 8. Vérifier les liens d'affiliation
  if (!phone.affiliateLinks || !phone.affiliateLinks.amazon) {
    errors.push('❌ Lien Amazon manquant');
  } else if (!phone.affiliateLinks.amazon.startsWith('https://www.amazon.fr/')) {
    warnings.push(`⚠️ Lien Amazon suspect: ${phone.affiliateLinks.amazon}`);
  }

  // 9. Vérifier la note
  if (phone.rating < 0 || phone.rating > 5) {
    errors.push(`❌ Note invalide: ${phone.rating} (doit être entre 0 et 5)`);
  } else if (phone.rating < 3.5) {
    warnings.push(`⚠️ Note faible: ${phone.rating}/5 (recommandé: 3.5-5)`);
  }

  // 10. Vérifier le slug
  if (!phone.slug || phone.slug.trim().length === 0) {
    errors.push('❌ Slug manquant ou vide');
  } else {
    // Vérifier le format du slug (URL-friendly)
    if (!phone.slug.match(/^[a-z0-9-]+$/)) {
      errors.push(`❌ Slug invalide: ${phone.slug} (doit contenir uniquement des lettres minuscules, chiffres et tirets)`);
    }
    // Vérifier la cohérence avec le nom (vérification plus souple)
    const expectedSlug = phone.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    // Vérifier que le slug contient au moins les 2 premiers mots du nom
    const nameWords = expectedSlug.split('-').slice(0, 2);
    const slugWords = phone.slug.split('-');
    const hasCommonWords = nameWords.some(word => slugWords.includes(word));
    if (!hasCommonWords && phone.slug !== expectedSlug) {
      warnings.push(`⚠️ Slug ne correspond pas au nom: "${phone.slug}" vs "${expectedSlug}"`);
    }
  }

  // 11. Vérifier la description
  if (!phone.description || phone.description.trim().length === 0) {
    errors.push('❌ Description manquante ou vide');
  } else if (phone.description.length < 50) {
    warnings.push(`⚠️ Description trop courte: ${phone.description.length} caractères (recommandé: 50-200)`);
  } else if (phone.description.length > 300) {
    warnings.push(`⚠️ Description trop longue: ${phone.description.length} caractères (recommandé: 50-200)`);
  }

  // 12. Vérifier la date de mise à jour
  if (!phone.lastUpdated) {
    errors.push('❌ Date de mise à jour manquante');
  } else {
    const date = new Date(phone.lastUpdated);
    if (isNaN(date.getTime())) {
      errors.push(`❌ Date de mise à jour invalide: ${phone.lastUpdated}`);
    } else {
      const today = new Date();
      const daysDiff = Math.floor((today - date) / (1000 * 60 * 60 * 24));
      // Permettre les dates jusqu'à 30 jours dans le futur (pour les mises à jour planifiées)
      if (daysDiff < -30) {
        errors.push(`❌ Date de mise à jour trop dans le futur: ${phone.lastUpdated} (${Math.abs(daysDiff)} jours)`);
      } else if (date > today) {
        warnings.push(`⚠️ Date de mise à jour dans le futur: ${phone.lastUpdated} (${Math.abs(daysDiff)} jours)`);
      } else if (daysDiff > 90) {
        warnings.push(`⚠️ Date de mise à jour ancienne: ${phone.lastUpdated} (${daysDiff} jours)`);
      }
    }
  }

  // 13. Vérifier les couleurs
  if (!phone.colors || phone.colors.length === 0) {
    errors.push('❌ Aucune couleur définie');
  } else {
    phone.colors.forEach((color, colorIndex) => {
      if (!color.name || color.name.trim().length === 0) {
        errors.push(`❌ Nom de couleur ${colorIndex + 1} manquant`);
      }
      if (!color.hex || !color.hex.match(/^#[0-9A-Fa-f]{6}$/)) {
        errors.push(`❌ Code hex couleur "${color.name}" invalide: ${color.hex}`);
      }
      if (!color.slug || color.slug.trim().length === 0) {
        errors.push(`❌ Slug couleur "${color.name}" manquant`);
      }
      if (color.image && !fileExists(color.image)) {
        warnings.push(`⚠️ Image couleur "${color.name}" introuvable: ${color.image}`);
      }
    });
  }

  // 14. Vérifier la cohérence des données
  if (phone.name && !phone.name.includes(phone.brand)) {
    warnings.push(`⚠️ Le nom ne contient pas la marque: "${phone.name}" ne contient pas "${phone.brand}"`);
  }

  return { errors, warnings };
}

// Fonction principale
function validateAllPhones() {
  console.log('🔍 Validation des données des téléphones...\n');
  console.log(`📱 Nombre de téléphones à valider: ${phones.length}\n`);

  let totalErrors = 0;
  let totalWarnings = 0;
  const results = [];

  phones.forEach((phone, index) => {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`📱 ${index + 1}. ${phone.name} (${phone.brand})`);
    console.log('='.repeat(60));

    const { errors, warnings } = validatePhone(phone, index);

    if (errors.length > 0) {
      console.log('\n❌ ERREURS:');
      errors.forEach(error => console.log(`   ${error}`));
      totalErrors += errors.length;
    }

    if (warnings.length > 0) {
      console.log('\n⚠️  AVERTISSEMENTS:');
      warnings.forEach(warning => console.log(`   ${warning}`));
      totalWarnings += warnings.length;
    }

    if (errors.length === 0 && warnings.length === 0) {
      console.log('\n✅ Aucun problème détecté');
    }

    results.push({
      phone: phone.name,
      errors: errors.length,
      warnings: warnings.length,
      details: { errors, warnings }
    });
  });

  // Résumé
  console.log('\n\n' + '='.repeat(60));
  console.log('📊 RÉSUMÉ DE LA VALIDATION');
  console.log('='.repeat(60));
  console.log(`✅ Téléphones validés: ${phones.length}`);
  console.log(`❌ Erreurs totales: ${totalErrors}`);
  console.log(`⚠️  Avertissements totaux: ${totalWarnings}`);

  if (totalErrors === 0 && totalWarnings === 0) {
    console.log('\n🎉 Toutes les données sont correctes !');
    process.exit(0);
  } else if (totalErrors === 0) {
    console.log('\n✅ Aucune erreur critique, mais des avertissements à vérifier.');
    process.exit(0);
  } else {
    console.log('\n❌ Des erreurs critiques ont été détectées. Veuillez les corriger.');
    process.exit(1);
  }
}

// Exécuter la validation
try {
  validateAllPhones();
} catch (error) {
  console.error('❌ Erreur lors de la validation:', error);
  process.exit(1);
}

