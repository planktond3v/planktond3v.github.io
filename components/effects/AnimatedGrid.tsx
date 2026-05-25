'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  AnimatedGrid.tsx  —  Subtle animated background grid / matrix overlay
//
//  Creates the "cyberpunk data grid" feel via SVG lines + CSS animations.
//  Positioned fixed so it covers the whole page while staying behind content.
// ─────────────────────────────────────────────────────────────────────────────

export default function AnimatedGrid() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* ── SVG grid lines ──────────────────────────────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Repeating grid cell pattern */}
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#00e5ff"
              strokeWidth="0.5"
            />
          </pattern>
          {/* Accent dots at grid intersections */}
          <pattern
            id="dots"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0" cy="0" r="1" fill="#00e5ff" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* ── Horizontal scan line ─────────────────────────────────────────────── */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(0,229,255,0.4), transparent)',
          animation: 'scanLine 6s linear infinite',
          top:       0,
        }}
      />

      {/* ── Vertical scan line ───────────────────────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 w-px pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent, rgba(123,47,255,0.3), transparent)',
          animation: 'scan 8s linear infinite',
          left:      0,
        }}
      />

      {/* ── Corner accent glows ──────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
    </div>
  );
}
