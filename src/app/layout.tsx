import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import Breadcrumbs from '@/components/Breadcrumbs'
import ErrorBoundary from '@/components/ErrorBoundary'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Top 5 Téléphones - Meilleurs Smartphones à moins de 300€ en 2024',
    template: '%s | Top 5 Téléphones'
  },
  description: 'Découvrez les 5 meilleurs smartphones à moins de 300€ en 2024. Comparatifs détaillés, tests complets et guides d\'achat pour choisir le meilleur rapport qualité-prix.',
  keywords: [
    'smartphone moins de 300 euros',
    'meilleur téléphone pas cher',
    'comparatif smartphone',
    'test smartphone',
    'samsung galaxy a14',
    'xiaomi redmi note 12',
    'motorola moto g84',
    'nokia g60',
    'realme 10',
    'smartphone pas cher 2024',
    'guide achat smartphone',
    'comparatif samsung xiaomi'
  ],
  authors: [{ name: 'Top 5 Téléphones' }],
  creator: 'Top 5 Téléphones',
  publisher: 'Top 5 Téléphones',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://top5telephones.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Top 5 Téléphones - Meilleurs Smartphones à moins de 300€ en 2024',
    description: 'Découvrez les 5 meilleurs smartphones à moins de 300€ en 2024. Comparatifs détaillés, tests complets et guides d\'achat.',
    url: 'https://top5telephones.fr',
    siteName: 'Top 5 Téléphones',
    images: [
      {
        url: '/images/social/top-5-smartphones-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Top 5 Smartphones à moins de 300€ en 2024',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 5 Téléphones - Meilleurs Smartphones à moins de 300€ en 2024',
    description: 'Découvrez les 5 meilleurs smartphones à moins de 300€ en 2024. Comparatifs détaillés, tests complets et guides d\'achat.',
    images: ['/images/social/top-5-smartphones-twitter.jpg'],
    creator: '@top5telephones',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'Smartphones et téléphonie mobile',
  other: {
    'theme-color': '#3B82F6',
    'msapplication-TileColor': '#3B82F6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Top 5 Téléphones',
    'application-name': 'Top 5 Téléphones',
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Preconnect pour améliorer les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch pour les domaines externes */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preload des ressources critiques */}
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        
        {/* Structured Data pour le site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Top 5 Téléphones",
              "url": "https://top5telephones.fr",
              "description": "Site spécialisé dans les smartphones à moins de 300€",
              "publisher": {
                "@type": "Organization",
                "name": "Top 5 Téléphones",
                "url": "https://top5telephones.fr"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://top5telephones.fr/recherche?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <PerformanceMonitor />
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Breadcrumbs />
              {children}
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
        
        {/* Google Analytics 4 - Configuration prête */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_title: document.title,
                page_location: window.location.href,
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `,
          }}
        />
        
        {/* Microsoft Clarity - Configuration prête */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
            `,
          }}
        />
        
        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  )
} 