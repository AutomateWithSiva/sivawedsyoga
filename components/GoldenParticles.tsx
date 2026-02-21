"use client";

import { useState, useEffect } from "react";

/**
 * Lightweight golden particle overlay for desktop hero (md+).
 * CSS-only: radial gradients + keyframes. Disabled when prefers-reduced-motion.
 */
export default function GoldenParticles() {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reduceMotion) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] hidden md:block overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.12] animate-particle-float"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 10% 20%, rgba(184, 149, 74, 0.8) 0%, transparent 100%),
            radial-gradient(2px 2px at 90% 80%, rgba(184, 149, 74, 0.6) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 50% 50%, rgba(184, 149, 74, 0.5) 0%, transparent 100%),
            radial-gradient(2px 2px at 70% 30%, rgba(184, 149, 74, 0.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 30% 70%, rgba(184, 149, 74, 0.5) 0%, transparent 100%)
          `,
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
}
