/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@splinetool/runtime': '@splinetool/runtime'
    };
    
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };
    
    // Remove the external canvas configuration
    config.externals = (config.externals || []).filter(
      external => typeof external !== 'object' || !('canvas' in external)
    );

    return config;
  },
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime', 'three'],
  swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.webfx.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'assets.pinterest.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'png.pngtree.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'numerique.vamtam.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'i.gifer.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'i.graphicmama.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'media.istockphoto.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'i.pinimg.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'outerorbittech.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'static-cse.canva.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'media.licdn.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'cdn3d.iconscout.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'www.cflowapps.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'www.cflowapps.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'www.commercialdesignindia.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'ms-f7-sites-prod-cdn.akamaized.net',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'filecenter.deltaww.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'img.foodprocessing.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'www.sparkfabrik.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: '5.imimg.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'mir-s3-cdn-cf.behance.net',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'c8.alamy.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 't3.ftcdn.net',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'cdn.shopify.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'w7.pngwing.com',
          port: '',
        },
        {
          protocol: 'http',
          hostname: 'www.threegirlsmedia.com',
          port: '',
        },
        {
          protocol: 'http',
          hostname: 'eliteflowpiping.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'www.thinkleansixsigma.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'www.simplilearn.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'unctad.org',
          port: '',
        },
      ], 
    },
  }