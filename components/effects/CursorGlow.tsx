'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  CursorGlow.tsx  —  A soft radial-gradient spotlight that follows the cursor
//
//  This creates the premium "interactive light" effect seen on high-end sites.
//  It is purely cosmetic and skipped on touch devices.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  // Ref to the div we'll translate as the cursor moves
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices (no cursor to follow)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId: number;

    // Use requestAnimationFrame to throttle position updates
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        // Position the glow centre at the cursor
        glowRef.current.style.transform =
          `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
        glowRef.current.style.opacity = '1';
      });
    };

    // Hide when cursor leaves the window
    const onMouseLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="
        fixed top-0 left-0 pointer-events-none z-50
        w-[600px] h-[600px] rounded-full
        opacity-0 transition-opacity duration-500
      "
      style={{
        background:
          'radial-gradient(circle, rgba(0,229,255,0.06) 0%, rgba(123,47,255,0.04) 40%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
