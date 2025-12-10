# Guide de génération des images HERO - Top 5 Téléphones

## 📋 Objectif

Générer des images HERO premium, grandes et stylisées style iOS 26.2 pour chaque téléphone du Top 5.

## 🎯 Spécifications techniques

### Résolutions requises (par téléphone)

1. **HERO Desktop (principal)** :
   - Format: WebP (prioritaire) + JPG (fallback)
   - Dimensions: **3000 × 1800 px** (ratio 5:3)
   - Fichiers: 
     - `/public/images/top5/<slug>/hero-final.webp`
     - `/public/images/top5/<slug>/hero-final.jpg`

2. **HERO Retina (2x)** :
   - Dimensions: **6000 × 3600 px** (optionnel)
   - Format: WebP + JPG

3. **Fiche produit / Preview square** :
   - Dimensions: **1200 × 1200 px**
   - Format: WebP + JPG

4. **Miniature comparateur** :
   - Dimensions: **800 × 800 px**
   - Format: WebP + PNG

5. **OG Image (Open Graph)** :
   - Dimensions: **1200 × 630 px** (ratio 1.91:1)
   - Format: JPG (meilleure compatibilité)

6. **Version mobile / Portrait** :
   - Dimensions: **1200 × 1600 px**
   - Format: WebP + JPG

7. **Phone Isolated (fond transparent)** :
   - Dimensions: **2000 × 2000 px** (ou adaptatif)
   - Format: **PNG** (avec transparence)
   - Fichier: `/public/images/top5/<slug>/phone-isolated.png`

## 🎨 Style iOS 26.2

### Caractéristiques visuelles

- **Fond**: Clair, dégradé très subtil (ex: `rgba(255, 255, 255, 0.98)` → `rgba(250, 250, 255, 0.95)`)
- **Ombres**: Douces Apple (`0 20px 40px rgba(0, 0, 0, 0.12)`)
- **Bordure**: `rgba(255, 255, 255, 0.33)` (1px)
- **Radius**: 24-32px
- **Blur**: 20-30px (backdrop-filter)
- **Téléphone**: Centré, ombre portée douce (`drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))`)

## 📂 Structure des fichiers

```
public/images/top5/
├── xiaomi-redmi-note-14-5g/
│   ├── hero-final.webp          (3000×1800)
│   ├── hero-final.jpg           (3000×1800)
│   ├── phone-isolated.png       (2000×2000, transparent)
│   ├── thumbnail.png            (800×800)
│   ├── og-image.jpg             (1200×630)
│   └── colors/
│       ├── midnight-black.png   (swatch 36px)
│       ├── ocean-blue.png
│       └── forest-green.png
├── samsung-galaxy-a35-5g/
│   └── ...
├── poco-x7-pro/
│   └── ...
├── motorola-edge-50-fusion/
│   └── ...
└── samsung-galaxy-a26-5g/
    └── ...
```

## 🔧 Processus de génération

### Étape 1: Préparation de l'image source

1. **Source**: Utiliser l'image existante dans `/public/images/top2/<nom-téléphone>.png`
2. **Détourage**: 
   - Retirer le fond (background removal)
   - Garder uniquement le(s) téléphone(s)
   - Nettoyer les bords (anti-aliasing)
3. **Nettoyage**:
   - Retirer texte, logos du site officiel
   - Ajuster luminosité/contraste pour cohérence
   - Corriger les ombres si nécessaire

### Étape 2: Composition HERO

1. **Créer le canvas** (3000×1800px)
2. **Ajouter le fond iOS 26.2**:
   ```
   Background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)
   Border: 1px solid rgba(255, 255, 255, 0.33)
   Border-radius: 32px
   ```
3. **Placer le téléphone**:
   - Centrer horizontalement et verticalement
   - Taille: ~70-80% de la hauteur du canvas
   - Ombre: `drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))`
4. **Si plusieurs téléphones** (line-up):
   - Aligner horizontalement
   - Espacement uniforme
   - Même taille pour tous

### Étape 3: Export multi-formats

1. **WebP** (prioritaire):
   - Qualité: 85-90%
   - Compression: optimale
   - Fichier: `hero-final.webp`

2. **JPG** (fallback):
   - Qualité: 90-95%
   - Progressive: Oui
   - Fichier: `hero-final.jpg`

3. **PNG Isolated**:
   - Fond transparent
   - Taille: 2000×2000px (ou adaptatif)
   - Fichier: `phone-isolated.png`

### Étape 4: Génération des variantes

1. **Thumbnail** (800×800):
   - Recadrer depuis hero-final
   - Centrer le téléphone
   - Format: PNG ou WebP

2. **OG Image** (1200×630):
   - Recadrer depuis hero-final (ratio 1.91:1)
   - Centrer le téléphone
   - Format: JPG

3. **Mobile Portrait** (1200×1600):
   - Adapter depuis hero-final
   - Format: WebP + JPG

## 🛠️ Outils recommandés

### Logiciels
- **Adobe Photoshop**: Composition, détourage, export
- **Figma**: Design, composition
- **GIMP**: Alternative gratuite
- **Remove.bg**: Détourage automatique (API)

### Scripts/Commandes

#### ImageMagick (conversion/optimisation)
```bash
# Convertir PNG → WebP
convert input.png -quality 85 output.webp

# Redimensionner
convert input.png -resize 3000x1800 output.png

# Optimiser JPG
convert input.jpg -quality 90 -strip output.jpg
```

#### Sharp (Node.js)
```javascript
const sharp = require('sharp');

// Générer WebP
await sharp('input.png')
  .resize(3000, 1800)
  .webp({ quality: 85 })
  .toFile('hero-final.webp');

// Générer JPG
await sharp('input.png')
  .resize(3000, 1800)
  .jpeg({ quality: 90, progressive: true })
  .toFile('hero-final.jpg');
```

## ✅ Checklist par téléphone

- [ ] Image source préparée (détourée, nettoyée)
- [ ] HERO Desktop généré (3000×1800, WebP + JPG)
- [ ] Phone isolated généré (PNG transparent)
- [ ] Thumbnail généré (800×800)
- [ ] OG Image générée (1200×630)
- [ ] Version mobile générée (1200×1600)
- [ ] Swatches couleurs générés (36px, PNG)
- [ ] Fichiers placés dans le bon dossier
- [ ] Vérification visuelle du rendu
- [ ] Test sur le site (desktop + mobile)

## 📝 Notes importantes

1. **Priorité**: Les images HERO doivent être **grandes et impactantes** (style Apple)
2. **Performance**: Utiliser WebP pour réduire le poids (fallback JPG)
3. **Accessibilité**: Alt text descriptif pour chaque image
4. **SEO**: Noms de fichiers descriptifs et cohérents
5. **Responsive**: Next.js Image optimisera automatiquement selon l'appareil

## 🔗 Références

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [WebP Format](https://developers.google.com/speed/webp)
- [Apple Design Guidelines](https://developer.apple.com/design/)

---

**Date de création**: 2025-01-20  
**Dernière mise à jour**: 2025-01-20

