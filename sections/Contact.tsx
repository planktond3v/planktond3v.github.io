'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  Contact.tsx  —  Contact section with social cards + simple email CTA
// ─────────────────────────────────────────────────────────────────────────────

import { useState }       from 'react';
import { motion }         from 'framer-motion';
import {
  Github, Linkedin, Send, Mail, MessageCircle,
  Twitter, MapPin, Copy, CheckCheck,
} from 'lucide-react';
import SectionTitle       from '@/components/shared/SectionTitle';
import { personalInfo }   from '@/lib/data';

// ── Contact channels ──────────────────────────────────────────────────────
const channels = [
  {
    icon:     Github,
    label:    'GitHub',
    handle:   '@l4code',
    href:     personalInfo.github,
    color:    'hover:border-gray-400/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
    iconColor: 'text-gray-300',
  },
  {
    icon:     Linkedin,
    label:    'LinkedIn',
    handle:   'in/l4code',
    href:     personalInfo.linkedin,
    color:    'hover:border-blue-400/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]',
    iconColor: 'text-blue-400',
  },
  {
    icon:     Send,
    label:    'Telegram',
    handle:   't.me/l4code',
    href:     personalInfo.telegram,
    color:    'hover:border-sky-400/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]',
    iconColor: 'text-sky-400',
  },
  {
    icon:     MessageCircle,
    label:    'Discord',
    handle:   personalInfo.discord,
    href:     '#',
    color:    'hover:border-indigo-400/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]',
    iconColor: 'text-indigo-400',
  },
  {
    icon:     Mail,
    label:    'Email',
    handle:   personalInfo.email,
    href:     `mailto:${personalInfo.email}`,
    color:    'hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(0,229,255,0.25)]',
    iconColor: 'text-cyan-400',
  },
  {
    icon:     Twitter,
    label:    'Twitter / X',
    handle:   '@l4code',
    href:     personalInfo.twitter,
    color:    'hover:border-sky-300/40 hover:shadow-[0_0_15px_rgba(125,211,252,0.2)]',
    iconColor: 'text-sky-300',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  EmailCopyButton  —  click to copy email address with feedback
// ─────────────────────────────────────────────────────────────────────────────
function EmailCopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      onClick={handleCopy}
      className="
        inline-flex items-center gap-2 px-4 py-2 rounded-lg
        bg-white/[0.05] border border-white/[0.1]
        text-sm text-gray-300 font-mono
        hover:border-cyan-500/40 hover:text-cyan-300
        transition-all duration-200
      "
      aria-label="Copy email address"
    >
      {copied ? (
        <>
          <CheckCheck size={14} className="text-green-400" />
          <span className="text-green-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy size={14} />
          {personalInfo.email}
        </>
      )}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Contact section
// ─────────────────────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <section id="contact" className="relative py-28">

      {/* ── Ambient glows ───────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container max-w-4xl">
        <SectionTitle
          label="07 / Contact"
          title="Let's Connect"
          subtitle="Open to remote opportunities, interesting projects, and collaboration. Reach out via any channel."
        />

        {/* ── Hero CTA card ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative mb-12 p-8 rounded-2xl overflow-hidden
            bg-gradient-to-br from-cyan-600/10 to-purple-700/10
            border border-cyan-500/20
          "
        >
          {/* Decorative corner glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-green-400 tracking-widest uppercase">
                  Available for Hire
                </span>
              </div>
              <h3 className="font-orbitron font-bold text-2xl text-white mb-2">
                Ready to Build Something?
              </h3>
              <p className="text-gray-400 text-sm max-w-md">
                Looking for a DevSecOps engineer, cloud architect, or blockchain
                infrastructure specialist? Let's talk.
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                <MapPin size={12} />
                {personalInfo.location}
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href={`mailto:${personalInfo.email}`}
                className="
                  inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                  bg-gradient-to-r from-cyan-600 to-purple-600
                  text-white
                  hover:shadow-[0_0_25px_rgba(0,229,255,0.35)]
                  transition-all duration-300
                "
              >
                <Mail size={16} />
                Send Email
              </a>
              <EmailCopyButton />
            </div>
          </div>
        </motion.div>

        {/* ── Social channels grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map(({ icon: Icon, label, handle, href, color, iconColor }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className={`
                group flex items-center gap-4 p-5 rounded-xl
                bg-white/[0.04] border border-white/[0.08]
                backdrop-blur-sm
                transition-all duration-300
                ${color}
              `}
            >
              {/* Icon */}
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                bg-white/[0.06] border border-white/[0.1]
                group-hover:scale-110 transition-transform duration-200
              `}>
                <Icon size={18} className={iconColor} />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="font-semibold text-sm text-white mb-0.5">{label}</p>
                <p className="text-xs text-gray-500 font-mono truncate">{handle}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── Terminal-style message ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="
            mt-14 p-5 rounded-xl
            bg-black/40 border border-white/[0.06]
            font-mono text-sm
          "
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-gray-600">terminal</span>
          </div>
          <p className="text-gray-500">
            <span className="text-green-400">l4code</span>
            <span className="text-cyan-400">@infra</span>
            <span className="text-gray-600">:~$ </span>
            <span className="text-gray-300">echo "Let&apos;s build something great together"</span>
          </p>
          <p className="text-cyan-300 mt-1 pl-4">
            &gt; Let&apos;s build something great together
          </p>
          <p className="text-gray-500 mt-2">
            <span className="text-green-400">l4code</span>
            <span className="text-cyan-400">@infra</span>
            <span className="text-gray-600">:~$ </span>
            <span className="animate-blink text-cyan-400">█</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
