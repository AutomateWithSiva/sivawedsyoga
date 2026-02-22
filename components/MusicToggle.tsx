"use client";

import { Music, Music2 } from "lucide-react";
import { useWeddingMusic } from "@/contexts/WeddingMusicContext";

export default function MusicToggle() {
  const { unmute, toggle, isPlaying } = useWeddingMusic();

  const handleClick = () => {
    unmute();
    toggle();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center gap-2 rounded-full backdrop-blur-md border border-[var(--gold)]/30 shadow-glass px-4 py-2.5 text-[var(--text)] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 transition-colors"
        style={{ backgroundColor: "var(--gold-soft)" }}
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
