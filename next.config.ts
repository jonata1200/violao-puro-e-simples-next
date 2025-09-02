/** @type {import('next').NextConfig} */
const nextConfig = {
  // Esta linha é a mágica!
  // Ela cria uma pasta .next/standalone com tudo o que é necessário para rodar.
  output: 'standalone',
};

export default nextConfig;