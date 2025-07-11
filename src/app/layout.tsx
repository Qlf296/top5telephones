import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Top 5 Téléphones à moins de 300€ - Meilleurs Smartphones 2024',
    template: '%s | Top 5 Téléphones'
  },
  description: 'Découvrez les 5 meilleurs smartphones à moins de 300€. Comparaisons détaillées, tests et conseils d\'achat pour faire le bon choix en 2024.',
  keywords: 'smartphone moins de 300 euros, meilleur téléphone pas cher, comparatif smartphone, achat téléphone',
  authors: [{ name: 'Top 5 Téléphones' }],
  creator: 'Top 5 Téléphones',
  publisher: 'Top 5 Téléphones',
  robots: 'index, follow',
  googlebot: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://top5telephones.fr',
  },
  openGraph: {
    title: 'Top 5 Téléphones à moins de 300€',
    description: 'Les meilleurs smartphones à moins de 300€ en 2024',
    url: 'https://top5telephones.fr',
    siteName: 'Top 5 Téléphones',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 5 Téléphones à moins de 300€',
    description: 'Les meilleurs smartphones à moins de 300€ en 2024',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'format-detection': 'telephone=no, address=no, email=no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 