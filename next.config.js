/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL_DEV,
    JWT_SECRET: process.env.JWT_SECRET
  }
}

module.exports = nextConfig
