"use client";

import { createContext, useContext, useState, useCallback } from "react";

type AssetsLoaderValue = {
  videoReady: boolean;
  audioReady: boolean;
  audioProgress: number;
  setVideoReady: (ready: boolean) => void;
  setAudioReady: (ready: boolean) => void;
  setAudioProgress: (p: number) => void;
};

const AssetsLoaderContext = createContext<AssetsLoaderValue | null>(null);

export function AssetsLoaderProvider({ children }: { children: React.ReactNode }) {
  const [videoReady, setVideoReady] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const setVideo = useCallback((ready: boolean) => setVideoReady(ready), []);
  const setAudio = useCallback((ready: boolean) => setAudioReady(ready), []);
  const setAudioPct = useCallback((p: number) => setAudioProgress(Math.min(100, Math.max(0, p))), []);

  return (
    <AssetsLoaderContext.Provider
      value={{
        videoReady,
        audioReady,
        audioProgress,
        setVideoReady: setVideo,
        setAudioReady: setAudio,
        setAudioProgress: setAudioPct,
      }}
    >
      {children}
    </AssetsLoaderContext.Provider>
  );
}

export function useAssetsLoader() {
  const ctx = useContext(AssetsLoaderContext);
  if (!ctx) throw new Error("useAssetsLoader must be used within AssetsLoaderProvider");
  return ctx;
}
