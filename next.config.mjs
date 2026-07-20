/** @type {import('next').NextConfig} */
const isNetlify = process.env.NETLIFY === 'true'

const nextConfig = {
  // If building on Netlify (`NETLIFY=true`), export static HTML `/out`.
  // If building on Vercel (or locally without Netlify flag), use standard Next.js build
  // with Vercel Edge Image Optimization and blazing-fast SSG!
  output: isNetlify ? 'export' : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: isNetlify,
  },
}

export default nextConfig
