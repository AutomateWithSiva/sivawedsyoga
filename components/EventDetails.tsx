"use client";

import { motion } from "framer-motion";
import { EVENT, VENUE, COUPLE } from "@/lib/constants";

const IconCalendar = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const IconClock = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconPin = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function EventDetails() {
  return (
    <section
      id="details"
      className="relative py-20 sm:py-28 px-4 pattern-kolam bg-theme-bg"
      aria-labelledby="event-details-heading"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          id="event-details-heading"
          className="font-heading text-3xl sm:text-4xl text-center text-theme-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Event Details
        </motion.h2>
        <motion.p
          className="text-center text-theme-muted max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {COUPLE.names} — {EVENT.title}
        </motion.p>

        <motion.div
          className="rounded-card-lg bg-theme-card/90 backdrop-blur-md border border-theme-gold/20 shadow-glass p-6 sm:p-10 hover:shadow-glass-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-theme-gold/15 text-theme-gold flex-shrink-0">
                <IconCalendar />
              </div>
              <div>
                <p className="text-xs font-medium text-theme-gold uppercase tracking-wider mb-1">Date</p>
                <p className="font-body text-theme-text text-lg">{EVENT.date}</p>
              </div>
            </div>

            <div className="border-t border-theme-gold/20 pt-6 sm:pt-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-theme-gold/15 text-theme-gold flex-shrink-0">
                  <IconClock />
                </div>
                <div>
                  <p className="text-xs font-medium text-theme-gold uppercase tracking-wider mb-1">Time</p>
                  <p className="font-body text-theme-text text-lg">{EVENT.time}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-theme-gold/20 pt-6 sm:pt-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-theme-gold/15 text-theme-gold flex-shrink-0">
                  <IconPin />
                </div>
                <div>
                  <p className="text-xs font-medium text-theme-gold uppercase tracking-wider mb-1">Venue</p>
                  <p className="font-heading font-semibold text-theme-text text-lg">{VENUE.name}</p>
                  <p className="font-body text-theme-muted text-sm mt-1">{VENUE.fullAddress.join(", ")}</p>
                  <p className="font-body text-theme-gold text-sm mt-1">{VENUE.landmark}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-10 pt-6 border-t border-theme-gold/20">
            <a
              href={VENUE.calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-theme-gold text-white font-medium shadow-soft hover:opacity-90 transition-opacity duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
              </svg>
              Add to Calendar
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${VENUE.mapsEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-theme-gold text-theme-gold font-medium hover:bg-theme-gold/10 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Open in Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
