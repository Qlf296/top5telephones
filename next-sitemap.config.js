/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://top5telephones.fr',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/quiz'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/quiz'],
      },
    ],
    additionalSitemaps: [
      'https://top5telephones.fr/sitemap.xml',
    ],
  },
} 