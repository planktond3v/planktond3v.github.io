'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  Hero.tsx  —  Full-viewport hero section
//
//  Contains: name headline · animated typing roles · CTA buttons ·
//            floating stat chips · social quick-links · background glows
// ─────────────────────────────────────────────────────────────────────────────

import { motion }    from 'framer-motion';
import {
  ArrowRight, Download, Github, Linkedin,
  Mail, MessageCircle, Send, ChevronDown,
} from 'lucide-react';
import TypeWriter         from '@/components/shared/TypeWriter';
import { personalInfo, typingRoles, stats } from '@/lib/data';

// ── Framer Motion variants ─────────────────────────────────────────────────
const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
};

// ── Social links ──────────────────────────────────────────────────────────
const socials = [
  { href: personalInfo.github,   Icon: Github,        label: 'GitHub'   },
  { href: personalInfo.linkedin, Icon: Linkedin,      label: 'LinkedIn' },
  { href: personalInfo.telegram, Icon: Send,          label: 'Telegram' },
  { href: `mailto:${personalInfo.email}`, Icon: Mail, label: 'Email'    },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-screen flex flex-col items-center justify-center
        overflow-hidden pt-20 pb-12
      "
    >
      {/* ── Background ambient glows ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large cyan blob — top left */}
        <div className="
          absolute -top-40 -left-40
          w-[600px] h-[600px] rounded-full opacity-20
          bg-cyan-500 blur-[120px]
        " />
        {/* Purple blob — bottom right */}
        <div className="
          absolute -bottom-60 -right-40
          w-[700px] h-[700px] rounded-full opacity-15
          bg-purple-600 blur-[140px]
        " />
        {/* Pink accent — center */}
        <div className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[400px] h-[400px] rounded-full opacity-5
          bg-pink-500 blur-[100px] animate-pulse
        " />
      </div>

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
      >
        {/* ── Status badge ───────────────────────────────────────────────────── */}
        <motion.div variants={item} className="mb-6">
          <span className="
            inline-flex items-center gap-2
            px-4 py-1.5 rounded-full
            bg-green-500/10 border border-green-500/30
            text-green-400 text-xs font-mono font-medium
          ">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to New Opportunities
          </span>
        </motion.div>

        {/* ── Name headline ──────────────────────────────────────────────────── */}
        <motion.h1
          variants={item}
          className="
            font-orbitron font-black leading-none
            text-5xl sm:text-7xl lg:text-8xl
            mb-4
          "
        >
          <span className="
            bg-gradient-to-r from-white via-cyan-200 to-purple-300
            bg-clip-text text-transparent
          ">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* ── Typing roles ───────────────────────────────────────────────────── */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3 mb-6 min-h-[2.5rem]"
        >
          <span className="text-gray-500 font-mono text-sm">{'>'}</span>
          <TypeWriter
            words={typingRoles}
            className="
              font-mono font-medium text-xl sm:text-2xl text-cyan-400
            "
          />
        </motion.div>

        {/* ── Bio summary ────────────────────────────────────────────────────── */}
        <motion.p
          variants={item}
          className="
            max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed mb-10
          "
        >
          {personalInfo.tagline}. Kubernetes · Terraform · Blockchain · AI Infrastructure.
          Passionate about{' '}
          <span className="text-cyan-400">automation</span>,{' '}
          <span className="text-purple-400">security</span>, and{' '}
          <span className="text-pink-400">scalability</span>.
        </motion.p>

        {/* ── CTA buttons ────────────────────────────────────────────────────── */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {/* Primary: View Projects */}
          <a
            href="#projects"
            className="
              group inline-flex items-center gap-2
              px-6 py-3 rounded-xl font-semibold text-sm
              bg-gradient-to-r from-cyan-600 to-cyan-500
              text-white
              shadow-[0_0_20px_rgba(0,229,255,0.3)]
              hover:shadow-[0_0_35px_rgba(0,229,255,0.55)]
              hover:from-cyan-500 hover:to-cyan-400
              transition-all duration-300
            "
          >
            View Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>

          {/* Secondary: Contact */}
          <a
            href="#contact"
            className="
              inline-flex items-center gap-2
              px-6 py-3 rounded-xl font-semibold text-sm
              bg-purple-500/10 border border-purple-500/40 text-purple-300
              hover:bg-purple-500/20 hover:border-purple-400
              hover:shadow-[0_0_20px_rgba(123,47,255,0.35)]
              transition-all duration-300
            "
          >
            <MessageCircle size={16} />
            Contact Me
          </a>

          {/* Ghost: Download CV */}
          <a
            href={personalInfo.cvUrl}
            download
            className="
              inline-flex items-center gap-2
              px-6 py-3 rounded-xl font-semibold text-sm
              bg-white/5 border border-white/15 text-gray-300
              hover:bg-white/10 hover:border-white/30
              transition-all duration-300
            "
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* ── Stats chips ────────────────────────────────────────────────────── */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="
                flex flex-col items-center px-6 py-3 rounded-xl
                bg-white/[0.04] border border-white/[0.08]
                backdrop-blur-sm
                hover:border-cyan-500/30 hover:bg-white/[0.07]
                transition-all duration-300
              "
            >
              <span className="
                font-orbitron font-bold text-2xl
                bg-gradient-to-r from-cyan-400 to-purple-400
                bg-clip-text text-transparent
              ">
                {value}
              </span>
              <span className="text-xs text-gray-500 mt-0.5 text-center">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Social links ───────────────────────────────────────────────────── */}
        <motion.div
          variants={item}
          className="flex items-center gap-4"
        >
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                p-2.5 rounded-lg
                bg-white/[0.04] border border-white/[0.08]
                text-gray-400 hover:text-cyan-400
                hover:bg-cyan-500/10 hover:border-cyan-500/30
                hover:shadow-[0_0_12px_rgba(0,229,255,0.2)]
                transition-all duration-300
              "
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
