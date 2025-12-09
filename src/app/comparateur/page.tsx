'use client';

import { useState } from 'react';
import { getAllPhones } from '@/data/phones';
import { formatPrice, generateStars } from '@/lib/utils';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { SectionShell } from '@/components/ui/SectionShell';
import ItemListSchema from '@/components/seo/ItemListSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function ComparateurPage() {
  const phones = getAllPhones();
  const [selectedPhones, setSelectedPhones] = useState<string[]>([]);
  const [maxPhones] = useState(4);

  const handlePhoneSelect = (phoneId: string) => {
    setSelectedPhones(prev => {
      if (prev.includes(phoneId)) {
        return prev.filter(id => id !== phoneId);
      } else if (prev.length < maxPhones) {
        return [...prev, phoneId];
      }
      return prev;
    });
  };

  const selectedPhoneObjects = phones.filter(phone => selectedPhones.includes(phone.id));

  const itemListItems = phones.map(phone => ({
    name: phone.name,
    url: `https://top5telephones.fr/fiche/${phone.slug}`,
    description: phone.description,
    image: phone.image.startsWith('http') ? phone.image : `https://top5telephones.fr${phone.image}`,
  }));

  const breadcrumbs = [
    { name: 'Accueil', url: 'https://top5telephones.fr/' },
    { name: 'Comparateur', url: 'https://top5telephones.fr/comparateur' },
  ];

  return (
    <>
      {/* H1 pour SEO */}
      <h1 className="sr-only">Comparateur de téléphones - Comparez jusqu'à 4 smartphones à moins de 300€</h1>
      
      <div className="space-y-10 sm:space-y-12">
        <SectionShell
          title="Comparateur de téléphones"
          subtitle="Choisissez jusqu'à 4 modèles et comparez-les côte à côte."
        >
        {/* Phone Selection */}
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-slate-900">
                Sélection ({selectedPhones.length}/{maxPhones})
              </h2>
              <p className="text-sm text-slate-600">Appuyez pour ajouter ou retirer un modèle.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {phones.map((phone) => {
              const active = selectedPhones.includes(phone.id);
              return (
                <button
                  key={phone.id}
                  onClick={() => handlePhoneSelect(phone.id)}
                  className={[
                    'text-left rounded-2xl border transition-all duration-200 p-4 bg-white/70',
                    'backdrop-blur-xl shadow-[0_10px_24px_rgba(0,0,0,0.06)]',
                    active
                      ? 'border-[#0a84ff] ring-2 ring-[#0a84ff]/30'
                      : 'border-white/40 hover:border-[#0a84ff]/40 hover:translate-y-[-1px]',
                  ].join(' ')}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={[
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                        active ? 'border-[#0a84ff] bg-[#0a84ff]/10' : 'border-slate-300',
                      ].join(' ')}
                    >
                      {active && <div className="w-2.5 h-2.5 rounded-full bg-[#0a84ff]" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{phone.name}</h3>
                      <p className="text-sm text-slate-600">{formatPrice(phone.price)}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </GlassCard>

          {/* Comparison Table */}
          {selectedPhoneObjects.length > 0 && (
          <GlassCard className="p-4 sm:p-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Comparaison ({selectedPhoneObjects.length} téléphones)
              </h2>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedPhones([])}
              >
                Réinitialiser
              </Button>
            </div>
              
              <div className="overflow-x-auto">
              <table className="w-full min-w-[720px]">
                  <thead>
                  <tr className="border-b border-white/40">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Caractéristiques</th>
                      {selectedPhoneObjects.map((phone) => (
                      <th key={phone.id} className="text-center py-3 px-4 font-semibold text-slate-900 min-w-[200px]">
                        <div className="text-sm text-slate-600">{phone.brand}</div>
                        <div className="font-bold text-slate-900">{phone.name}</div>
                        <div className="text-[#0a84ff] font-semibold">{formatPrice(phone.price)}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                <tbody className="divide-y divide-white/30">
                    {/* Rating */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Note</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center">
                          <div className="text-yellow-400 text-sm">{generateStars(phone.rating)}</div>
                        <div className="text-sm text-slate-600">({phone.rating}/5)</div>
                        </td>
                      ))}
                    </tr>

                    {/* Screen */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Écran</td>
                      {selectedPhoneObjects.map((phone) => (
                      <td key={phone.id} className="py-3 px-4 text-center text-sm text-slate-600">
                          {phone.specs.screen}
                        </td>
                      ))}
                    </tr>

                    {/* Processor */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Processeur</td>
                      {selectedPhoneObjects.map((phone) => (
                      <td key={phone.id} className="py-3 px-4 text-center text-sm text-slate-600">
                          {phone.specs.processor}
                        </td>
                      ))}
                    </tr>

                    {/* RAM */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">RAM</td>
                      {selectedPhoneObjects.map((phone) => (
                      <td key={phone.id} className="py-3 px-4 text-center text-sm text-slate-600">
                          {phone.specs.ram}
                        </td>
                      ))}
                    </tr>

                    {/* Storage */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Stockage</td>
                      {selectedPhoneObjects.map((phone) => (
                      <td key={phone.id} className="py-3 px-4 text-center text-sm text-slate-600">
                          {phone.specs.storage}
                        </td>
                      ))}
                    </tr>

                    {/* Camera */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Caméra</td>
                      {selectedPhoneObjects.map((phone) => (
                      <td key={phone.id} className="py-3 px-4 text-center text-sm text-slate-600">
                          {phone.specs.camera}
                        </td>
                      ))}
                    </tr>

                    {/* Battery */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Batterie</td>
                      {selectedPhoneObjects.map((phone) => (
                      <td key={phone.id} className="py-3 px-4 text-center text-sm text-slate-600">
                          {phone.specs.battery}
                        </td>
                      ))}
                    </tr>

                    {/* OS */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Système</td>
                      {selectedPhoneObjects.map((phone) => (
                      <td key={phone.id} className="py-3 px-4 text-center text-sm text-slate-600">
                          {phone.specs.os}
                        </td>
                      ))}
                    </tr>

                    {/* Pros */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Points forts</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center">
                        <ul className="text-sm text-slate-600 space-y-1">
                            {phone.pros.slice(0, 3).map((pro, index) => (
                            <li key={index} className="flex items-start justify-center gap-1">
                              <span className="text-green-500">✓</span>
                                <span className="text-left">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Cons */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Points faibles</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center">
                        <ul className="text-sm text-slate-600 space-y-1">
                            {phone.cons.slice(0, 2).map((con, index) => (
                            <li key={index} className="flex items-start justify-center gap-1">
                              <span className="text-red-500">✗</span>
                                <span className="text-left">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Actions */}
                    <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Actions</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center">
                          <div className="space-y-2">
                          <Button
                            as="link"
                              href={phone.affiliateLinks.amazon}
                              target="_blank"
                              rel="noopener noreferrer"
                            size="sm"
                            className="w-full justify-center"
                            >
                              Acheter
                          </Button>
                          <Button
                            as="link"
                              href={`/fiche/${phone.slug}`}
                            variant="secondary"
                            size="sm"
                            className="w-full justify-center"
                            >
                              Voir détails
                          </Button>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
          </GlassCard>
          )}

          {/* Empty State */}
          {selectedPhoneObjects.length === 0 && (
          <GlassCard className="text-center p-8">
            <div className="w-16 h-16 bg-[#0a84ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0a84ff]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Commencez votre comparaison</h3>
            <p className="text-slate-600 mb-4">Sélectionnez les téléphones que vous souhaitez comparer dans la liste ci-dessus.</p>
          </GlassCard>
          )}
      </SectionShell>
        </div>

      {/* Structured Data */}
      <ItemListSchema
        items={itemListItems}
        name="Liste des smartphones à moins de 300€"
        description="Comparateur interactif des meilleurs smartphones à moins de 300€"
        url="https://top5telephones.fr/comparateur"
      />
      <BreadcrumbSchema items={breadcrumbs} />
    </>
  );
} 