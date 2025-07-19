import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mentions légales - Top 5 Téléphones',
  description: 'Informations légales et mentions obligatoires du site Top 5 Téléphones.',
  keywords: 'mentions légales, informations légales, Top 5 Téléphones',
  openGraph: {
    title: 'Mentions légales - Top 5 Téléphones',
    description: 'Informations légales et mentions obligatoires.',
    type: 'website',
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue-50 to-white">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mentions légales
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Informations légales et mentions obligatoires
            </p>
          </div>

          <div className="space-y-8">
            {/* Éditeur du site */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Éditeur du site</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Raison sociale</h3>
                  <p className="text-gray-700">Top 5 Téléphones</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-700">France</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email de contact</h3>
                  <p className="text-gray-700">contact@top5telephones.fr</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Directeur de publication</h3>
                  <p className="text-gray-700">L'équipe Top 5 Téléphones</p>
                </div>
              </div>
            </div>

            {/* Hébergement */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hébergement</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hébergeur</h3>
                  <p className="text-gray-700">Vercel Inc.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-700">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Site web</h3>
                  <p className="text-gray-700">https://vercel.com</p>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Propriété intellectuelle</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                  les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="mb-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit 
                  est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques citées sur ce site sont des marques déposées par leurs propriétaires respectifs.
                </p>
              </div>
            </div>

            {/* Liens d'affiliation */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Liens d'affiliation</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  <strong>Transparence sur les liens d'affiliation :</strong>
                </p>
                <p className="mb-4">
                  Ce site participe à des programmes d'affiliation avec des sites e-commerce. 
                  Cela signifie que nous pouvons recevoir une commission si vous effectuez un achat 
                  via nos liens, sans coût supplémentaire pour vous.
                </p>
                <p className="mb-4">
                  <strong>Partenaires d'affiliation :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Amazon (programme d'affiliation Amazon)</li>
                  <li>Fnac-Darty (programme d'affiliation Fnac)</li>
                  <li>Boulanger (programme d'affiliation Boulanger)</li>
                  <li>Autres partenaires e-commerce</li>
                </ul>
                <p className="mt-4">
                  <strong>Notre engagement :</strong> Nos recommandations restent objectives et basées 
                  uniquement sur la qualité des produits, pas sur les commissions.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsabilité</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site 
                  est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, 
                  des omissions ou des lacunes.
                </p>
                <p className="mb-4">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                  merci de bien vouloir le signaler par email à l'adresse contact@top5telephones.fr, 
                  en décrivant le problème de la manière la plus précise possible.
                </p>
                <p>
                  Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa 
                  seule responsabilité. En conséquence, Top 5 Téléphones ne saurait être tenu responsable 
                  d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque 
                  perte de données consécutives au téléchargement.
                </p>
              </div>
            </div>

            {/* Liens hypertextes */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Liens hypertextes</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Les liens hypertextes mis en place dans le cadre du présent site web en direction 
                  d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité 
                  de Top 5 Téléphones.
                </p>
                <p>
                  Top 5 Téléphones ne peut être tenu responsable du contenu des sites vers lesquels 
                  des liens sont établis, ni des liens qu'ils contiennent, ni des modifications ou 
                  mises à jour qui leur sont apportées.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Le site peut-être amené à vous demander l'acceptation des cookies pour des besoins 
                  de statistiques et d'affichage. À défaut d'acceptation, les cookies ne seront pas 
                  déposés et certaines fonctionnalités pourraient être dégradées.
                </p>
                <p>
                  Pour plus d'informations sur l'utilisation des cookies, consultez notre 
                  <a href="/politique-confidentialite" className="text-ios-blue-600 hover:text-ios-blue-700 underline">
                    politique de confidentialité
                  </a>.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Droit applicable</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Tout litige en relation avec l'utilisation du site Top 5 Téléphones est soumis 
                  au droit français. En dehors des cas où la loi ne le permet pas, il est fait 
                  attribution exclusive de juridiction aux tribunaux compétents de France.
                </p>
                <p>
                  Les présentes mentions légales sont soumises au droit français. En cas de litige 
                  et à défaut d'accord amiable, le litige sera porté devant les tribunaux français 
                  conformément aux règles de procédure en vigueur.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Pour toute question concernant ces mentions légales, contactez-nous :
                </p>
                
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email :</strong> contact@top5telephones.fr</p>
                  <p><strong>Sujet recommandé :</strong> "Question mentions légales"</p>
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