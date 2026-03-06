import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "procaffe.vn",
      },
    ],
  },
};

export default nextConfig;
