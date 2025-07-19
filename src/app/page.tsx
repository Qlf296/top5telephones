import { Metadata } from 'next';
import { getTop5Phones } from '@/data/phones';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Top 5 Téléphones à moins de 300€ - Meilleurs Smartphones 2024',
  description: 'Découvrez les 5 meilleurs smartphones à moins de 300€. Comparaisons détaillées, tests et conseils d\'achat pour faire le bon choix en 2024.',
  keywords: 'smartphone moins de 300 euros, meilleur téléphone pas cher, comparatif smartphone, achat téléphone',
  openGraph: {
    title: 'Top 5 Téléphones à moins de 300€',
    description: 'Les meilleurs smartphones à moins de 300€ en 2024',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 5 Téléphones à moins de 300€',
    description: 'Les meilleurs smartphones à moins de 300€ en 2024',
  },
};

export default function HomePage() {
  const top5Phones = getTop5Phones();

  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue-50 to-white">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Top 5 Téléphones
              <span className="block text-ios-blue-600">à moins de 300€</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Découvrez les meilleurs smartphones dans cette gamme de prix. 
              Comparaisons détaillées, tests et conseils d'achat pour faire le bon choix.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a 
                href="#top5" 
                className="bg-ios-blue-500 hover:bg-ios-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-glass-light"
              >
                Voir le Top 5
              </a>
              <a 
                href="/comparateur" 
                className="bg-white hover:bg-gray-50 text-ios-blue-600 border border-ios-blue-500 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Comparer
              </a>
            </div>
          </div>
        </section>

        {/* Top 5 Section */}
        <section id="top5" className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Les 5 Meilleurs Téléphones
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Sélection rigoureuse basée sur les performances, la qualité et le rapport qualité-prix
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {top5Phones.map((phone, index) => (
                <div key={phone.id} className="bg-glass-white backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-glass-light border border-glass-light hover:shadow-glass transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] mb-4 rounded-lg sm:rounded-xl overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src={phone.image}
                      alt={phone.name}
                      fill
                      className="object-contain p-2 sm:p-4 transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={index < 3}
                    />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <span className="text-ios-blue-600 text-xs sm:text-sm font-medium">{phone.brand}</span>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">{phone.name}</h3>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">{phone.price}€</span>
                    </div>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">Points forts:</h4>
                      <ul className="space-y-1">
                        {phone.pros.slice(0, 2).map((pro, index) => (
                          <li key={index} className="text-xs sm:text-sm text-gray-600 flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                            <span className="leading-relaxed">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <a
                        href={`/fiche/${phone.slug}`}
                        className="flex-1 bg-ios-blue-500 hover:bg-ios-blue-600 text-white text-center py-2 px-3 sm:px-4 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                      >
                        Voir détails
                      </a>
                      <a
                        href={phone.affiliateLinks.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 text-center py-2 px-3 sm:px-4 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                      >
                        Acheter
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 