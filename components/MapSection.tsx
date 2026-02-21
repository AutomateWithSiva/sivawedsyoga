"use client";

import { motion } from "framer-motion";
import { VENUE } from "@/lib/constants";

// Get the full iframe src from Google Maps: Search venue → Share → Embed a map. Paste the src here for best results.
// Fallback: query-based embed (may redirect; for production use Share → Embed a map and replace MAP_EMBED_URL).
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${VENUE.mapsEncoded}&t=&z=15&output=embed`;

export default function MapSection() {
  return (
    <section
      id="map"
      className="relative py-20 sm:py-28 px-4 bg-cream-100/50"
      aria-labelledby="map-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          id="map-heading"
          className="font-heading text-3xl sm:text-4xl text-center text-stone-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Find Us
        </motion.h2>
        <motion.p
          className="text-center text-stone-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {VENUE.name} — {VENUE.landmark}
        </motion.p>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-glass-lg border border-cream-300/80 aspect-video min-h-[280px] sm:min-h-[360px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map to Sowbhagya Mahal"
            className="w-full h-full min-h-[280px] sm:min-h-[360px]"
          />
        </motion.div>
        <motion.p
          className="text-center text-sm text-stone-500 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${VENUE.mapsEncoded}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-600 hover:text-gold-700 underline underline-offset-2"
          >
            Open in Google Maps
          </a>
        </motion.p>
      </div>
    </section>
  );
}
