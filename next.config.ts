import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/og-blanks-website-demo",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;