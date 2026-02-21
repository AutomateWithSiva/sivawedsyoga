"use client";

import { motion } from "framer-motion";
import { EVENT, COUPLE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-4 bg-theme-maroon text-cream-200"
      role="contentinfo"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading text-2xl sm:text-3xl text-cream-100 mb-4">
            Thank you for being part of our celebration
          </p>
          <p className="text-cream-300/90 text-sm sm:text-base">
            {COUPLE.names}
          </p>
        </motion.div>
        <motion.div
          className="mt-10 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-cream-300/80 text-xs">
            {EVENT.title} — {EVENT.date}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
