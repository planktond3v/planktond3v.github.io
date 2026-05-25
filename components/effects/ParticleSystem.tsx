'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  ParticleSystem.tsx  —  Canvas-based floating particle network
//
//  Renders small glowing dots that move randomly and draw connection
//  lines when within a threshold distance.  Uses requestAnimationFrame
//  for smooth 60 fps animation without any external library.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react';

// ── Particle configuration ────────────────────────────────────────────────────
const CONFIG = {
  count:          80,         // total number of particles
  maxSpeed:       0.4,        // max velocity in px/frame
  minSize:        1,
  maxSize:        2.5,
  connectionDist: 130,        // px — draw a line if two particles are closer
  colors:         ['#00e5ff', '#7b2fff', '#ff00aa', '#00ff88'] as const,
  lineOpacity:    0.15,       // opacity multiplier for connection lines
};

// ── Particle data type ────────────────────────────────────────────────────────
interface Particle {
  x:     number;
  y:     number;
  vx:    number;
  vy:    number;
  size:  number;
  color: string;
  alpha: number;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────
export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Store particles and animation frame ID in refs so they persist across renders
  const particlesRef = useRef<Particle[]>([]);
  const rafRef       = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── Resize handler — fills the full viewport ────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Initialise particles ────────────────────────────────────────────────
    const init = () => {
      particlesRef.current = Array.from({ length: CONFIG.count }, () =>
        createParticle(canvas.width, canvas.height)
      );
    };
    init();

    // ── Main animation loop ─────────────────────────────────────────────────
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update and draw each particle
      particles.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges so particles don't disappear
        if (p.x < 0)             p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0)             p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle (circle with soft glow)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Add a soft glow halo
        ctx.shadowColor = p.color;
        ctx.shadowBlur  = 6;
        ctx.fill();
        ctx.shadowBlur  = 0;
        ctx.globalAlpha = 1;
      });

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.connectionDist) {
            // Fade the line as distance increases
            const opacity =
              (1 - dist / CONFIG.connectionDist) * CONFIG.lineOpacity;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = opacity;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    // ── Cleanup on unmount ──────────────────────────────────────────────────
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

// ── Helper: create a single particle with random properties ──────────────────
function createParticle(w: number, h: number): Particle {
  const color =
    CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
  const speed = Math.random() * CONFIG.maxSpeed + 0.05;
  const angle = Math.random() * Math.PI * 2;

  return {
    x:     Math.random() * w,
    y:     Math.random() * h,
    vx:    Math.cos(angle) * speed,
    vy:    Math.sin(angle) * speed,
    size:  Math.random() * (CONFIG.maxSize - CONFIG.minSize) + CONFIG.minSize,
    color,
    alpha: Math.random() * 0.5 + 0.3,
  };
}
