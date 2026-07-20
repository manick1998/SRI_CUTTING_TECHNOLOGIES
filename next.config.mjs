/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the whole site is pre-rendered to /out at build time.
  // This deploys as plain HTML/CSS/JS on Netlify and avoids the
  // @netlify/plugin-nextjs "Failed assembling prerendered content" bug.
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
