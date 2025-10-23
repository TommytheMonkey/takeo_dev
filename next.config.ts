import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' for Replit compatibility - use dynamic server
  eslint: {
    // Allow production builds to complete even with ESLint warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow production builds to complete even with TypeScript errors (use cautiously)
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
