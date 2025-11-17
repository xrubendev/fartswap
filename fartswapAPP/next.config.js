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

  // IGNORA errores de TypeScript del proyecto
  typescript: {
    ignoreBuildErrors: true,
  },

  // IGNORA errores del SDK de Raydium dentro de node_modules
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Evita que Next compile el SDK de Raydium o detecte tipos inválidos
  webpack: (config) => {
    config.ignoreWarnings = [
      {
        module: /@raydium-io\/raydium-sdk-v2/,
      },
    ];
    return config;
  },

  // Asegura que no intente transpilar el paquete
  transpilePackages: [],
};

module.exports = nextConfig;
