"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";
import { AUDIO } from "@/lib/constants";

const STORAGE_KEY = "wedding-music-preference";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const audio = new Audio(AUDIO.bgMusic);
    audio.loop = true;
    audio.volume = 0.25;
    audioRef.current = audio;

    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "played") {
      // User had played before; still don't autoplay, but we remember. They need to click again.
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const handleClick = () => {
    hasInteracted.current = true;
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      try {
        localStorage.setItem(STORAGE_KEY, "paused");
      } catch {
        /**/
      }
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        try {
          localStorage.setItem(STORAGE_KEY, "played");
        } catch {
          /**/
        }
      }).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center gap-2 rounded-full bg-[var(--card)]/90 backdrop-blur-md border border-[var(--gold)]/30 shadow-glass px-4 py-2.5 text-[var(--text)] hover:bg-[var(--gold)]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Music2 className="w-5 h-5 text-[var(--gold)]" aria-hidden />
        ) : (
          <Music className="w-5 h-5 text-[var(--gold)]" aria-hidden />
        )}
        <span className="text-sm font-medium">Music</span>
      </button>
    </div>
  );
}
