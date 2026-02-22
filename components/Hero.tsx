"use client";

import { motion } from "framer-motion";
import { HERO_IMAGE } from "@/lib/constants";
import CountdownOverlay from "./CountdownOverlay";
import { useAssetsLoader } from "@/contexts/AssetsLoaderContext";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  }),
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { setVideoReady } = useAssetsLoader();

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-900 px-4 py-12 md:py-20"
      aria-label="Welcome"
    >
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top blur-[6px]"
          onLoad={() => setVideoReady(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Text overlay – exact copy (z-20 so above any overlay) */}
      <motion.div
        className="relative z-20 text-center max-w-3xl mx-auto px-4 flex flex-col items-center justify-center flex-1"
        variants={container}
        initial="visible"
        animate="visible"
      >
        <motion.p variants={item} className="font-heading font-bold text-amber-200/95 text-lg sm:text-xl md:text-2xl tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2">
          {"You're Invited"}
        </motion.p>
        <motion.p variants={item} className="font-body text-cream-200/90 text-xl sm:text-2xl md:text-3xl mb-4">
          to celebrate the Wedding Reception of
        </motion.p>
        <motion.div variants={item} className="text-center mb-6">
          <p className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-tight">
            Sivakumaaran
          </p>
          <p className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-amber-200/95 mt-1 md:mt-2">
            &
          </p>
          <p className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-tight mt-1">
            Yogalakshmi
          </p>
        </motion.div>
        <motion.p variants={item} className="font-body text-cream-200 text-xl sm:text-2xl md:text-3xl mb-1">
          March 6, 2026
        </motion.p>
        <motion.p variants={item} className="font-body text-cream-300/90 text-lg sm:text-xl md:text-2xl mb-4">
          From 6:00 PM onwards
        </motion.p>
        <motion.p variants={item} className="font-heading text-amber-100/90 text-lg sm:text-xl md:text-2xl">
          Sowbhagya Mahal, Chennai
        </motion.p>
        <motion.div variants={item} className="h-px w-24 mx-auto bg-amber-400/60 mt-6" />
        {/* Countdown – below the text */}
        <motion.div variants={item} id="countdown" className="mt-8 md:mt-12 w-full max-w-2xl">
          <CountdownOverlay />
        </motion.div>
      </motion.div>

      {/* Scroll indicator – arrow + hint */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="font-body text-amber-200/90 text-xs sm:text-sm tracking-widest uppercase">
          Scroll down
        </span>
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400/80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
