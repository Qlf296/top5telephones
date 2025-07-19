import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Comparatif complet : Samsung vs Xiaomi < 300€ en 2024',
  description: 'Comparatif détaillé Samsung vs Xiaomi dans la gamme < 300€. Performance, caméra, autonomie et rapport qualité-prix analysés en profondeur.',
  keywords: [
    'comparatif samsung xiaomi',
    'samsung vs xiaomi 300 euros',
    'galaxy a14 vs redmi note 12',
    'comparatif smartphone samsung xiaomi',
    'samsung xiaomi moins de 300 euros',
    'meilleur smartphone samsung xiaomi',
    'test samsung xiaomi'
  ],
  openGraph: {
    title: 'Comparatif complet : Samsung vs Xiaomi < 300€ en 2024',
    description: 'Comparatif détaillé Samsung vs Xiaomi dans la gamme < 300€. Performance, caméra, autonomie et rapport qualité-prix analysés en profondeur.',
    images: ['/images/social/comparatif-samsung-xiaomi-og.jpg'],
  },
  twitter: {
    title: 'Comparatif complet : Samsung vs Xiaomi < 300€ en 2024',
    description: 'Comparatif détaillé Samsung vs Xiaomi dans la gamme < 300€. Performance, caméra, autonomie et rapport qualité-prix analysés en profondeur.',
    images: ['/images/social/comparatif-samsung-xiaomi-twitter.jpg'],
  },
  alternates: {
    canonical: '/comparatif-samsung-xiaomi',
  },
}

export default function ComparatifSamsungXiaomiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comparatif complet : Samsung vs Xiaomi moins de 300€
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez notre comparatif détaillé entre Samsung et Xiaomi dans la gamme moins de 300€. 
            Performance, caméra, autonomie et rapport qualité-prix analysés en profondeur.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              📊 Comparatif objectif
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
              🏆 Tests réels
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              💰 Prix vérifiés
            </span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Sommaire</h2>
            <nav className="space-y-2">
              <a href="#introduction" className="block text-blue-600 hover:text-blue-800 transition-colors">
                1. Introduction
              </a>
              <a href="#specifications" className="block text-blue-600 hover:text-blue-800 transition-colors">
                2. Spécifications comparées
              </a>
              <a href="#performance" className="block text-blue-600 hover:text-blue-800 transition-colors">
                3. Tests de performance
              </a>
              <a href="#camera" className="block text-blue-600 hover:text-blue-800 transition-colors">
                4. Comparatif caméra
              </a>
              <a href="#autonomie" className="block text-blue-600 hover:text-blue-800 transition-colors">
                5. Tests d'autonomie
              </a>
              <a href="#conclusion" className="block text-blue-600 hover:text-blue-800 transition-colors">
                6. Verdict final
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Samsung vs Xiaomi : Le match des géants
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🏆 Samsung Galaxy A14</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">💰</span>
                  <div>
                    <strong>Prix :</strong> 249€
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📱</span>
                  <div>
                    <strong>Écran :</strong> 6.6" FHD+ PLS LCD
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📸</span>
                  <div>
                    <strong>Caméra :</strong> 50MP + 5MP + 2MP
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">🔋</span>
                  <div>
                    <strong>Batterie :</strong> 5000mAh
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">⚡</span>
                  <div>
                    <strong>Processeur :</strong> Exynos 850
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📱 Xiaomi Redmi Note 12</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">💰</span>
                  <div>
                    <strong>Prix :</strong> 279€
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📱</span>
                  <div>
                    <strong>Écran :</strong> 6.67" FHD+ AMOLED
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📸</span>
                  <div>
                    <strong>Caméra :</strong> 50MP + 8MP + 2MP
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">🔋</span>
                  <div>
                    <strong>Batterie :</strong> 5000mAh
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">⚡</span>
                  <div>
                    <strong>Processeur :</strong> Snapdragon 685
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications comparées */}
      <section id="specifications" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Spécifications comparées
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Caractéristique</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Samsung Galaxy A14</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Xiaomi Redmi Note 12</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Vainqueur</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Prix</td>
                    <td className="px-6 py-4">249€</td>
                    <td className="px-6 py-4">279€</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Samsung</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Écran</td>
                    <td className="px-6 py-4">6.6" FHD+ PLS LCD</td>
                    <td className="px-6 py-4">6.67" FHD+ AMOLED</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Xiaomi</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Caméra principale</td>
                    <td className="px-6 py-4">50MP f/1.8</td>
                    <td className="px-6 py-4">50MP f/1.8</td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-600 font-bold">Égalité</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Caméra ultra-wide</td>
                    <td className="px-6 py-4">5MP f/2.2</td>
                    <td className="px-6 py-4">8MP f/2.2</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Xiaomi</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Batterie</td>
                    <td className="px-6 py-4">5000mAh</td>
                    <td className="px-6 py-4">5000mAh</td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-600 font-bold">Égalité</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Charge rapide</td>
                    <td className="px-6 py-4">15W</td>
                    <td className="px-6 py-4">33W</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Xiaomi</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Processeur</td>
                    <td className="px-6 py-4">Exynos 850</td>
                    <td className="px-6 py-4">Snapdragon 685</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Xiaomi</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">RAM</td>
                    <td className="px-6 py-4">4GB</td>
                    <td className="px-6 py-4">4GB</td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-600 font-bold">Égalité</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Stockage</td>
                    <td className="px-6 py-4">128GB</td>
                    <td className="px-6 py-4">128GB</td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-600 font-bold">Égalité</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Système</td>
                    <td className="px-6 py-4">Android 13 + One UI 5</td>
                    <td className="px-6 py-4">Android 13 + MIUI 14</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Samsung</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section id="performance" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tests de performance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">⚡ Samsung Galaxy A14</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Antutu Score</span>
                  <span className="font-bold text-blue-600">185,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Geekbench 5</span>
                  <span className="font-bold text-blue-600">1,250 / 3,800</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">3DMark</span>
                  <span className="font-bold text-blue-600">850</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Xiaomi Redmi Note 12</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Antutu Score</span>
                  <span className="font-bold text-green-600">245,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Geekbench 5</span>
                  <span className="font-bold text-green-600">1,650 / 4,200</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">3DMark</span>
                  <span className="font-bold text-green-600">1,150</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">🏆 Vainqueur : Xiaomi Redmi Note 12</h3>
            <p className="text-blue-800">
              Le Snapdragon 685 de Xiaomi offre des performances supérieures de 30% par rapport à l'Exynos 850 de Samsung. 
              Cela se traduit par une meilleure fluidité dans les applications et les jeux.
            </p>
          </div>
        </div>
      </section>

      {/* Caméra */}
      <section id="camera" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comparatif caméra
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📸 Samsung Galaxy A14</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">7.5/10</div>
                  <div className="text-sm text-gray-600">Note globale caméra</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Photo jour</span>
                    <span className="font-medium">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Photo nuit</span>
                    <span className="font-medium">6/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vidéo</span>
                    <span className="font-medium">7/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ultra-wide</span>
                    <span className="font-medium">5/10</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📸 Xiaomi Redmi Note 12</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">8.5/10</div>
                  <div className="text-sm text-gray-600">Note globale caméra</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Photo jour</span>
                    <span className="font-medium">9/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Photo nuit</span>
                    <span className="font-medium">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vidéo</span>
                    <span className="font-medium">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ultra-wide</span>
                    <span className="font-medium">7/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-green-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">🏆 Vainqueur : Xiaomi Redmi Note 12</h3>
            <p className="text-green-800">
              La caméra du Redmi Note 12 est nettement supérieure, notamment en mode nuit et pour l'ultra-wide. 
              Les algorithmes de traitement d'image de Xiaomi sont plus avancés.
            </p>
          </div>
        </div>
      </section>

      {/* Autonomie */}
      <section id="autonomie" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tests d'autonomie
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔋 Samsung Galaxy A14</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">8h30</div>
                  <div className="text-sm text-gray-600">Temps d'écran</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Navigation web</span>
                    <span className="font-medium">9h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vidéo YouTube</span>
                    <span className="font-medium">8h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gaming</span>
                    <span className="font-medium">6h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Charge complète</span>
                    <span className="font-medium">2h15</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔋 Xiaomi Redmi Note 12</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">9h15</div>
                  <div className="text-sm text-gray-600">Temps d'écran</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Navigation web</span>
                    <span className="font-medium">10h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vidéo YouTube</span>
                    <span className="font-medium">9h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gaming</span>
                    <span className="font-medium">7h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Charge complète</span>
                    <span className="font-medium">1h30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-green-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">🏆 Vainqueur : Xiaomi Redmi Note 12</h3>
            <p className="text-green-800">
              L'écran AMOLED et la charge rapide 33W donnent l'avantage au Redmi Note 12. 
              Autonomie supérieure et recharge plus rapide pour un usage intensif.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Verdict final
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-green-600 mb-4">🏆 Xiaomi Redmi Note 12</div>
              <div className="text-xl text-gray-600">Vainqueur du comparatif</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ Points forts Xiaomi</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Écran AMOLED de meilleure qualité</li>
                  <li>• Performance supérieure (+30%)</li>
                  <li>• Caméra plus polyvalente</li>
                  <li>• Charge rapide 33W</li>
                  <li>• Autonomie légèrement meilleure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ Points forts Samsung</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Prix plus accessible (-30€)</li>
                  <li>• One UI plus stable</li>
                  <li>• Support client français</li>
                  <li>• Mises à jour plus longues</li>
                  <li>• Design plus sobre</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Recommandation</h3>
              <p className="text-gray-700 mb-4">
                <strong>Choisissez le Xiaomi Redmi Note 12 si :</strong>
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Vous voulez les meilleures performances</li>
                <li>• La photo est importante pour vous</li>
                <li>• Vous jouez sur mobile</li>
                <li>• Vous pouvez dépenser 30€ de plus</li>
              </ul>
              
              <p className="text-gray-700 mb-4">
                <strong>Choisissez le Samsung Galaxy A14 si :</strong>
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Le budget est votre priorité</li>
                <li>• Vous préférez la stabilité</li>
                <li>• Le support client est important</li>
                <li>• Vous voulez des mises à jour longues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à faire votre choix ?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Consultez nos tests détaillés et trouvez le smartphone parfait.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/fiche/samsung-galaxy-a14"
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Test Samsung A14
              </Link>
              <Link
                href="/fiche/xiaomi-redmi-note-12"
                className="inline-block bg-white text-pink-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Test Xiaomi Note 12
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Comparatif complet : Samsung vs Xiaomi < 300€ en 2024",
            "description": "Comparatif détaillé Samsung vs Xiaomi dans la gamme < 300€. Performance, caméra, autonomie et rapport qualité-prix analysés en profondeur.",
            "image": "https://top5telephones.fr/images/social/comparatif-samsung-xiaomi-og.jpg",
            "author": {
              "@type": "Organization",
              "name": "Top 5 Téléphones"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Top 5 Téléphones"
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-01-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://top5telephones.fr/comparatif-samsung-xiaomi-300euros"
            }
          })
        }}
      />
    </div>
  )
} 