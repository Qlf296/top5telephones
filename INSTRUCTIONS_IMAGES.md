# 📸 Instructions pour Générer les Images

## ✅ Structure Prête

La structure de dossiers est créée et le code est configuré pour utiliser les nouvelles images.

### Dossiers Créés
```
public/images/top5/
├── xiaomi-redmi-note-14-5g/ ✅
├── samsung-galaxy-a35-5g/ ✅
├── poco-x7-pro/ ✅
├── motorola-edge-50-fusion/ ✅
└── samsung-galaxy-a26-5g/ ✅
```

### Placeholders SVG Générés
35 placeholders SVG ont été créés (7 par téléphone) pour servir de référence.

---

## 🎯 Images à Générer

Pour chaque téléphone, générer **7 images PNG** :

### 1. Images Multi-Angles (800x800px minimum)
- `front.png` - Vue avant
- `back.png` - Vue arrière  
- `side-left.png` - Côté gauche
- `side-right.png` - Côté droit
- `angle-3d.png` - Perspective 3/4

### 2. Images Spécialisées
- `thumbnail.png` - Miniature (400x400px exactement)
- `og-image.png` - Open Graph (1200x630px exactement)

---

## 🛠️ Méthodes de Génération

### Option 1 : Services en Ligne (Recommandé)
1. **Smartmockups** (https://smartmockups.com)
   - Templates de téléphones professionnels
   - Export haute qualité
   - Fond blanc disponible

2. **Placeit** (https://placeit.net)
   - Mockups de smartphones
   - Personnalisation facile
   - Export PNG

3. **Mockup World** (https://www.mockupworld.co)
   - Mockups gratuits
   - Templates PSD
   - Export personnalisable

### Option 2 : IA Générative
1. **Midjourney**
   - Prompt : "Professional smartphone mockup, [nom téléphone], white background, studio lighting, 8k, product photography"
   - Générer 5 angles différents

2. **DALL-E / ChatGPT**
   - Demander des rendus 3D professionnels
   - Spécifier fond blanc et angles

3. **Stable Diffusion**
   - Modèles spécialisés produits
   - Rendu photoréaliste

### Option 3 : Logiciels 3D
1. **Blender**
   - Modèles 3D de téléphones
   - Rendu Cycles ou Eevee
   - Export PNG haute qualité

2. **Sketchfab**
   - Modèles 3D téléchargables
   - Rendu en ligne
   - Export images

### Option 4 : Photos Professionnelles
1. Prendre des photos réelles
2. Retirer le fond (Remove.bg)
3. Uniformiser le style (Photoshop/GIMP)
4. Redimensionner aux bonnes tailles

---

## 📐 Spécifications Techniques

### Images Multi-Angles
- **Taille** : 800x800px minimum (recommandé : 1200x1200px)
- **Format** : PNG avec transparence (si nécessaire)
- **Fond** : Blanc (#FFFFFF) ou dégradé très léger
- **Qualité** : Haute résolution, nette
- **Compression** : Optimisée pour le web

### Thumbnail
- **Taille** : 400x400px exactement
- **Format** : PNG ou WebP
- **Contenu** : Vue avant du téléphone, centré
- **Optimisation** : Compressé (max 100KB)

### OG Image
- **Taille** : 1200x630px exactement
- **Format** : PNG ou JPG
- **Contenu** : Téléphone + texte (nom, prix)
- **Style** : Cohérent avec le design du site
- **Optimisation** : Compressé (max 300KB)

---

## 🎨 Style et Cohérence

### Design iOS 26.2
- **Fond** : Blanc pur ou dégradé bleu très clair (#f0f9ff)
- **Ombre** : Légère, douce (glassmorphism)
- **Éclairage** : Studio, uniforme
- **Perspective** : Même angle pour tous les téléphones
- **Distance** : Même distance de prise de vue

### Caractéristiques
- Rendu premium et épuré
- Pas de texte sur les images (sauf og-image)
- Pas de logo de marque visible
- Focus sur le design du téléphone

---

## 📝 Checklist par Téléphone

### Xiaomi Redmi Note 14 5G
- [ ] front.png (800x800px+)
- [ ] back.png (800x800px+)
- [ ] side-left.png (800x800px+)
- [ ] side-right.png (800x800px+)
- [ ] angle-3d.png (800x800px+)
- [ ] thumbnail.png (400x400px)
- [ ] og-image.png (1200x630px)

### Samsung Galaxy A35 5G
- [ ] front.png (800x800px+)
- [ ] back.png (800x800px+)
- [ ] side-left.png (800x800px+)
- [ ] side-right.png (800x800px+)
- [ ] angle-3d.png (800x800px+)
- [ ] thumbnail.png (400x400px)
- [ ] og-image.png (1200x630px)

### Poco X7 Pro
- [ ] front.png (800x800px+)
- [ ] back.png (800x800px+)
- [ ] side-left.png (800x800px+)
- [ ] side-right.png (800x800px+)
- [ ] angle-3d.png (800x800px+)
- [ ] thumbnail.png (400x400px)
- [ ] og-image.png (1200x630px)

### Motorola Edge 50 Fusion
- [ ] front.png (800x800px+)
- [ ] back.png (800x800px+)
- [ ] side-left.png (800x800px+)
- [ ] side-right.png (800x800px+)
- [ ] angle-3d.png (800x800px+)
- [ ] thumbnail.png (400x400px)
- [ ] og-image.png (1200x630px)

### Samsung Galaxy A26 5G
- [ ] front.png (800x800px+)
- [ ] back.png (800x800px+)
- [ ] side-left.png (800x800px+)
- [ ] side-right.png (800x800px+)
- [ ] angle-3d.png (800x800px+)
- [ ] thumbnail.png (400x400px)
- [ ] og-image.png (1200x630px)

---

## 🔄 Remplacement des Placeholders

Une fois les images générées :

1. **Supprimer les fichiers SVG** :
   ```bash
   rm public/images/top5/*/*.svg
   ```

2. **Ajouter les fichiers PNG** dans chaque dossier correspondant

3. **Vérifier les noms** : exactement comme indiqué (front.png, back.png, etc.)

4. **Tester** : Vérifier l'affichage sur le site

---

## ✅ Code Déjà Configuré

Le code est déjà mis à jour pour utiliser les nouvelles images :
- ✅ `src/data/phones.ts` : Chemins vers `/images/top5/[slug]/front.png`
- ✅ `src/components/FicheImageSection.tsx` : Support des 5 angles
- ✅ Fonctions utilitaires : `getThumbnailImage()` et `getOGImage()`

---

## 🚀 Prochaines Étapes

1. **Générer les images** avec l'outil de ton choix
2. **Placer les images** dans les dossiers correspondants
3. **Supprimer les placeholders SVG**
4. **Tester** l'affichage sur le site
5. **Optimiser** les images si nécessaire

---

**📚 Voir aussi** : `GUIDE_GENERATION_IMAGES.md` pour plus de détails

