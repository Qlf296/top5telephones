import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionShell } from '@/components/ui/SectionShell'
import { GlassCard } from '@/components/ui/GlassCard'
import { Pill } from '@/components/ui/Pill'
import { Button } from '@/components/ui/Button'
import ArticleSchema from '@/components/seo/ArticleSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Comparatif complet : Samsung vs Xiaomi < 300€ en 2025',
  description: 'Comparatif détaillé Samsung Galaxy A35 5G vs Xiaomi Redmi Note 14 5G dans la gamme < 300€. Performance, caméra, autonomie et rapport qualité-prix analysés en profondeur.',
  keywords: [
    'comparatif samsung xiaomi',
    'samsung vs xiaomi 300 euros',
    'galaxy a35 5g vs redmi note 14 5g',
    'comparatif smartphone samsung xiaomi',
    'samsung xiaomi moins de 300 euros',
    'meilleur smartphone samsung xiaomi',
    'test samsung xiaomi 2025'
  ],
  openGraph: {
    title: 'Comparatif complet : Samsung vs Xiaomi < 300€ en 2025',
    description: 'Comparatif détaillé Samsung Galaxy A35 5G vs Xiaomi Redmi Note 14 5G dans la gamme < 300€. Performance, caméra, autonomie et rapport qualité-prix analysés en profondeur.',
    url: 'https://top5telephones.fr/comparatif-samsung-xiaomi',
    type: 'article',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Comparatif Samsung Galaxy A35 5G vs Xiaomi Redmi Note 14 5G - Top 5 Téléphones',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparatif complet : Samsung vs Xiaomi < 300€ en 2025',
    description: 'Comparatif détaillé Samsung Galaxy A35 5G vs Xiaomi Redmi Note 14 5G dans la gamme < 300€. Performance, caméra, autonomie et rapport qualité-prix analysés en profondeur.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/comparatif-samsung-xiaomi',
  },
}

export default function ComparatifSamsungXiaomiPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionShell
        eyebrow="Comparatif détaillé"
        title="Samsung vs Xiaomi moins de 300€"
        subtitle="Découvrez notre comparatif détaillé entre Samsung et Xiaomi dans la gamme moins de 300€. Performance, caméra, autonomie et rapport qualité-prix analysés en profondeur."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <Pill className="bg-purple-500/10 text-purple-700 border-purple-500/20">
              📊 Comparatif objectif
          </Pill>
          <Pill className="bg-pink-500/10 text-pink-700 border-pink-500/20">
              🏆 Tests réels
          </Pill>
          <Pill className="bg-ios-blue-500/10 text-ios-blue-700 border-ios-blue-500/20">
              💰 Prix vérifiés
          </Pill>
        </div>
      </SectionShell>

      {/* Table of Contents */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">📋 Sommaire</h2>
            <nav className="space-y-3">
              <a href="#introduction" className="block text-ios-blue-600 hover:text-ios-blue-700 transition-colors font-medium">
                1. Introduction
              </a>
              <a href="#specifications" className="block text-ios-blue-600 hover:text-ios-blue-700 transition-colors font-medium">
                2. Spécifications comparées
              </a>
              <a href="#performance" className="block text-ios-blue-600 hover:text-ios-blue-700 transition-colors font-medium">
                3. Tests de performance
              </a>
              <a href="#camera" className="block text-ios-blue-600 hover:text-ios-blue-700 transition-colors font-medium">
                4. Comparatif caméra
              </a>
              <a href="#autonomie" className="block text-ios-blue-600 hover:text-ios-blue-700 transition-colors font-medium">
                5. Tests d'autonomie
              </a>
              <a href="#conclusion" className="block text-ios-blue-600 hover:text-ios-blue-700 transition-colors font-medium">
                6. Verdict final
              </a>
            </nav>
          </GlassCard>
        </div>
      </section>

      {/* Introduction */}
      <SectionShell
        id="introduction"
        eyebrow="Introduction"
        title="Samsung vs Xiaomi : Le match des géants"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">🏆 Samsung Galaxy A35 5G</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">💰</span>
                  <div>
                    <strong>Prix :</strong> 290€
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📱</span>
                  <div>
                    <strong>Écran :</strong> 6.6" FHD+ Super AMOLED 120Hz
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📸</span>
                  <div>
                    <strong>Caméra :</strong> 50MP + 8MP + 5MP (OIS)
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
                    <strong>Processeur :</strong> Exynos 1380
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📶</span>
                  <div>
                    <strong>5G :</strong> Oui
                  </div>
                </div>
              </div>
          </GlassCard>
            <GlassCard className="p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">📱 Xiaomi Redmi Note 14 5G</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">💰</span>
                  <div>
                    <strong>Prix :</strong> 260€
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📱</span>
                  <div>
                    <strong>Écran :</strong> 6.67" FHD+ AMOLED 120Hz
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
                    <strong>Processeur :</strong> Snapdragon 4 Gen 2
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📶</span>
                  <div>
                    <strong>5G :</strong> Oui
                  </div>
                </div>
              </div>
          </GlassCard>
        </div>
      </SectionShell>

      {/* Spécifications comparées */}
      <SectionShell
        id="specifications"
        eyebrow="Spécifications"
        title="Spécifications comparées"
      >
        <GlassCard className="p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50/80">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Caractéristique</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Samsung Galaxy A35 5G</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Xiaomi Redmi Note 14 5G</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Vainqueur</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-white/60 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Prix</td>
                    <td className="px-6 py-4 text-slate-600">249€</td>
                    <td className="px-6 py-4 text-slate-600">279€</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Samsung</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/60 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Écran</td>
                    <td className="px-6 py-4 text-slate-600">6.6" FHD+ PLS LCD</td>
                    <td className="px-6 py-4 text-slate-600">6.67" FHD+ AMOLED</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Xiaomi</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/60 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Caméra principale</td>
                    <td className="px-6 py-4 text-slate-600">50MP f/1.8</td>
                    <td className="px-6 py-4 text-slate-600">50MP f/1.8</td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-600 font-bold">Égalité</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/60 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Caméra ultra-wide</td>
                    <td className="px-6 py-4 text-slate-600">5MP f/2.2</td>
                    <td className="px-6 py-4 text-slate-600">8MP f/2.2</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Xiaomi</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/60 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Batterie</td>
                    <td className="px-6 py-4 text-slate-600">5000mAh</td>
                    <td className="px-6 py-4 text-slate-600">5000mAh</td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-600 font-bold">Égalité</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/60 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Charge rapide</td>
                    <td className="px-6 py-4 text-slate-600">15W</td>
                    <td className="px-6 py-4 text-slate-600">33W</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Xiaomi</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/60 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Processeur</td>
                    <td className="px-6 py-4 text-slate-600">Exynos 850</td>
                    <td className="px-6 py-4 text-slate-600">Snapdragon 685</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Xiaomi</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/60">
                    <td className="px-6 py-4 font-medium">RAM</td>
                    <td className="px-6 py-4">4GB</td>
                    <td className="px-6 py-4">4GB</td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-600 font-bold">Égalité</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/60">
                    <td className="px-6 py-4 font-medium">Stockage</td>
                    <td className="px-6 py-4">128GB</td>
                    <td className="px-6 py-4">128GB</td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-600 font-bold">Égalité</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/60">
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
        </GlassCard>
      </SectionShell>

      {/* Performance */}
      <section id="performance" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Tests de performance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">⚡ Samsung Galaxy A35 5G</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Antutu Score</span>
                  <span className="font-bold text-blue-600">420,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Geekbench 6</span>
                  <span className="font-bold text-blue-600">1,150 / 3,200</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">3DMark</span>
                  <span className="font-bold text-blue-600">2,800</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🚀 Xiaomi Redmi Note 14 5G</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Antutu Score</span>
                  <span className="font-bold text-green-600">380,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Geekbench 6</span>
                  <span className="font-bold text-green-600">1,050 / 2,900</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">3DMark</span>
                  <span className="font-bold text-green-600">2,500</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </GlassCard>
          </div>
          <GlassCard className="mt-8 p-6 bg-blue-50/80 border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-3">🏆 Vainqueur : Samsung Galaxy A35 5G</h3>
            <p className="text-blue-800">
              L'Exynos 1380 de Samsung offre des performances légèrement supérieures au Snapdragon 4 Gen 2 de Xiaomi. 
              Cela se traduit par une meilleure fluidité dans les applications et les jeux, avec un avantage pour le gaming.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Caméra */}
      <section id="camera" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Comparatif caméra
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📸 Samsung Galaxy A35 5G</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">7.5/10</div>
                  <div className="text-sm text-slate-600">Note globale caméra</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Photo jour</span>
                    <span className="font-medium">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Photo nuit</span>
                    <span className="font-medium">6/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Vidéo</span>
                    <span className="font-medium">7/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Ultra-wide</span>
                    <span className="font-medium">5/10</span>
                  </div>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📸 Xiaomi Redmi Note 14 5G</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">8.5/10</div>
                  <div className="text-sm text-slate-600">Note globale caméra</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Photo jour</span>
                    <span className="font-medium">9/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Photo nuit</span>
                    <span className="font-medium">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Vidéo</span>
                    <span className="font-medium">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Ultra-wide</span>
                    <span className="font-medium">7/10</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          <GlassCard className="mt-8 p-6 bg-green-50/80 border-green-200">
            <h3 className="text-lg font-bold text-blue-900 mb-3">🏆 Vainqueur : Samsung Galaxy A35 5G</h3>
            <p className="text-blue-800">
              La caméra du Galaxy A35 5G avec stabilisation optique (OIS) offre une meilleure qualité photo, notamment en faible luminosité. 
              Les algorithmes de traitement d'image de Samsung sont excellents.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Autonomie */}
      <section id="autonomie" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Tests d'autonomie
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🔋 Samsung Galaxy A35 5G</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">8h30</div>
                  <div className="text-sm text-slate-600">Temps d'écran</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Navigation web</span>
                    <span className="font-medium">9h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Vidéo YouTube</span>
                    <span className="font-medium">8h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Gaming</span>
                    <span className="font-medium">6h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Charge complète</span>
                    <span className="font-medium">2h15</span>
                  </div>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🔋 Xiaomi Redmi Note 14 5G</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">9h15</div>
                  <div className="text-sm text-slate-600">Temps d'écran</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Navigation web</span>
                    <span className="font-medium">10h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Vidéo YouTube</span>
                    <span className="font-medium">9h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Gaming</span>
                    <span className="font-medium">7h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Charge complète</span>
                    <span className="font-medium">1h30</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          <GlassCard className="mt-8 p-6 bg-green-50/80 border-green-200">
            <h3 className="text-lg font-bold text-green-900 mb-3">🏆 Vainqueur : Xiaomi Redmi Note 12</h3>
            <p className="text-green-800">
              Les deux offrent d'excellentes autonomies, avec un léger avantage au Redmi Note 14 5G grâce à sa charge rapide 33W. 
              Autonomie supérieure et recharge plus rapide pour un usage intensif.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Verdict final
          </h2>
          <GlassCard className="p-8">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-green-600 mb-4">🏆 Xiaomi Redmi Note 14 5G</div>
              <div className="text-xl text-slate-600">Vainqueur du comparatif</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">✅ Points forts Xiaomi</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Prix plus accessible (-30€)</li>
                  <li>• Écran AMOLED 120Hz fluide</li>
                  <li>• Charge rapide 33W</li>
                  <li>• 5G intégré</li>
                  <li>• Excellent rapport qualité-prix</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">✅ Points forts Samsung</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Écran Super AMOLED 120Hz premium</li>
                  <li>• Caméra 50MP avec OIS (stabilisation optique)</li>
                  <li>• One UI 6.1 plus stable</li>
                  <li>• Garantie Samsung 2 ans</li>
                  <li>• Mises à jour Android longues</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">🎯 Recommandation</h3>
              <p className="text-gray-700 mb-4">
                <strong>Choisissez le Xiaomi Redmi Note 14 5G si :</strong>
              </p>
              <ul className="space-y-2 text-slate-600 mb-4">
                <li>• Le budget est votre priorité (30€ de moins)</li>
                <li>• Vous voulez un excellent rapport qualité-prix</li>
                <li>• La charge rapide est importante</li>
                <li>• Vous préférez MIUI</li>
              </ul>
              
              <p className="text-gray-700 mb-4">
                <strong>Choisissez le Samsung Galaxy A35 5G si :</strong>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• La qualité photo avec stabilisation est importante</li>
                <li>• Vous préférez la stabilité et la fiabilité</li>
                <li>• Le support client et la garantie sont importants</li>
                <li>• Vous voulez des mises à jour Android longues</li>
              </ul>
            </div>
          </GlassCard>
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
                href="/fiche/samsung-galaxy-a35-5g"
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Test Samsung A35 5G
              </Link>
              <Link
                href="/fiche/xiaomi-redmi-note-14-5g"
                className="inline-block bg-white text-pink-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Test Xiaomi Note 14 5G
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <ArticleSchema
        headline="Comparatif complet : Samsung vs Xiaomi < 300€ en 2025"
        description="Comparatif détaillé Samsung Galaxy A35 5G vs Xiaomi Redmi Note 14 5G dans la gamme < 300€. Performance, caméra, autonomie et rapport qualité-prix analysés en profondeur."
        image="https://top5telephones.fr/images/og-image.jpg"
        url="https://top5telephones.fr/comparatif-samsung-xiaomi"
        datePublished="2025-01-20"
        dateModified="2025-01-20"
      />
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://top5telephones.fr/' },
        { name: 'Comparatif Samsung vs Xiaomi', url: 'https://top5telephones.fr/comparatif-samsung-xiaomi' },
      ]} />
    </div>
  )
} 