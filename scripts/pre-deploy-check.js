#!/usr/bin/env node

/**
 * Script de vérification pré-déploiement
 * Vérifie que tout est prêt pour le déploiement
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];
const success = [];

console.log('🚀 Vérification pré-déploiement...\n');

// 1. Vérifier le build
const nextDir = path.join(process.cwd(), '.next');
if (fs.existsSync(nextDir)) {
  success.push('✅ Build de production présent');
} else {
  errors.push('❌ Build manquant. Lancez "npm run build"');
}

// 2. Vérifier les variables d'environnement
const envExample = path.join(process.cwd(), 'env.example');
const envLocal = path.join(process.cwd(), '.env.local');

if (fs.existsSync(envExample)) {
  success.push('✅ env.example présent');
  
  // Vérifier si .env.local existe
  if (fs.existsSync(envLocal)) {
    success.push('✅ .env.local présent');
    
    // Lire et vérifier les variables importantes
    const envContent = fs.readFileSync(envLocal, 'utf8');
    if (envContent.includes('NEXT_PUBLIC_SITE_URL')) {
      success.push('✅ NEXT_PUBLIC_SITE_URL configuré');
    } else {
      warnings.push('⚠️  NEXT_PUBLIC_SITE_URL non configuré dans .env.local');
    }
  } else {
    warnings.push('⚠️  .env.local manquant (créer depuis env.example)');
  }
} else {
  errors.push('❌ env.example manquant');
}

// 3. Vérifier les fichiers critiques
const criticalFiles = [
  { path: 'public/robots.txt', name: 'robots.txt' },
  { path: 'public/sitemap.xml', name: 'sitemap.xml' },
  { path: 'public/images/og-image.jpg', name: 'Image OG' },
  { path: 'next.config.js', name: 'next.config.js' },
  { path: 'src/app/sitemap.ts', name: 'Sitemap dynamique' },
];

criticalFiles.forEach(({ path: filePath, name }) => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    success.push(`✅ ${name} présent`);
  } else {
    errors.push(`❌ ${name} manquant : ${filePath}`);
  }
});

// 4. Vérifier les composants SEO
const seoDir = path.join(process.cwd(), 'src/components/seo');
if (fs.existsSync(seoDir)) {
  const seoFiles = fs.readdirSync(seoDir);
  const requiredSchemas = [
    'OrganizationSchema.tsx',
    'ArticleSchema.tsx',
    'BreadcrumbSchema.tsx',
  ];
  
  requiredSchemas.forEach(schema => {
    if (seoFiles.includes(schema)) {
      success.push(`✅ ${schema} présent`);
    } else {
      warnings.push(`⚠️  ${schema} manquant`);
    }
  });
} else {
  errors.push('❌ Dossier src/components/seo manquant');
}

// 5. Vérifier la configuration Next.js
const nextConfig = path.join(process.cwd(), 'next.config.js');
if (fs.existsSync(nextConfig)) {
  const configContent = fs.readFileSync(nextConfig, 'utf8');
  
  if (configContent.includes('compress: true')) {
    success.push('✅ Compression activée');
  } else {
    warnings.push('⚠️  Compression non activée');
  }
  
  // SWC minification est activée par défaut dans Next.js 15
  if (configContent.includes('swcMinify: true') || configContent.includes('swcMinify')) {
    success.push('✅ SWC minification activée');
  } else {
    // Next.js 15 active SWC par défaut, donc c'est OK
    success.push('✅ SWC minification (défaut Next.js 15)');
  }
}

// 6. Vérifier les URLs dans le code
const layoutFile = path.join(process.cwd(), 'src/app/layout.tsx');
if (fs.existsSync(layoutFile)) {
  const layoutContent = fs.readFileSync(layoutFile, 'utf8');
  
  // Vérifier qu'on utilise top5telephones.fr (pas top5smartphones.fr)
  if (layoutContent.includes('top5smartphones.fr')) {
    warnings.push('⚠️  Ancienne URL "top5smartphones.fr" trouvée dans layout.tsx');
  } else if (layoutContent.includes('top5telephones.fr')) {
    success.push('✅ URLs correctes (top5telephones.fr)');
  }
}

// 7. Résumé
console.log('\n📊 Résumé de la vérification :\n');

if (success.length > 0) {
  console.log('✅ SUCCÈS :');
  success.forEach(msg => console.log(`  ${msg}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  AVERTISSEMENTS :');
  warnings.forEach(warning => console.log(`  ${warning}`));
  console.log('');
}

if (errors.length > 0) {
  console.log('❌ ERREURS :');
  errors.forEach(error => console.log(`  ${error}`));
  console.log('\n❌ Le déploiement ne peut pas continuer. Corrigez les erreurs ci-dessus.\n');
  process.exit(1);
}

if (warnings.length === 0 && errors.length === 0) {
  console.log('🎉 Toutes les vérifications sont passées !');
  console.log('✅ Le projet est prêt pour le déploiement.\n');
} else if (errors.length === 0) {
  console.log('✅ Le projet est prêt pour le déploiement.');
  console.log('⚠️  Mais vérifiez les avertissements ci-dessus.\n');
}

process.exit(errors.length > 0 ? 1 : 0);

