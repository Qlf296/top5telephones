import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { SectionShell } from '@/components/ui/SectionShell';
import { GlassCard } from '@/components/ui/GlassCard';
import ContactPageSchema from '@/components/seo/ContactPageSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Contact - Top 5 Téléphones | Nous contacter',
  description: 'Contactez l\'équipe de Top 5 Téléphones pour toute question, suggestion ou demande de partenariat.',
  keywords: ['contact', 'support', 'aide', 'partenariat', 'Top 5 Téléphones'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact - Top 5 Téléphones',
    description: 'Contactez l\'équipe de Top 5 Téléphones pour toute question ou suggestion.',
    url: 'https://top5telephones.fr/contact',
    type: 'website',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Contact Top 5 Téléphones',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Top 5 Téléphones',
    description: 'Contactez l\'équipe de Top 5 Téléphones pour toute question ou suggestion.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionShell
        eyebrow="Contact"
        title="Contactez-nous"
        subtitle="Une question ? Une suggestion ? Un partenariat ? N'hésitez pas à nous contacter !"
      >
        <div className="grid lg:grid-cols-2 gap-8">

            {/* Informations de contact */}
          <div className="space-y-6">
            <GlassCard className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Informations de contact</h2>
                
                <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-ios-blue-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-ios-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600 font-medium">contact@top5telephones.fr</p>
                    <p className="text-sm text-slate-500 mt-1">Réponse sous 24h</p>
                    </div>
                  </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Horaires</h3>
                    <p className="text-slate-600 font-medium">Lundi - Vendredi : 9h - 18h</p>
                    <p className="text-sm text-slate-500 mt-1">Week-end : Réponse par email</p>
                    </div>
                  </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Localisation</h3>
                    <p className="text-slate-600 font-medium">France</p>
                    <p className="text-sm text-slate-500 mt-1">Site web accessible partout</p>
                  </div>
                </div>
              </div>
            </GlassCard>

              {/* FAQ rapide */}
            <GlassCard className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Questions fréquentes</h2>
                
              <div className="space-y-5">
                  <div className="border-l-4 border-ios-blue-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Comment sont sélectionnés les téléphones ?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                      Nous analysons tous les nouveaux modèles selon des critères objectifs : rapport qualité-prix, 
                      performance, autonomie et qualité photo.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-ios-blue-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Les prix sont-ils à jour ?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                      Oui, nous mettons à jour les prix quotidiennement pour vous garantir les meilleures offres.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-ios-blue-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Pouvez-vous tester un téléphone spécifique ?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                      Nous nous concentrons sur les meilleurs modèles de la gamme, mais nous étudions toutes les demandes.
                    </p>
                </div>
              </div>
            </GlassCard>
            </div>

            {/* Formulaire de contact */}
          <GlassCard className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h2>
              <ContactForm />
          </GlassCard>
        </div>
      </SectionShell>
      
      {/* Structured Data */}
      <ContactPageSchema />
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://top5telephones.fr/' },
        { name: 'Contact', url: 'https://top5telephones.fr/contact' },
      ]} />
    </div>
  );
} 