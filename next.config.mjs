/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/webFabrizioArmada",
  assetPrefix: "/webFabrizioArmada",
}

export default nextConfig
