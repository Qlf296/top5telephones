# Prompt ChatGPT pour mise à jour des données téléphones

## Prompt principal

```
Tu es un expert en smartphones. Génère un objet Phone pour le fichier src/data/phones.ts avec ces critères :

CRITÈRES OBLIGATOIRES :
- Téléphone à moins de 300€ (prix actuel)
- Marque connue (Samsung, Xiaomi, Motorola, Nokia, Realme, etc.)
- Modèle sorti en 2023-2024
- Spécifications réalistes et actuelles

FORMAT REQUIS :
```typescript
{
  id: "6", // Incrémenter l'ID
  name: "Nom du modèle",
  brand: "Marque",
  price: 250, // Prix actuel en euros
  originalPrice: 299, // Prix original (optionnel)
  image: "/images/nom-du-modele.jpg",
  specs: {
    screen: "6.6\" FHD+ LCD/AMOLED",
    processor: "Nom du processeur",
    ram: "4GB/6GB/8GB",
    storage: "128GB/256GB",
    camera: "50MP + 8MP + 2MP",
    battery: "5000mAh",
    os: "Android 13/14"
  },
  pros: [
    "Point fort 1",
    "Point fort 2", 
    "Point fort 3",
    "Point fort 4"
  ],
  cons: [
    "Point faible 1",
    "Point faible 2",
    "Point faible 3"
  ],
  affiliateLinks: {
    amazon: "https://www.amazon.fr/dp/CODE?tag=top5telephones-21",
    cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/..."
  },
  rating: 4.2, // Entre 3.5 et 4.5
  slug: "marque-modele",
  description: "Description courte et accrocheuse (1-2 phrases)",
  lastUpdated: "2024-01-15" // Date actuelle
}
```

RÈGLES IMPORTANTES :
1. Prix : Toujours moins de 300€
2. Spécifications : Réalistes et actuelles
3. Pros/Cons : 3-4 points chacun, factuels
4. Rating : Entre 3.5 et 4.5
5. Slug : URL-friendly, sans accents
6. Liens affiliés : Utiliser des codes d'affiliation valides
7. Image : Chemin cohérent avec les autres

EXEMPLE DE RÉPONSE :
```typescript
{
  id: "6",
  name: "Samsung Galaxy A25",
  brand: "Samsung",
  price: 269,
  originalPrice: 299,
  image: "/images/samsung-galaxy-a25.jpg",
  specs: {
    screen: "6.5\" FHD+ Super AMOLED",
    processor: "Exynos 1280",
    ram: "6GB",
    storage: "128GB",
    camera: "50MP + 8MP + 2MP + 2MP",
    battery: "5000mAh",
    os: "Android 14 (One UI 6.0)"
  },
  pros: [
    "Écran Super AMOLED de qualité",
    "Batterie longue durée",
    "Design moderne",
    "Caméra polyvalente"
  ],
  cons: [
    "Performance limitée",
    "Pas de charge sans fil",
    "Haut-parleur mono"
  ],
  affiliateLinks: {
    amazon: "https://www.amazon.fr/dp/B0C8JQZ6L?tag=top5telephones-21",
    cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/samsung-galaxy-a25-128go/f-1070901-sam1103865.html"
  },
  rating: 4.1,
  slug: "samsung-galaxy-a25",
  description: "Le Samsung Galaxy A25 combine un écran Super AMOLED de qualité avec une batterie longue durée et un design moderne.",
  lastUpdated: "2024-01-15"
}
```

Génère maintenant un nouvel objet Phone selon ces critères.
```

## Prompt pour mise à jour des prix

```
Mets à jour les prix des téléphones suivants dans le fichier src/data/phones.ts :

[LISTE DES TÉLÉPHONES]

Règles :
- Vérifier les prix actuels sur Amazon.fr et CDiscount.fr
- Mettre à jour seulement si le prix a changé
- Garder originalPrice si le prix a baissé
- Mettre à jour lastUpdated à la date d'aujourd'hui
- Formater les prix en euros (nombre entier)

Exemple de mise à jour :
```typescript
{
  // ... autres propriétés
  price: 189, // Nouveau prix
  originalPrice: 229, // Ancien prix si baisse
  lastUpdated: "2024-01-15" // Date de mise à jour
}
```
```

## Prompt pour vérification des liens

```
Vérifie et corrige les liens affiliés dans le fichier src/data/phones.ts :

1. Tester chaque lien Amazon et CDiscount
2. S'assurer que les liens pointent vers les bons produits
3. Vérifier que les codes d'affiliation sont valides
4. Mettre à jour les liens cassés

Format des liens :
- Amazon : https://www.amazon.fr/dp/CODE?tag=top5telephones-21
- CDiscount : https://www.cdiscount.com/telephonie/telephone-portable/...

Signaler les problèmes trouvés et proposer les corrections.
```

## Utilisation

1. **Copier le prompt principal** dans ChatGPT
2. **Demander un nouveau téléphone** selon les critères
3. **Vérifier la cohérence** avec les données existantes
4. **Ajouter dans phones.ts** en incrémentant l'ID
5. **Tester le site** pour s'assurer que tout fonctionne

## Conseils

- Demander plusieurs options si le premier résultat ne convient pas
- Vérifier les spécifications sur les sites officiels
- Tester les liens affiliés avant de les utiliser
- Maintenir la cohérence des prix et des évaluations 