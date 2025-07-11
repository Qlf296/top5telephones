export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-ios-blue-600 mb-8">
          Test Tailwind CSS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Test des couleurs iOS */}
          <div className="glass-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Couleurs iOS
            </h2>
            <div className="space-y-2">
              <div className="h-8 bg-ios-blue-500 rounded"></div>
              <div className="h-8 bg-ios-blue-400 rounded"></div>
              <div className="h-8 bg-ios-blue-300 rounded"></div>
            </div>
          </div>
          
          {/* Test des effets glassmorphism */}
          <div className="glass-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Effets Glassmorphism
            </h2>
            <div className="space-y-4">
              <button className="glass-button">
                Bouton Principal
              </button>
              <button className="glass-button-secondary">
                Bouton Secondaire
              </button>
            </div>
          </div>
          
          {/* Test des animations */}
          <div className="glass-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Animations
            </h2>
            <div className="space-y-4">
              <div className="animate-fade-in bg-ios-blue-100 p-4 rounded">
                Animation Fade In
              </div>
              <div className="animate-slide-up bg-ios-blue-200 p-4 rounded">
                Animation Slide Up
              </div>
            </div>
          </div>
          
          {/* Test responsive */}
          <div className="glass-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Responsive
            </h2>
            <div className="text-responsive">
              <p className="text-sm sm:text-base lg:text-lg">
                Ce texte s'adapte à la taille de l'écran
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="glass-button"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
} 