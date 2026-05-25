/** @type {import('tailwindcss').Config} */
module.exports = {
  // ── Scan all relevant file types for class names ─────────────────
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── Custom cyberpunk/futuristic color palette ─────────────────
      colors: {
        cyber: {
          cyan:    '#00e5ff',
          purple:  '#7b2fff',
          pink:    '#ff00aa',
          green:   '#00ff88',
          yellow:  '#ffcc00',
          dark:    '#0a0a0f',
          darker:  '#060609',
          card:    '#0d0d1a',
          border:  'rgba(0,229,255,0.2)',
        },
      },

      // ── Futuristic font families ──────────────────────────────────
      fontFamily: {
        orbitron:  ['Orbitron', 'monospace'],
        mono:      ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans:      ['Inter', 'system-ui', 'sans-serif'],
      },

      // ── Custom keyframe animations ────────────────────────────────
      keyframes: {
        // Pulsing glow effect
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,229,255,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(0,229,255,0.6), 0 0 60px rgba(123,47,255,0.3)' },
        },
        // Gentle floating animation
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        // Gradient color shift
        gradientShift: {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        // Horizontal scan line
        scan: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        // Cursor blink
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%':      { opacity: 0 },
        },
        // Rotate (for orbital elements)
        orbit: {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // Pulse ring expanding
        pulseRing: {
          '0%':   { transform: 'scale(0.8)', opacity: 1 },
          '100%': { transform: 'scale(2)',   opacity: 0 },
        },
        // Matrix-style rain flicker
        flicker: {
          '0%, 100%': { opacity: 0.8 },
          '50%':      { opacity: 0.3 },
        },
        // Slide up reveal
        slideUp: {
          '0%':   { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)',    opacity: 1 },
        },
        // Width expand
        expandWidth: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
        // Shimmer effect
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },

      // ── Expose keyframes as utility classes ───────────────────────
      animation: {
        glow:           'glow 3s ease-in-out infinite',
        float:          'float 4s ease-in-out infinite',
        'float-slow':   'float 6s ease-in-out infinite',
        'gradient':     'gradientShift 6s ease infinite',
        scan:           'scan 3s linear infinite',
        blink:          'blink 1s step-end infinite',
        orbit:          'orbit 20s linear infinite',
        'orbit-slow':   'orbit 35s linear infinite',
        'orbit-reverse':'orbit 25s linear infinite reverse',
        'pulse-ring':   'pulseRing 2s ease-out infinite',
        flicker:        'flicker 2s ease-in-out infinite',
        'slide-up':     'slideUp 0.6s ease forwards',
        shimmer:        'shimmer 2.5s linear infinite',
      },

      // ── Background sizes for gradient animations ──────────────────
      backgroundSize: {
        '300%': '300%',
        '200%': '200%',
      },

      // ── Backdrop blur levels ──────────────────────────────────────
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
