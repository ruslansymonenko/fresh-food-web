/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
      }
    ]
  },
  headers: [
    {
      key: 'Cache-Control',
      value: 'no-cache', //for development
    }
  ]
};

export default nextConfig;
