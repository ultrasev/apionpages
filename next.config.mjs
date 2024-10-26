import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import TerserPlugin from 'terser-webpack-plugin';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "image.lexica.art" },
      { protocol: "https", hostname: "stobby.vercel.app" },
      { protocol: "https", hostname: "lexica-server.pages.dev" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cf.ddot.cc" },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 只对客户端代码进行混淆
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            mangle: true, // 混淆变量名
            compress: {
              drop_console: true, // 移除 console.log
            },
          },
        })
      );
    }
    return config;
  },
  rewrites: () => [
    { source: "/abc", destination: "/en/abc" },
  ],
};

export default nextConfig;
