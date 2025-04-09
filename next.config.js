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
          hostname: 'assets.pinterest.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
        },
      ], 
    },
    experimental: {
      serverComponentsExternalPackages: ['@aws-sdk/client-s3', '@aws-sdk/s3-request-presigner']
    },
    
    // Include in your existing config if you also want to use public images
    images: {
      domains: ['adclickmagnetimage.blr1.cdn.digitaloceanspaces.com'],
    },
  }