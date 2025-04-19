import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Basic redirect
      // {
      //   source: '/rubik-match',
      //   destination: '/match',
      //   permanent: true,
      // },
      // Wildcard path matching
      {
        source: '/regional-contest',
        destination: '/contest',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
