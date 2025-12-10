# 🎨 Guide - Image OG iOS 26.2 Style

## ✅ Image générée avec succès !

L'image OG a été créée avec le design premium iOS 26.2.

**Fichier :** `/public/images/og-image.jpg`
**Dimensions :** 1200x630px
**Taille :** ~35 KB (optimisé)
**Format :** JPG (meilleure compatibilité réseaux sociaux)

---

## 🎯 Caractéristiques du design

### Style iOS 26.2
- ✅ Fond dégradé doux bleu/blanc
- ✅ Carte glassmorphism avec transparence
- ✅ Typographie SF Pro (système)
- ✅ Badge "2025" en overlay
- ✅ Icône téléphone décorative
- ✅ Mots-clés avec icônes (✓ Tests, ⚖️ Comparatifs, 📖 Conseils)

### Palette de couleurs
- **Fond** : Dégradé `#f0f9ff` → `#e0f2fe` → `#dbeafe`
- **Carte** : Blanc transparent (85% opacity) avec blur
- **Texte principal** : `#0f172a` (slate-900)
- **Accent** : `#0a84ff` (iOS Blue)
- **Texte secondaire** : `#475569` (slate-600)

---

## 🔄 Régénérer l'image

Pour régénérer l'image avec d'éventuelles modifications :

```bash
npm run generate:og
```

---

## 🎨 Personnaliser l'image

### Modifier le texte

Édite le fichier `scripts/generate-og-image-ios.js` :

```javascript
// Ligne ~150 - Titre principal
drawText(ctx, 'TOP 5', contentX, contentY, {
  fontSize: 72,
  fontWeight: 'bold',
  color: COLORS.text.primary,
});

// Ligne ~160 - Sous-titre
drawText(ctx, 'Téléphones', contentX, contentY + 90, {
  fontSize: 56,
  fontWeight: '600',
});
```

### Modifier les couleurs

Dans `scripts/generate-og-image-ios.js`, section `COLORS` :

```javascript
const COLORS = {
  backgroundGradient: {
    start: '#f0f9ff',  // Modifier ici
    middle: '#e0f2fe',
    end: '#dbeafe',
  },
  text: {
    accent: '#0a84ff', // Couleur d'accent
  },
  // ...
};
```

### Modifier les mots-clés

Ligne ~220 dans le script :

```javascript
const keywords = [
  { icon: '✓', text: 'Tests réels' },
  { icon: '⚖️', text: 'Comparatifs' },
  { icon: '📖', text: 'Conseils d\'achat' },
];
```

---

## 🧪 Tester l'image

### 1. Vérifier localement
Ouvre `/public/images/og-image.jpg` dans un navigateur ou un éditeur d'images.

### 2. Tester sur Facebook
Utilise [Facebook Debugger](https://developers.facebook.com/tools/debug/) :
1. Entrez l'URL de ton site
2. Clique sur "Scraper" pour voir l'aperçu
3. Si l'image ne s'affiche pas, clique sur "Scrape Again" après avoir régénéré

### 3. Tester sur Twitter
Utilise [Twitter Card Validator](https://cards-dev.twitter.com/validator) :
1. Entrez l'URL de ton site
2. Vérifie l'aperçu de la carte

### 4. Tester sur LinkedIn
Utilise [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) :
1. Entrez l'URL de ton site
2. Vérifie l'aperçu

---

## 📊 Optimisations

### Compression
L'image est déjà optimisée (~35 KB), mais tu peux la compresser davantage avec :
- [TinyPNG](https://tinypng.com/) - Compression JPG
- [Squoosh](https://squoosh.app/) - Compression avancée

### Formats alternatifs
Pour une meilleure qualité, tu peux générer en PNG :
```javascript
// Dans le script, ligne ~250
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath.replace('.jpg', '.png'), buffer);
```

Puis mettre à jour les métadonnées dans `src/app/page.tsx` :
```typescript
images: [{
  url: '/images/og-image.png', // Au lieu de .jpg
}]
```

---

## 🎯 Variantes dynamiques (futur)

Pour générer une image OG par page (fiche produit, etc.) :

1. Créer une fonction qui accepte des paramètres :
```javascript
async function generateOGImageForPhone(phoneName, price, imagePath) {
  // Générer avec les données du téléphone
}
```

2. Appeler depuis chaque page :
```typescript
// Dans src/app/fiche/[slug]/page.tsx
const ogImage = await generateOGImageForPhone(
  phone.name,
  phone.price,
  phone.image
);
```

---

## ✅ Checklist de validation

- [x] Image générée (1200x630px)
- [x] Format JPG optimisé
- [x] Taille < 300KB
- [ ] Testé sur Facebook Debugger
- [ ] Testé sur Twitter Card Validator
- [ ] Testé sur LinkedIn Post Inspector
- [ ] Vérifié le rendu mobile
- [ ] Vérifié la lisibilité du texte

---

## 🚀 Prochaines étapes

1. **Tester l'image** sur les réseaux sociaux
2. **Partager une URL** pour voir l'aperçu
3. **Ajuster si nécessaire** (couleurs, texte, position)
4. **Régénérer** avec `npm run generate:og`

---

## 📝 Notes

- L'image est automatiquement utilisée par Next.js via les métadonnées Open Graph
- Pas besoin de redéployer pour changer l'image (juste régénérer)
- L'image est servie statiquement depuis `/public/images/`
- Compatible avec tous les réseaux sociaux majeurs

---

**Créé le :** $(date)
**Dernière mise à jour :** $(date)

