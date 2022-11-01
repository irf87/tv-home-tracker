/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.themoviedb.org'],
  },
}

const withPWA = require('next-pwa')({
  dest: 'public',
  skipWaiting: false
})

module.exports = withPWA(nextConfig)
