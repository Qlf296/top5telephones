import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Test Samsung Galaxy A14 : Le meilleur rapport qualité-prix en 2024 ?',
  description: 'Test complet du Samsung Galaxy A14. Performance, caméra, autonomie et avis détaillé pour savoir si c\'est vraiment le meilleur smartphone à moins de 300€.',
  keywords: [
    'test samsung galaxy a14',
    'samsung galaxy a14 avis',
    'samsung galaxy a14 test',
    'galaxy a14 2024',
    'samsung a14 prix',
    'test smartphone samsung'
  ],
  alternates: {
    canonical: '/test-samsung-a14',
  },
}

export default function TestSamsungGalaxyA14Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Test Samsung Galaxy A14 : Le meilleur rapport qualité-prix ?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Test complet du Samsung Galaxy A14 à 249€. Performance, caméra, autonomie et avis détaillé 
            pour savoir si c'est vraiment le meilleur smartphone à moins de 300€ en 2024.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              📱 Test complet
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              💰 Prix : 249€
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              ⭐ Note : 8.2/10
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Spécifications principales
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📱 Samsung Galaxy A14</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Prix</span>
                  <span className="font-bold text-green-600">249€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Écran</span>
                  <span className="font-medium">6.6" FHD+ PLS LCD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processeur</span>
                  <span className="font-medium">Exynos 850</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">RAM</span>
                  <span className="font-medium">4GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Batterie</span>
                  <span className="font-medium">5000mAh</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📸 Caméra</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Caméra principale</span>
                  <span className="font-medium">50MP f/1.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ultra-wide</span>
                  <span className="font-medium">5MP f/2.2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Caméra avant</span>
                  <span className="font-medium">13MP f/2.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vidéo</span>
                  <span className="font-medium">1080p 30fps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à acheter le Samsung Galaxy A14 ?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Consultez les prix actuels et trouvez la meilleure offre.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/comparateur"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Comparer les prix
              </Link>
              <Link
                href="/top-5-smartphones-300euros"
                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Voir le top 5
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 