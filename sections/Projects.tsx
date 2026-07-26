'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  Projects.tsx  —  Project showcase with hover-animated cards
// ─────────────────────────────────────────────────────────────────────────────

import { useState }           from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import SectionTitle           from '@/components/shared/SectionTitle';
import { projects, type Project } from '@/lib/data';

// ─────────────────────────────────────────────────────────────────────────────
//  ProjectCard
// ─────────────────────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={()   => setHovered(false)}
      className="
        group relative flex flex-col overflow-hidden rounded-2xl
        bg-white/[0.04] border border-white/[0.08]
        backdrop-blur-sm
        hover:border-white/[0.18]
        hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]
        transition-all duration-400
      "
    >
      {/* ── Top gradient accent bar ─────────────────────────────────────────── */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

      {/* ── Hover spotlight overlay ──────────────────────────────────────────── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgba(0,229,255,0.06) 0%, transparent 60%)',
            }}
          />
        )}
      </AnimatePresence>

      <div className="flex flex-col flex-1 p-6">
        {/* ── Icon + Featured badge ────────────────────────────────────────────── */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl select-none">{project.icon}</span>
          {project.featured && (
            <span className="
              text-[10px] font-mono font-medium px-2 py-1 rounded-full
              bg-cyan-500/10 border border-cyan-500/30 text-cyan-400
            ">
              Featured
            </span>
          )}
        </div>

        {/* ── Title & description ──────────────────────────────────────────────── */}
        <h3 className="font-orbitron font-bold text-base text-white mb-2 group-hover:text-cyan-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* ── Tech tags ───────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* ── Action buttons ───────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium
              bg-white/[0.06] border border-white/[0.1] text-gray-300
              hover:bg-white/[0.12] hover:text-white
              transition-all duration-200
            "
            aria-label={`GitHub: ${project.title}`}
          >
            <Github size={13} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium
              bg-cyan-500/10 border border-cyan-500/30 text-cyan-400
              hover:bg-cyan-500/20 hover:border-cyan-400
              hover:shadow-[0_0_10px_rgba(0,229,255,0.25)]
              transition-all duration-200
            "
            aria-label={`Live demo: ${project.title}`}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          {/* Arrow indicates interactivity */}
          <ArrowUpRight
            size={14}
            className="
              ml-auto text-gray-600
              group-hover:text-cyan-400 group-hover:scale-110
              transition-all duration-300
            "
          />
        </div>
      </div>
    </motion.article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Projects section
// ─────────────────────────────────────────────────────────────────────────────
export default function Projects() {
  const featured   = projects.filter((p) => p.featured);
  const additional = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28">
      {/* ── Background glows ────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <SectionTitle
          label="03 / Projects"
          title="Featured Work"
          subtitle="Production systems I've designed, built, and shipped. Each solves a real engineering challenge."
        />

        {/* ── Featured projects (2-col on large) ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* ── Additional projects ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additional.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={featured.length + i}
            />
          ))}
        </div>

        {/* ── GitHub CTA ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/l4code"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2.5
              px-8 py-3.5 rounded-xl font-semibold text-sm
              border border-white/[0.12] bg-white/[0.04] text-gray-300
              hover:bg-white/[0.08] hover:border-white/[0.24] hover:text-white
              transition-all duration-300
            "
          >
            <Github size={18} />
            View All Projects on GitHub
            <ExternalLink size={14} className="text-gray-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
