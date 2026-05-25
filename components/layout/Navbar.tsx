'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  Navbar.tsx  —  Fixed top navigation bar
//
//  Features:
//  • Transparent on top → frosted-glass on scroll
//  • Active section highlighting via IntersectionObserver
//  • Mobile hamburger menu with Framer Motion slide-in
//  • Logo with neon glow effect
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

// ── Navigation links ──────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'About',    href: '#about'         },
  { label: 'Skills',   href: '#skills'        },
  { label: 'Projects', href: '#projects'      },
  { label: 'Timeline', href: '#experience'    },
  { label: 'Certs',    href: '#certifications'},
  { label: 'Contact',  href: '#contact'       },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen,   setMobileOpen]   = useState(false);

  // ── Track scroll position to toggle frosted glass ────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Track active section via IntersectionObserver ────────────────────────
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ── Close mobile menu when a link is clicked ─────────────────────────────
  const handleNavClick = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1  }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 right-0 z-[80]
        transition-all duration-500
        ${scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/[0.06] shadow-lg'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ───────────────────────────────────────────────────────── */}
          <a
            href="#hero"
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <div className="
              w-8 h-8 rounded-lg flex items-center justify-center
              bg-gradient-to-br from-cyan-500 to-purple-600
              shadow-[0_0_12px_rgba(0,229,255,0.4)]
              group-hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]
              transition-shadow duration-300
            ">
              <Terminal size={16} className="text-white" />
            </div>
            <span className="
              font-orbitron font-bold text-sm tracking-wider
              bg-gradient-to-r from-cyan-400 to-purple-400
              bg-clip-text text-transparent
              group-hover:from-cyan-300 group-hover:to-purple-300
              transition-all duration-300
            ">
              PlanktonDev
            </span>
          </a>

          {/* ── Desktop navigation links ────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.replace('#', '');
              return (
                <a
                  key={href}
                  href={href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg
                    transition-all duration-300
                    ${isActive
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-gray-100'
                    }
                    hover:bg-white/5
                  `}
                >
                  {label}
                  {/* Active indicator underline */}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="
                        absolute bottom-0.5 left-1/2 -translate-x-1/2
                        w-4 h-0.5 rounded-full
                        bg-gradient-to-r from-cyan-500 to-purple-500
                      "
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* ── CTA + Mobile toggle ─────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Hire Me badge — desktop only */}
            <a
              href="#contact"
              className="
                hidden md:inline-flex items-center gap-1.5
                px-4 py-1.5 rounded-lg text-sm font-medium
                bg-cyan-500/10 border border-cyan-500/40 text-cyan-400
                hover:bg-cyan-500/20 hover:border-cyan-400
                hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]
                transition-all duration-300
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for Hire
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/[0.06] bg-[#0a0a0f]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="
                    flex items-center gap-3 px-4 py-3 rounded-lg
                    text-gray-300 hover:text-cyan-400
                    hover:bg-cyan-500/10
                    transition-all duration-200
                    font-medium
                  "
                >
                  <span className="w-1 h-4 rounded-full bg-gradient-to-b from-cyan-500 to-purple-500" />
                  {label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="
                  mt-2 flex items-center justify-center gap-2 py-3 rounded-lg
                  bg-gradient-to-r from-cyan-600 to-purple-600
                  text-white font-semibold
                  hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]
                  transition-all duration-300
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for Hire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
