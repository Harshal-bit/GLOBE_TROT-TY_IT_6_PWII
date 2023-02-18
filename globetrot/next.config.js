

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/Harshal-bit/GLOBE_TROT-TY_IT_6_PWII/main/blob/cover.jpg',
      },
    ],
  },
  
}


module.exports = nextConfig
