import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionShell } from '@/components/ui/SectionShell';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'FAQ - Questions fréquentes | Top 5 Téléphones',
  description: 'Trouvez les réponses à toutes vos questions sur les smartphones à moins de 300€. Guide complet pour choisir le meilleur téléphone.',
  keywords: ['FAQ smartphones', 'questions fréquentes téléphones', 'guide achat smartphone', 'aide choix téléphone'],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ - Questions fréquentes | Top 5 Téléphones',
    description: 'Trouvez les réponses à toutes vos questions sur les smartphones à moins de 300€.',
    url: 'https://top5telephones.fr/faq',
    type: 'website',
  },
};

const faqItems = [
  {
    question: "Quel smartphone choisir pour moins de 300€ en 2025 ?",
    answer: "Les meilleurs smartphones à moins de 300€ en 2025 sont le Xiaomi Redmi Note 14 5G, le Samsung Galaxy A35 5G, le Poco X7 Pro, le Motorola Edge 50 Fusion et le Samsung Galaxy A26 5G. Chacun offre un excellent rapport qualité-prix avec des caractéristiques premium comme l'écran AMOLED, la 5G et des performances solides."
  },
  {
    question: "Quelle est la différence entre AMOLED et LCD ?",
    answer: "L'AMOLED offre des noirs profonds, des couleurs plus vives et un meilleur contraste que le LCD. Les écrans AMOLED consomment aussi moins d'énergie pour les pixels noirs. Dans la gamme < 300€, l'AMOLED est un vrai plus pour la qualité d'affichage."
  },
  {
    question: "Le 5G est-il vraiment nécessaire en 2025 ?",
    answer: "Le 5G devient de plus en plus important pour la vitesse de connexion et la latence. Si vous gardez votre téléphone 2-3 ans, le 5G est recommandé pour être prêt pour l'avenir. Tous nos téléphones du Top 5 intègrent le 5G."
  },
  {
    question: "Quelle capacité de stockage choisir ?",
    answer: "128GB est généralement suffisant pour la plupart des utilisateurs. Si vous prenez beaucoup de photos/vidéos ou installez beaucoup d'apps, envisagez 256GB si disponible. Notez que certains téléphones acceptent une carte microSD pour étendre le stockage."
  },
  {
    question: "Quelle est la meilleure marque pour les smartphones < 300€ ?",
    answer: "Samsung offre la meilleure fiabilité et garantie (2 ans), Xiaomi/Poco le meilleur rapport qualité-prix, et Motorola Android pur. Le choix dépend de vos priorités : fiabilité (Samsung), performance/prix (Xiaomi/Poco), ou expérience pure (Motorola)."
  },
  {
    question: "Combien de temps dure la batterie d'un smartphone < 300€ ?",
    answer: "La plupart des smartphones à moins de 300€ ont une batterie de 5000mAh qui dure facilement une journée complète, voire deux jours avec un usage modéré. La charge rapide (30W+) permet de recharger rapidement en cas de besoin."
  },
  {
    question: "Les téléphones < 300€ sont-ils performants pour le gaming ?",
    answer: "Oui, certains modèles comme le Poco X7 Pro avec son Dimensity 8300 Ultra excellent pour le gaming. Les autres modèles gèrent bien les jeux occasionnels, mais pour le gaming intensif, privilégiez un processeur puissant."
  },
  {
    question: "Quelle est la différence entre charge rapide 25W et 67W ?",
    answer: "La charge 67W recharge beaucoup plus vite (30-40 min pour 100%) que la 25W (1h-1h30). C'est pratique si vous oubliez souvent de charger la nuit. La 25W reste acceptable pour un usage quotidien."
  },
  {
    question: "Les téléphones < 300€ reçoivent-ils les mises à jour Android ?",
    answer: "Samsung offre les meilleures mises à jour (4-5 ans de support). Xiaomi/Poco offrent généralement 2-3 ans. Motorola avec Android pur reçoit les mises à jour rapidement. Vérifiez la politique de mises à jour de chaque marque."
  },
  {
    question: "Quelle caméra choisir pour les photos ?",
    answer: "Pour les photos, privilégiez un capteur principal de 50MP+ avec OIS (stabilisation optique) comme sur le Samsung Galaxy A35 5G. Les téléphones < 300€ prennent de bonnes photos en journée, mais peuvent être limités en faible luminosité."
  }
];

export default function FAQPage() {
  const baseUrl = 'https://top5telephones.fr';

  const breadcrumbs = [
    { name: 'Accueil', url: `${baseUrl}/` },
    { name: 'FAQ', url: `${baseUrl}/faq` },
  ];

  return (
    <>
      <FAQPageSchema faqs={faqItems} />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <div className="space-y-12">
        <SectionShell
          eyebrow="Questions fréquentes"
          title="FAQ - Tout savoir sur les smartphones < 300€"
          subtitle="Trouvez rapidement les réponses à vos questions."
        >
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <GlassCard key={index} className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-ios-blue-500 text-2xl flex-shrink-0">Q{index + 1}</span>
                  <span>{item.question}</span>
                </h3>
                <p className="text-slate-700 leading-relaxed pl-11">{item.answer}</p>
              </GlassCard>
            ))}
          </div>
        </SectionShell>

        {/* CTA */}
        <SectionShell>
          <GlassCard className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-slate-600 mb-6">
              N'hésitez pas à nous contacter ou à consulter nos guides complets.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="px-6 py-3 rounded-full bg-ios-blue-500 text-white font-medium hover:bg-ios-blue-600 transition-colors">
                Nous contacter
              </a>
              <a href="/guide-achat-smartphone" className="px-6 py-3 rounded-full bg-white/80 text-slate-900 font-medium border border-white/40 hover:bg-white transition-colors">
                Guide d'achat complet
              </a>
            </div>
          </GlassCard>
        </SectionShell>
      </div>
    </>
  );
}

