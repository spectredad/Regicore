import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/compliance", destination: "/terms", permanent: true },
      { source: "/book", destination: "/start", permanent: true },
    ];
  },
};

export default nextConfig;
