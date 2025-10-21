// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow specific paths:
        disallow: [
          '/admin/',
          '/login/',
          '/register/',
          '/cart/',
          '/checkout/',
          '/user/',
          '/account/',
          '/wp-admin/', // Typically for WordPress, but good to include if your site might have similar structures
          '/cgi-bin/',
        ],
      },
    ],
    sitemap: 'https://www.adclickmagnet.com/sitemap.xml', // Make sure this matches your sitemap URL
  }
}