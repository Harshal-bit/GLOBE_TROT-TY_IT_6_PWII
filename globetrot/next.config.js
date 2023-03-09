

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
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/4w4l90bx9/smallTiles/**',
      },
      
    ],
  },
  
}


module.exports = nextConfig
