'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Ici vous pourriez intégrer un vrai service d'envoi d'email
    // comme SendGrid, Mailgun, ou un webhook
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <p className="font-medium">Message envoyé avec succès !</p>
          <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ios-blue-500 focus:border-transparent transition-colors"
            placeholder="Votre nom"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ios-blue-500 focus:border-transparent transition-colors"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Sujet *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ios-blue-500 focus:border-transparent transition-colors"
        >
          <option value="">Choisissez un sujet</option>
          <option value="question">Question générale</option>
          <option value="suggestion">Suggestion d'amélioration</option>
          <option value="partnership">Demande de partenariat</option>
          <option value="bug">Signalement de bug</option>
          <option value="other">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ios-blue-500 focus:border-transparent transition-colors resize-none"
          placeholder="Décrivez votre demande en détail..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-ios-blue-500 hover:bg-ios-blue-600 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </>
        ) : (
          'Envoyer le message'
        )}
      </button>
    </form>
  );
} 