// scripts/migrate-to-strapi-simple.js
const axios = require('axios');

const STRAPI_URL = 'http://127.0.0.1:1337';

// Données des téléphones (copiées depuis src/data/phones.ts)
const phones = [
  {
    name: "Samsung Galaxy A14",
    brand: "Samsung",
    price: 199,
    slug: "samsung-galaxy-a14",
    description: "Le Samsung Galaxy A14 offre un excellent rapport qualité-prix avec un écran de 6.6 pouces, une batterie de 5000mAh et un design moderne. Parfait pour un usage quotidien.",
    specifications: {
      screen: "6.6\" FHD+ PLS LCD",
      processor: "Exynos 850",
      ram: "4GB",
      storage: "128GB",
      camera: "50MP + 5MP + 2MP",
      battery: "5000mAh",
      os: "Android 13"
    },
    pros: [
      "Excellent rapport qualité-prix",
      "Batterie longue durée",
      "Écran de bonne qualité",
      "Design moderne"
    ],
    cons: [
      "Performance limitée",
      "Pas de charge rapide",
      "Caméra moyenne en faible luminosité"
    ],
    rating: 4.2,
    category: "budget",
    releaseDate: "2023-01-01",
    isActive: true
  },
  {
    name: "Xiaomi Redmi Note 12 (4 Go / 128 Go)",
    brand: "Xiaomi",
    price: 249.90,
    slug: "xiaomi-redmi-note-12",
    description: "Le Xiaomi Redmi Note 12 combine un écran AMOLED lumineux avec des performances fluides et une charge rapide. Un excellent choix dans cette gamme de prix.",
    specifications: {
      screen: "6.67\" FHD+ AMOLED",
      processor: "MediaTek Dimensity 1080",
      ram: "4GB",
      storage: "128GB",
      camera: "50MP + 8MP + 2MP",
      battery: "5000mAh",
      os: "Android 12 (MIUI 13)"
    },
    pros: [
      "Écran AMOLED lumineux",
      "Performances fluides",
      "Charge rapide 33W",
      "Caméra 50MP"
    ],
    cons: [
      "MIUI peut être intrusif",
      "Pas de protection IP",
      "Haut-parleur mono"
    ],
    rating: 4.4,
    category: "mid-range",
    releaseDate: "2022-10-01",
    isActive: true
  },
  {
    name: "Motorola Moto G84 (12 Go / 256 Go)",
    brand: "Motorola",
    price: 299,
    slug: "motorola-moto-g84",
    description: "Le Motorola Moto G84 propose un stockage généreux de 256GB avec Android pur sans surcouche et un design premium. Idéal pour ceux qui veulent de l'espace de stockage.",
    specifications: {
      screen: "6.55\" FHD+ pOLED",
      processor: "Snapdragon 695",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP + 8MP",
      battery: "5000mAh",
      os: "Android 13"
    },
    pros: [
      "Stockage généreux (256GB)",
      "Android pur sans surcouche",
      "Design premium",
      "Bonne autonomie"
    ],
    cons: [
      "Prix plus élevé",
      "Pas de charge sans fil",
      "Caméra ultra-wide limitée"
    ],
    rating: 4.3,
    category: "mid-range",
    releaseDate: "2023-09-01",
    isActive: true
  },
  {
    name: "Nokia G60 5G",
    brand: "Nokia",
    price: 239.99,
    slug: "nokia-g60",
    description: "Le Nokia G60 5G bénéficie du programme Android One pour des mises à jour rapides et une construction solide. Parfait pour ceux qui privilégient la durabilité.",
    specifications: {
      screen: "6.58\" FHD+ LCD",
      processor: "Snapdragon 695",
      ram: "6GB",
      storage: "128GB",
      camera: "50MP + 5MP + 2MP",
      battery: "4500mAh",
      os: "Android 12"
    },
    pros: [
      "Android One (mises à jour rapides)",
      "Construction solide",
      "Bonne autonomie",
      "Design durable"
    ],
    cons: [
      "Écran LCD basique",
      "Batterie plus petite",
      "Performance moyenne"
    ],
    rating: 4.1,
    category: "budget",
    releaseDate: "2022-08-01",
    isActive: true
  },
  {
    name: "Realme 10",
    brand: "Realme",
    price: 259,
    slug: "realme-10",
    description: "Le Realme 10 offre un écran Super AMOLED de qualité avec des performances fluides et un design élégant. Un excellent rapport qualité-prix.",
    specifications: {
      screen: "6.4\" FHD+ Super AMOLED",
      processor: "MediaTek Dimensity 1080",
      ram: "8GB",
      storage: "128GB",
      camera: "50MP + 2MP + 2MP",
      battery: "5000mAh",
      os: "Android 12 (Realme UI 4.0)"
    },
    pros: [
      "Écran Super AMOLED",
      "Performance fluide",
      "Charge rapide 33W",
      "Design élégant"
    ],
    cons: [
      "Realme UI peut être lourd",
      "Caméra ultra-wide basique",
      "Pas de protection IP"
    ],
    rating: 4.2,
    category: "mid-range",
    releaseDate: "2022-11-01",
    isActive: true
  }
];

async function createPhone(phone) {
  try {
    const phoneData = { data: { ...phone, images: undefined } };
    // Utiliser l'endpoint personnalisé qui fonctionne
    const res = await axios.post(`${STRAPI_URL}/api/phones/active`, phoneData);
    console.log(`Téléphone créé : ${res.data.data.attributes.name}`);
  } catch (error) {
    if (error.response) {
      if (error.response.status === 403 || error.response.status === 405) {
        console.error('Erreur de permission : Configurez "create" sur Phone dans Strapi Admin.');
      } else {
        console.error('Erreur API:', error.response.data);
      }
    } else {
      console.error('Erreur:', error.message);
    }
  }
}

(async () => {
  console.log('Migration simplifiée démarrée...');
  for (const phone of phones) {
    await createPhone(phone);
  }
  console.log('Migration terminée.');
})(); 