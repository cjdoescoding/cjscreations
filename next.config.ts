import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/cjscreations",
  assetPrefix: '/cjscreations/',
  trailingSlash: true, 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
