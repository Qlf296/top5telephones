import { Metadata } from 'next';
import { getAllPhones } from '@/data/phones';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionShell } from '@/components/ui/SectionShell';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { formatPrice, generateStars } from '@/lib/utils';
import { getTop2HeroImage } from '@/lib/image-utils';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Nouveautés - Derniers Téléphones < 300€ | Top 5 Téléphones',
  description: 'Découvrez les dernières nouveautés et mises à jour des meilleurs smartphones à moins de 300€ en 2025.',
  keywords: ['nouveautés smartphones', 'nouveaux téléphones', 'derniers smartphones 2025'],
  alternates: {
    canonical: '/nouveautes',
  },
  openGraph: {
    title: 'Nouveautés - Derniers Téléphones < 300€',
    description: 'Découvrez les dernières nouveautés smartphones.',
    url: 'https://top5telephones.fr/nouveautes',
    type: 'website',
  },
};

export default function NouveautesPage() {
  const phones = getAllPhones();
  const baseUrl = 'https://top5telephones.fr';

  // Trier par date de mise à jour (plus récent en premier)
  const sortedPhones = [...phones].sort((a, b) => {
    const dateA = new Date(a.lastUpdated).getTime();
    const dateB = new Date(b.lastUpdated).getTime();
    return dateB - dateA;
  });

  const breadcrumbs = [
    { name: 'Accueil', url: `${baseUrl}/` },
    { name: 'Nouveautés', url: `${baseUrl}/nouveautes` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="space-y-12">
        <SectionShell
          eyebrow="Nouveautés 2025"
          title="Derniers téléphones ajoutés"
          subtitle="Découvrez les dernières mises à jour et nouveaux modèles dans notre sélection."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sortedPhones.map((phone, index) => (
              <GlassCard key={phone.id} className="flex flex-col gap-5 relative group">
                {/* Badge Nouveau */}
                {index < 2 && (
                  <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-br from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    Nouveau
                  </div>
                )}

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/70 border border-white/25 group-hover:border-ios-blue-500/30 transition-all duration-300">
                  <Image
                    src={getTop2HeroImage(phone)}
                    alt={phone.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    <p className="text-xs text-slate-500 mt-2">
                      Mis à jour le {new Date(phone.lastUpdated).toLocaleDateString('fr-FR')}
                    </p>
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
      </div>
    </>
  );
}

