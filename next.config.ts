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
  async redirects() {
    return [
      {
        source: '/lien-he',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
