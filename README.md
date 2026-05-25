# ⚡ PlanktonDev — Web3 × AI Portfolio

> A **futuristic DevSecOps portfolio** built with Next.js 14, TailwindCSS, and Framer Motion.
> Cyberpunk glassmorphism aesthetic with neon accents, particle system, and orbital tech visualisation.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer)

---

## 🖼️ Preview

| Hero | Skills | Projects |
|------|--------|---------|
| Animated typing + particles | Pill cloud + progress bars | Glassmorphism cards |

---

## 🗂️ Folder Structure

```
portfolio-web3-ai/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions — auto-deploy to Pages
│
├── app/                        # Next.js App Router
│   ├── globals.css             # Global styles, CSS variables, animations
│   ├── layout.tsx              # Root layout + SEO metadata + Google Fonts
│   └── page.tsx                # Main page — composes all sections
│
├── components/
│   ├── effects/                # Visual-only client-side effects
│   │   ├── ParticleSystem.tsx  # Canvas particle network
│   │   ├── CursorGlow.tsx      # Mouse-following spotlight
│   │   ├── ScrollProgress.tsx  # Top progress bar
│   │   └── AnimatedGrid.tsx    # Background dot-grid + scan lines
│   │
│   ├── shared/                 # Reusable UI primitives
│   │   ├── TypeWriter.tsx      # Animated typing component (no deps)
│   │   ├── SectionTitle.tsx    # Animated section heading
│   │   └── GlowCard.tsx        # Glassmorphism card wrapper
│   │
│   └── layout/                 # Page-level layout components
│       ├── Navbar.tsx          # Fixed navbar + mobile menu
│       └── Footer.tsx          # Minimal glow footer
│
├── sections/                   # Full-page-width sections
│   ├── Hero.tsx                # Landing + typing + CTAs
│   ├── About.tsx               # Bio + focus areas
│   ├── Skills.tsx              # Pill cloud + progress bars
│   ├── Projects.tsx            # Project cards with hover effects
│   ├── Experience.tsx          # Alternating timeline
│   ├── Certifications.tsx      # Cert cards
│   ├── TechVisualization.tsx   # Orbital tech diagram
│   └── Contact.tsx             # Social channels + terminal CTA
│
├── lib/
│   ├── utils.ts                # cn(), clamp(), randomBetween()
│   └── data.ts                 # ✏️  ALL portfolio content (edit here!)
│
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── cv.pdf                  # ← place your CV here
│
├── next.config.js              # Static export + GitHub Pages config
├── tailwind.config.js          # Cyberpunk colour palette + animations
├── tsconfig.json
└── package.json
```

---

## ✏️ How to Personalise

**Everything lives in `lib/data.ts`** — update it and the whole site reflects your changes automatically.

```typescript
// lib/data.ts — key objects to update:

export const personalInfo = {
  name:     'YourName',
  email:    'you@example.com',
  github:   'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  // ...
};

export const typingRoles  = ['DevOps Engineer', 'Cloud Architect', ...];
export const projects      = [...];   // add/remove project cards
export const experiences   = [...];   // timeline entries
export const certifications = [...];  // cert cards
```

---

## 🚀 Local Development

### Prerequisites

| Tool       | Version   |
|------------|-----------|
| Node.js    | ≥ 18 LTS  |
| npm        | ≥ 9       |

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/planktondev/portfolio-web3-ai.git
cd portfolio-web3-ai

# 2. Install dependencies
npm install

# 3. Start dev server  (hot-reloading)
npm run dev

# 4. Open browser
open http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
# Build static export (output goes to ./out/)
npm run build

# Preview the static export locally
npx serve ./out
```

---

## 🌐 GitHub Pages Deployment

### Automatic (GitHub Actions) — Recommended

1. **Push** this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-web3-ai.git
   git push -u origin main
   ```

2. **Enable Pages** in your repo:
   - `Settings → Pages → Source → GitHub Actions`

3. **Update the base path** in `.github/workflows/deploy.yml`:
   ```yaml
   - name: Build & export
     env:
       NEXT_PUBLIC_BASE_PATH: /portfolio-web3-ai   # ← your repo name
   ```

4. **Push** and the workflow auto-deploys. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/portfolio-web3-ai/
   ```

### Custom Domain (`yourdomain.com`)

1. Set `NEXT_PUBLIC_BASE_PATH: ""` (empty) in the workflow.
2. Add a `CNAME` file in `public/` with your domain.
3. Configure your DNS provider with a CNAME pointing to `YOUR_USERNAME.github.io`.

### Manual Deploy

```bash
# Build
NEXT_PUBLIC_BASE_PATH=/portfolio-web3-ai npm run build

# Deploy the ./out folder via gh-pages
npx gh-pages -d out -b gh-pages
```

---

## 🎨 Design System

### Colours

| Token        | Hex       | Usage                   |
|--------------|-----------|-------------------------|
| `cyber-cyan`   | `#00e5ff` | Primary accent, borders |
| `cyber-purple` | `#7b2fff` | Secondary, gradients    |
| `cyber-pink`   | `#ff00aa` | Tertiary, highlights    |
| `cyber-dark`   | `#0a0a0f` | Background              |

### Fonts

| Font            | Usage                |
|-----------------|----------------------|
| **Orbitron**    | Headings, logo, nav  |
| **Inter**       | Body text            |
| **JetBrains Mono** | Code, labels, tags |

### Animations

| Class            | Effect                           |
|------------------|----------------------------------|
| `animate-glow`   | Pulsing cyan/purple box-shadow   |
| `animate-float`  | Gentle vertical floating         |
| `animate-orbit`  | Continuous rotation (orbital)    |
| `animate-blink`  | Cursor blink                     |
| `animate-shimmer`| Horizontal shimmer sweep         |

---

## 🧩 Adding a New Section

1. Create `sections/YourSection.tsx` following the pattern of existing sections.
2. Import and add it to `app/page.tsx`.
3. Add a nav link in `components/layout/Navbar.tsx` (`NAV_LINKS` array).
4. Export your data from `lib/data.ts`.

```tsx
// sections/YourSection.tsx
'use client';
import SectionTitle from '@/components/shared/SectionTitle';

export default function YourSection() {
  return (
    <section id="your-section" className="relative py-28">
      <div className="section-container">
        <SectionTitle label="08 / Label" title="Your Title" />
        {/* content */}
      </div>
    </section>
  );
}
```

---

## 📦 Tech Stack

| Library        | Version | Purpose                        |
|----------------|---------|-------------------------------|
| Next.js        | 14      | React framework + static export|
| TypeScript     | 5       | Type safety                    |
| TailwindCSS    | 3       | Utility-first styling          |
| Framer Motion  | 11      | Animations & scroll triggers   |
| Lucide React   | 0.400   | Icon set                       |
| Radix UI       | latest  | Accessible primitives          |
| clsx / twMerge | latest  | Conditional class merging      |

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Assets return 404 on GitHub Pages | Ensure `NEXT_PUBLIC_BASE_PATH=/your-repo-name` in the workflow |
| Fonts don't load | Check Google Fonts connection; fonts are loaded in `app/layout.tsx` |
| Particles not showing | They're canvas-only (client-side). Verify JavaScript is enabled |
| `next export` error | Confirm `output: 'export'` is set in `next.config.js` |
| Images broken | All images must be in `public/`; use `unoptimized: true` (already set) |

---

## 📄 License

MIT © 2026 PlanktonDev

---

<p align="center">
  Built with ❤️ · Next.js · TailwindCSS · Framer Motion
</p>
