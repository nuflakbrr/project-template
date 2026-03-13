/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/bikinproject",
  assetPrefix: "/bikinproject",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
