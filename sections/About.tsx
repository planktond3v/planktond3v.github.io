'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  About.tsx  —  Professional introduction & journey overview
// ─────────────────────────────────────────────────────────────────────────────

import { motion, useInView } from 'framer-motion';
import { useRef }             from 'react';
import {
  Shield, Cloud, Server, Cpu,
  CheckCircle2, ArrowRight,
} from 'lucide-react';
import SectionTitle  from '@/components/shared/SectionTitle';
import { personalInfo } from '@/lib/data';

// ── Focus areas displayed as feature cards ────────────────────────────────
const focusAreas = [
  {
    icon:        Shield,
    title:       'Security-First',
    description: 'DevSecOps philosophy embedded in every pipeline. SAST, DAST, runtime security, and policy-as-code.',
    color:       'text-cyan-400',
    bg:          'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon:        Server,
    title:       'Cloud Native',
    description: 'Kubernetes-native architectures, microservices, service meshes, and cloud-agnostic IaC with Terraform.',
    color:       'text-purple-400',
    bg:          'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon:        Cloud,
    title:       'Multi-Cloud',
    description: 'Deep expertise across AWS, GCP, and Azure. Hybrid deployments and cost-optimised workload placement.',
    color:       'text-blue-400',
    bg:          'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon:        Cpu,
    title:       'AI & Web3',
    description: 'GPU-enabled clusters for LLM inference, blockchain node operations, and smart-contract infrastructure.',
    color:       'text-pink-400',
    bg:          'bg-pink-500/10 border-pink-500/20',
  },
];

// ── Key qualities / values ────────────────────────────────────────────────
const qualities = [
  'Infrastructure as Code evangelist',
  'GitOps practitioner (ArgoCD / Flux)',
  'Open-source contributor',
  'Observability & SRE mindset',
  'Automation-first approach',
  'Continuous learner & sharer',
];

export default function About() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-28">
      {/* ── Background accent ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container" ref={ref}>
        <SectionTitle
          label="01 / About"
          title="Who Am I?"
          subtitle="A DevSecOps & Cloud Engineer obsessed with building reliable, secure, and observable systems at scale."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: bio text ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Avatar placeholder with neon ring */}
            <div className="flex items-center gap-5 mb-8">
              <div className="
                relative w-20 h-20 rounded-full
                bg-gradient-to-br from-cyan-500 to-purple-600
                flex items-center justify-center
                shadow-[0_0_30px_rgba(0,229,255,0.35)]
                flex-shrink-0
              ">
                <span className="font-orbitron font-bold text-2xl text-white">PD</span>
                {/* Animated ring */}
                <div className="
                  absolute inset-0 rounded-full border-2 border-cyan-400/40
                  animate-ping
                " style={{ animationDuration: '3s' }} />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl text-white">
                  {personalInfo.fullName}
                </h3>
                <p className="text-cyan-400 text-sm font-mono">
                  DevSecOps · Cloud · Blockchain · AI Infra
                </p>
                <p className="text-gray-500 text-xs mt-1">{personalInfo.location}</p>
              </div>
            </div>

            {/* Bio paragraphs */}
            {personalInfo.bio.split('\n').map((para, i) => (
              para.trim() && (
                <p key={i} className="text-gray-400 leading-relaxed text-[15px]">
                  {para.trim()}
                </p>
              )
            ))}

            {/* Qualities list */}
            <div className="pt-4">
              <h4 className="text-xs font-mono font-medium tracking-[0.15em] uppercase text-gray-500 mb-4">
                Core Values & Practices
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {qualities.map((q) => (
                  <li key={q} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA link */}
            <div className="pt-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 group"
              >
                View my journey
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ── Right: focus area cards ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focusAreas.map(({ icon: Icon, title, description, color, bg }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`
                  p-5 rounded-xl border backdrop-blur-sm
                  transition-all duration-300
                  bg-white/[0.03] border-white/[0.08]
                  hover:border-white/20
                `}
              >
                <div className={`
                  w-10 h-10 rounded-lg flex items-center justify-center mb-4
                  ${bg} border
                `}>
                  <Icon size={20} className={color} />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}

            {/* ── Tech stack mini-badges ──────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="
                sm:col-span-2 p-5 rounded-xl border
                bg-white/[0.03] border-white/[0.08]
              "
            >
              <p className="text-xs font-mono font-medium tracking-[0.15em] uppercase text-gray-500 mb-3">
                Daily Drivers
              </p>
              <div className="flex flex-wrap gap-2">
                {['Linux', 'Kubernetes', 'Terraform', 'Prometheus', 'ArgoCD', 'Python', 'Golang', 'AWS'].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
