/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    API_URL: "http://localhost:3001/api",
  },
};

export default nextConfig;
