'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  app/page.tsx  —  Main portfolio page
//
//  Composes all sections in order.
//  Heavy client-side effects (canvas, cursor) are lazy-loaded with
//  `dynamic` + `{ ssr: false }` so they never run during static export.
// ─────────────────────────────────────────────────────────────────────────────

import dynamic from 'next/dynamic';

// ── Layout ────────────────────────────────────────────────────────────────────
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// ── Sections (normal imports — they are lightweight on server) ─────────────────
import Hero             from '@/sections/Hero';
import About            from '@/sections/About';
import Skills           from '@/sections/Skills';
import Projects         from '@/sections/Projects';
import Experience       from '@/sections/Experience';
import Certifications   from '@/sections/Certifications';
import TechVisualization from '@/sections/TechVisualization';
import Contact          from '@/sections/Contact';

// ── Effects — client-only, SSR disabled ───────────────────────────────────────
// These use browser APIs (canvas, mousemove, etc.) so they must not render
// server-side.  `dynamic` with `ssr: false` defers them to the client.

const ParticleSystem  = dynamic(
  () => import('@/components/effects/ParticleSystem'),
  { ssr: false }
);
const CursorGlow = dynamic(
  () => import('@/components/effects/CursorGlow'),
  { ssr: false }
);
const ScrollProgress = dynamic(
  () => import('@/components/effects/ScrollProgress'),
  { ssr: false }
);
const AnimatedGrid = dynamic(
  () => import('@/components/effects/AnimatedGrid'),
  { ssr: false }
);

// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ── Global visual effects (rendered behind everything) ──────────────── */}
      <ParticleSystem />   {/* Floating connected particles    */}
      <AnimatedGrid />     {/* Background dot/line grid        */}
      <CursorGlow />       {/* Mouse-following spotlight       */}
      <ScrollProgress />   {/* Top progress bar                */}

      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <Navbar />

      {/* ── Page sections ───────────────────────────────────────────────────── */}
      <main className="relative z-10">
        <Hero />             {/* 01 — name, roles, CTAs        */}
        <About />            {/* 02 — bio, focus areas         */}
        <Skills />           {/* 03 — pills + progress bars    */}
        <Projects />         {/* 04 — project cards            */}
        <Experience />       {/* 05 — timeline                 */}
        <Certifications />   {/* 06 — cert cards               */}
        <TechVisualization /> {/* 07 — orbital visualization   */}
        <Contact />          {/* 08 — social channels          */}
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <Footer />
    </>
  );
}
