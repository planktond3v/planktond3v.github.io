'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  Experience.tsx  —  Animated vertical timeline of career milestones
// ─────────────────────────────────────────────────────────────────────────────

import { motion, useInView } from 'framer-motion';
import { useRef }             from 'react';
import { MapPin }             from 'lucide-react';
import SectionTitle           from '@/components/shared/SectionTitle';
import { experiences }        from '@/lib/data';

// ─────────────────────────────────────────────────────────────────────────────
//  TimelineItem  —  single milestone card
// ─────────────────────────────────────────────────────────────────────────────
function TimelineItem({
  year, title, company, description, tags, color, index,
}: {
  year:        string;
  title:       string;
  company:     string;
  description: string;
  tags:        string[];
  color:       string;
  index:       number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Alternate left/right on larger screens
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        relative flex items-center mb-12
        ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
        flex-col md:gap-8
      `}
    >
      {/* ── Content card (takes ~45% width on desktop) ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
        className={`
          md:w-[calc(50%-2rem)] w-full
          p-6 rounded-2xl
          bg-white/[0.04] border border-white/[0.08]
          backdrop-blur-sm
          hover:border-white/[0.16]
          hover:shadow-[0_0_20px_rgba(0,229,255,0.08)]
          transition-all duration-300 group
        `}
      >
        {/* Top accent bar */}
        <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${color} mb-4`} />

        {/* Year badge */}
        <span className={`
          inline-block text-xs font-mono font-bold tracking-widest
          px-2.5 py-1 rounded-md mb-3
          bg-gradient-to-r ${color} text-white
        `}>
          {year}
        </span>

        <h3 className="font-orbitron font-bold text-base text-white mb-1 group-hover:text-cyan-100 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3 font-mono">
          <MapPin size={10} />
          {company}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
      </motion.div>

      {/* ── Centre connector dot ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="
          hidden md:flex absolute left-1/2 -translate-x-1/2 z-10
          w-5 h-5 rounded-full
          border-2 border-cyan-400
          bg-[#0a0a0f]
          shadow-[0_0_12px_rgba(0,229,255,0.5)]
        "
      />

      {/* Empty space for the other side on desktop */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Experience section
// ─────────────────────────────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      {/* ── Background ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <SectionTitle
          label="04 / Timeline"
          title="My Journey"
          subtitle="Six years of continuous growth — from Linux fundamentals to AI infrastructure."
        />

        {/* ── Timeline container with centre line ─────────────────────────────── */}
        <div className="relative max-w-5xl mx-auto">

          {/* Centre vertical line — desktop only */}
          <div className="
            hidden md:block
            absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2
            bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent
          " />

          {/* Timeline entries */}
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.year}
              {...exp}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
