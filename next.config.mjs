/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Set to true if you want to host on static hosting providers like GitHub Pages
  },
};

export default nextConfig;
