import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPhoneBySlug, getAllPhones } from '@/data/phones';
import { formatPrice, calculateDiscount, generateStars, formatDate } from '@/lib/utils';
import FicheImageSection from '@/components/FicheImageSection';
import ProductSchema from '@/components/ProductSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionShell } from '@/components/ui/SectionShell';
import { Pill } from '@/components/ui/Pill';
import { ColorSelector } from '@/components/ui/ColorSelector';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const phone = getPhoneBySlug(slug);
  
  if (!phone) {
    return {
      title: 'Téléphone non trouvé',
    };
  }

  const baseUrl = 'https://top5telephones.fr';
  const phoneUrl = `${baseUrl}/fiche/${phone.slug}`;
  const phoneImage = phone.image.startsWith('http') ? phone.image : `${baseUrl}${phone.image}`;

  return {
    title: `${phone.name} - Fiche détaillée | Top 5 Téléphones`,
    description: phone.description || `Découvrez le ${phone.name}, un smartphone ${phone.brand} avec ${phone.specs.screen}, ${phone.specs.camera}, ${phone.specs.storage} et ${phone.specs.battery}. Prix : ${phone.price}€.`,
    keywords: [
      phone.name.toLowerCase(),
      `${phone.brand} ${phone.name}`,
      'smartphone pas cher',
      'téléphone moins de 300€',
      phone.specs.screen.toLowerCase(),
      phone.specs.camera.toLowerCase(),
    ],
    alternates: {
      canonical: `/fiche/${phone.slug}`,
    },
    openGraph: {
      title: `${phone.name} - Fiche détaillée | Top 5 Téléphones`,
      description: phone.description || `Découvrez le ${phone.name}, un smartphone ${phone.brand} à ${phone.price}€.`,
      url: phoneUrl,
      type: 'website',
      images: [{
        url: phoneImage,
        width: 1200,
        height: 630,
        alt: `${phone.name} - ${phone.brand}`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${phone.name} - Fiche détaillée`,
      description: phone.description || `Découvrez le ${phone.name}, un smartphone ${phone.brand} à ${phone.price}€.`,
      images: [phoneImage],
    },
    robots: {
      index: true,
      follow: true,
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
  const baseUrl = 'https://top5telephones.fr';
  
  const breadcrumbs = [
    { name: 'Accueil', url: `${baseUrl}/` },
    { name: 'Fiches produits', url: `${baseUrl}/top-5-smartphones-300euros` },
    { name: phone.name, url: `${baseUrl}/fiche/${phone.slug}` },
  ];

  return (
    <>
      <ProductSchema phone={phone} />
      <div className="space-y-12 sm:space-y-16">
          {/* Breadcrumb */}
        <nav className="px-4 sm:px-6 lg:px-8 pt-4">
          <ol className="flex items-center space-x-2 text-sm text-slate-600 max-w-7xl mx-auto">
              <li>
              <Link href="/" className="hover:text-ios-blue-600 transition-colors">
                  Accueil
              </Link>
              </li>
              <li>/</li>
              <li>
              <Link href="/comparateur" className="hover:text-ios-blue-600 transition-colors">
                  Comparateur
              </Link>
              </li>
              <li>/</li>
            <li className="text-slate-900 font-medium">{phone.name}</li>
            </ol>
          </nav>

        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="space-y-6">
              <FicheImageSection phone={phone} discount={discount} />
              {/* Note: FicheImageSectionWithColor peut être utilisé si on veut synchroniser avec ColorSelector */}

                {/* Rating Card */}
                <GlassCard className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-yellow-400 text-xl">{generateStars(phone.rating)}</span>
                        <span className="text-slate-600 font-medium">({phone.rating}/5)</span>
                    </div>
                      <p className="text-sm text-slate-600">
                      Basé sur nos tests et avis utilisateurs
                    </p>
                  </div>
                  <div className="text-right">
                      <p className="text-sm text-slate-600">Dernière mise à jour</p>
                      <p className="text-sm font-semibold text-slate-900">{formatDate(phone.lastUpdated)}</p>
                    </div>
                  </div>
                </GlassCard>
            </div>

            {/* Content Section */}
              <div className="space-y-6">
              <div>
                  <Pill className="mb-3">{phone.brand}</Pill>
                  <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">{phone.name}</h1>
                  <p className="text-lg sm:text-xl text-slate-600 mb-6 leading-relaxed">{phone.description}</p>
                
                {/* Price */}
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-4xl font-bold text-slate-900">{formatPrice(phone.price)}</span>
                  {phone.originalPrice && (
                      <>
                        <span className="text-2xl text-slate-500 line-through">{formatPrice(phone.originalPrice)}</span>
                        {discount > 0 && (
                          <Pill className="bg-green-500/10 text-green-700 border-green-500/20">
                            -{discount}%
                          </Pill>
                        )}
                      </>
                  )}
                </div>

                {/* Couleurs disponibles */}
                {phone.colors && phone.colors.length > 0 && (
                  <div className="mb-6">
                    <ColorSelector
                      colors={phone.colors}
                      phoneName={phone.name}
                      phoneSlug={phone.slug}
                      showImage={false}
                    />
                  </div>
                )}

                {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      as="link"
                    href={phone.affiliateLinks.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                      size="lg"
                      className="flex-1"
                  >
                    Acheter sur Amazon
                    </Button>
                  {phone.affiliateLinks.cdiscount && (
                      <Button
                        as="link"
                      href={phone.affiliateLinks.cdiscount}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="lg"
                        className="flex-1"
                    >
                      Acheter sur CDiscount
                      </Button>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

              {/* Specifications */}
        <SectionShell
          eyebrow="Spécifications"
          title="Caractéristiques techniques"
        >
          <GlassCard className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                    <div>
                  <span className="font-semibold text-slate-900 block mb-1">Écran</span>
                  <p className="text-slate-600">{phone.specs.screen}</p>
                    </div>
                    <div>
                  <span className="font-semibold text-slate-900 block mb-1">Processeur</span>
                  <p className="text-slate-600">{phone.specs.processor}</p>
                    </div>
                    <div>
                  <span className="font-semibold text-slate-900 block mb-1">RAM</span>
                  <p className="text-slate-600">{phone.specs.ram}</p>
                    </div>
                    <div>
                  <span className="font-semibold text-slate-900 block mb-1">Stockage</span>
                  <p className="text-slate-600">{phone.specs.storage}</p>
                    </div>
                  </div>
              <div className="space-y-4">
                    <div>
                  <span className="font-semibold text-slate-900 block mb-1">Caméra</span>
                  <p className="text-slate-600">{phone.specs.camera}</p>
                    </div>
                    <div>
                  <span className="font-semibold text-slate-900 block mb-1">Batterie</span>
                  <p className="text-slate-600">{phone.specs.battery}</p>
                    </div>
                    <div>
                  <span className="font-semibold text-slate-900 block mb-1">Système</span>
                  <p className="text-slate-600">{phone.specs.os}</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </SectionShell>

              {/* Pros and Cons */}
        <SectionShell
          eyebrow="Analyse"
          title="Points forts et faibles"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-green-500 text-2xl">✓</span>
                    Points forts
                  </h3>
              <ul className="space-y-3">
                    {phone.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                    <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-red-500 text-2xl">✗</span>
                    Points faibles
                  </h3>
              <ul className="space-y-3">
                    {phone.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                    <span>{con}</span>
                      </li>
                    ))}
                  </ul>
            </GlassCard>
                </div>
        </SectionShell>

              {/* Verdict */}
        <SectionShell
          eyebrow="Notre avis"
          title="Verdict final"
        >
          <GlassCard className="p-6 sm:p-8 lg:p-10">
            <p className="text-lg text-slate-600 leading-relaxed">
              Le <strong className="text-slate-900">{phone.name}</strong> offre un excellent rapport qualité-prix dans la gamme des smartphones à moins de 300€. 
                  Avec ses {phone.specs.screen.toLowerCase()}, son {phone.specs.processor} et sa {phone.specs.battery}, 
                  il convient parfaitement pour un usage quotidien. {phone.description}
                </p>
          </GlassCard>
        </SectionShell>

          {/* Related Phones */}
        <SectionShell
          eyebrow="Découvrir"
          title="Autres téléphones à découvrir"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getAllPhones()
                .filter(p => p.id !== phone.id)
                .slice(0, 3)
                .map((relatedPhone) => (
                <GlassCard
                    key={relatedPhone.id}
                  as="link"
                    href={`/fiche/${relatedPhone.slug}`}
                  className="group"
                  >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/70 border border-white/25 mb-4 group-hover:border-ios-blue-500/30 transition-all duration-300">
                      <Image
                        src={relatedPhone.image}
                        alt={relatedPhone.name}
                        fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      quality={85}
                      />
                    </div>
                  <div>
                    <span className="text-ios-blue-600 text-xs font-semibold uppercase tracking-wide block mb-1">{relatedPhone.brand}</span>
                    <h3 className="font-bold text-slate-900 mb-2 leading-tight">{relatedPhone.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-900">{formatPrice(relatedPhone.price)}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">{generateStars(relatedPhone.rating)}</span>
                        <span className="text-sm text-slate-600">({relatedPhone.rating})</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
                ))}
          </div>
        </SectionShell>
        </div>

      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbs} />
    </>
  );
} 