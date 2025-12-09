# 🎨 Plan d'Action - Ajout des Couleurs Disponibles

## 📋 Fichiers à Modifier

### 1. Données Principales
- ✅ `src/data/phones.ts` - Ajouter champ `colors` dans l'interface Phone et les données

### 2. Composants
- ✅ `src/components/ui/ColorSelector.tsx` - Nouveau composant pour sélectionner/afficher les couleurs
- ✅ `src/app/fiche/[slug]/page.tsx` - Ajouter section couleurs disponibles
- ✅ `src/components/FicheImageSection.tsx` - Adapter pour afficher les images par couleur

### 3. Structured Data
- ✅ `src/components/ProductSchema.tsx` - Ajouter champ `color` dans le schema Product

### 4. Images
- ⚠️ Créer des images par couleur dans `/public/images/top5/[slug]/[couleur]/`

---

## 🎨 Couleurs par Téléphone (Réalistes)

### 1. Xiaomi Redmi Note 14 5G
- Noir
- Bleu
- Vert

### 2. Samsung Galaxy A35 5G
- Noir
- Bleu
- Violet

### 3. Poco X7 Pro
- Noir
- Bleu
- Jaune

### 4. Motorola Edge 50 Fusion
- Noir
- Bleu
- Rose

### 5. Samsung Galaxy A26 5G
- Noir
- Bleu
- Vert

---

## 📝 Structure des Données

```typescript
interface Phone {
  // ... autres champs
  colors: {
    name: string;
    hex: string;
    slug: string;
    image?: string; // Image spécifique à la couleur
  }[];
}
```

---

**Prêt à commencer !**

