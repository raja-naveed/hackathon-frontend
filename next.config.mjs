/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during the build
  },
};

export default nextConfig;
