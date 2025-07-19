export interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  specs: {
    screen: string;
    processor: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    os: string;
  };
  pros: string[];
  cons: string[];
  affiliateLinks: {
    amazon: string;
    cdiscount?: string;
    rakuten?: string;
  };
  rating: number;
  slug: string;
  description: string;
  lastUpdated: string;
}

export const phones: Phone[] = [
  {
    id: "1",
    name: "Samsung Galaxy A14",
    brand: "Samsung",
    price: 189,
    originalPrice: 229,
    image: "/images/real/samsung-galaxy-a14/front.jpg",
    specs: {
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
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0BSGQ1Y1Q?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/samsung-galaxy-a14-128go-noir/f-1070901-sam1103860.html"
    },
    rating: 4.2,
    slug: "samsung-galaxy-a14",
    description: "Le Samsung Galaxy A14 offre un excellent rapport qualité-prix avec un écran de 6.6 pouces, une batterie de 5000mAh et un design moderne. Parfait pour un usage quotidien.",
    lastUpdated: "2024-01-15"
  },
  {
    id: "2",
    name: "Xiaomi Redmi Note 12",
    brand: "Xiaomi",
    price: 249,
    originalPrice: 299,
    image: "/images/real/Xiaomi Redmi Note 12/front.jpg",
    specs: {
      screen: "6.67\" FHD+ AMOLED",
      processor: "MediaTek Dimensity 1080",
      ram: "6GB",
      storage: "128GB",
      camera: "50MP + 8MP + 2MP",
      battery: "5000mAh",
      os: "Android 12 (MIUI 13)"
    },
    pros: [
      "Écran AMOLED de qualité",
      "Performance fluide",
      "Charge rapide 33W",
      "Caméra 50MP"
    ],
    cons: [
      "MIUI peut être intrusif",
      "Pas de protection IP",
      "Haut-parleur mono"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0BQJ8XZ6K?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/xiaomi-redmi-note-12-128go-6gb-ram/f-1070901-xia1103861.html"
    },
    rating: 4.4,
    slug: "xiaomi-redmi-note-12",
    description: "Le Xiaomi Redmi Note 12 combine un écran AMOLED de qualité avec des performances solides et une charge rapide. Un excellent choix dans cette gamme de prix.",
    lastUpdated: "2024-01-15"
  },
  {
    id: "3",
    name: "Motorola Moto G84",
    brand: "Motorola",
    price: 279,
    originalPrice: 329,
    image: "/images/real/Motorola Moto G84/front.jpg",
    specs: {
      screen: "6.55\" FHD+ pOLED",
      processor: "Snapdragon 695",
      ram: "8GB",
      storage: "256GB",
      camera: "50MP + 8MP",
      battery: "5000mAh",
      os: "Android 13"
    },
    pros: [
      "Stockage généreux (256GB)",
      "Android pur",
      "Design premium",
      "Bonne autonomie"
    ],
    cons: [
      "Prix plus élevé",
      "Pas de charge sans fil",
      "Caméra ultra-wide limitée"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0C8JQZ6K?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/motorola-moto-g84-256go-8gb-ram/f-1070901-mot1103862.html"
    },
    rating: 4.3,
    slug: "motorola-moto-g84",
    description: "Le Motorola Moto G84 propose un stockage généreux de 256GB avec Android pur et un design premium. Idéal pour ceux qui veulent de l'espace de stockage.",
    lastUpdated: "2024-01-15"
  },
  {
    id: "4",
    name: "Nokia G60",
    brand: "Nokia",
    price: 229,
    originalPrice: 269,
    image: "/images/real/Nokia G60/front-back-one.jpg",
    specs: {
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
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0BQJ8XZ6L?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/nokia-g60-128go-6gb-ram/f-1070901-nok1103863.html"
    },
    rating: 4.1,
    slug: "nokia-g60",
    description: "Le Nokia G60 bénéficie du programme Android One pour des mises à jour rapides et une construction solide. Parfait pour ceux qui privilégient la durabilité.",
    lastUpdated: "2024-01-15"
  },
  {
    id: "5",
    name: "Realme 10",
    brand: "Realme",
    price: 259,
    originalPrice: 299,
    image: "/images/real/Realme 10/front.jpg",
    specs: {
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
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0BQJ8XZ6M?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/realme-10-128go-8gb-ram/f-1070901-rea1103864.html"
    },
    rating: 4.2,
    slug: "realme-10",
    description: "Le Realme 10 offre un écran Super AMOLED de qualité avec des performances solides et un design élégant. Un excellent rapport qualité-prix.",
    lastUpdated: "2024-01-15"
  }
];

export const getTop5Phones = (): Phone[] => {
  return phones.slice(0, 5);
};

export const getPhoneBySlug = (slug: string): Phone | undefined => {
  return phones.find(phone => phone.slug === slug);
};

export const getAllPhones = (): Phone[] => {
  return phones;
}; 