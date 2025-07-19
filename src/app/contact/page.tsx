import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Top 5 Téléphones | Nous contacter',
  description: 'Contactez l\'équipe de Top 5 Téléphones pour toute question, suggestion ou demande de partenariat.',
  keywords: 'contact, support, aide, partenariat, Top 5 Téléphones',
  openGraph: {
    title: 'Contact - Top 5 Téléphones',
    description: 'Contactez l\'équipe de Top 5 Téléphones pour toute question ou suggestion.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue-50 to-white">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une question ? Une suggestion ? Un partenariat ? N'hésitez pas à nous contacter !
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="glass-card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ios-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-ios-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">contact@top5telephones.fr</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ios-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-ios-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Horaires</h3>
                      <p className="text-gray-600">Lundi - Vendredi : 9h - 18h</p>
                      <p className="text-sm text-gray-500">Week-end : Réponse par email</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ios-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-ios-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Localisation</h3>
                      <p className="text-gray-600">France</p>
                      <p className="text-sm text-gray-500">Site web accessible partout</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ rapide */}
              <div className="glass-card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-ios-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Comment sont sélectionnés les téléphones ?</h3>
                    <p className="text-gray-600 text-sm">
                      Nous analysons tous les nouveaux modèles selon des critères objectifs : rapport qualité-prix, 
                      performance, autonomie et qualité photo.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-ios-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Les prix sont-ils à jour ?</h3>
                    <p className="text-gray-600 text-sm">
                      Oui, nous mettons à jour les prix quotidiennement pour vous garantir les meilleures offres.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-ios-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Pouvez-vous tester un téléphone spécifique ?</h3>
                    <p className="text-gray-600 text-sm">
                      Nous nous concentrons sur les meilleurs modèles de la gamme, mais nous étudions toutes les demandes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 