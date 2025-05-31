   import type { MetadataRoute } from 'next'

    export default function sitemap(): MetadataRoute.Sitemap {
      return [
        {
          url: 'https://www.adclickmagnet.com/',
          lastModified: new Date('2025-05-06T09:39:08+00:00'),
          priority: 1.00,
        },
        {
          url: 'https://www.adclickmagnet.com/contact-us',
          lastModified: new Date('2025-05-06T09:39:08+00:00'),
          priority: 0.80,
        },
        {
          url: 'https://www.adclickmagnet.com/graphic-design',
          lastModified: new Date('2025-05-06T09:39:08+00:00'),
          priority: 0.80,
        },
        // Add other URLs dynamically or statically here
      ]
    }