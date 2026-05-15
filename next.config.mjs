/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production" || process.env.GITHUB_ACTIONS

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isProd && {
    output: "export",
    basePath: "/webFabrizioArmada",
  }),
}

export default nextConfig
