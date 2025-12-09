# 🤖 Guide : Générer les Images avec l'IA

## 🎯 Méthode Rapide avec IA

### Option 1 : ChatGPT / DALL-E (Recommandé)

Tu peux utiliser ChatGPT avec DALL-E pour générer les images. Voici les prompts à utiliser :

#### Pour chaque téléphone - Vue avant (front.png)
```
Crée une image professionnelle d'un smartphone [NOM DU TÉLÉPHONE] en vue avant, 
sur fond blanc pur, éclairage studio, rendu produit premium, 800x800px, 
style photographie produit Apple, haute qualité, net et détaillé.
```

#### Vue arrière (back.png)
```
Crée une image professionnelle d'un smartphone [NOM DU TÉLÉPHONE] en vue arrière, 
montrant la caméra et le design arrière, sur fond blanc pur, éclairage studio, 
rendu produit premium, 800x800px, style photographie produit Apple.
```

#### Vue côté gauche (side-left.png)
```
Crée une image professionnelle d'un smartphone [NOM DU TÉLÉPHONE] en vue de profil gauche, 
montrant l'épaisseur et les boutons latéraux, sur fond blanc pur, éclairage studio, 
rendu produit premium, 800x800px, style photographie produit Apple.
```

#### Vue côté droit (side-right.png)
```
Crée une image professionnelle d'un smartphone [NOM DU TÉLÉPHONE] en vue de profil droit, 
montrant l'épaisseur et les boutons latéraux, sur fond blanc pur, éclairage studio, 
rendu produit premium, 800x800px, style photographie produit Apple.
```

#### Vue perspective 3D (angle-3d.png)
```
Crée une image professionnelle d'un smartphone [NOM DU TÉLÉPHONE] en vue perspective 3/4, 
montrant à la fois l'avant et le côté, sur fond blanc pur, éclairage studio, 
rendu produit premium, 800x800px, style photographie produit Apple.
```

#### Miniature (thumbnail.png)
```
Crée une image professionnelle d'un smartphone [NOM DU TÉLÉPHONE] en vue avant, 
sur fond blanc pur, éclairage studio, rendu produit premium, 400x400px, 
style photographie produit Apple, format carré.
```

#### Image Open Graph (og-image.png)
```
Crée une image professionnelle pour réseaux sociaux d'un smartphone [NOM DU TÉLÉPHONE], 
avec le téléphone à gauche et le texte "[NOM DU TÉLÉPHONE] - Top 5 Smartphones 2025" à droite, 
sur fond blanc ou dégradé bleu très clair, style moderne iOS, 1200x630px, 
design épuré et professionnel.
```

---

### Option 2 : Midjourney

Si tu as accès à Midjourney, utilise ces prompts :

```
professional smartphone mockup, [NOM DU TÉLÉPHONE], white background, 
studio lighting, product photography, 8k, ultra detailed, 
clean composition, minimalist, --ar 1:1 --v 6
```

Pour OG image :
```
professional smartphone mockup, [NOM DU TÉLÉPHONE], white background, 
studio lighting, product photography, text overlay "[NOM DU TÉLÉPHONE] Top 5 2025", 
modern iOS design, clean typography, --ar 1.91:1 --v 6
```

---

### Option 3 : Stable Diffusion

Si tu utilises Stable Diffusion localement :

**Prompt positif :**
```
professional smartphone product photography, [NOM DU TÉLÉPHONE], 
white background, studio lighting, high quality, 8k, detailed, 
clean composition, minimalist design
```

**Prompt négatif :**
```
blurry, low quality, watermark, text, logo, background objects, 
cluttered, dark background
```

**Paramètres :**
- Steps: 30-50
- CFG Scale: 7-9
- Resolution: 800x800 (ou 1200x630 pour OG)

---

## 📋 Checklist par Téléphone

### Xiaomi Redmi Note 14 5G
- [ ] front.png généré
- [ ] back.png généré
- [ ] side-left.png généré
- [ ] side-right.png généré
- [ ] angle-3d.png généré
- [ ] thumbnail.png généré
- [ ] og-image.png généré

### Samsung Galaxy A35 5G
- [ ] front.png généré
- [ ] back.png généré
- [ ] side-left.png généré
- [ ] side-right.png généré
- [ ] angle-3d.png généré
- [ ] thumbnail.png généré
- [ ] og-image.png généré

### Poco X7 Pro
- [ ] front.png généré
- [ ] back.png généré
- [ ] side-left.png généré
- [ ] side-right.png généré
- [ ] angle-3d.png généré
- [ ] thumbnail.png généré
- [ ] og-image.png généré

### Motorola Edge 50 Fusion
- [ ] front.png généré
- [ ] back.png généré
- [ ] side-left.png généré
- [ ] side-right.png généré
- [ ] angle-3d.png généré
- [ ] thumbnail.png généré
- [ ] og-image.png généré

### Samsung Galaxy A26 5G
- [ ] front.png généré
- [ ] back.png généré
- [ ] side-left.png généré
- [ ] side-right.png généré
- [ ] angle-3d.png généré
- [ ] thumbnail.png généré
- [ ] og-image.png généré

---

## 🔄 Après Génération

1. **Télécharger les images** générées
2. **Renommer** selon la convention (front.png, back.png, etc.)
3. **Placer** dans le bon dossier : `public/images/top5/[slug]/`
4. **Supprimer** les placeholders SVG si tu veux
5. **Tester** l'affichage sur le site

---

## 💡 Astuce

Si tu utilises ChatGPT avec DALL-E :
- Génère une image à la fois
- Demande des variations si nécessaire
- Assure-toi que le fond est bien blanc
- Vérifie la qualité avant de télécharger

---

**🎯 Une fois toutes les images générées, le site les utilisera automatiquement !**

