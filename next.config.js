const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withOptimizedImages({
  // Adicione outras configurações do Next.js aqui
  // Ative a minificação de JavaScript e CSS
  optimizeCss: true,
  optimizeImages: true,
});

module.exports = nextConfig
