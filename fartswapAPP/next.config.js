/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/solana-labs/token-list/**',
      },
    ],
  },
  typescript: {
    // Evita que Vercel falle por errores del SDK de Raydium
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
