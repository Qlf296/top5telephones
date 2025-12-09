#!/usr/bin/env node

/**
 * Script de validation du build
 * Vérifie que le build de production est correct
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];

console.log('🔍 Validation du build de production...\n');

// 1. Vérifier que .next existe
const nextDir = path.join(process.cwd(), '.next');
if (!fs.existsSync(nextDir)) {
  errors.push('❌ Le dossier .next n\'existe pas. Lancez "npm run build" d\'abord.');
} else {
  console.log('✅ Dossier .next trouvé');
}

// 2. Vérifier les fichiers critiques
const criticalFiles = [
  { path: 'public/robots.txt', name: 'robots.txt' },
  { path: 'public/sitemap.xml', name: 'sitemap.xml' },
  { path: 'public/images/og-image.jpg', name: 'Image OG par défaut' },
  { path: 'next.config.js', name: 'Configuration Next.js' },
];

criticalFiles.forEach(({ path: filePath, name }) => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${name} trouvé`);
  } else {
    warnings.push(`⚠️  ${name} manquant : ${filePath}`);
  }
});

// 3. Vérifier les variables d'environnement
const envExample = path.join(process.cwd(), 'env.example');
if (fs.existsSync(envExample)) {
  console.log('✅ env.example trouvé');
} else {
  warnings.push('⚠️  env.example manquant');
}

// 4. Vérifier la structure des composants SEO
const seoComponentsDir = path.join(process.cwd(), 'src/components/seo');
const componentsDir = path.join(process.cwd(), 'src/components');
if (fs.existsSync(seoComponentsDir)) {
  const seoFiles = fs.readdirSync(seoComponentsDir);
  const requiredSeoSchemas = [
    'OrganizationSchema.tsx',
    'ArticleSchema.tsx',
    'BreadcrumbSchema.tsx',
  ];
  
  requiredSeoSchemas.forEach(schema => {
    if (seoFiles.includes(schema)) {
      console.log(`✅ ${schema} trouvé`);
    } else {
      warnings.push(`⚠️  ${schema} manquant`);
    }
  });
  
  // Vérifier ProductSchema dans components (pas dans seo)
  const productSchemaPath = path.join(componentsDir, 'ProductSchema.tsx');
  if (fs.existsSync(productSchemaPath)) {
    console.log('✅ ProductSchema.tsx trouvé');
  } else {
    warnings.push('⚠️  ProductSchema.tsx manquant');
  }
} else {
  warnings.push('⚠️  Dossier src/components/seo manquant');
}

// 5. Résumé
console.log('\n📊 Résumé de la validation :\n');

if (errors.length > 0) {
  console.log('❌ ERREURS :');
  errors.forEach(error => console.log(`  ${error}`));
  process.exit(1);
}

if (warnings.length > 0) {
  console.log('⚠️  AVERTISSEMENTS :');
  warnings.forEach(warning => console.log(`  ${warning}`));
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ Tous les fichiers critiques sont présents !');
  console.log('✅ Le build est prêt pour le déploiement.\n');
}

process.exit(errors.length > 0 ? 1 : 0);

