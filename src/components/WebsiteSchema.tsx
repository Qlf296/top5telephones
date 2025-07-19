export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Top 5 Téléphones",
    "description": "Découvrez les meilleurs smartphones à moins de 300€. Comparaisons détaillées, tests et conseils d'achat pour faire le bon choix.",
    "url": "https://top5telephones.fr",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://top5telephones.fr/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Top 5 Téléphones",
      "url": "https://top5telephones.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://top5telephones.fr/images/logo.png"
      }
    },
    "sameAs": [
      "https://twitter.com/top5telephones",
      "https://facebook.com/top5telephones"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 