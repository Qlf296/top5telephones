# 📸 Guide des Images - Top 5 Téléphones

## 🎯 Images Actuelles

Le site utilise actuellement des **images SVG placeholder** générées automatiquement. Pour un site professionnel, il faut les remplacer par de vraies photos.

## 📱 Images Nécessaires

### Téléphones actuels
1. **Samsung Galaxy A14** - `/images/samsung-galaxy-a14.jpg`
2. **Xiaomi Redmi Note 12** - `/images/xiaomi-redmi-note-12.jpg`
3. **Motorola Moto G84** - `/images/motorola-moto-g84.jpg`
4. **Nokia G60** - `/images/nokia-g60.jpg`
5. **Realme 10** - `/images/realme-10.jpg`

## 🖼️ Sources d'Images

### 1. Photos officielles (Recommandé)
- **Sites officiels** : Samsung, Xiaomi, Motorola, etc.
- **Avantages** : Qualité professionnelle, autorisées
- **Format** : JPG/PNG, 800x600px minimum

### 2. Photos de stock
- **Unsplash** : https://unsplash.com/s/photos/smartphone
- **Pexels** : https://www.pexels.com/search/smartphone/
- **Pixabay** : https://pixabay.com/images/search/smartphone/

### 3. Photos personnelles
- **Avantages** : Uniques, authentiques
- **Équipement** : Smartphone avec bonne caméra
- **Éclairage** : Lumière naturelle ou studio

## 📐 Spécifications Techniques

### Format recommandé
- **Format** : JPG ou WebP
- **Dimensions** : 800x600px minimum
- **Ratio** : 4:3 ou 16:9
- **Taille** : < 200KB par image
- **Qualité** : 80-85%

### Optimisation
```bash
# Avec ImageOptim (Mac)
# Ou TinyPNG en ligne
# Ou squoosh.app de Google
```

## 🔄 Processus de Remplacement

### 1. Préparer les images
```bash
# Créer les images avec les bons noms
samsung-galaxy-a14.jpg
xiaomi-redmi-note-12.jpg
motorola-moto-g84.jpg
nokia-g60.jpg
realme-10.jpg
```

### 2. Optimiser les images
- Redimensionner à 800x600px
- Compresser pour web
- Vérifier la qualité

### 3. Remplacer dans le code
```typescript
// Dans src/data/phones.ts
image: "/images/samsung-galaxy-a14.jpg" // Au lieu de .svg
```

### 4. Tester
```bash
npm run dev
# Vérifier que les images se chargent
```

## 🎨 Style des Images

### Composition recommandée
- **Angle** : 3/4 ou de face
- **Fond** : Blanc ou dégradé subtil
- **Éclairage** : Lumière douce, pas d'ombres dures
- **Style** : Moderne, épuré

### Éléments à éviter
- ❌ Reflets trop marqués
- ❌ Ombres dures
- ❌ Arrière-plans chargés
- ❌ Images floues

## 📱 Images pour Mobile

### Responsive
- **Desktop** : 800x600px
- **Tablet** : 600x450px
- **Mobile** : 400x300px

### Next.js Image
```jsx
<Image
  src={phone.image}
  alt={phone.name}
  width={800}
  height={600}
  className="object-cover"
/>
```

## 🚀 Workflow Automatisé

### Script de remplacement
```bash
# 1. Préparer les images
# 2. Les placer dans public/images/
# 3. Mettre à jour phones.ts
# 4. Tester le site
```

### Vérification
- [ ] Images se chargent correctement
- [ ] Responsive sur mobile
- [ ] Performance OK
- [ ] Alt text approprié

## 💡 Conseils Pro

### 1. Cohérence visuelle
- Même style pour toutes les images
- Même angle de vue
- Même éclairage

### 2. Performance
- Optimiser la taille des fichiers
- Utiliser WebP si possible
- Lazy loading automatique

### 3. SEO
- Noms de fichiers descriptifs
- Alt text pertinent
- Images compressées

## 🎯 Checklist Finale

### Avant le lancement
- [ ] Toutes les images sont optimisées
- [ ] Format cohérent (JPG/WebP)
- [ ] Tailles de fichiers < 200KB
- [ ] Test sur différents appareils
- [ ] Performance vérifiée

### Après le lancement
- [ ] Analytics des images
- [ ] Feedback utilisateurs
- [ ] Optimisations continues

---

**📸 Des images de qualité = Site professionnel = Plus de conversions !** 