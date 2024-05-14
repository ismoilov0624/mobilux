/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olcha.uz",
      },
      {
        protocol: "https",
        hostname: "cdn.olcha.uz",
      },
      {
        protocol: "https",
        hostname: "eoe.works",
      },
      {
        protocol: "https",
        hostname: "basket-11.wbcontent.net",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "cdn.mediapark.uz",
      },
    ],
  },
};

export default nextConfig;
