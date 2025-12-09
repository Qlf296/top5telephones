'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = (
    <>
      <Link href="/" className="text-slate-800 hover:text-ios-blue-600 transition-colors duration-200 font-medium">
              Accueil
            </Link>
      <Link href="/comparateur" className="text-slate-800 hover:text-ios-blue-600 transition-colors duration-200 font-medium">
              Comparateur
            </Link>
      <Link href="/quiz" className="text-slate-800 hover:text-ios-blue-600 transition-colors duration-200 font-medium">
              Quiz
            </Link>
            <div className="relative group">
        <button className="text-slate-800 hover:text-ios-blue-600 transition-colors duration-200 font-medium flex items-center">
                Plus
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
        <div className="absolute top-full left-0 mt-2 w-48 ios-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/25">
                <div className="py-2">
                  <Link 
                    href="/a-propos" 
              className="block px-4 py-2 text-slate-800 hover:bg-white/60 hover:text-ios-blue-600 transition-colors"
                  >
                    À propos
                  </Link>
                  <Link 
                    href="/contact" 
              className="block px-4 py-2 text-slate-800 hover:bg-white/60 hover:text-ios-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full bg-white/70 backdrop-blur-2xl border border-white/30 shadow-[0_16px_36px_rgba(0,0,0,0.10)] px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-gradient-to-br from-[#0a84ff] to-[#0071e3] rounded-2xl flex items-center justify-center shadow-[0_10px_24px_rgba(10,132,255,0.25)] border border-white/40">
              <span className="text-white font-bold text-sm">5</span>
            </div>
            <span className="text-lg sm:text-xl font-semibold text-slate-900">Top 5 Téléphones</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">{NavLinks}</nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button as="link" href="/comparateur" size="sm">
              Comparer
            </Button>
          </div>

          {/* Mobile burger */}
                      <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/80 border border-white/30 shadow-[0_8px_18px_rgba(0,0,0,0.08)]"
            aria-label="Ouvrir le menu"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

                  {/* Mobile menu */}
          {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/30 shadow-[0_16px_32px_rgba(0,0,0,0.12)] p-4 space-y-2">
            <div className="flex flex-col space-y-2 text-slate-800">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-2xl hover:bg-white/60">
                Accueil
              </Link>
              <Link 
                href="/comparateur" 
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 rounded-2xl hover:bg-white/60"
              >
                Comparateur
              </Link>
              <Link href="/quiz" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-2xl hover:bg-white/60">
                Quiz
              </Link>
              <Link href="/a-propos" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-2xl hover:bg-white/60">
                À propos
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-2xl hover:bg-white/60">
                Contact
              </Link>
            </div>
                <Link 
                  href="/comparateur"
                  onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 font-medium rounded-full transition-transform duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ios-blue-500 px-4 py-2.5 text-base bg-gradient-to-r from-[#0a84ff] to-[#0071e3] text-white border border-white/30 shadow-[0_12px_28px_rgba(10,132,255,0.25)] hover:shadow-[0_16px_32px_rgba(10,132,255,0.28)] w-full"
                >
                  Comparer
                </Link>
          </div>
        )}
      </div>
    </header>
  );
} 