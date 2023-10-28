/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  async headers() {
    return [
      
      {
        source: '/(.*)?',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,HEAD,PUT,PATCH,POST,DELETE'
          }
        ]
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/tfosrv/:path*',
        destination: 'https://tfosrv.com/:path*',
      },
      {
        source: '/video/:path*',
        destination: 'https://video.thaipornhd.com/:path*',
      },
      {
        source: '/posters/:path*',
        destination: 'https://cdn.thaipornhd.com/:path*',
      },
      {
        source: '/v3/current/fluidplayer.min.js',
        destination: 'https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js',
      }
    ]
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_AppDomain:    process.env.NEXT_PUBLIC_AppDomain,
    staticFolder: '/static',
    basePath: process.env.NEXT_PUBLIC_AppDomain
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    NEXT_PUBLIC_THAIPORN_SITE_VIDEO:    process.env.NEXT_PUBLIC_THAIPORN_SITE_VIDEO
  },
}

module.exports = nextConfig
