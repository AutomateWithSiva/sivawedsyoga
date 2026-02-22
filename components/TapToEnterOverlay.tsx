"use client";

import { useState, useRef, useCallback } from "react";
import { useWeddingMusic } from "@/contexts/WeddingMusicContext";
import { COUPLE, EVENT } from "@/lib/constants";

export default function TapToEnterOverlay() {
  const { unmute, play } = useWeddingMusic();
  const [visible, setVisible] = useState(true);
  const [textHidden, setTextHidden] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const handled = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleEnter = useCallback(() => {
    if (handled.current) return;
    handled.current = true;
    setTextHidden(true);
    unmute();
    play();
    setCurtainsOpen(true);
  }, [unmute, play]);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.target !== panelRef.current) return;
      if (e.propertyName === "transform") setVisible(false);
    },
    []
  );

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden ${curtainsOpen ? "overlay-screen-open" : ""}`}
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
        <div
          className={`flex flex-col items-center justify-center gap-4 px-6 text-center pointer-events-none max-w-lg ${textHidden ? "opacity-0 pointer-events-none" : ""}`}
          style={{ transition: "none" }}
        >
          <p
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide"
            style={{ color: "var(--text)" }}
          >
            You&apos;re Invited
          </p>
          <p className="font-body text-base sm:text-lg text-theme-muted leading-relaxed">
            to celebrate the {EVENT.title} of {COUPLE.names}
          </p>
          <span
            className="inline-block h-px w-16 rounded-full"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <p
            className="font-heading text-xl sm:text-2xl font-medium tracking-wide"
            style={{ color: "var(--gold)" }}
          >
            Tap to Enter
          </p>
        </div>
      </button>

      <div
        ref={panelRef}
        className="overlay-screen-panel absolute inset-0 pattern-kolam backdrop-blur-sm"
        style={{ backgroundColor: "rgba(250, 248, 245, 0.97)" }}
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
}
