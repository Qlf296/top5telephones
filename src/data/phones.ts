export interface PhoneColor {
  name: string;
  hex: string;
  slug: string;
  image?: string; // Image spécifique à la couleur (optionnel)
}

export type PhoneUsage = 'photo' | 'autonomie' | 'gaming léger' | 'polyvalent' | 'débutant';

export interface Phone {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  priceLabel: string;
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
    mainCameraMp: string;
    batteryMah: number;
    chargeW?: number;
  };
  is5g: boolean;
  pros: string[];
  cons: string[];
  affiliateLinks: {
    amazon: string;
    cdiscount?: string;
    rakuten?: string;
  };
  usageRecommended: PhoneUsage;
  usageTags?: PhoneUsage[];
  rating: number;
  badge?: string;
  slug: string;
  seoSlug: string;
  description: string;
  summary: string;
  whyGoodChoice: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  isTop5?: boolean;
}

export const phones: Phone[] = [
  {
    id: "1",
    name: "Xiaomi Redmi Note 14 5G",
    brand: "Xiaomi",
    year: 2024,
    price: 260,
    priceLabel: "Moins de 300 €",
    originalPrice: 299,
    image: "/images/top2/Xiaomi Redmi Note 14 5G.png",
    colors: [
      { 
        name: "Midnight Black", 
        hex: "#0D0D0D", 
        slug: "midnight-black", 
        image: "/images/top5/xiaomi-redmi-note-14-5g/noir/front.png" 
      },
      { 
        name: "Ocean Blue", 
        hex: "#1E88E5", 
        slug: "ocean-blue", 
        image: "/images/top5/xiaomi-redmi-note-14-5g/bleu/front.png" 
      },
      { 
        name: "Forest Green", 
        hex: "#2E7D32", 
        slug: "forest-green", 
        image: "/images/top5/xiaomi-redmi-note-14-5g/vert/front.png" 
      },
    ],
    specs: {
      screen: "6.67\" FHD+ AMOLED 120Hz",
      processor: "MediaTek Dimensity 7025 Ultra",
      ram: "6GB",
      storage: "128GB",
      camera: "50MP + 8MP + 2MP",
      battery: "5110mAh",
      os: "Android 14 (MIUI 15)",
      mainCameraMp: "50 MP",
      batteryMah: 5110,
      chargeW: 45
    },
    is5g: true,
    pros: [
      "Écran AMOLED 120Hz fluide",
      "Autonomie solide au quotidien",
      "5G rapide et stable",
      "Bon équilibre prix/prestations"
    ],
    cons: [
      "Surcouche MIUI parfois chargée",
      "Haut-parleur mono"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0D8JQZ6K?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/xiaomi-redmi-note-14-5g-128go/f-1070901-xia1105001.html"
    },
    usageRecommended: "polyvalent",
    usageTags: ["polyvalent", "photo"],
    rating: 4.5,
    badge: "Meilleur rapport qualité/prix",
    slug: "xiaomi-redmi-note-14-5g",
    seoSlug: "redmi-note-14-5g",
    description: "Un modèle équilibré pour un usage quotidien fluide, avec un bel écran et une bonne autonomie.",
    summary: "Idéal si vous voulez un smartphone fluide, endurant et polyvalent sans dépasser 300 €.",
    whyGoodChoice: "Écran AMOLED 120Hz, 5G et batterie 5110mAh : un trio très solide sous 300 €.",
    metaTitle: "Xiaomi Redmi Note 14 5G a moins de 300 € | Fiche utile",
    metaDescription: "Redmi Note 14 5G : AMOLED 120Hz, 5G, batterie 5110mAh et bon rapport qualité/prix.",
    lastUpdated: "2026-01-17",
    isTop5: true
  },
  {
    id: "2",
    name: "Samsung Galaxy A26 5G",
    brand: "Samsung",
    year: 2024,
    price: 270,
    priceLabel: "Moins de 300 €",
    originalPrice: 299,
    image: "/images/top2/Samsung A26.png",
    colors: [
      { 
        name: "Awesome Black", 
        hex: "#0A0A0A", 
        slug: "awesome-black", 
        image: "/images/top5/samsung-galaxy-a26-5g/noir/front.png" 
      },
      { 
        name: "Awesome Blue", 
        hex: "#1565C0", 
        slug: "awesome-blue", 
        image: "/images/top5/samsung-galaxy-a26-5g/bleu/front.png" 
      },
      { 
        name: "Awesome Mint", 
        hex: "#4CAF50", 
        slug: "awesome-mint", 
        image: "/images/top5/samsung-galaxy-a26-5g/vert/front.png" 
      },
    ],
    specs: {
      screen: "6.5\" FHD+ Super AMOLED",
      processor: "Exynos 1280",
      ram: "6GB",
      storage: "128GB",
      camera: "50MP + 8MP + 2MP",
      battery: "5000mAh",
      os: "Android 14 (One UI 6.1)",
      mainCameraMp: "50 MP",
      batteryMah: 5000,
      chargeW: 25
    },
    is5g: true,
    pros: [
      "Ecran Super AMOLED de qualite",
      "Mises a jour Samsung longues",
      "5G stable au quotidien",
      "Autonomie fiable sur une journee"
    ],
    cons: [
      "Charge 25W seulement",
      "Photo de nuit moyenne"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0D8JQZ6O?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/samsung-galaxy-a26-5g-128go/f-1070901-sam1105005.html"
    },
    usageRecommended: "polyvalent",
    usageTags: ["polyvalent"],
    rating: 4.3,
    badge: "Fiabilite Samsung",
    slug: "samsung-galaxy-a26-5g",
    seoSlug: "samsung-galaxy-a26-5g",
    description: "Un smartphone fiable, simple a vivre, avec un ecran AMOLED et un suivi logiciel rassurant.",
    summary: "Pour ceux qui veulent un Samsung fiable, bien suivi et simple pour tous les jours.",
    whyGoodChoice: "Entre l'ecran AMOLED, One UI et le suivi logiciel, c'est un choix rassurant et durable.",
    metaTitle: "Samsung Galaxy A26 5G a moins de 300 € | Avis et fiche",
    metaDescription: "Galaxy A26 5G : ecran AMOLED, Android 14, autonomie fiable et suivi logiciel Samsung.",
    lastUpdated: "2026-01-17",
    isTop5: true
  },
  {
    id: "3",
    name: "Samsung Galaxy A17 5G",
    brand: "Samsung",
    year: 2024,
    price: 210,
    priceLabel: "Moins de 300 €",
    image: "/images/placeholder.svg",
    colors: [],
    specs: {
      screen: "6.6\" FHD+ PLS LCD 90Hz",
      processor: "Exynos 1330",
      ram: "4GB",
      storage: "128GB",
      camera: "50MP + 2MP",
      battery: "5000mAh",
      os: "Android 14 (One UI 6)",
      mainCameraMp: "50 MP",
      batteryMah: 5000,
      chargeW: 25
    },
    is5g: true,
    pros: [
      "5G accessible chez Samsung",
      "Autonomie correcte",
      "Interface simple a prendre en main",
      "Prix accessible pour un modele 5G"
    ],
    cons: [
      "Ecran LCD moins contrasté",
      "Performances modestes"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/s?k=Samsung+Galaxy+A17+5G&tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/search/10/samsung+galaxy+a17+5g.html"
    },
    usageRecommended: "polyvalent",
    usageTags: ["polyvalent"],
    rating: 4.0,
    badge: "Budget Samsung",
    slug: "samsung-galaxy-a17-5g",
    seoSlug: "samsung-galaxy-a17-5g",
    description: "Un Samsung simple, 5G, suffisant pour les usages du quotidien sans prise de tete.",
    summary: "Ideal si vous voulez un Samsung 5G simple pour appels, messages et apps courantes.",
    whyGoodChoice: "Il offre l'essentiel (5G, autonomie, interface Samsung) a un prix accessible.",
    metaTitle: "Samsung Galaxy A17 5G a moins de 300 € | Fiche simple",
    metaDescription: "Galaxy A17 5G : 5G accessible, ecran 90Hz LCD, autonomie et points a connaitre.",
    lastUpdated: "2026-01-17",
    isTop5: true
  },
  {
    id: "4",
    name: "Poco X7",
    brand: "Poco",
    year: 2024,
    price: 265,
    priceLabel: "Moins de 300 €",
    image: "/images/placeholder.svg",
    colors: [],
    specs: {
      screen: "6.67\" FHD+ AMOLED 120Hz",
      processor: "Snapdragon 7s Gen 2",
      ram: "8GB",
      storage: "256GB",
      camera: "64MP + 8MP",
      battery: "5100mAh",
      os: "Android 14 (HyperOS)",
      mainCameraMp: "64 MP",
      batteryMah: 5100,
      chargeW: 67
    },
    is5g: true,
    pros: [
      "Ecran AMOLED 120Hz confortable",
      "Charge rapide 67W",
      "Bonnes performances en jeu leger",
      "Stockage 256GB pratique"
    ],
    cons: [
      "Photo secondaire moyenne",
      "Surcouche chargee"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/s?k=Poco+X7&tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/search/10/poco+x7.html"
    },
    usageRecommended: "gaming léger",
    usageTags: ["gaming léger", "autonomie"],
    rating: 4.4,
    badge: "Gaming leger",
    slug: "poco-x7",
    seoSlug: "poco-x7",
    description: "Un smartphone dynamique et fluide, adapte aux jeux legers et a un usage multimedia.",
    summary: "Pour ceux qui veulent un telephone rapide et fluide, sans depasser 300 €.",
    whyGoodChoice: "Ecran 120Hz, charge 67W et Snapdragon 7s Gen 2 : un bon mix pour le quotidien.",
    metaTitle: "Poco X7 a moins de 300 € | Performances et autonomie",
    metaDescription: "Poco X7 : ecran 120Hz, Snapdragon 7s Gen 2, charge 67W et autonomie solide.",
    lastUpdated: "2026-01-17",
    isTop5: true
  },
  {
    id: "5",
    name: "Poco X7 Pro",
    brand: "Poco",
    year: 2024,
    price: 280,
    priceLabel: "Moins de 300 €",
    originalPrice: 329,
    image: "/images/top2/Poco X7 Pro.png",
    colors: [
      { 
        name: "Graphite Black", 
        hex: "#212121", 
        slug: "graphite-black", 
        image: "/images/top5/poco-x7-pro/noir/front.png" 
      },
      { 
        name: "Ocean Blue", 
        hex: "#1976D2", 
        slug: "ocean-blue", 
        image: "/images/top5/poco-x7-pro/bleu/front.png" 
      },
      { 
        name: "Sunset Orange", 
        hex: "#FF6F00", 
        slug: "sunset-orange", 
        image: "/images/top5/poco-x7-pro/jaune/front.png" 
      },
    ],
    specs: {
      screen: "6.67\" FHD+ AMOLED 120Hz",
      processor: "MediaTek Dimensity 8300 Ultra",
      ram: "8GB",
      storage: "256GB",
      camera: "50MP + 8MP",
      battery: "6000mAh",
      os: "Android 14 (HyperOS)",
      mainCameraMp: "50 MP",
      batteryMah: 6000,
      chargeW: 90
    },
    is5g: true,
    pros: [
      "Performances tres elevees",
      "Charge ultra rapide 90W",
      "Grosse autonomie",
      "Ecran AMOLED 120Hz fluide"
    ],
    cons: [
      "Surcouche dense",
      "Photo secondaire moyenne"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/dp/B0D8JQZ6M?tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/telephonie/telephone-portable/poco-x7-pro-128go/f-1070901-poc1105003.html"
    },
    usageRecommended: "gaming léger",
    usageTags: ["gaming léger", "photo", "autonomie"],
    rating: 4.6,
    badge: "Meilleures performances",
    slug: "poco-x7-pro",
    seoSlug: "poco-x7-pro",
    description: "Un smartphone tres puissant, parfait pour les usages exigeants a petit prix.",
    summary: "Ideal si vous voulez les meilleures performances et une grosse autonomie sous 300 €.",
    whyGoodChoice: "Puissance, autonomie et charge 90W : un des meilleurs rapports performances/prix.",
    metaTitle: "Poco X7 Pro a moins de 300 € | Puissance et charge rapide",
    metaDescription: "Poco X7 Pro : grosses performances, batterie 6000mAh et charge 90W.",
    lastUpdated: "2026-01-17",
    isTop5: true
  },
  {
    id: "6",
    name: "Motorola G84",
    brand: "Motorola",
    year: 2023,
    price: 249,
    priceLabel: "Moins de 300 €",
    image: "/images/placeholder.svg",
    colors: [],
    specs: {
      screen: "6.55\" FHD+ pOLED 120Hz",
      processor: "Snapdragon 695 5G",
      ram: "8GB",
      storage: "256GB",
      camera: "50MP + 8MP",
      battery: "5000mAh",
      os: "Android 13",
      mainCameraMp: "50 MP",
      batteryMah: 5000,
      chargeW: 30
    },
    is5g: true,
    pros: [
      "Android proche du stock",
      "Ecran pOLED 120Hz",
      "Stockage 256GB",
      "Autonomie correcte"
    ],
    cons: [
      "Puissance moyenne",
      "Suivi logiciel limite"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/s?k=Motorola+G84&tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/search/10/motorola+g84.html"
    },
    usageRecommended: "autonomie",
    usageTags: ["autonomie"],
    rating: 4.2,
    badge: "Android pur",
    slug: "motorola-g84",
    seoSlug: "motorola-g84",
    description: "Un Motorola simple et fluide, avec un bel ecran et une grande capacite de stockage.",
    summary: "Parfait pour un usage quotidien simple avec un ecran pOLED et beaucoup de stockage.",
    whyGoodChoice: "Android proche du stock, 256GB et ecran 120Hz : pratique pour durer sans ralentir.",
    metaTitle: "Motorola G84 a moins de 300 € | Android simple et ecran pOLED",
    metaDescription: "Motorola G84 : ecran pOLED 120Hz, 256GB et Android fluide pour un usage simple.",
    lastUpdated: "2026-01-17"
  },
  {
    id: "7",
    name: "Realme Narzo 60x",
    brand: "Realme",
    year: 2023,
    price: 199,
    priceLabel: "Moins de 300 €",
    image: "/images/placeholder.svg",
    colors: [],
    specs: {
      screen: "6.72\" FHD+ IPS LCD 120Hz",
      processor: "MediaTek Dimensity 6100+",
      ram: "6GB",
      storage: "128GB",
      camera: "64MP + 2MP",
      battery: "5000mAh",
      os: "Android 13 (Realme UI)",
      mainCameraMp: "64 MP",
      batteryMah: 5000,
      chargeW: 33
    },
    is5g: true,
    pros: [
      "Ecran 120Hz fluide",
      "Autonomie solide",
      "5G abordable",
      "Bon equilibre pour le prix"
    ],
    cons: [
      "Ecran LCD",
      "Photo de nuit limitee"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/s?k=Realme+Narzo+60x&tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/search/10/realme+narzo+60x.html"
    },
    usageRecommended: "polyvalent",
    usageTags: ["polyvalent", "autonomie"],
    rating: 4.1,
    badge: "Bon rapport qualite/prix",
    slug: "realme-narzo-60x",
    seoSlug: "realme-narzo-60x",
    description: "Un 5G simple et fluide, suffisant pour les usages courants a petit prix.",
    summary: "Ideal si vous voulez la 5G et un ecran fluide sans depenser trop.",
    whyGoodChoice: "5G, ecran 120Hz et charge 33W : un bon equilibre pour tous les jours.",
    metaTitle: "Realme Narzo 60x a moins de 300 € | 5G simple et fluide",
    metaDescription: "Realme Narzo 60x : 5G, ecran 120Hz, charge 33W et bon usage quotidien.",
    lastUpdated: "2026-01-17"
  },
  {
    id: "8",
    name: "Oppo A78",
    brand: "Oppo",
    year: 2023,
    price: 219,
    priceLabel: "Moins de 300 €",
    image: "/images/placeholder.svg",
    colors: [],
    specs: {
      screen: "6.56\" HD+ IPS LCD 90Hz",
      processor: "Snapdragon 680",
      ram: "8GB",
      storage: "128GB",
      camera: "50MP + 2MP",
      battery: "5000mAh",
      os: "Android 13 (ColorOS)",
      mainCameraMp: "50 MP",
      batteryMah: 5000,
      chargeW: 33
    },
    is5g: false,
    pros: [
      "Batterie endurante",
      "Interface simple",
      "Charge 33W",
      "Prise en main facile"
    ],
    cons: [
      "Pas de 5G",
      "Ecran seulement HD+"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/s?k=Oppo+A78&tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/search/10/oppo+a78.html"
    },
    usageRecommended: "débutant",
    usageTags: ["débutant"],
    rating: 3.9,
    badge: "Simple a utiliser",
    slug: "oppo-a78",
    seoSlug: "oppo-a78",
    description: "Un modele simple et endurant, suffisant pour l'usage de base sans se ruiner.",
    summary: "Pour ceux qui veulent un telephone simple, fiable et endurant.",
    whyGoodChoice: "Batterie 5000mAh, charge 33W et interface simple : parfait pour debuter.",
    metaTitle: "Oppo A78 a moins de 300 € | Simple et endurant",
    metaDescription: "Oppo A78 : autonomie 5000mAh, charge 33W et usage facile pour debuter.",
    lastUpdated: "2026-01-17"
  },
  {
    id: "9",
    name: "Xiaomi Redmi 13",
    brand: "Xiaomi",
    year: 2024,
    price: 169,
    priceLabel: "Moins de 300 €",
    image: "/images/placeholder.svg",
    colors: [],
    specs: {
      screen: "6.79\" FHD+ IPS LCD 90Hz",
      processor: "MediaTek Helio G91 Ultra",
      ram: "6GB",
      storage: "128GB",
      camera: "108MP + 2MP",
      battery: "5030mAh",
      os: "Android 14 (HyperOS)",
      mainCameraMp: "108 MP",
      batteryMah: 5030,
      chargeW: 33
    },
    is5g: false,
    pros: [
      "Grand ecran confortable",
      "Capteur principal 108 MP",
      "Prix tres abordable",
      "Photo convaincante en plein jour"
    ],
    cons: [
      "Pas de 5G",
      "Performances modestes"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/s?k=Xiaomi+Redmi+13&tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/search/10/xiaomi+redmi+13.html"
    },
    usageRecommended: "débutant",
    usageTags: ["débutant"],
    rating: 3.9,
    badge: "Ultra budget",
    slug: "xiaomi-redmi-13",
    seoSlug: "redmi-13",
    description: "Un smartphone simple et economique pour les besoins essentiels.",
    summary: "Parfait si votre priorite est le prix sans sacrifier un grand ecran.",
    whyGoodChoice: "Grand ecran FHD+ et capteur 108 MP pour un prix tres accessible.",
    metaTitle: "Xiaomi Redmi 13 a moins de 300 € | Grand ecran pas cher",
    metaDescription: "Redmi 13 : ecran FHD+ 90Hz, capteur 108 MP et prix tres bas.",
    lastUpdated: "2026-01-17"
  },
  {
    id: "10",
    name: "Xiaomi Redmi 12",
    brand: "Xiaomi",
    year: 2023,
    price: 149,
    priceLabel: "Moins de 300 €",
    image: "/images/placeholder.svg",
    colors: [],
    specs: {
      screen: "6.79\" FHD+ IPS LCD 90Hz",
      processor: "MediaTek Helio G88",
      ram: "4GB",
      storage: "128GB",
      camera: "50MP + 8MP",
      battery: "5000mAh",
      os: "Android 13 (MIUI)",
      mainCameraMp: "50 MP",
      batteryMah: 5000,
      chargeW: 18
    },
    is5g: false,
    pros: [
      "Prix tres bas",
      "Grand ecran",
      "Autonomie correcte",
      "Interface simple pour debuter"
    ],
    cons: [
      "Pas de 5G",
      "Performances limitees"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/s?k=Xiaomi+Redmi+12&tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/search/10/xiaomi+redmi+12.html"
    },
    usageRecommended: "débutant",
    usageTags: ["débutant"],
    rating: 3.8,
    badge: "Ultra budget",
    slug: "xiaomi-redmi-12",
    seoSlug: "redmi-12",
    description: "Un modele d'entree de gamme pour les besoins simples et un budget serre.",
    summary: "Ideal si vous voulez un telephone tres abordable pour les usages essentiels.",
    whyGoodChoice: "Prix bas, grand ecran et autonomie correcte pour un usage basique.",
    metaTitle: "Xiaomi Redmi 12 a moins de 300 € | Ultra budget simple",
    metaDescription: "Redmi 12 : grand ecran FHD+ 90Hz, batterie 5000mAh et usage simple.",
    lastUpdated: "2026-01-17"
  },
  {
    id: "11",
    name: "Motorola Moto G54 5G",
    brand: "Motorola",
    year: 2023,
    price: 229,
    priceLabel: "Moins de 300 €",
    image: "/images/placeholder.svg",
    colors: [],
    specs: {
      screen: "6.5\" FHD+ IPS LCD 120Hz",
      processor: "MediaTek Dimensity 7020",
      ram: "8GB",
      storage: "256GB",
      camera: "50MP + 2MP",
      battery: "5000mAh",
      os: "Android 13",
      mainCameraMp: "50 MP",
      batteryMah: 5000,
      chargeW: 30
    },
    is5g: true,
    pros: [
      "5G et stockage 256GB",
      "Ecran 120Hz fluide",
      "Batterie solide",
      "Bon equilibre pour le quotidien"
    ],
    cons: [
      "Photo secondaire basique",
      "Suivi logiciel limite"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/s?k=Motorola+Moto+G54+5G&tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/search/10/motorola+moto+g54+5g.html"
    },
    usageRecommended: "polyvalent",
    usageTags: ["polyvalent", "autonomie"],
    rating: 4.1,
    badge: "Bon stockage",
    slug: "motorola-moto-g54-5g",
    seoSlug: "motorola-moto-g54-5g",
    description: "Un Motorola 5G avec beaucoup de stockage et un ecran fluide.",
    summary: "Pour un usage polyvalent avec un gros stockage sous 300 €.",
    whyGoodChoice: "Ecran 120Hz, 5G et 256GB : pratique pour apps, photos et videos.",
    metaTitle: "Motorola Moto G54 5G a moins de 300 € | 256GB et 5G",
    metaDescription: "Moto G54 5G : ecran 120Hz, 256GB, 5G et autonomie solide.",
    lastUpdated: "2026-01-17"
  },
  {
    id: "12",
    name: "Samsung Galaxy A33 5G",
    brand: "Samsung",
    year: 2022,
    price: 249,
    priceLabel: "Moins de 300 €",
    image: "/images/placeholder.svg",
    colors: [],
    specs: {
      screen: "6.4\" FHD+ Super AMOLED 90Hz",
      processor: "Exynos 1280",
      ram: "6GB",
      storage: "128GB",
      camera: "48MP + 8MP + 5MP + 2MP",
      battery: "5000mAh",
      os: "Android 13 (One UI)",
      mainCameraMp: "48 MP",
      batteryMah: 5000,
      chargeW: 25
    },
    is5g: true,
    pros: [
      "Ecran AMOLED agreable",
      "Photo quotidienne fiable",
      "Suivi logiciel Samsung",
      "Ecran 90Hz fluide"
    ],
    cons: [
      "Charge 25W",
      "Design plus ancien"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/s?k=Samsung+Galaxy+A33+5G&tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/search/10/samsung+galaxy+a33+5g.html"
    },
    usageRecommended: "photo",
    usageTags: ["photo"],
    rating: 4.1,
    badge: "Photo quotidienne",
    slug: "samsung-galaxy-a33-5g",
    seoSlug: "samsung-galaxy-a33-5g",
    description: "Un Samsung equilibre avec une photo correcte et un suivi logiciel rassurant.",
    summary: "Pour ceux qui veulent un Samsung fiable pour la photo du quotidien.",
    whyGoodChoice: "AMOLED 90Hz, photo stable et suivi Samsung : un choix fiable et simple.",
    metaTitle: "Samsung Galaxy A33 5G a moins de 300 € | Photo fiable",
    metaDescription: "Galaxy A33 5G : ecran AMOLED 90Hz, photo fiable et suivi logiciel Samsung.",
    lastUpdated: "2026-01-17"
  },
  {
    id: "13",
    name: "OSCAL C30",
    brand: "OSCAL",
    year: 2023,
    price: 99,
    priceLabel: "Moins de 300 €",
    image: "/images/placeholder.svg",
    colors: [],
    specs: {
      screen: "6.5\" HD+ IPS LCD 60Hz",
      processor: "Unisoc SC9863A",
      ram: "3GB",
      storage: "32GB",
      camera: "13MP",
      battery: "5080mAh",
      os: "Android 12",
      mainCameraMp: "13 MP",
      batteryMah: 5080,
      chargeW: 10
    },
    is5g: false,
    pros: [
      "Prix tres bas",
      "Batterie correcte",
      "Interface simple",
      "Usage basique sans prise de tete"
    ],
    cons: [
      "Performances limitees",
      "Stockage faible"
    ],
    affiliateLinks: {
      amazon: "https://www.amazon.fr/s?k=OSCAL+C30&tag=top5telephones-21",
      cdiscount: "https://www.cdiscount.com/search/10/oscal+c30.html"
    },
    usageRecommended: "débutant",
    usageTags: ["débutant"],
    rating: 3.3,
    badge: "Ultra budget",
    slug: "oscal-c30",
    seoSlug: "oscal-c30",
    description: "Un smartphone tres abordable pour l'usage basique.",
    summary: "Ideal pour un premier smartphone ou un usage tres simple.",
    whyGoodChoice: "Prix minimal pour appels, messages et usage leger du quotidien.",
    metaTitle: "OSCAL C30 a moins de 300 € | Ultra budget basique",
    metaDescription: "OSCAL C30 : ultra-budget, autonomie correcte et usage basique.",
    lastUpdated: "2026-01-17"
  },
];

export const getTop5Phones = (): Phone[] => {
  const top5 = phones.filter((phone) => phone.isTop5);
  return top5.length > 0 ? top5 : phones.slice(0, 5);
};

export const getPhoneBySlug = (slug: string): Phone | undefined => {
  return phones.find(phone => phone.slug === slug);
};

export const getPhoneBySeoSlug = (seoSlug: string): Phone | undefined => {
  return phones.find(phone => phone.seoSlug === seoSlug);
};

export const getAllPhones = (): Phone[] => {
  return phones;
};

export const getUsageCategories = () => {
  const getTags = (phone: Phone) => phone.usageTags ?? [phone.usageRecommended];
  return {
    polyvalents: phones.filter(phone => getTags(phone).includes('polyvalent')),
    autonomieGaming: phones.filter(phone => getTags(phone).some((tag) => tag === 'autonomie' || tag === 'gaming léger')),
    photo: phones.filter(phone => getTags(phone).includes('photo')),
    debutant: phones.filter(phone => getTags(phone).includes('débutant')),
  };
};
