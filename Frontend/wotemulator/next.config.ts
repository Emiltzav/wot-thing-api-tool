import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Use true for 308 redirects (permanent) or false for 307 (temporary)
      },
    ];
  },
};

export default nextConfig;
