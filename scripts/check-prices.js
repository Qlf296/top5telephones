#!/usr/bin/env node

/**
 * Script pour vérifier les dates de mise à jour des prix
 * Aide à identifier les téléphones qui nécessitent une mise à jour
 */

const fs = require('fs');
const path = require('path');

console.log('💰 Vérification des prix et dates de mise à jour...\n');

const phonesFile = path.join(process.cwd(), 'src/data/phones.ts');
if (!fs.existsSync(phonesFile)) {
  console.error('❌ Fichier src/data/phones.ts introuvable');
  process.exit(1);
}

const content = fs.readFileSync(phonesFile, 'utf8');

// Extraire les téléphones et leurs dates
const phoneMatches = content.matchAll(/lastUpdated:\s*"([^"]+)"/g);
const phones = [];
let match;
const regex = /lastUpdated:\s*"([^"]+)"/g;

// Extraire toutes les informations des téléphones
const phoneBlocks = content.match(/\{[^}]*id:\s*"[^"]+"[^}]*lastUpdated:\s*"[^"]+"[^}]*\}/gs);

if (phoneBlocks) {
  phoneBlocks.forEach((block, index) => {
    const idMatch = block.match(/id:\s*"([^"]+)"/);
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    const priceMatch = block.match(/price:\s*(\d+(?:\.\d+)?)/);
    const originalPriceMatch = block.match(/originalPrice:\s*(\d+(?:\.\d+)?)/);
    const lastUpdatedMatch = block.match(/lastUpdated:\s*"([^"]+)"/);
    
    if (idMatch && nameMatch && priceMatch && lastUpdatedMatch) {
      phones.push({
        id: idMatch[1],
        name: nameMatch[1],
        price: parseFloat(priceMatch[1]),
        originalPrice: originalPriceMatch ? parseFloat(originalPriceMatch[1]) : null,
        lastUpdated: lastUpdatedMatch[1],
      });
    }
  });
}

// Calculer les jours depuis la dernière mise à jour
const today = new Date();
const phonesToUpdate = [];
const phonesRecent = [];

phones.forEach(phone => {
  const lastUpdated = new Date(phone.lastUpdated);
  const daysSinceUpdate = Math.floor((today - lastUpdated) / (1000 * 60 * 60 * 24));
  
  if (daysSinceUpdate > 30) {
    phonesToUpdate.push({ ...phone, daysSinceUpdate });
  } else {
    phonesRecent.push({ ...phone, daysSinceUpdate });
  }
});

// Afficher les résultats
console.log('📊 État des mises à jour :\n');

if (phonesRecent.length > 0) {
  console.log('✅ Téléphones à jour (< 30 jours) :');
  phonesRecent.forEach(phone => {
    const promo = phone.originalPrice ? ` (Promo: ${phone.originalPrice}€)` : '';
    console.log(`  • ${phone.name}: ${phone.price}€${promo} - Mis à jour il y a ${phone.daysSinceUpdate} jours`);
  });
  console.log('');
}

if (phonesToUpdate.length > 0) {
  console.log('⚠️  Téléphones à mettre à jour (> 30 jours) :');
  phonesToUpdate.forEach(phone => {
    const promo = phone.originalPrice ? ` (Promo: ${phone.originalPrice}€)` : '';
    console.log(`  • ${phone.name}: ${phone.price}€${promo} - Mis à jour il y a ${phone.daysSinceUpdate} jours`);
  });
  console.log('');
  console.log('💡 Action recommandée : Vérifier les prix sur Amazon.fr et CDiscount.fr');
  console.log('💡 Puis mettre à jour dans src/data/phones.ts\n');
} else {
  console.log('✅ Tous les téléphones ont été mis à jour récemment !\n');
}

// Afficher le Top 5
console.log('🏆 Top 5 actuel (5 premiers du tableau) :');
phones.slice(0, 5).forEach((phone, index) => {
  const promo = phone.originalPrice ? ` (Promo: ${phone.originalPrice}€)` : '';
  console.log(`  ${index + 1}. ${phone.name}: ${phone.price}€${promo}`);
});

console.log('\n📝 Pour mettre à jour :');
console.log('  1. Ouvrir src/data/phones.ts');
console.log('  2. Modifier les prix et lastUpdated');
console.log('  3. Commit et push\n');

