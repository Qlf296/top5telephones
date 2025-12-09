export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Top 5 Téléphones",
    "url": "https://top5telephones.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://top5telephones.fr/images/icon-512.png",
      "width": 512,
      "height": 512
    },
    "description": "Site spécialisé dans les smartphones à moins de 300€. Comparaisons détaillées, tests complets et guides d'achat.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@top5telephones.fr",
      "availableLanguage": ["French"]
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

