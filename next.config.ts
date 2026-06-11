import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder afbeeldingen (vervang later door eigen CDN of /public map)
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};

export default nextConfig;
