import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Old page redirects to new anchored sections
      {
        source: '/police-officers-and-public-safety',
        destination: '/industries#forensics',
        permanent: true, // 301 redirect
      },
      {
        source: '/legal-investigators',
        destination: '/industries#forensics',
        permanent: true,
      },
      {
        source: '/legal-at-work',
        destination: '/industries#forensics',
        permanent: true,
      },
      {
        source: '/insurance',
        destination: '/industries#insurtech',
        permanent: true,
      },
      {
        source: '/insurane', // typo fix
        destination: '/industries#insurtech',
        permanent: true,
      },
      {
        source: '/thank-you',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;