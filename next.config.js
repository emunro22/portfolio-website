/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  distDir: "build", // Specify your custom build folder here
};

module.exports = {
  experimental: {
    serverActions: true,
  },
};
