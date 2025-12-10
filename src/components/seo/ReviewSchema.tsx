import { Review, getReviewsByPhoneSlug, getAverageRating } from '@/data/reviews';

interface ReviewSchemaProps {
  phoneSlug: string;
  phoneName: string;
}

export default function ReviewSchema({ phoneSlug, phoneName }: ReviewSchemaProps) {
  const reviews = getReviewsByPhoneSlug(phoneSlug);
  const averageRating = getAverageRating(reviews);
  const baseUrl = 'https://top5telephones.fr';

  if (reviews.length === 0) {
    return null;
  }

  const reviewSchema = reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "datePublished": review.date,
    "reviewBody": review.comment,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "itemReviewed": {
      "@type": "Product",
      "name": phoneName
    }
  }));

  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": averageRating.toString(),
    "reviewCount": reviews.length.toString(),
    "bestRating": "5",
    "worstRating": "1"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": phoneName,
    "aggregateRating": aggregateRating,
    "review": reviewSchema
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

