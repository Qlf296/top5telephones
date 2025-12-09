# 🔄 Guide de Mise à Jour des Données - Top 5 Téléphones

## ⚠️ État Actuel

**Actuellement, les données sont STATIQUES** :
- ✅ Le Top 5 est **fixe** : toujours les 5 premiers téléphones du tableau
- ✅ Les prix sont **codés en dur** dans `src/data/phones.ts`
- ✅ Les promos sont **codées en dur** (originalPrice)
- ✅ Les données ne se mettent **pas à jour automatiquement**

## 📋 Comment Mettre à Jour

### 1. Mettre à Jour les Prix

**Fichier** : `src/data/phones.ts`

**Étapes** :
1. Ouvrir `src/data/phones.ts`
2. Trouver le téléphone à mettre à jour
3. Modifier `price` et `originalPrice` si nécessaire
4. Mettre à jour `lastUpdated` avec la date actuelle (format : `"YYYY-MM-DD"`)

**Exemple** :
```typescript
{
  id: "1",
  name: "Samsung Galaxy A14",
  brand: "Samsung",
  price: 189,              // ← Nouveau prix
  originalPrice: 229,      // ← Prix original (si promo)
  // ... autres propriétés
  lastUpdated: "2024-01-20" // ← Date de mise à jour
}
```

### 2. Mettre à Jour le Top 5

**Actuellement** : Le Top 5 est les 5 premiers téléphones du tableau dans l'ordre.

**Pour changer le Top 5** :
1. Réorganiser l'ordre des téléphones dans le tableau `phones`
2. Les 5 premiers deviendront automatiquement le Top 5

**Exemple** :
```typescript
export const phones: Phone[] = [
  // Téléphone #1 → Top 5 position 1
  { id: "1", name: "Samsung Galaxy A14", ... },
  // Téléphone #2 → Top 5 position 2
  { id: "2", name: "Xiaomi Redmi Note 12", ... },
  // Téléphone #3 → Top 5 position 3
  { id: "3", name: "Motorola Moto G84", ... },
  // Téléphone #4 → Top 5 position 4
  { id: "4", name: "Nokia G60", ... },
  // Téléphone #5 → Top 5 position 5
  { id: "5", name: "Realme 10", ... },
  // Téléphone #6 → Pas dans le Top 5
  { id: "6", name: "Autre téléphone", ... },
];
```

### 3. Ajouter un Nouveau Téléphone

**Étapes** :
1. Ajouter un nouvel objet dans le tableau `phones` dans `src/data/phones.ts`
2. Ajouter les images dans `/public/images/real/[nom-du-telephone]/`
3. Le sitemap sera mis à jour automatiquement au prochain build
4. Tester la fiche : `/fiche/[slug]`

**Exemple** :
```typescript
{
  id: "6", // Nouvel ID
  name: "Samsung Galaxy A25",
  brand: "Samsung",
  price: 269,
  originalPrice: 299,
  image: "/images/real/samsung-galaxy-a25/front.jpg",
  specs: {
    screen: "6.5\" FHD+ Super AMOLED",
    processor: "Exynos 1280",
    ram: "6GB",
    storage: "128GB",
    camera: "50MP + 8MP + 2MP",
    battery: "5000mAh",
    os: "Android 14"
  },
  pros: ["Point fort 1", "Point fort 2", ...],
  cons: ["Point faible 1", "Point faible 2", ...],
  affiliateLinks: {
    amazon: "https://www.amazon.fr/dp/CODE?tag=top5telephones-21",
    cdiscount: "https://www.cdiscount.com/..."
  },
  rating: 4.1,
  slug: "samsung-galaxy-a25",
  description: "Description du téléphone",
  lastUpdated: "2024-01-20"
}
```

### 4. Retirer un Téléphone du Top 5

**Option 1** : Le déplacer après la 5ème position dans le tableau

**Option 2** : Modifier la fonction `getTop5Phones()` pour sélectionner manuellement :

```typescript
export const getTop5Phones = (): Phone[] => {
  // Sélectionner manuellement les IDs du Top 5
  const top5Ids = ["2", "3", "1", "5", "4"]; // Exemple
  return phones.filter(phone => top5Ids.includes(phone.id));
};
```

---

## 🔄 Fréquence de Mise à Jour Recommandée

