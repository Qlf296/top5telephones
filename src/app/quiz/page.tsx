'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPhones } from '@/data/phones';
import { formatPrice } from '@/lib/utils';

interface Question {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    weight: Record<string, number>;
  }[];
}

const questions: Question[] = [
  {
    id: 'budget',
    question: 'Quel est votre budget maximum ?',
    options: [
      { value: '200', label: 'Moins de 200€', weight: { price: 0.8 } },
      { value: '250', label: '200-250€', weight: { price: 0.6 } },
      { value: '300', label: '250-300€', weight: { price: 0.4 } },
    ],
  },
  {
    id: 'usage',
    question: 'Quel est votre usage principal ?',
    options: [
      { value: 'basic', label: 'Appels, SMS, réseaux sociaux', weight: { performance: 0.3, camera: 0.2 } },
      { value: 'photo', label: 'Photographie et vidéos', weight: { camera: 0.8, storage: 0.6 } },
      { value: 'gaming', label: 'Jeux et applications lourdes', weight: { performance: 0.8, ram: 0.7 } },
      { value: 'work', label: 'Travail et productivité', weight: { performance: 0.6, storage: 0.7 } },
    ],
  },
  {
    id: 'screen',
    question: 'Quelle taille d\'écran préférez-vous ?',
    options: [
      { value: 'small', label: 'Compact (moins de 6 pouces)', weight: { screen: 0.3 } },
      { value: 'medium', label: 'Standard (6-6.5 pouces)', weight: { screen: 0.5 } },
      { value: 'large', label: 'Grand (plus de 6.5 pouces)', weight: { screen: 0.8 } },
    ],
  },
  {
    id: 'brand',
    question: 'Avez-vous une préférence de marque ?',
    options: [
      { value: 'any', label: 'Aucune préférence', weight: {} },
      { value: 'samsung', label: 'Samsung', weight: { brand: 'Samsung' } },
      { value: 'xiaomi', label: 'Xiaomi', weight: { brand: 'Xiaomi' } },
      { value: 'motorola', label: 'Motorola', weight: { brand: 'Motorola' } },
      { value: 'nokia', label: 'Nokia', weight: { brand: 'Nokia' } },
    ],
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const phones = getAllPhones();

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateRecommendations = () => {
    const scores: Record<string, number> = {};
    
    // Initialize scores
    phones.forEach(phone => {
      scores[phone.id] = 0;
    });

    // Calculate scores based on answers
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === questionId);
      const selectedOption = question?.options.find(opt => opt.value === answer);
      
      if (selectedOption) {
        phones.forEach(phone => {
          let score = 0;
          
          // Price scoring
          if (selectedOption.weight.price !== undefined) {
            const maxPrice = Math.max(...phones.map(p => p.price));
            const priceScore = 1 - (phone.price / maxPrice);
            score += priceScore * selectedOption.weight.price;
          }
          
          // Brand scoring
          if (selectedOption.weight.brand && phone.brand === selectedOption.weight.brand) {
            score += 0.5;
          }
          
          // Performance scoring (based on RAM and processor)
          if (selectedOption.weight.performance !== undefined) {
            const ramScore = parseInt(phone.specs.ram.replace('GB', '')) / 8; // Normalize to 8GB max
            score += ramScore * selectedOption.weight.performance;
          }
          
          // Camera scoring
          if (selectedOption.weight.camera !== undefined) {
            const cameraScore = phone.specs.camera.includes('50MP') ? 1 : 0.5;
            score += cameraScore * selectedOption.weight.camera;
          }
          
          // Storage scoring
          if (selectedOption.weight.storage !== undefined) {
            const storageScore = phone.specs.storage.includes('256GB') ? 1 : 0.7;
            score += storageScore * selectedOption.weight.storage;
          }
          
          scores[phone.id] += score;
        });
      }
    });

    // Sort phones by score
    return phones
      .map(phone => ({ ...phone, score: scores[phone.id] }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const recommendations = showResults ? calculateRecommendations() : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue-50 to-white">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trouvez votre téléphone parfait
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Répondez à quelques questions pour recevoir des recommandations personnalisées
            </p>
          </div>

          {!showResults ? (
            /* Quiz Questions */
            <div className="glass-card">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    Question {currentQuestion + 1} sur {questions.length}
                  </span>
                  <span className="text-sm text-ios-blue-600 font-medium">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-ios-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Question */}
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
                  {questions[currentQuestion].question}
                </h2>
                
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                      className="w-full p-4 text-left bg-white hover:bg-ios-blue-50 border-2 border-gray-200 hover:border-ios-blue-300 rounded-lg transition-all duration-200"
                    >
                      <span className="text-lg font-medium text-gray-900">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Results */
            <div className="space-y-8">
              <div className="glass-card text-center">
                <div className="w-16 h-16 bg-ios-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-ios-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Voici nos recommandations
                </h2>
                <p className="text-gray-600 mb-6">
                  Basé sur vos réponses, voici les téléphones qui correspondent le mieux à vos besoins :
                </p>
              </div>

              {/* Recommendations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendations.map((phone, index) => (
                  <div key={phone.id} className="glass-card relative">
                    {index === 0 && (
                      <div className="absolute -top-3 -left-3 bg-ios-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Recommandé
                      </div>
                    )}
                    
                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-ios-blue-600 text-sm font-medium">{phone.brand}</span>
                        <h3 className="text-lg font-semibold text-gray-900">{phone.name}</h3>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">{formatPrice(phone.price)}</span>
                        <span className="text-sm text-gray-600">Score: {Math.round(phone.score * 10)}/10</span>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Pourquoi ce choix ?</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {phone.pros.slice(0, 2).map((pro, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex space-x-2 pt-2">
                        <a
                          href={`/fiche/${phone.slug}`}
                          className="flex-1 bg-ios-blue-500 hover:bg-ios-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                        >
                          Voir détails
                        </a>
                        <a
                          href={phone.affiliateLinks.amazon}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                        >
                          Acheter
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Restart Quiz */}
              <div className="glass-card text-center">
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers({});
                    setShowResults(false);
                  }}
                  className="bg-ios-blue-500 hover:bg-ios-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Recommencer le quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 