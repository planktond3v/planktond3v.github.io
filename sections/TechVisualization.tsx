'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  TechVisualization.tsx  —  Futuristic orbital tech-stack diagram
//
//  Three concentric orbital rings rotate at different speeds, carrying tech
//  labels/icons around a glowing central core.
//  Pure CSS transforms + Tailwind animation — zero canvas, zero SVG path maths.
// ─────────────────────────────────────────────────────────────────────────────

import { motion, useInView }    from 'framer-motion';
import { useRef }               from 'react';
import SectionTitle             from '@/components/shared/SectionTitle';
import { innerOrbit, middleOrbit, outerOrbit } from '@/lib/data';

// ─────────────────────────────────────────────────────────────────────────────
//  OrbitalRing  —  renders a ring with evenly spaced items orbiting around it
// ─────────────────────────────────────────────────────────────────────────────
interface OrbitalRingProps {
  items:      { name: string; emoji: string; color: string }[];
  radius:     number;   // px — orbit radius (half of ring width/height)
  duration:   number;   // seconds for one full revolution
  reverse?:   boolean;  // clockwise vs counter-clockwise
  className?: string;
}

function OrbitalRing({ items, radius, duration, reverse = false, className = '' }: OrbitalRingProps) {
  const count     = items.length;
  const size      = radius * 2;
  const ringStyle = { width: size, height: size };

  return (
    /* Ring container — spins continuously */
    <div
      className={`absolute rounded-full border border-white/[0.05] ${className}`}
      style={{
        ...ringStyle,
        top:       `calc(50% - ${radius}px)`,
        left:      `calc(50% - ${radius}px)`,
        animation: `orbit ${duration}s linear infinite ${reverse ? 'reverse' : ''}`,
      }}
    >
      {items.map((item, i) => {
        /* Distribute items evenly around the ring */
        const angle  = (i / count) * 360;   // degrees
        const radian = (angle * Math.PI) / 180;
        const x      = Math.cos(radian) * radius + radius;  // px from left of container
        const y      = Math.sin(radian) * radius + radius;  // px from top of container

        return (
          <div
            key={item.name}
            /* Counter-rotate item so it stays upright as the ring spins */
            style={{
              position:  'absolute',
              left:      x,
              top:       y,
              transform: `translate(-50%, -50%)
                          rotate(${reverse ? duration : -duration}deg)`,
              animation: `orbit ${duration}s linear infinite ${reverse ? '' : 'reverse'}`,
            }}
          >
            <div className="
              flex flex-col items-center gap-0.5
              px-2 py-1 rounded-lg
              bg-[#0a0a0f]/80 border border-white/[0.1]
              backdrop-blur-sm
              hover:border-cyan-500/40
              hover:shadow-[0_0_10px_rgba(0,229,255,0.25)]
              transition-all duration-300
              cursor-default
              min-w-[52px]
            ">
              <span className="text-base leading-none">{item.emoji}</span>
              <span className="text-[9px] font-mono text-gray-400 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  TechVisualization section
// ─────────────────────────────────────────────────────────────────────────────
export default function TechVisualization() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tech" className="relative py-28 overflow-hidden">

      {/* ── Background glow ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-96 h-96 bg-cyan-600/5 rounded-full blur-[60px]" />
      </div>

      <div className="section-container" ref={ref}>
        <SectionTitle
          label="06 / Tech Radar"
          title="Orbital Tech Stack"
          subtitle="Technologies I work with daily, orbiting my core expertise."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto"
          style={{ width: 560, height: 560, maxWidth: '100%' }}
        >
          {/* ── Outer orbital ring (slowest) ────────────────────────────────── */}
          <OrbitalRing items={outerOrbit}  radius={250} duration={40} />

          {/* ── Middle orbital ring ─────────────────────────────────────────── */}
          <OrbitalRing items={middleOrbit} radius={170} duration={28} reverse />

          {/* ── Inner orbital ring (fastest) ────────────────────────────────── */}
          <OrbitalRing items={innerOrbit}  radius={100} duration={18} />

          {/* ── Central core ────────────────────────────────────────────────── */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Outer pulse ring */}
            <div className="
              absolute inset-0 -m-8 rounded-full
              border border-cyan-500/20
              animate-ping
            " style={{ animationDuration: '3s' }} />

            {/* Main core circle */}
            <div className="
              relative w-20 h-20 rounded-full
              bg-gradient-to-br from-cyan-600/40 to-purple-700/40
              border-2 border-cyan-500/50
              backdrop-blur-xl
              flex items-center justify-center
              shadow-[0_0_40px_rgba(0,229,255,0.4),0_0_80px_rgba(123,47,255,0.2)]
              animate-glow
            ">
              <span className="text-2xl">⚡</span>
            </div>
          </div>

          {/* ── Decorative static rings (visual depth) ──────────────────────── */}
          {[90, 160, 240].map((r) => (
            <div
              key={r}
              className="absolute rounded-full border border-white/[0.03]"
              style={{
                width:  r * 2,
                height: r * 2,
                top:   `calc(50% - ${r}px)`,
                left:  `calc(50% - ${r}px)`,
              }}
            />
          ))}
        </motion.div>

        {/* ── Legend ──────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-xs text-gray-500 font-mono"
        >
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            Core Infra & Orchestration
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            Cloud & Observability
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400" />
            Blockchain & Security
          </span>
        </motion.div>
      </div>
    </section>
  );
}
