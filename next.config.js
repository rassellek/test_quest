/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/test_quest",
  assetPrefix: "/test_quest",
};

module.exports = nextConfig;
