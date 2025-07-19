'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Envoyer l'erreur à un service de monitoring (optionnel)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: true
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md mx-auto text-center">
            <div className="text-6xl mb-4">😵</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Oups ! Une erreur s'est produite
            </h1>
            <p className="text-gray-600 mb-6">
              Nous nous excusons pour ce désagrément. Veuillez rafraîchir la page ou revenir à l'accueil.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-ios-blue-500 hover:bg-ios-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Rafraîchir
              </button>
              <a
                href="/"
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Accueil
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 