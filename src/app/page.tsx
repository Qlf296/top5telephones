import { Metadata } from 'next';
import Image from 'next/image';
import { getTop5Phones } from '@/data/phones';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionShell } from '@/components/ui/SectionShell';
import { Pill } from '@/components/ui/Pill';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import ItemListSchema from '@/components/seo/ItemListSchema';

export const metadata: Metadata = {
  title: 'Top 5 Téléphones à moins de 300€ - Meilleurs Smartphones 2025',
  description: 'Découvrez les 5 meilleurs smartphones à moins de 300€ en 2025. Comparaisons détaillées, tests et conseils d\'achat pour faire le bon choix.',
  keywords: ['smartphone moins de 300 euros', 'meilleur téléphone pas cher', 'comparatif smartphone', 'achat téléphone', 'smartphone pas cher 2025', 'xiaomi redmi note 14 5g', 'samsung galaxy a35 5g', 'poco x7 pro', 'motorola edge 50 fusion', 'samsung galaxy a26 5g'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Top 5 Téléphones à moins de 300€ - Meilleurs Smartphones 2025',
    description: 'Découvrez les 5 meilleurs smartphones à moins de 300€ en 2025. Comparaisons détaillées, tests et conseils d\'achat.',
    url: 'https://top5telephones.fr',
    type: 'website',
    locale: 'fr_FR',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Top 5 Téléphones - Meilleurs smartphones à moins de 300€ en 2025',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 5 Téléphones à moins de 300€ - Meilleurs Smartphones 2025',
    description: 'Découvrez les 5 meilleurs smartphones à moins de 300€ en 2025',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const top5Phones = getTop5Phones();
  
  const itemListItems = top5Phones.map(phone => ({
    name: phone.name,
    url: `https://top5telephones.fr/fiche/${phone.slug}`,
    description: phone.description,
    image: phone.image.startsWith('http') ? phone.image : `https://top5telephones.fr${phone.image}`,
  }));

  return (
    <>
      {/* Structured Data */}
      <OrganizationSchema />
      <ItemListSchema
        items={itemListItems}
        name="Top 5 des meilleurs smartphones à moins de 300€ en 2025"
        description="Sélection des 5 meilleurs smartphones à moins de 300€ en 2025 avec comparatifs détaillés, tests complets et guides d'achat"
        url="https://top5telephones.fr"
      />
      
      <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* Hero Section - Impactante */}
      <section className="pt-8 sm:pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="flex flex-wrap gap-2">
                <Pill className="bg-ios-blue-500/10 text-ios-blue-700 border-ios-blue-500/20">
                  ⭐ Sélection 2025
                </Pill>
                <Pill className="bg-green-500/10 text-green-700 border-green-500/20">
                  ✓ Tests réels
                </Pill>
                <Pill className="bg-purple-500/10 text-purple-700 border-purple-500/20">
                  💰 Budget 300€
                </Pill>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                  Trouvez le{' '}
                  <span className="text-ios-blue-600">meilleur smartphone</span>{' '}
                  à moins de 300€
            </h1>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                  Comparaisons détaillées, tests complets et conseils d'experts pour choisir le téléphone qui correspond vraiment à vos besoins.
            </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button as="link" href="#top5" size="lg">
                Voir le Top 5
                </Button>
                <Button as="link" href="/quiz" variant="secondary" size="lg">
                  Trouver mon modèle
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>100% Gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Tests réels</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Sans inscription</span>
                </div>
              </div>
            </div>
            <GlassCard className="p-6 lg:p-8">
              <div className="aspect-[4/3] relative overflow-hidden rounded-3xl bg-white/60 border border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/og-image.jpg"
                  alt="Top 5 smartphones à moins de 300€"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  quality={90}
                  fetchPriority="high"
                />
              </div>
            </GlassCard>
            </div>
          </div>
        </section>

      {/* Pourquoi nous choisir - Section avantages */}
      <SectionShell
        eyebrow="Pourquoi nous choisir"
        title="Votre expert en smartphones"
        subtitle="Tout ce dont vous avez besoin pour faire le bon choix, en un seul endroit."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <GlassCard className="p-6 text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-ios-blue-500/10 rounded-3xl flex items-center justify-center">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="font-semibold text-slate-900">Tests approfondis</h3>
            <p className="text-sm text-slate-600">
              Chaque téléphone est testé en conditions réelles pour vous donner des avis honnêtes.
            </p>
          </GlassCard>
          <GlassCard className="p-6 text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-3xl flex items-center justify-center">
              <span className="text-3xl">⚖️</span>
            </div>
            <h3 className="font-semibold text-slate-900">Comparateur intelligent</h3>
            <p className="text-sm text-slate-600">
              Comparez jusqu'à 4 téléphones côte à côte pour identifier rapidement les différences.
            </p>
          </GlassCard>
          <GlassCard className="p-6 text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-3xl flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="font-semibold text-slate-900">Quiz personnalisé</h3>
            <p className="text-sm text-slate-600">
              Répondez à quelques questions et découvrez le téléphone parfait pour vous.
            </p>
          </GlassCard>
          <GlassCard className="p-6 text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-orange-500/10 rounded-3xl flex items-center justify-center">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="font-semibold text-slate-900">Mises à jour régulières</h3>
            <p className="text-sm text-slate-600">
              Nos sélections et tests sont mis à jour régulièrement pour refléter le marché actuel.
            </p>
          </GlassCard>
        </div>
      </SectionShell>

      {/* Top 5 Section - Améliorée */}
      <SectionShell
        id="top5"
        eyebrow="Sélection rigoureuse 2024"
        title="Les 5 meilleurs téléphones à moins de 300€"
        subtitle="Basé sur des tests réels, performances, qualité et rapport qualité-prix exceptionnel."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {top5Phones.map((phone, index) => (
            <GlassCard key={phone.id} className="flex flex-col gap-5 relative group">
              {/* Badge numéro 1 pour le premier */}
              {index === 0 && (
                <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-br from-ios-blue-500 to-ios-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  #1 Recommandé
                </div>
              )}
              {index === 1 && (
                <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-br from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  Meilleur rapport qualité-prix
                </div>
              )}
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/70 border border-white/25 group-hover:border-ios-blue-500/30 transition-all duration-300">
                    <Image
                      src={phone.image}
                      alt={phone.name}
                      fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  quality={85}
                    />
                  </div>
                  
              <div className="space-y-4 flex-1 flex flex-col">
                    <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-ios-blue-600 text-xs font-semibold uppercase tracking-wide">{phone.brand}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-sm font-medium text-slate-700">{phone.rating}/5</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">{phone.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900">{phone.price}€</span>
                    {phone.originalPrice && phone.originalPrice > phone.price && (
                      <span className="text-sm text-slate-500 line-through">{phone.originalPrice}€</span>
                    )}
                  </div>
                    </div>
                    
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm mb-2">Points forts</h4>
                    <ul className="space-y-1.5">
                      {phone.pros.slice(0, 3).map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                          <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                  </div>
                    </div>
                    
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button as="link" href={`/fiche/${phone.slug}`} size="sm" className="w-full">
                    Détails
                  </Button>
                  <Button
                    as="link"
                        href={phone.affiliateLinks.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                    className="w-full"
                      >
                        Acheter
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      {/* Comment ça marche - 3 étapes */}
      <SectionShell
        eyebrow="Simple et rapide"
        title="Comment ça marche"
        subtitle="Trouvez votre téléphone idéal en 3 étapes simples."
      >
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-ios-blue-500 to-ios-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              1
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">Explorez le Top 5</h3>
            <p className="text-sm text-slate-600">
              Découvrez notre sélection des 5 meilleurs téléphones testés et approuvés.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              2
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">Comparez ou testez</h3>
            <p className="text-sm text-slate-600">
              Utilisez notre comparateur ou répondez au quiz pour trouver votre match parfait.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              3
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">Achetez en confiance</h3>
            <p className="text-sm text-slate-600">
              Consultez les fiches détaillées et achetez le téléphone qui vous convient.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* CTA Finale */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Prêt à trouver votre smartphone idéal ?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Découvrez notre comparateur interactif ou répondez à notre quiz personnalisé pour une recommandation sur mesure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button as="link" href="/comparateur" size="lg">
                Comparer les téléphones
              </Button>
              <Button as="link" href="/quiz" variant="secondary" size="lg">
                Faire le quiz
              </Button>
            </div>
          </GlassCard>
          </div>
        </section>
    </div>
    </>
  );
} 