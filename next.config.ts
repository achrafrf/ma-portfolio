import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // eslint: حيدناها حيت مابقاتش خدامة هنا
  // turbopack: حيدناها حيت هي اللي كادير Crash للـ Build
};

export default nextConfig;