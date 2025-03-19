/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Untuk static export
  images: {
    unoptimized: true, // Diperlukan untuk static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Konfigurasi untuk Cloudflare Pages
  env: {
    NEXT_PUBLIC_CF_PAGES: process.env.CF_PAGES || '',
    NEXT_PUBLIC_CF_PAGES_URL: process.env.CF_PAGES_URL || '',
    NEXT_PUBLIC_CF_PAGES_BRANCH: process.env.CF_PAGES_BRANCH || '',
  },
}

module.exports = nextConfig
