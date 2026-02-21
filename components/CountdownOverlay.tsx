"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EVENT } from "@/lib/constants";

function useCountdown(target: Date) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const now = new Date();
      const total = Math.max(0, target.getTime() - now.getTime());
      if (total <= 0) {
        setDiff({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setDiff({
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((total / (1000 * 60)) % 60),
        seconds: Math.floor((total / 1000) % 60),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  return { ...diff, mounted };
}

function Block({ value, label }: { value: number; label: string }) {
  const str = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl md:rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center overflow-hidden">
        <motion.span
          key={str}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="font-body text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white tabular-nums tracking-tight"
        >
          {str}
        </motion.span>
      </div>
      <span className="mt-1 text-[10px] sm:text-xs md:text-sm font-medium text-amber-200/90 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function CountdownOverlay() {
  const { days, hours, minutes, seconds, mounted } = useCountdown(EVENT.countdownTarget);

  return (
    <div className="flex justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10" aria-label="Countdown to wedding day">
      {mounted ? (
        <>
          <Block value={days} label="Days" />
          <Block value={hours} label="Hours" />
          <Block value={minutes} label="Mins" />
          <Block value={seconds} label="Secs" />
        </>
      ) : (
        <>
          <Block value={0} label="Days" />
          <Block value={0} label="Hours" />
          <Block value={0} label="Mins" />
          <Block value={0} label="Secs" />
        </>
      )}
    </div>
  );
}
