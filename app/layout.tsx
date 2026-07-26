// ─────────────────────────────────────────────────────────────────────────────
//  app/layout.tsx  —  Root layout & SEO metadata
//
//  This is the top-level wrapper for EVERY page in the app.
//  Google Fonts are loaded here via <link> to keep things static-export safe.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from 'next';
import './globals.css';

// ── Metadata (SEO) ────────────────────────────────────────────────────────────
// Next.js uses this to populate <head> tags automatically.
export const metadata: Metadata = {
  title: {
    default:  'L4Code — DevSecOps & Cloud Engineer',
    template: '%s | L4Code',
  },
  description:
    'Senior DevSecOps & Cloud Engineer specialising in Kubernetes, Terraform, CI/CD, Blockchain Infrastructure, and AI workload deployment.',
  keywords: [
    'DevSecOps', 'Cloud Engineer', 'Kubernetes', 'Terraform', 'Docker',
    'AWS', 'GCP', 'Azure', 'Blockchain', 'Web3', 'AI Infrastructure',
    'GitHub Actions', 'ArgoCD', 'Prometheus', 'Grafana', 'Portfolio',
  ],
  authors:  [{ name: 'L4Code', url: 'https://github.com/L4Code' }],
  creator:  'L4Code',
  metadataBase: new URL('https://L4Code.github.io'),
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://L4Code.github.io/portfolio-web3-ai',
    title:       'L4Code — DevSecOps & Cloud Engineer',
    description: 'Building secure, scalable, cloud-native infrastructure. Kubernetes, Terraform, Blockchain & AI.',
    siteName:    'L4Code Portfolio',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'L4Code — DevSecOps & Cloud Engineer',
    description: 'Building secure, scalable, cloud-native infrastructure.',
    creator:     '@L4Code',
  },
  robots: {
    index:  true,
    follow: true,
  },
  // ── Add real favicon paths in public/ ────────────────────────────────────
  icons: {
    icon:  '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

// ── Viewport configuration ────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor:  '#0a0a0f',
  colorScheme: 'dark',
};

// ─────────────────────────────────────────────────────────────────────────────
//  RootLayout component
// ─────────────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* ── Google Fonts: Orbitron (futuristic) + Inter (body) ─────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0f] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
