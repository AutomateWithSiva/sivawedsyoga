"use client";

import { motion } from "framer-motion";

/** Add your GPay QR code image at public/gpay-qr.png */
const GPAY_QR_PATH = "/gpay-qr.png";

export default function GiftSection() {
  return (
    <section
      id="gift"
      className="relative py-20 sm:py-28 px-4 pattern-kolam bg-theme-bg"
      aria-labelledby="gift-heading"
    >
      <div className="max-w-md mx-auto text-center">
        <motion.h2
          id="gift-heading"
          className="font-heading text-3xl sm:text-4xl text-theme-text mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Send a Gift
        </motion.h2>
        <motion.p
          className="text-theme-muted mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Scan to send your wishes via Google Pay
        </motion.p>

        <motion.div
          className="rounded-card-lg bg-theme-card/90 backdrop-blur border border-theme-gold/20 shadow-glass p-6 inline-block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto bg-cream-100 rounded-xl flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={GPAY_QR_PATH}
              alt="Google Pay QR code – scan to send a gift"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-theme-muted font-body">
            Scan with GPay to send your gift
          </p>
        </motion.div>
      </div>
    </section>
  );
}
