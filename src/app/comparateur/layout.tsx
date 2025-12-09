import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparateur de téléphones - Comparez jusqu\'à 4 smartphones',
  description: 'Comparez jusqu\'à 4 smartphones à moins de 300€ côte à côte. Spécifications, prix, avis et recommandations pour faire le bon choix.',
  keywords: ['comparateur smartphone', 'comparer téléphones', 'comparatif smartphone pas cher', 'outil comparaison téléphone'],
  alternates: {
    canonical: '/comparateur',
  },
  openGraph: {
    title: 'Comparateur de téléphones - Comparez jusqu\'à 4 smartphones',
    description: 'Comparez jusqu\'à 4 smartphones à moins de 300€ côte à côte. Spécifications, prix, avis et recommandations.',
    url: 'https://top5telephones.fr/comparateur',
    type: 'website',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Comparateur de téléphones Top 5 Téléphones',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparateur de téléphones - Comparez jusqu\'à 4 smartphones',
    description: 'Comparez jusqu\'à 4 smartphones à moins de 300€ côte à côte.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComparateurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

