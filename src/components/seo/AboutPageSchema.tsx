export default function AboutPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À propos - Top 5 Téléphones",
    "description": "Découvrez l'histoire de Top 5 Téléphones, notre mission et notre méthodologie de sélection des meilleurs smartphones à moins de 300€.",
    "url": "https://top5telephones.fr/a-propos",
    "mainEntity": {
      "@type": "Organization",
      "name": "Top 5 Téléphones",
      "description": "Votre guide de confiance pour choisir le meilleur smartphone à moins de 300€",
      "url": "https://top5telephones.fr",
      "foundingDate": "2024",
      "knowsAbout": [
        "Smartphones",
        "Comparatifs de téléphones",
        "Tests de smartphones",
        "Guide d'achat smartphone"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

