import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'À propos - Top 5 Téléphones | Notre Mission',
  description: 'Découvrez l\'histoire de Top 5 Téléphones, notre mission et notre méthodologie de sélection des meilleurs smartphones à moins de 300€.',
  keywords: 'à propos, mission, méthodologie, sélection téléphones, smartphone pas cher',
  openGraph: {
    title: 'À propos - Top 5 Téléphones',
    description: 'Découvrez notre mission et notre méthodologie de sélection des meilleurs smartphones à moins de 300€.',
    type: 'website',
  },
};

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue-50 to-white">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              À propos de Top 5 Téléphones
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Votre guide de confiance pour choisir le meilleur smartphone à moins de 300€
            </p>
          </div>

          {/* Notre Histoire */}
          <div className="glass-card mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                Top 5 Téléphones est né d'un constat simple : il est difficile de s'y retrouver dans la jungle des smartphones, 
                surtout quand on a un budget limité. Avec des centaines de modèles disponibles et des prix qui varient constamment, 
                choisir le bon téléphone devient un véritable casse-tête.
              </p>
              <p className="mb-4">
                Notre équipe de passionnés de technologie a décidé de créer un site qui simplifie ce choix. 
                Nous nous concentrons exclusivement sur les smartphones à moins de 300€, une gamme de prix 
                qui représente la majorité des achats en France.
              </p>
              <p>
                Depuis notre création, nous avons aidé des milliers d'utilisateurs à faire le bon choix 
                en leur fournissant des informations claires, objectives et à jour.
              </p>
            </div>
          </div>

          {/* Notre Mission */}
          <div className="glass-card mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-ios-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-ios-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Simplicité</h3>
                <p className="text-gray-600">
                  Simplifier le choix en présentant uniquement les meilleures options
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ios-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-ios-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Objectivité</h3>
                <p className="text-gray-600">
                  Des tests et comparaisons basés sur des critères objectifs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ios-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-ios-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Actualité</h3>
                <p className="text-gray-600">
                  Des informations et prix mis à jour régulièrement
                </p>
              </div>
            </div>
          </div>

          {/* Notre Méthodologie */}
          <div className="glass-card mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Méthodologie</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-ios-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sélection rigoureuse</h3>
                  <p className="text-gray-600">
                    Nous analysons tous les nouveaux modèles sortis dans la gamme de prix cible. 
                    Seuls les téléphones avec le meilleur rapport qualité-prix sont retenus.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-ios-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tests approfondis</h3>
                  <p className="text-gray-600">
                    Chaque téléphone est testé sur plusieurs critères : performance, autonomie, 
                    qualité photo, ergonomie et rapport qualité-prix.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-ios-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Suivi des prix</h3>
                  <p className="text-gray-600">
                    Nous surveillons quotidiennement les prix et promotions pour vous garantir 
                    les meilleures offres du moment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-ios-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mise à jour continue</h3>
                  <p className="text-gray-600">
                    Notre Top 5 est mis à jour régulièrement pour refléter les nouvelles sorties 
                    et les changements de prix.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nos Valeurs */}
          <div className="glass-card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Transparence</h3>
                <p className="text-gray-600">
                  Nous indiquons clairement nos liens d'affiliation et expliquons notre modèle économique. 
                  Notre objectif est de vous aider, pas de vous influencer.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Indépendance</h3>
                <p className="text-gray-600">
                  Nos recommandations sont basées uniquement sur la qualité des produits, 
                  pas sur les commissions que nous pourrions toucher.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Expertise</h3>
                <p className="text-gray-600">
                  Notre équipe combine des années d'expérience dans la tech et une passion 
                  pour les smartphones accessibles.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Service</h3>
                <p className="text-gray-600">
                  Nous sommes là pour vous accompagner dans votre choix, 
                  avec des outils comme notre comparateur et notre quiz personnalisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 