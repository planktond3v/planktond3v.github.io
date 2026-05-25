'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  SectionTitle.tsx  —  Reusable animated section heading
//
//  Accepts a label (small uppercase tag), title, and optional subtitle.
//  Animates in when it enters the viewport using Framer Motion.
// ─────────────────────────────────────────────────────────────────────────────

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  label?:    string;    // e.g. "02 / Projects"
  title:     string;   // main heading
  subtitle?: string;   // optional paragraph below
  align?:    'left' | 'center' | 'right';
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align     = 'center',
  className = '',
}: SectionTitleProps) {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: '-80px' });

  const alignClass = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
  }[align];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-3 mb-16 ${alignClass} ${className}`}
    >
      {/* ── Small label tag ──────────────────────────────────────────────────── */}
      {label && (
        <span className="
          inline-flex items-center gap-2
          text-xs font-mono font-medium tracking-[0.2em] uppercase
          text-cyan-400
        ">
          {/* Decorative leading line */}
          <span className="block w-6 h-px bg-cyan-400" />
          {label}
          <span className="block w-6 h-px bg-cyan-400" />
        </span>
      )}

      {/* ── Main heading ─────────────────────────────────────────────────────── */}
      <h2 className="
        font-orbitron font-bold
        text-3xl sm:text-4xl lg:text-5xl
        bg-gradient-to-r from-white via-cyan-200 to-purple-300
        bg-clip-text text-transparent
        leading-tight
      ">
        {title}
      </h2>

      {/* ── Animated underline accent ────────────────────────────────────────── */}
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: align === 'center' ? 80 : 60 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className={`
          h-1 rounded-full
          bg-gradient-to-r from-cyan-500 to-purple-500
          ${align === 'center' ? 'mx-auto' : ''}
        `}
      />

      {/* ── Optional subtitle ────────────────────────────────────────────────── */}
      {subtitle && (
        <p className="mt-2 max-w-2xl text-base text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
