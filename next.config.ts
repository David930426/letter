import type { NextConfig } from "next";

// Only GitHub Pages serves this site from a subpath (github.io/letter/) —
// the deploy workflow sets NEXT_PUBLIC_BASE_PATH so this and lib/base-path.ts
// agree. Netlify, Vercel and local dev leave it unset and sit at the domain
// root, so basePath must be undefined there (Next rejects an empty string).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  // Builds the whole site to plain static files in ./out — no server needed.
  // Drag that folder onto Netlify Drop, or push it to GitHub Pages.
  output: 'export',
  basePath,
};

export default nextConfig;
