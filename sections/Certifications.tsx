'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  Certifications.tsx  —  Certification showcase grid
// ─────────────────────────────────────────────────────────────────────────────

import { motion }         from 'framer-motion';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import SectionTitle       from '@/components/shared/SectionTitle';
import { certifications } from '@/lib/data';

// ─────────────────────────────────────────────────────────────────────────────
//  CertCard
// ─────────────────────────────────────────────────────────────────────────────
function CertCard({
  name, issuer, year, credId, color, icon, verified, index,
}: {
  name:     string;
  issuer:   string;
  year:     string;
  credId:   string;
  color:    string;
  icon:     string;
  verified: boolean;
  index:    number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="
        relative group flex flex-col overflow-hidden rounded-2xl
        bg-white/[0.04] border border-white/[0.08]
        backdrop-blur-sm
        hover:border-white/[0.2]
        hover:shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(0,229,255,0.1)]
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* ── Top gradient band ──────────────────────────────────────────────── */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${color}`} />

      {/* ── Glowing icon + name ─────────────────────────────────────────────── */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          {/* Big icon */}
          <div className={`
            w-14 h-14 rounded-2xl flex items-center justify-center text-2xl
            bg-gradient-to-br ${color} opacity-90
            shadow-lg group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]
            transition-shadow duration-300
          `}>
            {icon}
          </div>

          {/* Verified badge */}
          {verified && (
            <div className="flex items-center gap-1 text-green-400">
              <BadgeCheck size={14} />
              <span className="text-[10px] font-mono">Verified</span>
            </div>
          )}
        </div>

        {/* Cert name */}
        <div>
          <h3 className="font-orbitron font-bold text-xl text-white mb-0.5
                         group-hover:text-cyan-100 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-400">{issuer}</p>
        </div>

        {/* Meta row */}
        <div className="flex items-center justify-between text-xs text-gray-600 font-mono">
          <span>Issued {year}</span>
          <span className="text-[10px]">ID: {credId}</span>
        </div>

        {/* Verify link */}
        <a
          href="#"
          className="
            flex items-center gap-1.5 text-xs font-medium
            text-gray-500 hover:text-cyan-400
            transition-colors duration-200
          "
          aria-label={`Verify ${name} certificate`}
        >
          <ExternalLink size={11} />
          Verify Credential
        </a>
      </div>

      {/* ── Subtle corner glow on hover ──────────────────────────────────────── */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        pointer-events-none rounded-2xl
        transition-opacity duration-300
      "
        style={{
          background:
            'radial-gradient(circle at bottom right, rgba(0,229,255,0.06), transparent 60%)',
        }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Certifications section
// ─────────────────────────────────────────────────────────────────────────────
export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">

      {/* ── Decorative blob ─────────────────────────────────────────────────── */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        <SectionTitle
          label="05 / Certifications"
          title="Credentials"
          subtitle="Industry certifications validating expertise across Linux, Kubernetes, Cloud, and IaC."
        />

        {/* ── Cert cards grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} {...cert} index={i} />
          ))}
        </div>

        {/* ── Currently studying strip ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="
            mt-12 p-5 rounded-2xl
            border border-dashed border-yellow-500/30
            bg-yellow-500/[0.03]
            flex flex-col sm:flex-row items-start sm:items-center gap-4
          "
        >
          <span className="text-2xl flex-shrink-0">📚</span>
          <div>
            <p className="text-sm font-semibold text-yellow-300 mb-1">
              Currently Pursuing
            </p>
            <p className="text-xs text-gray-400 font-mono">
              CKS (Certified Kubernetes Security Specialist) · GCP Professional Cloud Architect
            </p>
          </div>
          <span className="
            ml-auto flex-shrink-0
            text-[10px] font-mono px-3 py-1.5 rounded-lg
            bg-yellow-500/10 border border-yellow-500/30 text-yellow-400
          ">
            In Progress
          </span>
        </motion.div>
      </div>
    </section>
  );
}
