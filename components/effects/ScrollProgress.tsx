'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  ScrollProgress.tsx  —  Fixed top bar showing page scroll progress
//
//  A 2-3px gradient bar that fills from 0 → 100% as the user scrolls down.
//  Serves as a subtle UX signal and a design accent.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // scrollable distance = total height − viewport height
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      const pct = scrollable > 0
        ? (window.scrollY / scrollable) * 100
        : 0;

      setProgress(Math.min(100, Math.max(0, pct)));
    };

    // Throttle with RAF
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress(); // initial call

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[2px]"
      style={{ background: 'transparent' }}
    >
      <div
        className="h-full transition-all duration-75 ease-linear"
        style={{
          width:      `${progress}%`,
          background: 'linear-gradient(90deg, #00e5ff 0%, #7b2fff 50%, #ff00aa 100%)',
          boxShadow:  '0 0 8px rgba(0,229,255,0.6), 0 0 16px rgba(123,47,255,0.4)',
        }}
      />
    </div>
  );
}
