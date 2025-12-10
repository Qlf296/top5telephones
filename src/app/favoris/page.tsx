import { Metadata } from 'next';
import { getAllPhones, Phone } from '@/data/phones';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionShell } from '@/components/ui/SectionShell';
import { Button } from '@/components/ui/Button';
import { FavoritesList } from '@/components/product/FavoritesList';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Mes Favoris - Top 5 Téléphones',
  description: 'Consultez vos téléphones favoris sauvegardés. Comparez et achetez vos smartphones préférés à moins de 300€.',
  keywords: ['favoris', 'smartphones favoris', 'téléphones sauvegardés', 'wishlist'],
  alternates: {
    canonical: '/favoris',
  },
  openGraph: {
    title: 'Mes Favoris - Top 5 Téléphones',
    description: 'Consultez vos téléphones favoris sauvegardés.',
    url: 'https://top5telephones.fr/favoris',
    type: 'website',
  },
};

export default function FavorisPage() {
  const allPhones = getAllPhones();
  const baseUrl = 'https://top5telephones.fr';

  const breadcrumbs = [
    { name: 'Accueil', url: `${baseUrl}/` },
    { name: 'Mes Favoris', url: `${baseUrl}/favoris` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="space-y-12">
        <SectionShell
          eyebrow="Vos favoris"
          title="Mes téléphones favoris"
          subtitle="Retrouvez tous les téléphones que vous avez sauvegardés."
        >
          <FavoritesList allPhones={allPhones} />
        </SectionShell>
      </div>
    </>
  );
}

