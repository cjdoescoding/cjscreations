import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, 
  images: {
    unoptimized: true, 
  },
  basePath: "/cjscreations",
  assetPrefix: '/cjscreations/',
};

export default nextConfig;
