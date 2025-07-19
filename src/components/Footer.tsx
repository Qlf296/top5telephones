import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-glass-white backdrop-blur-md border-t border-glass-light mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-ios-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">5</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Top 5 Téléphones
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Découvrez les meilleurs smartphones à moins de 300€. 
              Comparaisons détaillées, tests et conseils d'achat pour faire le bon choix.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ios-blue-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-ios-blue-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-ios-blue-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/comparateur" className="text-gray-600 hover:text-ios-blue-600 transition-colors">
                  Comparateur
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-gray-600 hover:text-ios-blue-600 transition-colors">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Liens utiles
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-gray-600 hover:text-ios-blue-600 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-ios-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-gray-600 hover:text-ios-blue-600 transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-600 hover:text-ios-blue-600 transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-glass-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Top 5 Téléphones. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 