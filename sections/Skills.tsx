'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  Skills.tsx  —  Animated skill pills grid + category cards with progress bars
// ─────────────────────────────────────────────────────────────────────────────

import { motion, useInView } from 'framer-motion';
import { useRef }             from 'react';
import SectionTitle           from '@/components/shared/SectionTitle';
import { skillCategories, skillPills } from '@/lib/data';

// ─────────────────────────────────────────────────────────────────────────────
//  Skill Pill — individual animated badge
// ─────────────────────────────────────────────────────────────────────────────
function SkillPill({ name, index }: { name: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.025 }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="
        inline-flex items-center px-3 py-1.5 rounded-lg
        text-xs font-mono font-medium
        bg-white/[0.05] border border-white/[0.1]
        text-gray-300
        hover:bg-cyan-500/15 hover:border-cyan-500/40 hover:text-cyan-300
        hover:shadow-[0_0_12px_rgba(0,229,255,0.2)]
        cursor-default
        transition-all duration-200
      "
    >
      {name}
    </motion.span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Progress bar — animated fill on scroll-into-view
// ─────────────────────────────────────────────────────────────────────────────
function SkillBar({
  name, level, gradient, delay,
}: {
  name: string; level: number; gradient: string; delay: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs text-gray-500 font-mono">{level}%</span>
      </div>
      {/* Track */}
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        {/* Animated fill */}
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            boxShadow: '0 0 6px rgba(0,229,255,0.4)',
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Skills section
// ─────────────────────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="relative py-28">

      {/* ── Background glow ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <SectionTitle
          label="02 / Skills"
          title="Technical Arsenal"
          subtitle="Tools, platforms, and languages I use to build, secure, and scale production systems."
        />

        {/* ── Pill cloud ──────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-20">
          {skillPills.map((name, i) => (
            <SkillPill key={name} name={name} index={i} />
          ))}
        </div>

        {/* ── Divider ─────────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-xs font-mono text-gray-600 tracking-widest uppercase">
            Proficiency Breakdown
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* ── Category cards grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              whileHover={{ y: -4 }}
              className="
                p-5 rounded-xl
                bg-white/[0.03] border border-white/[0.08]
                backdrop-blur-sm
                hover:border-white/[0.15]
                hover:shadow-[0_0_20px_rgba(0,229,255,0.08)]
                transition-all duration-300
                space-y-4
              "
            >
              {/* Category header */}
              <div className="space-y-1">
                <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${cat.color} mb-3`} />
                <h3 className="font-semibold text-sm text-white leading-tight">
                  {cat.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-3">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    gradient={cat.color}
                    delay={catIdx * 0.08 + skillIdx * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
