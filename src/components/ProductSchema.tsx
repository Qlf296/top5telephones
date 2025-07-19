import { Phone } from '@/data/phones';

interface ProductSchemaProps {
  phone: Phone;
}

export default function ProductSchema({ phone }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": phone.name,
    "brand": {
      "@type": "Brand",
      "name": phone.brand
    },
    "description": `Découvrez le ${phone.name}, un smartphone ${phone.brand} avec ${phone.specs.screen}, ${phone.specs.camera}, ${phone.specs.storage} et ${phone.specs.battery}.`,
    "image": phone.image,
    "offers": {
      "@type": "Offer",
      "price": phone.price.toString(),
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": `https://top5telephones.fr/fiche/${phone.slug}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": phone.rating.toString(),
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Écran",
        "value": phone.specs.screen
      },
      {
        "@type": "PropertyValue",
        "name": "Processeur",
        "value": phone.specs.processor
      },
      {
        "@type": "PropertyValue",
        "name": "RAM",
        "value": phone.specs.ram
      },
      {
        "@type": "PropertyValue",
        "name": "Stockage",
        "value": phone.specs.storage
      },
      {
        "@type": "PropertyValue",
        "name": "Caméra",
        "value": phone.specs.camera
      },
      {
        "@type": "PropertyValue",
        "name": "Batterie",
        "value": phone.specs.battery
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 