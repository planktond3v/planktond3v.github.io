'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  GlowCard.tsx  —  Glassmorphism card with animated glow border on hover
//
//  A reusable wrapper that gives any content a futuristic glass-card look.
//  On hover: the border brightens and a coloured glow appears.
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import { cn }     from '@/lib/utils';

interface GlowCardProps {
  children:   React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green'; // glow accent colour
  onClick?:   () => void;
  as?:        'div' | 'article' | 'li';
  delay?:     number;  // stagger delay for entrance animation (seconds)
}

// Glow colour → Tailwind shadow tokens
const GLOW_CLASSES = {
  cyan:   'hover:shadow-[0_0_30px_rgba(0,229,255,0.25)] hover:border-cyan-500/40',
  purple: 'hover:shadow-[0_0_30px_rgba(123,47,255,0.25)] hover:border-purple-500/40',
  pink:   'hover:shadow-[0_0_30px_rgba(255,0,170,0.25)] hover:border-pink-500/40',
  green:  'hover:shadow-[0_0_30px_rgba(0,255,136,0.25)] hover:border-green-500/40',
};

export default function GlowCard({
  children,
  className   = '',
  glowColor   = 'cyan',
  onClick,
  delay       = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -4 }}          // subtle lift on hover
      onClick={onClick}
      className={cn(
        // Base glass card styles
        'relative overflow-hidden rounded-xl cursor-pointer',
        'bg-white/[0.04] backdrop-blur-md',
        'border border-white/[0.08]',
        'transition-all duration-300',
        // Dynamic glow on hover
        GLOW_CLASSES[glowColor],
        className
      )}
    >
      {/* ── Subtle inner gradient overlay ──────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(0,229,255,0.04), transparent 60%)',
        }}
      />

      {/* ── Card content ───────────────────────────────────────────────────── */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
