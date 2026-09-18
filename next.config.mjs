/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Portfolio images are served locally from /public/assets for now.
    // Add remotePatterns here only if a CMS/CDN is introduced later.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
