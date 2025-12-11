/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/btw_assignment',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
