'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPhones } from '@/data/phones';
import { formatPrice, generateStars } from '@/lib/utils';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue-50 to-white">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comparateur de Téléphones
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez jusqu'à 4 téléphones pour les comparer côte à côte
            </p>
          </div>

          {/* Phone Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Sélectionnez vos téléphones ({selectedPhones.length}/{maxPhones})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {phones.map((phone) => (
                <button
                  key={phone.id}
                  onClick={() => handlePhoneSelect(phone.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedPhones.includes(phone.id)
                      ? 'border-ios-blue-500 bg-ios-blue-50'
                      : 'border-gray-200 bg-white hover:border-ios-blue-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center">
                      {selectedPhones.includes(phone.id) && (
                        <div className="w-2 h-2 bg-ios-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{phone.name}</h3>
                      <p className="text-sm text-gray-600">{formatPrice(phone.price)}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          {selectedPhoneObjects.length > 0 && (
            <div className="glass-card">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Comparaison ({selectedPhoneObjects.length} téléphones)
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Caractéristiques</th>
                      {selectedPhoneObjects.map((phone) => (
                        <th key={phone.id} className="text-center py-3 px-4 font-semibold text-gray-900 min-w-[200px]">
                          <div className="text-sm">{phone.brand}</div>
                          <div className="font-bold">{phone.name}</div>
                          <div className="text-ios-blue-600 font-semibold">{formatPrice(phone.price)}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Rating */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Note</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center">
                          <div className="text-yellow-400 text-sm">{generateStars(phone.rating)}</div>
                          <div className="text-sm text-gray-600">({phone.rating}/5)</div>
                        </td>
                      ))}
                    </tr>

                    {/* Screen */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Écran</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center text-sm text-gray-600">
                          {phone.specs.screen}
                        </td>
                      ))}
                    </tr>

                    {/* Processor */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Processeur</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center text-sm text-gray-600">
                          {phone.specs.processor}
                        </td>
                      ))}
                    </tr>

                    {/* RAM */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">RAM</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center text-sm text-gray-600">
                          {phone.specs.ram}
                        </td>
                      ))}
                    </tr>

                    {/* Storage */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Stockage</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center text-sm text-gray-600">
                          {phone.specs.storage}
                        </td>
                      ))}
                    </tr>

                    {/* Camera */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Caméra</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center text-sm text-gray-600">
                          {phone.specs.camera}
                        </td>
                      ))}
                    </tr>

                    {/* Battery */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Batterie</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center text-sm text-gray-600">
                          {phone.specs.battery}
                        </td>
                      ))}
                    </tr>

                    {/* OS */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Système</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center text-sm text-gray-600">
                          {phone.specs.os}
                        </td>
                      ))}
                    </tr>

                    {/* Pros */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Points forts</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center">
                          <ul className="text-sm text-gray-600 space-y-1">
                            {phone.pros.slice(0, 3).map((pro, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span className="text-left">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Cons */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Points faibles</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center">
                          <ul className="text-sm text-gray-600 space-y-1">
                            {phone.cons.slice(0, 2).map((con, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                <span className="text-left">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Actions */}
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Actions</td>
                      {selectedPhoneObjects.map((phone) => (
                        <td key={phone.id} className="py-3 px-4 text-center">
                          <div className="space-y-2">
                            <a
                              href={phone.affiliateLinks.amazon}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full bg-ios-blue-500 hover:bg-ios-blue-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                            >
                              Acheter
                            </a>
                            <a
                              href={`/fiche/${phone.slug}`}
                              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                            >
                              Voir détails
                            </a>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty State */}
          {selectedPhoneObjects.length === 0 && (
            <div className="glass-card text-center">
              <div className="w-16 h-16 bg-ios-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ios-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Commencez votre comparaison
              </h3>
              <p className="text-gray-600 mb-4">
                Sélectionnez les téléphones que vous souhaitez comparer dans la liste ci-dessus.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 