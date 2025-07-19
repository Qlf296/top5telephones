import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Top 5 Téléphones',
  description: 'Découvrez comment Top 5 Téléphones collecte, utilise et protège vos données personnelles conformément au RGPD.',
  keywords: 'politique confidentialité, RGPD, données personnelles, cookies, Top 5 Téléphones',
  openGraph: {
    title: 'Politique de confidentialité - Top 5 Téléphones',
    description: 'Comment nous protégeons vos données personnelles.',
    type: 'website',
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue-50 to-white">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Top 5 Téléphones ("nous", "notre", "nos") s'engage à protéger votre vie privée. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
                  vos informations personnelles lorsque vous utilisez notre site web.
                </p>
                <p>
                  En utilisant notre site, vous acceptez les pratiques décrites dans cette politique de confidentialité.
                </p>
              </div>
            </div>

            {/* Informations collectées */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations que nous collectons</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Informations que vous nous fournissez</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Nom et adresse email (lors de l'utilisation du formulaire de contact)</li>
                    <li>Messages et demandes que vous nous envoyez</li>
                    <li>Préférences et réponses au quiz de recommandation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Informations collectées automatiquement</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Adresse IP et informations de localisation</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Pages visitées et temps passé sur le site</li>
                    <li>Liens cliqués et interactions avec le contenu</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies et technologies similaires</h3>
                  <p className="text-gray-700 mb-3">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                    <li><strong>Cookies analytiques :</strong> Pour analyser l'utilisation du site et améliorer nos services</li>
                    <li><strong>Cookies de préférences :</strong> Pour mémoriser vos choix (mode sombre, langue, etc.)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Utilisation des données */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comment nous utilisons vos informations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Fournir nos services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Afficher le contenu du site</li>
                    <li>Fonctionner le comparateur de téléphones</li>
                    <li>Générer des recommandations personnalisées</li>
                    <li>Répondre à vos demandes de contact</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Améliorer nos services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Analyser l'utilisation du site</li>
                    <li>Identifier les problèmes techniques</li>
                    <li>Optimiser les performances</li>
                    <li>Développer de nouvelles fonctionnalités</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Partage des données */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Partage de vos informations</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. 
                  Nous pouvons partager vos informations dans les cas suivants :
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Prestataires de services :</strong> Pour l'hébergement, l'analyse et le support technique</li>
                  <li><strong>Obligations légales :</strong> Si requis par la loi ou pour protéger nos droits</li>
                  <li><strong>Liens d'affiliation :</strong> Lorsque vous cliquez sur nos liens d'affiliation (voir section dédiée)</li>
                </ul>
              </div>
            </div>

            {/* Liens d'affiliation */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Liens d'affiliation</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  <strong>Transparence sur nos liens d'affiliation :</strong>
                </p>
                <p className="mb-4">
                  Top 5 Téléphones participe à des programmes d'affiliation avec des sites e-commerce. 
                  Cela signifie que nous pouvons recevoir une commission si vous effectuez un achat 
                  via nos liens, sans coût supplémentaire pour vous.
                </p>
                <p className="mb-4">
                  <strong>Comment cela fonctionne :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Quand vous cliquez sur un lien d'affiliation, un cookie est placé sur votre navigateur</li>
                  <li>Si vous effectuez un achat sur le site partenaire, nous recevons une commission</li>
                  <li>Vos informations personnelles ne sont pas partagées avec les partenaires</li>
                  <li>Les prix affichés restent identiques pour vous</li>
                </ul>
                <p>
                  <strong>Notre engagement :</strong> Nos recommandations restent objectives et basées 
                  uniquement sur la qualité des produits, pas sur les commissions.
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sécurité de vos données</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations :
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Chiffrement SSL/TLS pour toutes les communications</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Surveillance continue de la sécurité</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                </ul>
                
                <p className="text-gray-700">
                  Cependant, aucune méthode de transmission sur Internet n'est 100% sécurisée. 
                  Nous nous efforçons d'utiliser des moyens commercialement acceptables pour protéger vos données.
                </p>
              </div>
            </div>

            {/* Vos droits */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vos droits (RGPD)</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Droits d'accès et de contrôle</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Accéder à vos données personnelles</li>
                    <li>Rectifier des informations inexactes</li>
                    <li>Demander la suppression de vos données</li>
                    <li>Limiter le traitement de vos données</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Droits de portabilité et d'opposition</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Recevoir vos données dans un format structuré</li>
                    <li>Vous opposer au traitement de vos données</li>
                    <li>Retirer votre consentement à tout moment</li>
                    <li>Déposer une plainte auprès de la CNIL</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-ios-blue-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Pour exercer vos droits :</strong> Contactez-nous à contact@top5telephones.fr 
                  avec le sujet "Demande RGPD" et nous vous répondrons dans les 30 jours.
                </p>
              </div>
            </div>

            {/* Conservation des données */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conservation des données</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités 
                  pour lesquelles elles ont été collectées :
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Données analytiques :</strong> 26 mois maximum</li>
                  <li><strong>Cookies :</strong> Selon leur type (session à 2 ans)</li>
                  <li><strong>Logs techniques :</strong> 12 mois maximum</li>
                </ul>
              </div>
            </div>

            {/* Modifications */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Modifications de cette politique</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. 
                  Les modifications importantes seront notifiées sur cette page avec une nouvelle date de mise à jour.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette politique pour rester informé 
                  de nos pratiques de protection de vos données.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nous contacter</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Si vous avez des questions concernant cette politique de confidentialité, 
                  contactez-nous :
                </p>
                
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email :</strong> contact@top5telephones.fr</p>
                  <p><strong>Sujet recommandé :</strong> "Question confidentialité"</p>
                  <p><strong>Délai de réponse :</strong> Sous 48h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 