/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mastermanhsa.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
