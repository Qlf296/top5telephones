export default function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - Top 5 Téléphones",
    "description": "Contactez l'équipe de Top 5 Téléphones pour toute question, suggestion ou demande de partenariat.",
    "url": "https://top5telephones.fr/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Top 5 Téléphones",
      "email": "contact@top5telephones.fr",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "contact@top5telephones.fr",
        "availableLanguage": ["French"]
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

