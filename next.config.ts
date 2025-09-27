import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /*
    Yahaan aap Next.js ki doosri configurations daal sakte hain,
    jaise ki output: 'export' for static export, ya koi aur setting.
  */
  typescript: {
    // Agar aap build errors ko ignore karna chahte hain toh ise 'true' rakhein
    ignoreBuildErrors: true, 
  },
  eslint: {
    // Agar aap build ke dauraan eslint errors ko ignore karna chahte hain toh ise 'true' rakhein
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      // Third-party domains (jaise ki aapne pehle daale the)
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      // ✅ FIX: Google Drive domain added to allow image loading from there
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;