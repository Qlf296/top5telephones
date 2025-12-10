import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionShell } from '@/components/ui/SectionShell';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Blog - Guides et Tests Smartphones | Top 5 Téléphones',
  description: 'Découvrez nos guides complets, tests approfondis et conseils d\'achat pour choisir le meilleur smartphone à moins de 300€.',
  keywords: ['blog smartphones', 'guides téléphones', 'tests smartphones', 'conseils achat téléphone'],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog - Guides et Tests Smartphones | Top 5 Téléphones',
    description: 'Découvrez nos guides complets et tests approfondis.',
    url: 'https://top5telephones.fr/blog',
    type: 'website',
  },
};

// Articles du blog (à enrichir progressivement)
const blogPosts = [
  {
    slug: 'guide-achat-smartphone-300euros-2025',
    title: 'Guide complet : Choisir son smartphone à moins de 300€ en 2025',
    excerpt: 'Tout ce que vous devez savoir pour faire le bon choix : écran, processeur, caméra, batterie, 5G...',
    date: '2025-01-20',
    category: 'Guide',
    readTime: '8 min',
    image: '/images/og-image.jpg'
  },
  {
    slug: 'test-xiaomi-redmi-note-14-5g',
    title: 'Test complet : Xiaomi Redmi Note 14 5G',
    excerpt: 'Test approfondi du meilleur smartphone < 300€ : performances, autonomie, caméra, points forts et faibles.',
    date: '2025-01-18',
    category: 'Test',
    readTime: '12 min',
    image: '/images/top2/Xiaomi Redmi Note 14 5G.png'
  },
  {
    slug: 'comparatif-samsung-xiaomi-poco-2025',
    title: 'Comparatif : Samsung vs Xiaomi vs Poco < 300€',
    excerpt: 'Quelle marque choisir ? Comparaison détaillée des meilleurs modèles de chaque marque.',
    date: '2025-01-15',
    category: 'Comparatif',
    readTime: '10 min',
    image: '/images/og-image.jpg'
  },
  {
    slug: 'tendances-smartphones-2025',
    title: 'Tendances smartphones 2025 : Ce qui change',
    excerpt: '5G, AMOLED, charge rapide, IA... Découvrez les tendances qui comptent vraiment en 2025.',
    date: '2025-01-12',
    category: 'Actualité',
    readTime: '6 min',
    image: '/images/og-image.jpg'
  },
  {
    slug: 'ecran-amoled-vs-lcd-quelle-difference',
    title: 'Écran AMOLED vs LCD : Quelle différence ?',
    excerpt: 'Comprendre les différences entre AMOLED et LCD pour faire le bon choix selon vos besoins.',
    date: '2025-01-10',
    category: 'Guide',
    readTime: '5 min',
    image: '/images/og-image.jpg'
  }
];

export default function BlogPage() {
  const baseUrl = 'https://top5telephones.fr';

  const breadcrumbs = [
    { name: 'Accueil', url: `${baseUrl}/` },
    { name: 'Blog', url: `${baseUrl}/blog` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="space-y-12">
        <SectionShell
          eyebrow="Blog"
          title="Guides, Tests et Conseils"
          subtitle="Tout ce que vous devez savoir pour choisir le meilleur smartphone à moins de 300€."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <GlassCard key={post.slug} as="link" href={`/blog/${post.slug}`} className="group">
                <div className="space-y-4">
                  {/* Image */}
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/70 border border-white/25 group-hover:border-ios-blue-500/30 transition-all duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 rounded-full bg-ios-blue-500/10 text-ios-blue-700 font-medium">
                        {post.category}
                      </span>
                      <span className="text-slate-500">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-ios-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/20">
                      <span className="text-sm text-slate-500">
                        {new Date(post.date).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="text-ios-blue-600 font-medium text-sm group-hover:underline">
                        Lire l'article →
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </SectionShell>
      </div>
    </>
  );
}

