interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export default function WebPageSchema({ 
  name, 
  description, 
  url, 
  datePublished,
  dateModified 
}: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "inLanguage": "fr-FR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Top 5 Téléphones",
      "url": "https://top5telephones.fr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Top 5 Téléphones",
      "url": "https://top5telephones.fr"
    },
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified || datePublished })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

