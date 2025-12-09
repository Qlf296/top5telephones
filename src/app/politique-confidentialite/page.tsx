import { Metadata } from 'next';
import { SectionShell } from '@/components/ui/SectionShell';
import { GlassCard } from '@/components/ui/GlassCard';
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Top 5 Téléphones',
  description: 'Découvrez comment Top 5 Téléphones collecte, utilise et protège vos données personnelles conformément au RGPD.',
  keywords: ['politique confidentialité', 'RGPD', 'données personnelles', 'cookies', 'Top 5 Téléphones'],
  alternates: {
    canonical: '/politique-confidentialite',
  },
  openGraph: {
    title: 'Politique de confidentialité - Top 5 Téléphones',
    description: 'Découvrez comment Top 5 Téléphones collecte, utilise et protège vos données personnelles conformément au RGPD.',
    url: 'https://top5telephones.fr/politique-confidentialite',
    type: 'website',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Politique de confidentialité Top 5 Téléphones',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politique de confidentialité - Top 5 Téléphones',
    description: 'Comment nous protégeons vos données personnelles.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionShell
        eyebrow="Confidentialité"
        title="Politique de confidentialité"
        subtitle={`Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}`}
      >
        <GlassCard className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Introduction</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
                  Top 5 Téléphones ("nous", "notre", "nos") s'engage à protéger votre vie privée. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
                  vos informations personnelles lorsque vous utilisez notre site web.
                </p>
                <p>
                  En utilisant notre site, vous acceptez les pratiques décrites dans cette politique de confidentialité.
                </p>
              </div>
        </GlassCard>
      </SectionShell>

      <SectionShell
        eyebrow="Collecte de données"
        title="Informations que nous collectons"
      >
        <GlassCard className="p-6 sm:p-8">
              <div className="space-y-6">
                <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Informations que vous nous fournissez</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                    <li>Nom et adresse email (lors de l'utilisation du formulaire de contact)</li>
                    <li>Messages et demandes que vous nous envoyez</li>
                    <li>Préférences et réponses au quiz de recommandation</li>
                  </ul>
                </div>

                <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Informations collectées automatiquement</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                    <li>Adresse IP et informations de localisation</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Pages visitées et temps passé sur le site</li>
                    <li>Liens cliqués et interactions avec le contenu</li>
                  </ul>
                </div>

                <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Cookies et technologies similaires</h3>
              <p className="text-slate-600 mb-3">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site :
                  </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                <li><strong className="text-slate-900">Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                <li><strong className="text-slate-900">Cookies analytiques :</strong> Pour analyser l'utilisation du site et améliorer nos services</li>
                <li><strong className="text-slate-900">Cookies de préférences :</strong> Pour mémoriser vos choix (mode sombre, langue, etc.)</li>
                  </ul>
                </div>
              </div>
        </GlassCard>
      </SectionShell>

      <SectionShell
        eyebrow="Utilisation"
        title="Comment nous utilisons vos informations"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Fournir nos services</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                    <li>Afficher le contenu du site</li>
                    <li>Fonctionner le comparateur de téléphones</li>
                    <li>Générer des recommandations personnalisées</li>
                    <li>Répondre à vos demandes de contact</li>
                  </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Améliorer nos services</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                    <li>Analyser l'utilisation du site</li>
                    <li>Identifier les problèmes techniques</li>
                    <li>Optimiser les performances</li>
                    <li>Développer de nouvelles fonctionnalités</li>
                  </ul>
          </GlassCard>
                </div>
      </SectionShell>

      <SectionShell
        eyebrow="Partage"
        title="Partage de vos informations"
      >
        <GlassCard className="p-6 sm:p-8">
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
                  Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. 
                  Nous pouvons partager vos informations dans les cas suivants :
                </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-slate-900">Prestataires de services :</strong> Pour l'hébergement, l'analyse et le support technique</li>
              <li><strong className="text-slate-900">Obligations légales :</strong> Si requis par la loi ou pour protéger nos droits</li>
              <li><strong className="text-slate-900">Liens d'affiliation :</strong> Lorsque vous cliquez sur nos liens d'affiliation (voir section dédiée)</li>
                </ul>
              </div>
        </GlassCard>
      </SectionShell>

      <SectionShell
        eyebrow="Affiliation"
        title="Liens d'affiliation"
      >
        <GlassCard className="p-6 sm:p-8">
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-900">Transparence sur nos liens d'affiliation :</strong>
                </p>
            <p>
                  Top 5 Téléphones participe à des programmes d'affiliation avec des sites e-commerce. 
                  Cela signifie que nous pouvons recevoir une commission si vous effectuez un achat 
                  via nos liens, sans coût supplémentaire pour vous.
                </p>
            <p>
              <strong className="text-slate-900">Comment cela fonctionne :</strong>
                </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Quand vous cliquez sur un lien d'affiliation, un cookie est placé sur votre navigateur</li>
                  <li>Si vous effectuez un achat sur le site partenaire, nous recevons une commission</li>
                  <li>Vos informations personnelles ne sont pas partagées avec les partenaires</li>
                  <li>Les prix affichés restent identiques pour vous</li>
                </ul>
            <p className="mt-4">
              <strong className="text-slate-900">Notre engagement :</strong> Nos recommandations restent objectives et basées 
                  uniquement sur la qualité des produits, pas sur les commissions.
                </p>
              </div>
        </GlassCard>
      </SectionShell>

      <SectionShell
        eyebrow="Sécurité"
        title="Sécurité de vos données"
      >
        <GlassCard className="p-6 sm:p-8">
              <div className="space-y-4">
            <p className="text-slate-600">
                  Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations :
                </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                  <li>Chiffrement SSL/TLS pour toutes les communications</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Surveillance continue de la sécurité</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                </ul>
            <p className="text-slate-600">
                  Cependant, aucune méthode de transmission sur Internet n'est 100% sécurisée. 
                  Nous nous efforçons d'utiliser des moyens commercialement acceptables pour protéger vos données.
                </p>
              </div>
        </GlassCard>
      </SectionShell>

      <SectionShell
        eyebrow="Vos droits"
        title="Vos droits (RGPD)"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Droits d'accès et de contrôle</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                    <li>Accéder à vos données personnelles</li>
                    <li>Rectifier des informations inexactes</li>
                    <li>Demander la suppression de vos données</li>
                    <li>Limiter le traitement de vos données</li>
                  </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Droits de portabilité et d'opposition</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                    <li>Recevoir vos données dans un format structuré</li>
                    <li>Vous opposer au traitement de vos données</li>
                    <li>Retirer votre consentement à tout moment</li>
                    <li>Déposer une plainte auprès de la CNIL</li>
                  </ul>
          </GlassCard>
                </div>
        <GlassCard className="p-6 mt-6 bg-ios-blue-500/10 border-ios-blue-500/30">
          <p className="text-slate-700">
            <strong className="text-slate-900">Pour exercer vos droits :</strong> Contactez-nous à contact@top5telephones.fr 
                  avec le sujet "Demande RGPD" et nous vous répondrons dans les 30 jours.
                </p>
        </GlassCard>
      </SectionShell>

      <SectionShell
        eyebrow="Conservation"
        title="Conservation des données"
      >
        <GlassCard className="p-6 sm:p-8">
              <div className="space-y-4">
            <p className="text-slate-600">
                  Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités 
                  pour lesquelles elles ont été collectées :
                </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong className="text-slate-900">Données de contact :</strong> 3 ans après le dernier contact</li>
              <li><strong className="text-slate-900">Données analytiques :</strong> 26 mois maximum</li>
              <li><strong className="text-slate-900">Cookies :</strong> Selon leur type (session à 2 ans)</li>
              <li><strong className="text-slate-900">Logs techniques :</strong> 12 mois maximum</li>
                </ul>
              </div>
        </GlassCard>
      </SectionShell>

      <SectionShell
        eyebrow="Modifications"
        title="Modifications de cette politique"
      >
        <GlassCard className="p-6 sm:p-8">
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
                  Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. 
                  Les modifications importantes seront notifiées sur cette page avec une nouvelle date de mise à jour.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette politique pour rester informé 
                  de nos pratiques de protection de vos données.
                </p>
              </div>
        </GlassCard>
      </SectionShell>

      <SectionShell
        eyebrow="Contact"
        title="Nous contacter"
      >
        <GlassCard className="p-6 sm:p-8">
              <div className="space-y-4">
            <p className="text-slate-600">
                  Si vous avez des questions concernant cette politique de confidentialité, 
                  contactez-nous :
                </p>
            <div className="space-y-2 text-slate-600">
              <p><strong className="text-slate-900">Email :</strong> contact@top5telephones.fr</p>
              <p><strong className="text-slate-900">Sujet recommandé :</strong> "Question confidentialité"</p>
              <p><strong className="text-slate-900">Délai de réponse :</strong> Sous 48h</p>
            </div>
          </div>
        </GlassCard>
      </SectionShell>

      {/* Structured Data */}
      <WebPageSchema
        name="Politique de confidentialité - Top 5 Téléphones"
        description="Découvrez comment Top 5 Téléphones collecte, utilise et protège vos données personnelles conformément au RGPD."
        url="https://top5telephones.fr/politique-confidentialite"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://top5telephones.fr/' },
        { name: 'Politique de confidentialité', url: 'https://top5telephones.fr/politique-confidentialite' },
      ]} />
    </div>
  );
} 
