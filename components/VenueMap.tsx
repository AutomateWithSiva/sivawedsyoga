"use client";

import { motion } from "framer-motion";
import { VENUE } from "@/lib/constants";

const MAP_EMBED_URL = `https://maps.google.com/maps?q=${VENUE.mapsEncoded}&t=&z=15&output=embed`;

export default function VenueMap() {
  return (
    <section
      id="map"
      className="relative py-20 sm:py-28 px-4 pattern-kolam bg-theme-bg overflow-x-hidden"
      aria-labelledby="map-heading"
    >
      {/* Wider on laptop/desktop so the map is bigger; still constrained on small screens */}
      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full min-w-0">
        <motion.h2
          id="map-heading"
          className="font-heading text-3xl sm:text-4xl text-center text-theme-text mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Find Us
        </motion.h2>
        <motion.p
          className="text-center text-theme-muted mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {VENUE.name} · {VENUE.landmark}
        </motion.p>

        {/* Map: wrapper + aspect-ratio pattern to prevent horizontal overflow */}
        <motion.div
          className="w-full max-w-full overflow-hidden rounded-2xl shadow-lg border border-cream-300/80"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="venue-map-aspect relative w-full">
            <iframe
              title="Google Map"
              src={MAP_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Glass overlay label with venue name + landmark */}
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-xs rounded-card bg-theme-card/80 backdrop-blur-md border border-theme-gold/20 shadow-soft px-4 py-3">
              <p className="font-heading font-semibold text-theme-text">{VENUE.name}</p>
              <p className="text-sm text-theme-muted mt-0.5">{VENUE.landmark}</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-center text-sm text-theme-muted mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${VENUE.mapsEncoded}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-gold hover:underline underline-offset-2 font-medium"
          >
            Open in Google Maps
          </a>
        </motion.p>
      </div>
    </section>
  );
}
