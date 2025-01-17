/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@splinetool/runtime': '@splinetool/runtime/build/runtime.js'
    };

    // Add Draco loader configuration
    config.module.rules.push({
      test: /draco_decoder\.wasm$/,
      type: 'asset/resource',
    });
    
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
  compress: true,
  poweredByHeader: false,
  optimizeFonts: true,
    images: {
      minimumCacheTTL: 60,
      formats: ['image/webp'],
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
          hostname: 'cdn.shopify.com',
          port: '',
        },
        {
          protocol: 'http',
          hostname: 'www.threegirlsmedia.com',
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