'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getAllPhones } from '@/data/phones';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionShell } from '@/components/ui/SectionShell';
import { Pill } from '@/components/ui/Pill';
import WebPageSchema from '@/components/seo/WebPageSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface Question {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    weight: Record<string, number | string>;
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
    
    phones.forEach(phone => {
      scores[phone.id] = 0;
    });

    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === questionId);
      const selectedOption = question?.options.find(opt => opt.value === answer);
      
      if (selectedOption) {
        phones.forEach(phone => {
          let score = 0;
          
          if (typeof selectedOption.weight.price === 'number') {
            const maxPrice = Math.max(...phones.map(p => p.price));
            const priceScore = 1 - (phone.price / maxPrice);
            score += priceScore * selectedOption.weight.price;
          }
          
          if (typeof selectedOption.weight.brand === 'string' && phone.brand === selectedOption.weight.brand) {
            score += 0.5;
          }
          
          if (typeof selectedOption.weight.performance === 'number') {
            const ramScore = parseInt(phone.specs.ram.replace('GB', '')) / 8;
            score += ramScore * selectedOption.weight.performance;
          }
          
          if (typeof selectedOption.weight.camera === 'number') {
            const cameraScore = phone.specs.camera.includes('50MP') ? 1 : 0.5;
            score += cameraScore * selectedOption.weight.camera;
          }
          
          if (typeof selectedOption.weight.storage === 'number') {
            const storageScore = phone.specs.storage.includes('256GB') ? 1 : 0.7;
            score += storageScore * selectedOption.weight.storage;
          }
          
          scores[phone.id] += score;
        });
      }
    });

    return phones
      .map(phone => ({ ...phone, score: scores[phone.id] }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const recommendations = showResults ? calculateRecommendations() : [];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const breadcrumbs = [
    { name: 'Accueil', url: 'https://top5telephones.fr/' },
    { name: 'Quiz', url: 'https://top5telephones.fr/quiz' },
  ];

  const faqs = [
    {
      question: 'Comment fonctionne le quiz de sélection de smartphone ?',
      answer: 'Répondez à quelques questions simples sur votre budget, vos priorités (caméra, autonomie, performance) et vos préférences. Notre algorithme vous recommandera le smartphone à moins de 300€ qui correspond le mieux à vos besoins.',
    },
    {
      question: 'Les résultats du quiz sont-ils fiables ?',
      answer: 'Oui, notre quiz est basé sur une analyse approfondie des caractéristiques de chaque smartphone et de leurs performances réelles. Les recommandations sont personnalisées selon vos réponses.',
    },
  ];

  return (
    <>
      {/* H1 pour SEO */}
      <h1 className="sr-only">Quiz : Trouvez le smartphone idéal pour vous</h1>
      
      <div className="space-y-12 sm:space-y-16">
          {!showResults ? (
        <>
          <SectionShell
            eyebrow="Quiz personnalisé"
            title="Trouvez votre téléphone parfait"
            subtitle="Répondez à quelques questions pour recevoir des recommandations sur mesure."
          >
            <GlassCard className="p-6 sm:p-8 lg:p-10 space-y-8">
              {/* Progress Bar */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-600">
                    Question {currentQuestion + 1} sur {questions.length}
                  </span>
                  <span className="text-sm font-semibold text-ios-blue-600">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-ios-blue-500 to-ios-blue-600 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Current Question */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
                  {questions[currentQuestion].question}
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                      className="p-5 text-left bg-white/60 hover:bg-white/80 border-2 border-white/30 hover:border-ios-blue-500/50 rounded-3xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg group"
                    >
                      <span className="text-lg font-semibold text-slate-900 group-hover:text-ios-blue-600 transition-colors">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>
          </SectionShell>
        </>
      ) : (
        <>
          <SectionShell
            eyebrow="Recommandations personnalisées"
            title="Voici nos recommandations"
            subtitle="Basé sur vos réponses, voici les téléphones qui correspondent le mieux à vos besoins."
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {recommendations.map((phone, index) => (
                <GlassCard key={phone.id} className="flex flex-col gap-5 relative group">
                    {index === 0 && (
                    <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-br from-ios-blue-500 to-ios-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      #1 Recommandé
                      </div>
                    )}
                    
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/70 border border-white/25 group-hover:border-ios-blue-500/30 transition-all duration-300">
                    <Image
                        src={phone.image}
                        alt={phone.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-ios-blue-600 text-xs font-semibold uppercase tracking-wide">{phone.brand}</span>
                        <span className="text-sm font-medium text-slate-600">
                          Score: {Math.round(phone.score * 10)}/10
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">{phone.name}</h3>
                      <div className="text-3xl font-bold text-slate-900">{formatPrice(phone.price)}</div>
                    </div>
                    
                    <div className="space-y-3 flex-1">
                      <div>
                        <h4 className="font-medium text-slate-900 text-sm mb-2">Pourquoi ce choix ?</h4>
                        <ul className="space-y-1.5">
                          {phone.pros.slice(0, 2).map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                              <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      </div>
                      
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <Button as="link" href={`/fiche/${phone.slug}`} size="sm" className="w-full">
                        Détails
                      </Button>
                      <Button
                        as="link"
                          href={phone.affiliateLinks.amazon}
                          target="_blank"
                          rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        >
                          Acheter
                      </Button>
                    </div>
                  </div>
                </GlassCard>
                ))}
              </div>
          </SectionShell>

              {/* Restart Quiz */}
          <section className="py-8">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <GlassCard className="p-8 text-center space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Pas satisfait des résultats ?
                </h3>
                <p className="text-slate-600">
                  Recommencez le quiz avec d'autres critères pour découvrir d'autres options.
                </p>
                <Button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers({});
                    setShowResults(false);
                  }}
                  size="lg"
                >
                  Recommencer le quiz
                </Button>
              </GlassCard>
            </div>
          </section>
        </>
      )}

      {/* Structured Data */}
      <WebPageSchema
        name="Quiz : Trouvez le smartphone idéal"
        description="Répondez à quelques questions simples et découvrez le smartphone à moins de 300€ qui correspond le mieux à vos besoins."
        url="https://top5telephones.fr/quiz"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
    </>
  );
} 
