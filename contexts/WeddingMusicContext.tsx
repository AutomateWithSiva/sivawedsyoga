"use client";

import { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import { AUDIO } from "@/lib/constants";

const STORAGE_KEY = "wedding-music-preference";
const STORAGE_KEY_TIME = "wedding-music-time";

type WeddingMusicValue = {
  unmute: () => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  isPlaying: boolean;
};

const WeddingMusicContext = createContext<WeddingMusicValue | null>(null);

function readPlayingPreference(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return localStorage.getItem(STORAGE_KEY) !== "paused";
  } catch {
    return true;
  }
}

function readSavedTime(): number {
  if (typeof window === "undefined") return 0;
  try {
    const s = localStorage.getItem(STORAGE_KEY_TIME);
    if (s == null) return 0;
    const n = parseFloat(s);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

function saveTime(t: number) {
  try {
    localStorage.setItem(STORAGE_KEY_TIME, String(t));
  } catch {}
}

export function WeddingMusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(true);
  const [isPlaying, setIsPlaying] = useState(readPlayingPreference);
  isPlayingRef.current = isPlaying;

  useEffect(() => {
    const audio = new Audio(AUDIO.bgMusic);
    audio.loop = true;
    audio.volume = 0.25;
    audio.muted = true;
    audioRef.current = audio;

    const savedTime = readSavedTime();
    if (savedTime > 0) audio.currentTime = savedTime;

    const pref = readPlayingPreference();
    if (pref) {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      setIsPlaying(false);
    }

    const saveState = () => {
      const el = audioRef.current;
      if (el) {
        saveTime(el.currentTime);
        try {
          localStorage.setItem(STORAGE_KEY, isPlayingRef.current ? "played" : "paused");
        } catch {}
      }
    };

    window.addEventListener("pagehide", saveState);
    const interval = setInterval(saveState, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("pagehide", saveState);
      saveState();
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const unmute = useCallback(() => {
    if (audioRef.current) audioRef.current.muted = false;
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
    try {
      localStorage.setItem(STORAGE_KEY, "paused");
      saveTime(audioRef.current.currentTime);
    } catch {}
  }, []);

  const play = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
    try {
      localStorage.setItem(STORAGE_KEY, "played");
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  const value: WeddingMusicValue = {
    unmute,
    play,
    pause,
    toggle,
    isPlaying,
  };

  return (
    <WeddingMusicContext.Provider value={value}>
      {children}
    </WeddingMusicContext.Provider>
  );
}

export function useWeddingMusic() {
  const ctx = useContext(WeddingMusicContext);
  if (!ctx) throw new Error("useWeddingMusic must be used within WeddingMusicProvider");
  return ctx;
}
