export interface Review {
  id: string;
  phoneId: string;
  phoneSlug: string;
  author: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

// Avis exemple pour chaque téléphone (à remplacer par de vrais avis plus tard)
export const reviews: Review[] = [
  // Xiaomi Redmi Note 14 5G
  {
    id: "1",
    phoneId: "1",
    phoneSlug: "xiaomi-redmi-note-14-5g",
    author: "Marc D.",
    rating: 5,
    title: "Excellent rapport qualité-prix",
    comment: "J'ai acheté ce téléphone il y a 2 mois et je suis très satisfait. L'écran AMOLED est magnifique, la batterie tient toute la journée et la 5G fonctionne parfaitement. Pour ce prix, c'est un excellent choix !",
    date: "2025-01-15",
    verified: true,
    helpful: 12
  },
  {
    id: "2",
    phoneId: "1",
    phoneSlug: "xiaomi-redmi-note-14-5g",
    author: "Sophie L.",
    rating: 4,
    title: "Très bon téléphone, MIUI un peu lourd",
    comment: "Le téléphone est excellent pour le prix. L'écran 120Hz est fluide, la caméra prend de belles photos. Seul bémol : MIUI est un peu chargé avec beaucoup de notifications. Mais globalement, je recommande !",
    date: "2025-01-10",
    verified: true,
    helpful: 8
  },
  {
    id: "3",
    phoneId: "1",
    phoneSlug: "xiaomi-redmi-note-14-5g",
    author: "Thomas M.",
    rating: 5,
    title: "Parfait pour mon usage quotidien",
    comment: "J'utilise ce téléphone depuis 3 mois maintenant. La charge rapide 33W est vraiment pratique, je charge en 1h et ça tient toute la journée. L'écran est superbe et les performances sont largement suffisantes.",
    date: "2025-01-05",
    verified: true,
    helpful: 15
  },
  // Samsung Galaxy A35 5G
  {
    id: "4",
    phoneId: "2",
    phoneSlug: "samsung-galaxy-a35-5g",
    author: "Julie K.",
    rating: 5,
    title: "Super AMOLED de qualité premium",
    comment: "L'écran Super AMOLED est vraiment magnifique, les couleurs sont éclatantes. La caméra 50MP avec OIS prend de très belles photos même en mouvement. La garantie Samsung 2 ans est un vrai plus. Je recommande vivement !",
    date: "2025-01-18",
    verified: true,
    helpful: 20
  },
  {
    id: "5",
    phoneId: "2",
    phoneSlug: "samsung-galaxy-a35-5g",
    author: "Pierre R.",
    rating: 4,
    title: "Très bon téléphone, prix un peu élevé",
    comment: "Excellent téléphone avec un écran premium et une bonne autonomie. La charge 25W est un peu lente comparée à la concurrence, mais la qualité de construction et la garantie Samsung compensent. One UI est fluide et agréable.",
    date: "2025-01-12",
    verified: true,
    helpful: 10
  },
  // Poco X7 Pro
  {
    id: "6",
    phoneId: "3",
    phoneSlug: "poco-x7-pro",
    author: "Alexandre B.",
    rating: 5,
    title: "Performance de dingue pour le prix",
    comment: "Le Dimensity 8300 Ultra est une bête ! Je joue à des jeux exigeants sans aucun lag. La charge 67W est ultra-rapide, 30 minutes pour charger complètement. La caméra 64MP est excellente. C'est le meilleur rapport performance/prix du marché !",
    date: "2025-01-20",
    verified: true,
    helpful: 25
  },
  {
    id: "7",
    phoneId: "3",
    phoneSlug: "poco-x7-pro",
    author: "Marie C.",
    rating: 4,
    title: "Parfait pour le gaming",
    comment: "J'ai acheté ce téléphone principalement pour jouer et je ne suis pas déçue. Les performances sont excellentes, l'écran 120Hz est fluide. La charge rapide est vraiment pratique. Seul point négatif : le design est moins premium que certains concurrents.",
    date: "2025-01-14",
    verified: true,
    helpful: 18
  },
  // Motorola Edge 50 Fusion
  {
    id: "8",
    phoneId: "4",
    phoneSlug: "motorola-edge-50-fusion",
    author: "David F.",
    rating: 5,
    title: "Android pur, écran pOLED exceptionnel",
    comment: "L'écran pOLED 144Hz est absolument magnifique, c'est le meilleur écran que j'ai vu dans cette gamme de prix. Android pur sans surcouche est un vrai plaisir, pas de bloatware. Le design est élégant et premium. Je recommande !",
    date: "2025-01-16",
    verified: true,
    helpful: 22
  },
  {
    id: "9",
    phoneId: "4",
    phoneSlug: "motorola-edge-50-fusion",
    author: "Camille T.",
    rating: 4,
    title: "Très bon téléphone, stockage limité",
    comment: "Excellent téléphone avec un écran premium et Android pur. La charge 68W est rapide. Le seul bémol est le stockage de 128GB qui peut être limité si vous prenez beaucoup de photos/vidéos. Mais pour un usage normal, c'est parfait.",
    date: "2025-01-11",
    verified: true,
    helpful: 9
  },
  // Samsung Galaxy A26 5G
  {
    id: "10",
    phoneId: "5",
    phoneSlug: "samsung-galaxy-a26-5g",
    author: "Nicolas P.",
    rating: 4,
    title: "Bon téléphone Samsung fiable",
    comment: "C'est un bon téléphone Samsung avec un écran Super AMOLED de qualité. La garantie 2 ans est rassurante. Les performances sont correctes pour un usage quotidien. La charge 25W est un peu lente mais acceptable.",
    date: "2025-01-13",
    verified: true,
    helpful: 7
  },
  {
    id: "11",
    phoneId: "5",
    phoneSlug: "samsung-galaxy-a26-5g",
    author: "Isabelle M.",
    rating: 4,
    title: "Fiable et durable",
    comment: "J'ai acheté ce téléphone pour sa fiabilité Samsung. L'écran est beau, l'autonomie est bonne. Les mises à jour Android longues sont un vrai plus. C'est un téléphone qui durera dans le temps. Bon choix pour ceux qui veulent de la fiabilité.",
    date: "2025-01-08",
    verified: true,
    helpful: 11
  }
];

export function getReviewsByPhoneSlug(slug: string): Review[] {
  return reviews.filter(review => review.phoneSlug === slug);
}

export function getReviewsByPhoneId(phoneId: string): Review[] {
  return reviews.filter(review => review.phoneId === phoneId);
}

export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

