import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPhoneBySlug, getAllPhones } from '@/data/phones';
import { formatPrice, calculateDiscount, generateStars } from '@/lib/utils';
import { getTop2HeroImage, getHeroOGImage } from '@/lib/image-utils';
import ProductSchema from '@/components/ProductSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionShell } from '@/components/ui/SectionShell';
import { ProductHero } from '@/components/product/ProductHero';
import { ProductColorSelector } from '@/components/product/ProductColorSelector';
import { ProductOverview } from '@/components/product/ProductOverview';
import { ProductPageShell } from '@/components/product/ProductPageShell';
import { ProductReviews } from '@/components/product/ProductReviews';
import ReviewSchema from '@/components/seo/ReviewSchema';
import { FavoriteButton } from '@/components/product/FavoriteButton';

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
  const heroImage = getHeroOGImage(phone);
  const phoneImage = heroImage;

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
      <ProductPageShell>
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
              <Link href="/top-5-smartphones-300euros" className="hover:text-ios-blue-600 transition-colors">
                Top 5
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-medium">{phone.name}</li>
          </ol>
        </nav>

        {/* Section HERO - Image + Nom + Specs */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image HERO */}
              <div>
                <ProductHero phone={phone} discount={discount} />
              </div>

              {/* Overview + Couleurs */}
              <div className="space-y-6">
                {/* Bouton favoris */}
                <div className="flex justify-end">
                  <FavoriteButton phone={phone} size="md" showLabel={true} />
                </div>
                
                <ProductOverview phone={phone} discount={discount} />
                
                {/* Couleurs disponibles - Cercles iOS */}
                {phone.colors && phone.colors.length > 0 && (
                  <div
                    className="rounded-[24px] p-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.33)',
                      boxShadow: '0 10px 28px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <ProductColorSelector
                      colors={phone.colors}
                      phoneName={phone.name}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section Caractéristiques principales */}
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

        {/* Section Points forts et faibles */}
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

        {/* Section Verdict */}
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

        {/* Section Avis clients */}
        <SectionShell
          eyebrow="Avis clients"
          title="Ce que pensent les utilisateurs"
        >
          <ProductReviews phoneSlug={phone.slug} phoneName={phone.name} />
        </SectionShell>

        {/* Section Autres téléphones */}
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
                      src={getTop2HeroImage(relatedPhone)}
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
      </ProductPageShell>

      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbs} />
      <ReviewSchema phoneSlug={phone.slug} phoneName={phone.name} />
    </>
  );
}
