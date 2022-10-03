/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap.js");
    }
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
