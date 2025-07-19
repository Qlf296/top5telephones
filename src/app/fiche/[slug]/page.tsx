import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPhoneBySlug, getAllPhones } from '@/data/phones';
import { formatPrice, calculateDiscount, generateStars, formatDate } from '@/lib/utils';
import FicheImageSection from '@/components/FicheImageSection';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const phone = getPhoneBySlug(slug);
  
  if (!phone) {
    return {
      title: 'Téléphone non trouvé',
    };
  }

  return {
    title: `${phone.name} - Fiche détaillée`,
    description: phone.description,
    openGraph: {
      title: `${phone.name} - Fiche détaillée`,
      description: phone.description,
      images: [phone.image],
    },
  };
}

export async function generateStaticParams() {
  const phones = getAllPhones();
  return phones.map((phone) => ({
    slug: phone.slug,
  }));
}

export default async function FichePage(props: PageProps) {
  const { slug } = await props.params;
  const phone = getPhoneBySlug(slug);

  if (!phone) {
    notFound();
  }

  const discount = phone.originalPrice ? calculateDiscount(phone.originalPrice, phone.price) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue-50 to-white">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-ios-blue-600 transition-colors">
                  Accueil
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/comparateur" className="hover:text-ios-blue-600 transition-colors">
                  Comparateur
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{phone.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="space-y-6">
              <FicheImageSection phone={phone} discount={discount} />

              {/* Rating */}
              <div className="glass-card">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-yellow-400 text-lg">{generateStars(phone.rating)}</span>
                      <span className="text-gray-600">({phone.rating}/5)</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Basé sur nos tests et avis utilisateurs
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Dernière mise à jour</p>
                    <p className="text-sm font-medium text-gray-900">{formatDate(phone.lastUpdated)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <span className="text-ios-blue-600 text-sm font-medium">{phone.brand}</span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{phone.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{phone.description}</p>
                
                {/* Price */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-gray-900">{formatPrice(phone.price)}</span>
                  {phone.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">{formatPrice(phone.originalPrice)}</span>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={phone.affiliateLinks.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-ios-blue-500 hover:bg-ios-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shadow-glass-light"
                  >
                    Acheter sur Amazon
                  </a>
                  {phone.affiliateLinks.cdiscount && (
                    <a
                      href={phone.affiliateLinks.cdiscount}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Acheter sur CDiscount
                    </a>
                  )}
                </div>
              </div>

              {/* Specifications */}
              <div className="glass-card">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Spécifications techniques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-900">Écran:</span>
                      <p className="text-gray-600">{phone.specs.screen}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Processeur:</span>
                      <p className="text-gray-600">{phone.specs.processor}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">RAM:</span>
                      <p className="text-gray-600">{phone.specs.ram}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Stockage:</span>
                      <p className="text-gray-600">{phone.specs.storage}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-900">Caméra:</span>
                      <p className="text-gray-600">{phone.specs.camera}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Batterie:</span>
                      <p className="text-gray-600">{phone.specs.battery}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Système:</span>
                      <p className="text-gray-600">{phone.specs.os}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Points forts
                  </h3>
                  <ul className="space-y-2">
                    {phone.pros.map((pro, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    Points faibles
                  </h3>
                  <ul className="space-y-2">
                    {phone.cons.map((con, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verdict */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notre avis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Le {phone.name} offre un excellent rapport qualité-prix dans la gamme des smartphones à moins de 300€. 
                  Avec ses {phone.specs.screen.toLowerCase()}, son {phone.specs.processor} et sa {phone.specs.battery}, 
                  il convient parfaitement pour un usage quotidien. {phone.description}
                </p>
              </div>
            </div>
          </div>

          {/* Related Phones */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Autres téléphones à découvrir</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {getAllPhones()
                .filter(p => p.id !== phone.id)
                .slice(0, 3)
                .map((relatedPhone) => (
                  <a
                    key={relatedPhone.id}
                    href={`/fiche/${relatedPhone.slug}`}
                    className="glass-card hover:shadow-glass transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] mb-3 sm:mb-4 rounded-lg sm:rounded-xl overflow-hidden bg-white">
                      <Image
                        src={relatedPhone.image}
                        alt={relatedPhone.name}
                        fill
                        className="object-contain p-2 sm:p-3 transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base leading-tight">{relatedPhone.name}</h3>
                    <p className="text-ios-blue-600 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{formatPrice(relatedPhone.price)}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400 text-xs sm:text-sm">{generateStars(relatedPhone.rating)}</span>
                      <span className="text-gray-600 text-xs sm:text-sm">({relatedPhone.rating})</span>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 