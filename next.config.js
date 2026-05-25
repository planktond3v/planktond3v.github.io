/** @type {import('next').NextConfig} */

// ─────────────────────────────────────────────────────────────────
//  GitHub Pages deployment configuration
//  Set NEXT_PUBLIC_BASE_PATH to your repo name in GitHub Actions.
//  Example: /portfolio-web3-ai
//  For custom domain (username.github.io), leave it empty.
// ─────────────────────────────────────────────────────────────────
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  // ── Static export required for GitHub Pages ──────────────────────
  output: 'export',

  // ── Add trailing slash so links work correctly on Pages ──────────
  trailingSlash: true,

  // ── basePath & assetPrefix for sub-path deployment ───────────────
  basePath,
  assetPrefix: basePath,

  // ── Disable Next.js image optimization (not supported in export) ─
  images: {
    unoptimized: true,
  },

  // ── Expose basePath to client-side code ──────────────────────────
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