### Hebdomadaire
- [ ] Vérifier les prix sur Amazon et CDiscount
- [ ] Mettre à jour les prix qui ont changé
- [ ] Vérifier les liens d'affiliation

### Mensuelle
- [ ] Réévaluer le Top 5
- [ ] Vérifier les nouvelles sorties
- [ ] Mettre à jour les descriptions si nécessaire
- [ ] Vérifier les ratings

### Trimestrielle
- [ ] Audit complet des téléphones
- [ ] Ajouter de nouveaux modèles si pertinents
- [ ] Retirer les modèles obsolètes
- [ ] Mettre à jour les spécifications

---

## 🛠️ Script de Mise à Jour Automatique (Futur)

**Option future** : Créer un script pour automatiser les mises à jour

### Idée de Script

```javascript
// scripts/update-prices.js
// Script pour mettre à jour les prix depuis les APIs Amazon/CDiscount
// (À implémenter si nécessaire)
```

**Pour l'instant** : Les mises à jour sont **manuelles** dans `src/data/phones.ts`

---

## 📊 Exemple de Mise à Jour Complète

### Scénario : Mise à jour des prix et du Top 5

1. **Vérifier les prix actuels** sur Amazon.fr et CDiscount.fr
2. **Mettre à jour** `src/data/phones.ts` :

```typescript
export const phones: Phone[] = [
  {
    id: "1",
    name: "Samsung Galaxy A14",
    price: 189,              // ← Prix mis à jour (était 199)
    originalPrice: 229,
    lastUpdated: "2024-01-20" // ← Date mise à jour
  },
  {
    id: "2",
    name: "Xiaomi Redmi Note 12",
    price: 239.90,           // ← Prix mis à jour (était 249.90)
    originalPrice: 299,
    lastUpdated: "2024-01-20"
  },
  // ... autres téléphones
];
```

3. **Réorganiser le Top 5** si nécessaire (changer l'ordre du tableau)
4. **Commit et push** :
   ```bash
   git add src/data/phones.ts
   git commit -m "Mise à jour des prix - 2024-01-20"
   git push
   ```
5. **Vercel déploie automatiquement**

---

## ✅ Checklist de Mise à Jour

### Avant de mettre à jour
- [ ] Vérifier les prix sur Amazon.fr
- [ ] Vérifier les prix sur CDiscount.fr
- [ ] Vérifier les liens d'affiliation
- [ ] Vérifier les nouvelles sorties

### Pendant la mise à jour
- [ ] Modifier les prix dans `src/data/phones.ts`
- [ ] Mettre à jour `lastUpdated`
- [ ] Réorganiser le Top 5 si nécessaire
- [ ] Vérifier les slugs (URLs)

### Après la mise à jour
- [ ] Tester le build : `npm run build`
- [ ] Vérifier les pages : `/fiche/[slug]`
- [ ] Vérifier le Top 5 : Page d'accueil
- [ ] Commit et push
- [ ] Vérifier le déploiement

---

## 🎯 Recommandations

### Pour un Site Professionnel

**Option 1 : Mise à jour manuelle régulière**
- ✅ Simple et fiable
- ✅ Contrôle total
- ⚠️ Nécessite une maintenance régulière

**Option 2 : Système de CMS (Strapi)**
- ✅ Interface d'administration
- ✅ Mise à jour facile
- ⚠️ Nécessite un backend

**Option 3 : API externe (futur)**
- ✅ Mise à jour automatique
- ✅ Prix en temps réel
- ⚠️ Plus complexe à implémenter

**Pour l'instant** : Le système est **manuel** et nécessite des mises à jour régulières dans `src/data/phones.ts`

---

## 📝 Notes Importantes

1. **Les prix ne se mettent PAS à jour automatiquement**
2. **Le Top 5 est fixe** (les 5 premiers du tableau)
3. **Les promos sont codées en dur** (originalPrice)
4. **Il faut mettre à jour manuellement** dans `src/data/phones.ts`
5. **Le champ `lastUpdated`** permet de tracker la dernière mise à jour

---

## 🔗 Ressources

- [Guide de Maintenance](./GUIDE_MAINTENANCE.md) : Maintenance générale
- [CHATGPT_PROMPT.md](./CHATGPT_PROMPT.md) : Prompts pour générer des données

---

**💡 Astuce** : Mettre un rappel mensuel pour vérifier et mettre à jour les prix !

