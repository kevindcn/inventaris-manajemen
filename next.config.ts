import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Fix fs module for Tailwind
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    // ADD PATH ALIAS untuk @/
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    }
    
    return config
  },
}

export default nextConfig
