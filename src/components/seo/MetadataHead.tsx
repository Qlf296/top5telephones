'use client';

import Head from 'next/head';

interface MetadataHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
}

export default function MetadataHead({
  title,
  description,
  canonical,
  ogImage = '/images/og-image.jpg',
  keywords,
  noindex = false,
}: MetadataHeadProps) {
  const fullTitle = title.includes('Top 5 Téléphones') ? title : `${title} | Top 5 Téléphones`;
  const fullUrl = canonical ? `https://top5telephones.fr${canonical}` : 'https://top5telephones.fr';
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `https://top5telephones.fr${ogImage}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonical && <link rel="canonical" href={fullUrl} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Top 5 Téléphones" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
}

