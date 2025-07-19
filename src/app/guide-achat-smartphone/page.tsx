import type { Metadata } from 'next'
import Link from 'next/link'

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
}

export default function GuideAchatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guide d'achat : Choisir son smartphone pas cher en 2024
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez notre guide complet pour choisir le meilleur smartphone pas cher en 2024. 
            Critères essentiels, pièges à éviter et conseils d'expert pour faire le bon choix.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              ✅ Guide expert
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              💰 Économies garanties
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              🎯 Conseils pratiques
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Critères essentiels pour choisir
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Budget</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 150-200€ : Entrée de gamme</li>
                <li>• 200-300€ : Meilleur rapport qualité-prix</li>
                <li>• 300-400€ : Premium abordable</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📱 Écran</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 6.1" - 6.7" idéal</li>
                <li>• Résolution Full HD+ minimum</li>
                <li>• AMOLED pour meilleure qualité</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔋 Batterie</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 4000mAh minimum</li>
                <li>• Charge rapide 18W+</li>
                <li>• 1-2 jours d'autonomie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à choisir votre smartphone ?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Consultez nos comparatifs détaillés et trouvez le modèle parfait.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/top-5-smartphones-300euros"
                className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Voir le top 5
              </Link>
              <Link
                href="/comparateur"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Comparer les modèles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 