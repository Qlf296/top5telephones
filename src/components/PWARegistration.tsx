'use client';

import { useEffect, useState } from 'react';

export default function PWARegistration() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Handle PWA install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    // Check if PWA is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    }
  };

  // Don't show install prompt if already installed or no prompt available
  if (isInstalled || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-ios-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">5</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">
            Installer l'application
          </p>
          <p className="text-sm text-gray-500">
            Accédez rapidement à Top 5 Téléphones depuis votre écran d'accueil
          </p>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={handleInstallClick}
            className="text-ios-blue-600 hover:text-ios-blue-700 text-sm font-medium"
          >
            Installer
          </button>
        </div>
      </div>
      <button
        onClick={() => setDeferredPrompt(null)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
} 