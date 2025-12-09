interface ItemListSchemaProps {
  items: Array<{
    name: string;
    url: string;
    description?: string;
    image?: string;
  }>;
  name: string;
  description: string;
  url: string;
}

export default function ItemListSchema({ items, name, description, url }: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "description": description,
    "url": url,
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": item.url,
      ...(item.description && { "description": item.description }),
      ...(item.image && { "image": item.image })
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

