/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed 'output: standalone' for better Vercel compatibility
  // Vercel auto-detects Next.js and optimizes the build
}

module.exports = nextConfig
