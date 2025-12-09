import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionShell } from '@/components/ui/SectionShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Pill } from '@/components/ui/Pill';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Guide d\'achat : Choisir son smartphone pas cher en 2024',
  description: 'Guide complet pour choisir le meilleur smartphone pas cher en 2024. Critères essentiels, pièges à éviter et conseils d\'expert.',
  keywords: [
    'guide achat smartphone',
    'choisir smartphone pas cher',
    'smartphone pas cher 2024',
    'critères achat smartphone',
    'comparatif smartphone',
    'meilleur rapport qualité prix'
  ],
  alternates: {
    canonical: '/guide-achat-smartphone',
  },
  openGraph: {
    title: 'Guide d\'achat : Choisir son smartphone pas cher en 2024',
    description: 'Guide complet pour choisir le meilleur smartphone pas cher en 2024. Critères essentiels, pièges à éviter et conseils d\'expert.',
    url: 'https://top5telephones.fr/guide-achat-smartphone',
    type: 'article',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Guide d\'achat smartphone Top 5 Téléphones',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide d\'achat : Choisir son smartphone pas cher en 2024',
    description: 'Guide complet pour choisir le meilleur smartphone pas cher en 2024.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GuideAchatPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionShell
        eyebrow="Guide d'achat 2024"
        title="Choisir son smartphone pas cher"
        subtitle="Découvrez notre guide complet pour choisir le meilleur smartphone pas cher en 2024. Critères essentiels, pièges à éviter et conseils d'expert."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <Pill className="bg-green-500/10 text-green-700 border-green-500/20">
              ✅ Guide expert
          </Pill>
          <Pill className="bg-ios-blue-500/10 text-ios-blue-700 border-ios-blue-500/20">
              💰 Économies garanties
          </Pill>
          <Pill className="bg-purple-500/10 text-purple-700 border-purple-500/20">
              🎯 Conseils pratiques
          </Pill>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Critères essentiels"
        title="Les points à vérifier"
      >
        <div className="grid sm:grid-cols-3 gap-6">
          <GlassCard className="p-6">
            <div className="w-14 h-14 bg-ios-blue-500/10 rounded-3xl flex items-center justify-center mb-4">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Budget</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-ios-blue-500 mt-1">•</span>
                <span>150-200€ : Entrée de gamme</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ios-blue-500 mt-1">•</span>
                <span>200-300€ : Meilleur rapport qualité-prix</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ios-blue-500 mt-1">•</span>
                <span>300-400€ : Premium abordable</span>
              </li>
              </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="w-14 h-14 bg-green-500/10 rounded-3xl flex items-center justify-center mb-4">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Écran</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>6.1" - 6.7" idéal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Résolution Full HD+ minimum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>AMOLED pour meilleure qualité</span>
              </li>
              </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="w-14 h-14 bg-purple-500/10 rounded-3xl flex items-center justify-center mb-4">
              <span className="text-3xl">🔋</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Batterie</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>4000mAh minimum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Charge rapide 18W+</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>1-2 jours d'autonomie</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </SectionShell>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 sm:p-12 text-center space-y-6 bg-gradient-to-br from-ios-blue-500/10 to-green-500/10 border-ios-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Prêt à choisir votre smartphone ?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Consultez nos comparatifs détaillés et trouvez le modèle parfait.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button as="link" href="/top-5-smartphones-300euros" size="lg">
                Voir le top 5
              </Button>
              <Button as="link" href="/comparateur" variant="secondary" size="lg">
                Comparer les modèles
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Structured Data */}
      <ArticleSchema
        headline="Guide d'achat : Choisir son smartphone pas cher en 2024"
        description="Guide complet pour choisir le meilleur smartphone pas cher en 2024. Critères essentiels, pièges à éviter et conseils d'expert."
        image="https://top5telephones.fr/images/og-image.jpg"
        url="https://top5telephones.fr/guide-achat-smartphone"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://top5telephones.fr/' },
        { name: 'Guide d\'achat', url: 'https://top5telephones.fr/guide-achat-smartphone' },
      ]} />
    </div>
  );
} 
