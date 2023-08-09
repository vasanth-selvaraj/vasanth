/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "opengraph.githubassets.com",
      "imagedelivery.net",
      "cdn.pixabay.com",
      "images.vexels.com",
      "www.php.net",
      "logospng.org",
      "w7.pngwing.com",
      "miro.medium.com",
      "banner2.cleanpng.com",
    ],
  },
};

module.exports = nextConfig;