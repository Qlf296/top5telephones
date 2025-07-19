/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://top5telephones.fr',
  generateRobotsTxt: false, // On utilise notre robots.txt personnalisé
  generateIndexSitemap: true,
  exclude: ['/quiz', '/test', '/admin'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/quiz', '/test', '/admin', '/api'],
      },
    ],
    additionalSitemaps: [
      'https://top5telephones.fr/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Priorité élevée pour les pages importantes
    const priorityMap = {
      '/': 1.0,
      '/top-5-smartphones-300euros': 0.9,
      '/comparateur': 0.8,
      '/guide-achat-smartphone': 0.8,
      '/comparatif-samsung-xiaomi': 0.8,
      '/test-samsung-a14': 0.7,
      '/test-xiaomi-note-12': 0.7,
    }
    
    return {
      loc: path,
      changefreq: 'weekly',
      priority: priorityMap[path] || 0.5,
      lastmod: new Date().toISOString(),
    }
  },
} 