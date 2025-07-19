/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "cloud.google.com"],
  },
};

module.exports = nextConfig;
