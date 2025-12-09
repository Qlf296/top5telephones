import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz : Trouvez le smartphone idéal pour vous',
  description: 'Répondez à quelques questions simples et découvrez le smartphone à moins de 300€ qui correspond le mieux à vos besoins.',
  keywords: ['quiz smartphone', 'trouver smartphone', 'quel téléphone choisir', 'guide choix smartphone', 'test smartphone'],
  alternates: {
    canonical: '/quiz',
  },
  openGraph: {
    title: 'Quiz : Trouvez le smartphone idéal pour vous',
    description: 'Répondez à quelques questions simples et découvrez le smartphone à moins de 300€ qui correspond le mieux à vos besoins.',
    url: 'https://top5telephones.fr/quiz',
    type: 'website',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Quiz smartphone Top 5 Téléphones',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiz : Trouvez le smartphone idéal pour vous',
    description: 'Répondez à quelques questions simples et découvrez le smartphone idéal.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

