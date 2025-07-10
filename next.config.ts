import type { NextConfig } from "next";

const nextConfig: NextConfig = {
reactStrictMode: true,
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ibb.co',
      },
       {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
