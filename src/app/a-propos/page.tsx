import { Metadata } from 'next';
import { SectionShell } from '@/components/ui/SectionShell';
import { GlassCard } from '@/components/ui/GlassCard';
import AboutPageSchema from '@/components/seo/AboutPageSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'À propos - Top 5 Téléphones | Notre Mission',
  description: 'Découvrez l\'histoire de Top 5 Téléphones, notre mission et notre méthodologie de sélection des meilleurs smartphones à moins de 300€.',
  keywords: ['à propos', 'mission', 'méthodologie', 'sélection téléphones', 'smartphone pas cher'],
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À propos - Top 5 Téléphones',
    description: 'Découvrez notre mission et notre méthodologie de sélection des meilleurs smartphones à moins de 300€.',
    url: 'https://top5telephones.fr/a-propos',
    type: 'website',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'À propos Top 5 Téléphones',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos - Top 5 Téléphones',
    description: 'Découvrez notre mission et notre méthodologie de sélection des meilleurs smartphones à moins de 300€.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AProposPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionShell
        eyebrow="À propos"
        title="Votre guide de confiance"
        subtitle="Découvrez l'histoire de Top 5 Téléphones, notre mission et notre méthodologie de sélection des meilleurs smartphones à moins de 300€."
      >
        <GlassCard className="p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Notre Histoire</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
                Top 5 Téléphones est né d'un constat simple : il est difficile de s'y retrouver dans la jungle des smartphones, 
                surtout quand on a un budget limité. Avec des centaines de modèles disponibles et des prix qui varient constamment, 
                choisir le bon téléphone devient un véritable casse-tête.
              </p>
            <p>
                Notre équipe de passionnés de technologie a décidé de créer un site qui simplifie ce choix. 
                Nous nous concentrons exclusivement sur les smartphones à moins de 300€, une gamme de prix 
                qui représente la majorité des achats en France.
              </p>
              <p>
                Depuis notre création, nous avons aidé des milliers d'utilisateurs à faire le bon choix 
                en leur fournissant des informations claires, objectives et à jour.
              </p>
            </div>
        </GlassCard>
      </SectionShell>

      <SectionShell
        eyebrow="Notre Mission"
        title="Ce qui nous anime"
      >
        <div className="grid sm:grid-cols-3 gap-6">
          <GlassCard className="p-6 text-center">
            <div className="w-16 h-16 bg-ios-blue-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-ios-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Simplicité</h3>
            <p className="text-slate-600 text-sm">
                  Simplifier le choix en présentant uniquement les meilleures options
                </p>
          </GlassCard>
              
          <GlassCard className="p-6 text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Objectivité</h3>
            <p className="text-slate-600 text-sm">
                  Des tests et comparaisons basés sur des critères objectifs
                </p>
          </GlassCard>
              
          <GlassCard className="p-6 text-center">
            <div className="w-16 h-16 bg-purple-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Actualité</h3>
            <p className="text-slate-600 text-sm">
                  Des informations et prix mis à jour régulièrement
                </p>
          </GlassCard>
              </div>
      </SectionShell>

      <SectionShell
        eyebrow="Méthodologie"
        title="Comment nous sélectionnons"
      >
        <GlassCard className="p-6 sm:p-8">
            <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Sélection rigoureuse',
                description: 'Nous analysons tous les nouveaux modèles sortis dans la gamme de prix cible. Seuls les téléphones avec le meilleur rapport qualité-prix sont retenus.',
              },
              {
                step: '2',
                title: 'Tests approfondis',
                description: 'Chaque téléphone est testé sur plusieurs critères : performance, autonomie, qualité photo, ergonomie et rapport qualité-prix.',
              },
              {
                step: '3',
                title: 'Suivi des prix',
                description: 'Nous surveillons quotidiennement les prix et promotions pour vous garantir les meilleures offres du moment.',
              },
              {
                step: '4',
                title: 'Mise à jour continue',
                description: 'Notre Top 5 est mis à jour régulièrement pour refléter les nouvelles sorties et les changements de prix.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ios-blue-500 to-ios-blue-600 text-white rounded-3xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </SectionShell>

      <SectionShell
        eyebrow="Nos Valeurs"
        title="Ce qui nous guide"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: 'Transparence',
              description: 'Nous indiquons clairement nos liens d\'affiliation et expliquons notre modèle économique. Notre objectif est de vous aider, pas de vous influencer.',
            },
            {
              title: 'Indépendance',
              description: 'Nos recommandations sont basées uniquement sur la qualité des produits, pas sur les commissions que nous pourrions toucher.',
            },
            {
              title: 'Expertise',
              description: 'Notre équipe combine des années d\'expérience dans la tech et une passion pour les smartphones accessibles.',
            },
            {
              title: 'Service',
              description: 'Nous sommes là pour vous accompagner dans votre choix, avec des outils comme notre comparateur et notre quiz personnalisé.',
            },
          ].map((value) => (
            <GlassCard key={value.title} className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionShell>
      
      {/* Structured Data */}
      <AboutPageSchema />
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://top5telephones.fr/' },
        { name: 'À propos', url: 'https://top5telephones.fr/a-propos' },
      ]} />
    </div>
  );
} 
