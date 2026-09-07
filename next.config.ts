import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Builds the whole site to plain static files in ./out — no server needed.
  // Drag that folder onto Netlify Drop, or push it to GitHub Pages.
  output: 'export',
  basePath: '/letter',
};

export default nextConfig;
