import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath for GitHub Pages (remove if using custom domain)
  // basePath: '/prosenjitkm.github.io',
};

export default nextConfig;
