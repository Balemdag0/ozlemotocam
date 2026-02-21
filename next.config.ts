import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Allow serving symlinked public/media folder
  devIndicators: false,
};

export default nextConfig;
