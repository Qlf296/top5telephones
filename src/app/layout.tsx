import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ClientPerformanceMonitor from '@/components/ClientPerformanceMonitor'

// Imports dynamiques pour améliorer le code splitting et le LCP
const Header = dynamic(() => import('@/components/Header'), {
  ssr: true, // Garder SSR pour le SEO
})
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
})
const Breadcrumbs = dynamic(() => import('@/components/Breadcrumbs'), {
  ssr: true,
})
const ErrorBoundary = dynamic(() => import('@/components/ErrorBoundary'), {
  ssr: true,
})
const PageShell = dynamic(() => import('@/components/core/PageShell').then(mod => ({ default: mod.PageShell })), {
  ssr: true,
})
// PerformanceMonitor sera importé directement dans le body

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

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
    'xiaomi redmi note 14 5g',
    'samsung galaxy a35 5g',
    'poco x7 pro',
    'motorola edge 50 fusion',
    'samsung galaxy a26 5g',
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
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
        <link rel="dns-prefetch" href="//www.clarity.ms" />
        
        {/* Preload des ressources critiques */}
        <link rel="preload" href="/images/og-image.jpg" as="image" type="image/jpeg" />
        
        {/* Resource hints pour améliorer le LCP */}
        <link rel="prefetch" href="/comparateur" />
        <link rel="prefetch" href="/quiz" />
        
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
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <ClientPerformanceMonitor />
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <PageShell>
              <Breadcrumbs />
              {children}
              </PageShell>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
        
        {/* Vercel Speed Insights */}
        <SpeedInsights />
        
        {/* Google Analytics 4 - Chargement différé pour améliorer les performances */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
        />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_title: document.title,
                page_location: window.location.href,
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
              `}
            </Script>
          </>
        )}
        
        {/* Microsoft Clarity - Chargement différé */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
      </body>
    </html>
  )
} 