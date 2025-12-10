"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

interface NewsletterFormProps {
  variant?: 'inline' | 'card';
  title?: string;
  description?: string;
}

export function NewsletterForm({ 
  variant = 'card',
  title = "Restez informé des meilleures offres",
  description = "Recevez les dernières actualités, tests et promotions directement dans votre boîte mail."
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    // Simulation d'envoi (à remplacer par une vraie API)
    setTimeout(() => {
      // Ici, tu intégreras avec Mailchimp, SendGrid, etc.
      setStatus('success');
      setMessage('Merci ! Vous êtes maintenant inscrit à notre newsletter.');
      setEmail('');
    }, 1000);
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse email"
          required
          className="flex-1 px-4 py-3 rounded-full border border-white/40 bg-white/80 backdrop-blur-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-ios-blue-500"
        />
        <Button type="submit" size="lg" disabled={status === 'loading'}>
          {status === 'loading' ? 'Inscription...' : 'S\'inscrire'}
        </Button>
      </form>
    );
  }

  return (
    <GlassCard className="p-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            required
            className="flex-1 px-4 py-3 rounded-full border border-white/40 bg-white/80 backdrop-blur-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-ios-blue-500"
          />
          <Button type="submit" size="lg" disabled={status === 'loading'}>
            {status === 'loading' ? 'Inscription...' : 'S\'inscrire'}
          </Button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-sm ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </motion.p>
        )}

        <p className="text-xs text-slate-500">
          En vous inscrivant, vous acceptez de recevoir nos emails. Vous pouvez vous désinscrire à tout moment.
        </p>
      </motion.div>
    </GlassCard>
  );
}

