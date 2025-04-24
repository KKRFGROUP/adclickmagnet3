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
  
  // Force HTTPS in production
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://adclickmagnet.com' : '',
  
  // Consolidated images config (merged the two separate configs)
  images: {
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    domains: ['adclickmagnetimage.blr1.cdn.digitaloceanspaces.com'],
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
  
  // Add security headers to fix SSL issues
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests"
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
    ];
  },
}