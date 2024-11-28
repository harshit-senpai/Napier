import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "http",
        hostname: "ucarecdn.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["ucarecdn.com"],
  },
};

export default nextConfig;
