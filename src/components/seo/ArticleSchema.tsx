interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

export default function ArticleSchema({
  headline,
  description,
  image,
  url,
  datePublished,
  dateModified,
  author = "Top 5 Téléphones"
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Top 5 Téléphones",
      "logo": {
        "@type": "ImageObject",
        "url": "https://top5telephones.fr/images/icon-512.png",
        "width": 512,
        "height": 512
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

