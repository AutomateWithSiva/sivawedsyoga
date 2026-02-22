"use client";

import { useState, useRef, useCallback } from "react";
import { useWeddingMusic } from "@/contexts/WeddingMusicContext";

export default function TapToEnterOverlay() {
  const { unmute } = useWeddingMusic();
  const [visible, setVisible] = useState(true);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const handled = useRef(false);
  const leftRef = useRef<HTMLDivElement>(null);

  const handleEnter = useCallback(() => {
    if (handled.current) return;
    handled.current = true;
    unmute();
    setCurtainsOpen(true);
  }, [unmute]);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.target !== leftRef.current) return;
      if (e.propertyName === "transform") setVisible(false);
    },
    []
  );

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden ${curtainsOpen ? "curtains-open" : ""}`}
      aria-hidden={curtainsOpen}
    >
      <button
        type="button"
        onClick={handleEnter}
        onTouchEnd={(e) => {
          e.preventDefault();
          handleEnter();
        }}
        className="absolute inset-0 z-10 w-full h-full cursor-pointer select-none flex flex-col items-center justify-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-inset"
        aria-label="Tap to enter invitation"
      >
        <div className="flex flex-col items-center justify-center gap-3 px-6 text-center pointer-events-none">
          <p
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide"
            style={{ color: "var(--text)" }}
          >
            Tap to Enter
          </p>
          <p className="font-body text-sm sm:text-base text-theme-muted max-w-xs">
            You&apos;re invited
          </p>
          <span
            className="mt-2 inline-block h-px w-16 rounded-full"
            style={{ backgroundColor: "var(--gold)" }}
          />
        </div>
      </button>

      <div
        ref={leftRef}
        className="curtain-panel curtain-panel-left absolute left-0 top-0 bottom-0 w-1/2 pattern-kolam backdrop-blur-sm"
        style={{ backgroundColor: "rgba(250, 248, 245, 0.97)" }}
        onTransitionEnd={handleTransitionEnd}
      />
      <div
        className="curtain-panel curtain-panel-right absolute right-0 top-0 bottom-0 w-1/2 pattern-kolam backdrop-blur-sm"
        style={{ backgroundColor: "rgba(250, 248, 245, 0.97)" }}
      />
    </div>
  );
}
