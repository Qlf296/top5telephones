import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { phones } from '@/data/phones'

export const metadata: Metadata = {
  title: 'Top 5 Smartphones à moins de 300€ en 2024 - Comparatif Complet',
  description: 'Découvrez les 5 meilleurs smartphones à moins de 300€ en 2024. Comparatif détaillé, tests complets et guide d\'achat pour choisir le meilleur rapport qualité-prix.',
  keywords: [
    'smartphone moins de 300 euros',
    'meilleur téléphone pas cher 2024',
    'comparatif smartphone 300 euros',
    'top 5 smartphone pas cher',
    'samsung galaxy a14',
    'xiaomi redmi note 12',
    'motorola moto g84',
    'nokia g60',
    'realme 10'
  ],
  openGraph: {
    title: 'Top 5 Smartphones à moins de 300€ en 2024 - Comparatif Complet',
    description: 'Découvrez les 5 meilleurs smartphones à moins de 300€ en 2024. Comparatif détaillé, tests complets et guide d\'achat.',
    images: ['/images/social/top-5-smartphones-og.jpg'],
  },
  twitter: {
    title: 'Top 5 Smartphones à moins de 300€ en 2024 - Comparatif Complet',
    description: 'Découvrez les 5 meilleurs smartphones à moins de 300€ en 2024. Comparatif détaillé, tests complets et guide d\'achat.',
    images: ['/images/social/top-5-smartphones-twitter.jpg'],
  },
  alternates: {
    canonical: '/top-5-smartphones-300euros',
  },
}

export default function Top5SmartphonesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top 5 Smartphones à moins de 300€ en 2024
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez notre sélection des 5 meilleurs smartphones à moins de 300€ en 2024. 
            Comparatif détaillé, tests complets et guide d'achat pour faire le bon choix.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              ✅ Tests réels
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              💰 Prix vérifiés
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              📊 Comparatif objectif
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
              <a href="#criteres" className="block text-blue-600 hover:text-blue-800 transition-colors">
                1. Nos critères de sélection
              </a>
              <a href="#top-5" className="block text-blue-600 hover:text-blue-800 transition-colors">
                2. Top 5 smartphones à moins de 300€
              </a>
              <a href="#comparatif" className="block text-blue-600 hover:text-blue-800 transition-colors">
                3. Comparatif détaillé
              </a>
              <a href="#guide-achat" className="block text-blue-600 hover:text-blue-800 transition-colors">
                4. Guide d'achat
              </a>
              <a href="#faq" className="block text-blue-600 hover:text-blue-800 transition-colors">
                5. Questions fréquentes
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Critères de sélection */}
      <section id="criteres" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos critères de sélection
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📱 Performance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Processeur performant pour usage quotidien</li>
                <li>• 4GB RAM minimum pour fluidité</li>
                <li>• Stockage 64GB minimum</li>
                <li>• Tests de vitesse réels</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📸 Caméra</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Capteur principal 48MP minimum</li>
                <li>• Mode nuit performant</li>
                <li>• Vidéo 1080p fluide</li>
                <li>• Tests photo réels</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔋 Autonomie</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Batterie 4000mAh minimum</li>
                <li>• Charge rapide 18W+</li>
                <li>• Tests d'autonomie réels</li>
                <li>• Optimisation logicielle</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Rapport qualité-prix</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Prix vérifié et actualisé</li>
                <li>• Fonctionnalités premium</li>
                <li>• Durabilité estimée</li>
                <li>• Support constructeur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top 5 Smartphones */}
      <section id="top-5" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Top 5 smartphones à moins de 300€
          </h2>
          <div className="space-y-8">
            {phones.map((phone, index) => (
              <div key={phone.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600 mr-4">#{index + 1}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{phone.name}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={phone.image}
                        alt={phone.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div>
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-green-600">{phone.price}€</span>
                        <span className="text-gray-500 ml-2">prix actuel</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Écran</span>
                          <span className="font-medium">{phone.specs.screen}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Caméra</span>
                          <span className="font-medium">{phone.specs.camera}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Batterie</span>
                          <span className="font-medium">{phone.specs.battery}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processeur</span>
                          <span className="font-medium">{phone.specs.processor}</span>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Link
                          href={`/fiche/${phone.slug}`}
                          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                          Voir le test complet
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif détaillé */}
      <section id="comparatif" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comparatif détaillé
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Modèle</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Prix</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Écran</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Caméra</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Batterie</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {phones.map((phone, index) => (
                    <tr key={phone.slug} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-lg font-bold text-blue-600 mr-3">#{index + 1}</span>
                          <span className="font-medium">{phone.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-green-600">{phone.price}€</span>
                      </td>
                      <td className="px-6 py-4 text-sm">{phone.specs.screen}</td>
                      <td className="px-6 py-4 text-sm">{phone.specs.camera}</td>
                      <td className="px-6 py-4 text-sm">{phone.specs.battery}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-yellow-400">★★★★★</span>
                          <span className="ml-2 text-sm text-gray-600">4.{9-index}.0</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Guide d'achat */}
      <section id="guide-achat" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Guide d'achat - Comment choisir ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Pour quel usage ?</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📱</span>
                  <div>
                    <strong>Usage quotidien :</strong> Samsung Galaxy A14
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📸</span>
                  <div>
                    <strong>Photographie :</strong> Xiaomi Redmi Note 12
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">🎮</span>
                  <div>
                    <strong>Gaming :</strong> Motorola Moto G84
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">💼</span>
                  <div>
                    <strong>Professionnel :</strong> Nokia G60
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Budget conseillé</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Moins de 200€</span>
                  <span className="text-red-600">Limité</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>200-250€</span>
                  <span className="text-orange-600">Correct</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>250-300€</span>
                  <span className="text-green-600">Optimal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Plus de 300€</span>
                  <span className="text-blue-600">Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quel est le meilleur smartphone à moins de 300€ ?
              </h3>
              <p className="text-gray-600">
                Le Samsung Galaxy A14 se distingue par son excellent rapport qualité-prix, 
                sa caméra performante et sa batterie durable. C'est notre recommandation numéro 1.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Les smartphones à moins de 300€ sont-ils fiables ?
              </h3>
              <p className="text-gray-600">
                Oui, les constructeurs proposent aujourd'hui des modèles très fiables dans cette gamme. 
                La qualité des matériaux et la durée de vie ont considérablement progressé.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quand faut-il changer de smartphone ?
              </h3>
              <p className="text-gray-600">
                En moyenne, un smartphone moderne peut durer 3-4 ans avec un usage normal. 
                Les signes de vieillissement : batterie qui se dégrade, lenteurs, mises à jour arrêtées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à choisir votre smartphone ?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Consultez nos tests détaillés et trouvez le modèle parfait pour vos besoins.
            </p>
            <Link
              href="/comparateur"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Comparer les smartphones
            </Link>
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
            "headline": "Top 5 Smartphones à moins de 300€ en 2024 - Comparatif Complet",
            "description": "Découvrez les 5 meilleurs smartphones à moins de 300€ en 2024. Comparatif détaillé, tests complets et guide d'achat pour choisir le meilleur rapport qualité-prix.",
            "image": "https://top5telephones.fr/images/social/top-5-smartphones-og.jpg",
            "author": {
              "@type": "Organization",
              "name": "Top 5 Téléphones"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Top 5 Téléphones",
              "logo": {
                "@type": "ImageObject",
                "url": "https://top5telephones.fr/images/logo.png"
              }
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-01-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://top5telephones.fr/top-5-smartphones-300euros"
            }
          })
        }}
      />
    </div>
  )
} 