'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  Footer.tsx  —  Futuristic minimal footer with animated glow line
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import { Terminal, Heart } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#060609]/80 backdrop-blur-md">

      {/* ── Animated top glow line ────────────────────────────────────────────── */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{
          background: 'linear-gradient(90deg, transparent, #00e5ff 30%, #7b2fff 70%, transparent)',
          boxShadow: '0 0 8px rgba(0,229,255,0.6)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* ── Logo + tagline ───────────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            <div className="
              w-8 h-8 rounded-lg flex items-center justify-center
              bg-gradient-to-br from-cyan-500 to-purple-600
            ">
              <Terminal size={16} className="text-white" />
            </div>
            <div>
              <p className="font-orbitron font-bold text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                L4Code
              </p>
              <p className="text-xs text-gray-500 font-mono">
                &gt; Building the Future_
              </p>
            </div>
          </div>

          {/* ── Quick links ──────────────────────────────────────────────────── */}
          <nav className="flex items-center gap-6 text-sm text-gray-500">
            {['About','Skills','Projects','Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* ── Copyright ────────────────────────────────────────────────────── */}
          <p className="flex items-center gap-1.5 text-xs text-gray-600 font-mono">
            © {currentYear} L4Code · Built with
            <Heart size={10} className="text-pink-500 fill-pink-500" />
            & Next.js
          </p>
        </div>

        {/* ── Bottom matrix-style decoration ──────────────────────────────────── */}
        <div className="mt-8 text-center">
          <p className="font-mono text-[10px] text-gray-700 tracking-widest select-none">
            01001100 01101001 01110110 01100101 00100000 01100110 01110010 01100101 01100101
          </p>
        </div>
      </div>
    </footer>
  );
}
