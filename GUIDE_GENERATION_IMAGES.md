# 🎨 Guide de Génération d'Images - Top 5 Téléphones

## 📋 Structure des Images Requises

Pour chaque téléphone du Top 5, il faut générer **7 images** :

### 1. Images Multi-Angles (800x800px minimum)
- `front.png` - Vue avant du téléphone
- `back.png` - Vue arrière du téléphone
- `side-left.png` - Vue côté gauche
- `side-right.png` - Vue côté droit
- `angle-3d.png` - Vue perspective 3/4

### 2. Images Spécialisées
- `thumbnail.png` - Miniature pour comparateur (400x400px)
- `og-image.png` - Image Open Graph pour réseaux sociaux (1200x630px)

---

## 📁 Organisation des Fichiers

```
public/images/top5/
├── xiaomi-redmi-note-14-5g/
│   ├── front.png
│   ├── back.png
│   ├── side-left.png
│   ├── side-right.png
│   ├── angle-3d.png
│   ├── thumbnail.png
│   └── og-image.png
├── samsung-galaxy-a35-5g/
│   └── [même structure]
├── poco-x7-pro/
│   └── [même structure]
├── motorola-edge-50-fusion/
│   └── [même structure]
└── samsung-galaxy-a26-5g/
    └── [même structure]
```

---

## 🎨 Style et Caractéristiques

### Design iOS 26.2
- **Fond** : Blanc pur ou dégradé léger (bleu très clair)
- **Rendu** : Premium, épuré, moderne
- **Ombre** : Légère, douce (glassmorphism)
- **Bordure** : Subtile ou absente

### Caractéristiques Techniques
- **Format** : PNG avec transparence (si nécessaire)
- **Résolution** : Haute qualité (minimum 800x800px)
- **Compression** : Optimisée pour le web
- **Cohérence** : Même style pour tous les téléphones

---

## 🛠️ Outils Recommandés

### Option 1 : Mockups 3D
- **Blender** : Rendu 3D professionnel
- **Sketchfab** : Modèles 3D de téléphones
- **Figma** : Mockups vectoriels

### Option 2 : Services en Ligne
- **Smartmockups** : Mockups de téléphones
- **Placeit** : Templates professionnels
- **Mockup World** : Mockups gratuits

### Option 3 : IA Générative
- **Midjourney** : Rendu photoréaliste
- **DALL-E** : Génération d'images
- **Stable Diffusion** : Rendu 3D

### Option 4 : Photos Professionnelles
- Prendre des photos réelles avec fond blanc
- Retoucher avec Photoshop/GIMP
- Uniformiser le style

---

## 📝 Instructions par Type d'Image

### Images Multi-Angles (front, back, side, angle-3d)

**Spécifications :**
- Taille : 800x800px minimum (recommandé : 1200x1200px)
- Fond : Blanc (#FFFFFF) ou dégradé très léger
- Téléphone : Centré, bien éclairé
- Ombre : Légère sous le téléphone
- Qualité : Haute résolution

**Conseils :**
- Utiliser le même angle pour tous les téléphones
- Garder la même distance de prise de vue
- Uniformiser l'éclairage
- Respecter les proportions réelles

### Miniature (thumbnail.png)

**Spécifications :**
- Taille : 400x400px exactement
- Format : PNG ou WebP
- Fond : Blanc ou transparent
- Téléphone : Vue avant, centré
- Optimisation : Compressé pour le web

### Image Open Graph (og-image.png)

**Spécifications :**
- Taille : 1200x630px exactement
- Format : PNG ou JPG
- Contenu : Téléphone + texte (nom du modèle)
- Style : Cohérent avec le design du site
- Texte : Lisible, police moderne

**Exemple de composition :**
```
┌─────────────────────────────────────┐
│  [Image téléphone]  │  Nom modèle  │
│                     │  Prix        │
│                     │  Top 5 2025  │
└─────────────────────────────────────┘
```

---

## 🔄 Intégration dans le Code

Une fois les images générées, elles seront automatiquement utilisées par :

1. **FicheImageSection.tsx** : Affiche les images multi-angles
2. **Page d'accueil** : Utilise `thumbnail.png`
3. **Comparateur** : Utilise `thumbnail.png`
4. **Metadata** : Utilise `og-image.png` pour les réseaux sociaux

---

## ✅ Checklist de Génération

Pour chaque téléphone :

- [ ] `front.png` créé (800x800px+)
- [ ] `back.png` créé (800x800px+)
- [ ] `side-left.png` créé (800x800px+)
- [ ] `side-right.png` créé (800x800px+)
- [ ] `angle-3d.png` créé (800x800px+)
- [ ] `thumbnail.png` créé (400x400px)
- [ ] `og-image.png` créé (1200x630px)
- [ ] Style cohérent avec les autres téléphones
- [ ] Images optimisées pour le web
- [ ] Noms de fichiers corrects

---

## 🚀 Prochaines Étapes

1. **Générer les images** avec l'outil de ton choix
2. **Placer les images** dans les dossiers correspondants
3. **Vérifier** que le code utilise bien les nouveaux chemins
4. **Tester** l'affichage sur le site

---

## 📚 Ressources Utiles

- [Canva - Templates téléphones](https://www.canva.com)
- [Unsplash - Photos de téléphones](https://unsplash.com)
- [Pexels - Images libres](https://www.pexels.com)
- [Remove.bg - Suppression de fond](https://www.remove.bg)

---

**Note** : Les dossiers sont déjà créés dans `/public/images/top5/`. Il suffit d'ajouter les images dans chaque dossier correspondant.

