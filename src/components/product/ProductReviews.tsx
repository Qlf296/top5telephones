"use client";

import { useState } from 'react';
import { Review, getReviewsByPhoneSlug, getAverageRating } from '@/data/reviews';
import { generateStars } from '@/lib/utils';
import { GlassCard } from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';

interface ProductReviewsProps {
  phoneSlug: string;
  phoneName: string;
}

export function ProductReviews({ phoneSlug, phoneName }: ProductReviewsProps) {
  const allReviews = getReviewsByPhoneSlug(phoneSlug);
  const [showAll, setShowAll] = useState(false);
  const [helpfulReviews, setHelpfulReviews] = useState<Set<string>>(new Set());
  
  const displayedReviews = showAll ? allReviews : allReviews.slice(0, 3);
  const averageRating = getAverageRating(allReviews);
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: allReviews.filter(r => r.rating === rating).length,
    percentage: allReviews.length > 0 
      ? Math.round((allReviews.filter(r => r.rating === rating).length / allReviews.length) * 100)
      : 0
  }));

  const handleHelpful = (reviewId: string) => {
    setHelpfulReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  if (allReviews.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* En-tête avec note moyenne */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Avis clients</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-slate-900">{averageRating}</span>
              <div className="flex flex-col">
                <span className="text-yellow-400 text-xl">{generateStars(averageRating)}</span>
                <span className="text-sm text-slate-600">({allReviews.length} avis)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Distribution des notes */}
        <div className="space-y-1 min-w-[200px]">
          {ratingDistribution.reverse().map(({ rating, count, percentage }) => (
            <div key={rating} className="flex items-center gap-2 text-sm">
              <span className="text-slate-600 w-8">{rating}★</span>
              <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-slate-600 w-8 text-right">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Liste des avis */}
      <div className="space-y-4">
        {displayedReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="p-6">
              <div className="space-y-4">
                {/* En-tête avis */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">{generateStars(review.rating)}</span>
                      </div>
                      {review.verified && (
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                          ✓ Achat vérifié
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{review.title}</h3>
                    <p className="text-sm text-slate-600">
                      Par <span className="font-medium">{review.author}</span> le {formatDate(review.date)}
                    </p>
                  </div>
                </div>

                {/* Commentaire */}
                <p className="text-slate-700 leading-relaxed">{review.comment}</p>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-2 border-t border-white/20">
                  <button
                    onClick={() => handleHelpful(review.id)}
                    className={`text-sm flex items-center gap-2 transition-colors ${
                      helpfulReviews.has(review.id)
                        ? 'text-ios-blue-600 font-medium'
                        : 'text-slate-600 hover:text-ios-blue-600'
                    }`}
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                    </svg>
                    Utile ({review.helpful + (helpfulReviews.has(review.id) ? 1 : 0)})
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Bouton Voir plus/moins */}
      {allReviews.length > 3 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-full bg-white/80 text-slate-900 font-medium border border-white/40 shadow-md hover:shadow-lg transition-all duration-200"
          >
            {showAll ? 'Voir moins' : `Voir tous les avis (${allReviews.length})`}
          </button>
        </div>
      )}
    </div>
  );
}

