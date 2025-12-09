export interface PhoneColor {
  name: string;
  hex: string;
  slug: string;
  image?: string; // Image spécifique à la couleur (optionnel)
}

export interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: PhoneColor[];
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
    name: "Xiaomi Redmi Note 14 5G",
    brand: "Xiaomi",
    price: 260,
    originalPrice: 299,
    image: "/images/top5/xiaomi-redmi-note-14-5g/front.png",
    colors: [
      { name: "Noir", hex: "#1a1a1a", slug: "noir", image: "/images/top5/xiaomi-redmi-note-14-5g/noir/front.png" },
      { name: "Bleu", hex: "#0ea5e9", slug: "bleu", image: "/images/top5/xiaomi-redmi-note-14-5g/bleu/front.png" },
      { name: "Vert", hex: "#10b981", slug: "vert", image: "/images/top5/xiaomi-redmi-note-14-5g/vert/front.png" },
    ],
    specs: {
      screen: "6.67\" FHD+ AMOLED 120Hz",
      processor: "Snapdragon 4 Gen 2",
      ram: "6GB",
      storage: "128GB",
      camera: "50MP + 8MP + 2MP",
      battery: "5000mAh",
      os: "Android 14 (MIUI 15)"
    },
    pros: [
      "5G intégré",
      "Écran AMOLED 120Hz fluide",
      "Charge rapide 33W",
      "Caméra 50MP performante",
      "Excellent rapport qualité-prix"
    ],
    cons: [
      "MIUI peut être intrusif",
      "Pas de protection IP certifiée",
      "Haut-parleur mono"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0D8JQZ6K?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/xiaomi-redmi-note-14-5g-128go/f-1070901-xia1105001.html"
    },
    rating: 4.5,
    slug: "xiaomi-redmi-note-14-5g",
    description: "Le Xiaomi Redmi Note 14 5G allie un écran AMOLED 120Hz, la 5G et des performances solides. Le meilleur choix dans cette gamme de prix en 2025.",
    lastUpdated: "2025-01-20"
  },
  {
    id: "2",
    name: "Samsung Galaxy A35 5G",
    brand: "Samsung",
    price: 290,
    originalPrice: 329,
    image: "/images/top5/samsung-galaxy-a35-5g/front.png",
    colors: [
      { name: "Noir", hex: "#0f172a", slug: "noir", image: "/images/top5/samsung-galaxy-a35-5g/noir/front.png" },
      { name: "Bleu", hex: "#1428A0", slug: "bleu", image: "/images/top5/samsung-galaxy-a35-5g/bleu/front.png" },
      { name: "Violet", hex: "#9333ea", slug: "violet", image: "/images/top5/samsung-galaxy-a35-5g/violet/front.png" },
    ],
    specs: {
      screen: "6.6\" FHD+ Super AMOLED 120Hz",
      processor: "Exynos 1380",
      ram: "6GB",
      storage: "128GB",
      camera: "50MP + 8MP + 5MP",
      battery: "5000mAh",
      os: "Android 14 (One UI 6.1)"
    },
    pros: [
      "5G intégré",
      "Écran Super AMOLED 120Hz premium",
      "Caméra 50MP avec OIS",
      "Garantie Samsung 2 ans",
      "Mises à jour Android longues"
    ],
    cons: [
      "Prix plus élevé",
      "Performance limitée en gaming intensif",
      "Charge rapide 25W seulement"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0D8JQZ6L?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/samsung-galaxy-a35-5g-128go/f-1070901-sam1105002.html"
    },
    rating: 4.4,
    slug: "samsung-galaxy-a35-5g",
    description: "Le Samsung Galaxy A35 5G offre un écran Super AMOLED 120Hz premium, une caméra 50MP avec stabilisation optique et la garantie Samsung. Un excellent choix pour la fiabilité.",
    lastUpdated: "2025-01-20"
  },
  {
    id: "3",
    name: "Poco X7 Pro",
    brand: "Poco",
    price: 280,
    originalPrice: 329,
    image: "/images/top5/poco-x7-pro/front.png",
    colors: [
      { name: "Noir", hex: "#1a1a1a", slug: "noir", image: "/images/top5/poco-x7-pro/noir/front.png" },
      { name: "Bleu", hex: "#3b82f6", slug: "bleu", image: "/images/top5/poco-x7-pro/bleu/front.png" },
      { name: "Jaune", hex: "#fbbf24", slug: "jaune", image: "/images/top5/poco-x7-pro/jaune/front.png" },
    ],
    specs: {
      screen: "6.67\" FHD+ AMOLED 120Hz",
      processor: "MediaTek Dimensity 8300 Ultra",
      ram: "8GB",
      storage: "128GB",
      camera: "64MP + 8MP + 2MP",
      battery: "5000mAh",
      os: "Android 14 (MIUI 15)"
    },
    pros: [
      "5G intégré",
      "Processeur puissant (Dimensity 8300 Ultra)",
      "Caméra 64MP haute résolution",
      "Charge rapide 67W ultra-rapide",
      "Performance gaming excellente"
    ],
    cons: [
      "MIUI peut être lourd",
      "Pas de protection IP",
      "Design moins premium"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0D8JQZ6M?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/poco-x7-pro-128go/f-1070901-poc1105003.html"
    },
    rating: 4.6,
    slug: "poco-x7-pro",
    description: "Le Poco X7 Pro combine un processeur MediaTek Dimensity 8300 Ultra puissant, une caméra 64MP et une charge ultra-rapide 67W. Idéal pour le gaming et les performances.",
    lastUpdated: "2025-01-20"
  },
  {
    id: "4",
    name: "Motorola Edge 50 Fusion",
    brand: "Motorola",
    price: 295,
    originalPrice: 349,
    image: "/images/top5/motorola-edge-50-fusion/front.png",
    colors: [
      { name: "Noir", hex: "#1a1a1a", slug: "noir", image: "/images/top5/motorola-edge-50-fusion/noir/front.png" },
      { name: "Bleu", hex: "#5C88DA", slug: "bleu", image: "/images/top5/motorola-edge-50-fusion/bleu/front.png" },
      { name: "Rose", hex: "#ec4899", slug: "rose", image: "/images/top5/motorola-edge-50-fusion/rose/front.png" },
    ],
    specs: {
      screen: "6.7\" FHD+ pOLED 144Hz",
      processor: "Snapdragon 7s Gen 3",
      ram: "8GB",
      storage: "128GB",
      camera: "50MP + 13MP",
      battery: "5000mAh",
      os: "Android 14"
    },
    pros: [
      "5G intégré",
      "Écran pOLED 144Hz premium",
      "Android pur sans surcouche",
      "Design premium et élégant",
      "Charge rapide 68W"
    ],
    cons: [
      "Prix proche de la limite (295€)",
      "Stockage 128GB seulement",
      "Caméra ultra-wide basique"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0D8JQZ6N?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/motorola-edge-50-fusion-128go/f-1070901-mot1105004.html"
    },
    rating: 4.5,
    slug: "motorola-edge-50-fusion",
    description: "Le Motorola Edge 50 Fusion offre un écran pOLED 144Hz premium, Android pur et un design élégant. Le meilleur choix pour ceux qui privilégient l'expérience utilisateur pure.",
    lastUpdated: "2025-01-20"
  },
  {
    id: "5",
    name: "Samsung Galaxy A26 5G",
    brand: "Samsung",
    price: 270,
    originalPrice: 299,
    image: "/images/top5/samsung-galaxy-a26-5g/front.png",
    colors: [
      { name: "Noir", hex: "#0f172a", slug: "noir", image: "/images/top5/samsung-galaxy-a26-5g/noir/front.png" },
      { name: "Bleu", hex: "#1428A0", slug: "bleu", image: "/images/top5/samsung-galaxy-a26-5g/bleu/front.png" },
      { name: "Vert", hex: "#059669", slug: "vert", image: "/images/top5/samsung-galaxy-a26-5g/vert/front.png" },
    ],
    specs: {
      screen: "6.5\" FHD+ Super AMOLED",
      processor: "Exynos 1280",
      ram: "6GB",
      storage: "128GB",
      camera: "50MP + 8MP + 2MP",
      battery: "5000mAh",
      os: "Android 14 (One UI 6.1)"
    },
    pros: [
      "5G intégré",
      "Écran Super AMOLED de qualité",
      "Garantie Samsung 2 ans",
      "Mises à jour Android longues",
      "Bonne autonomie"
    ],
    cons: [
      "Performance limitée",
      "Charge rapide 25W seulement",
      "Caméra moyenne en faible luminosité"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0D8JQZ6O?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/samsung-galaxy-a26-5g-128go/f-1070901-sam1105005.html"
    },
    rating: 4.3,
    slug: "samsung-galaxy-a26-5g",
    description: "Le Samsung Galaxy A26 5G combine un écran Super AMOLED de qualité, la 5G et la fiabilité Samsung avec garantie 2 ans. Un excellent choix pour la longévité.",
    lastUpdated: "2025-01-20"
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