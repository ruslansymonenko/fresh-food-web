/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
      },
      {
        hostname: 'loremflickr.com'
      }
    ]
  },
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
    SERVER_URL: process.env.SERVER_URL,
  },
  headers: [
    {
      key: 'Cache-Control',
      value: 'no-cache', //for development
    }
  ]
};

export default nextConfig;
