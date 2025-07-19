'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Accueil', href: '/' }
    ];
    
    let currentPath = '';
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Mapper les segments aux labels français
      let label = segment;
      switch (segment) {
        case 'comparateur':
          label = 'Comparateur';
          break;
        case 'quiz':
          label = 'Quiz';
          break;
        case 'fiche':
          label = 'Fiche produit';
          break;
        case 'a-propos':
          label = 'À propos';
          break;
        case 'contact':
          label = 'Contact';
          break;
        case 'politique-confidentialite':
          label = 'Politique de confidentialité';
          break;
        case 'mentions-legales':
          label = 'Mentions légales';
          break;
        default:
          // Pour les slugs de téléphones, on peut les formater
          if (segment.includes('-')) {
            label = segment
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
          }
      }
      
      breadcrumbs.push({
        label,
        href: currentPath,
        current: index === segments.length - 1
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  if (breadcrumbs.length <= 1) {
    return null; // Ne pas afficher sur la page d'accueil
  }
  
  return (
    <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-3">
          {breadcrumbs.map((item, index) => (
            <div key={item.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 text-gray-400 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              
              {item.current ? (
                <span className="text-sm font-medium text-gray-900">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm text-gray-500 hover:text-ios-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
} 