/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML in `out/`, served by nginx (see `nginx/`).
  // Redirects live in the nginx config.
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
