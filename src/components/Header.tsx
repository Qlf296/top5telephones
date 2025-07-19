'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-ios-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">5</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Top 5 Téléphones
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-ios-blue-600 transition-colors duration-200 font-medium"
            >
              Accueil
            </Link>
            <Link 
              href="/comparateur" 
              className="text-gray-700 hover:text-ios-blue-600 transition-colors duration-200 font-medium"
            >
              Comparateur
            </Link>
            <Link 
              href="/quiz" 
              className="text-gray-700 hover:text-ios-blue-600 transition-colors duration-200 font-medium"
            >
              Quiz
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-ios-blue-600 transition-colors duration-200 font-medium flex items-center">
                Plus
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link 
                    href="/a-propos" 
                    className="block px-4 py-2 text-gray-700 hover:bg-ios-blue-50 hover:text-ios-blue-600 transition-colors"
                  >
                    À propos
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block px-4 py-2 text-gray-700 hover:bg-ios-blue-50 hover:text-ios-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/comparateur"
              className="bg-ios-blue-500 hover:bg-ios-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-glass-light"
            >
              Comparer
            </Link>
          </div>

          {/* Mobile menu button */}
                      <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

                  {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-ios-blue-600 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/comparateur" 
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-ios-blue-600 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Comparateur
              </Link>
              <Link 
                href="/quiz" 
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-ios-blue-600 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Quiz
              </Link>
              <Link 
                href="/a-propos" 
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-ios-blue-600 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-ios-blue-600 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link 
                  href="/comparateur"
                  className="block w-full bg-ios-blue-500 hover:bg-ios-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comparer
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 