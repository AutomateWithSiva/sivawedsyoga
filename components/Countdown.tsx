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

function CountdownBlock({ value, label }: { value: number; label: string }) {
  const str = String(value).padStart(2, "0");
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-card-lg bg-theme-card/90 backdrop-blur border border-theme-gold/20 shadow-soft flex items-center justify-center overflow-hidden">
        <motion.span
          key={str}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="font-heading text-3xl sm:text-4xl font-semibold text-theme-gold tabular-nums block"
        >
          {str}
        </motion.span>
      </div>
      <span className="mt-2 text-sm font-medium text-theme-muted uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds, mounted } = useCountdown(EVENT.countdownTarget);

  return (
    <section
      id="countdown"
      className="relative py-20 sm:py-28 px-4 pattern-kolam bg-theme-bg"
      aria-labelledby="countdown-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          id="countdown-heading"
          className="font-heading text-3xl sm:text-4xl text-theme-text mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Countdown to the Day
        </motion.h2>
        <motion.p
          className="text-theme-muted mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {EVENT.date} at 6:00 PM {EVENT.timezoneLabel} (Asia/Kolkata)
        </motion.p>

        <div className="grid grid-cols-4 gap-4 sm:gap-8 justify-items-center">
          {mounted ? (
            <>
              <CountdownBlock value={days} label="Days" />
              <CountdownBlock value={hours} label="Hours" />
              <CountdownBlock value={minutes} label="Minutes" />
              <CountdownBlock value={seconds} label="Seconds" />
            </>
          ) : (
            <>
              <CountdownBlock value={0} label="Days" />
              <CountdownBlock value={0} label="Hours" />
              <CountdownBlock value={0} label="Minutes" />
              <CountdownBlock value={0} label="Seconds" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
