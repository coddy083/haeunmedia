/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com",
      "cdn.pixabay.com",
      "images-wixmp-530a50041672c69d335ba4cf.wixmp.com",
    ],
  },
};

module.exports = nextConfig;
