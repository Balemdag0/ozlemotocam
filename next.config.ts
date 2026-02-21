import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow serving symlinked public/media folder
  devIndicators: false,
};

export default nextConfig;
