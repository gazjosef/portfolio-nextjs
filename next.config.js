/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true, // Ensures class names are consistent in SSR & CSR
  },
};

module.exports = nextConfig;
