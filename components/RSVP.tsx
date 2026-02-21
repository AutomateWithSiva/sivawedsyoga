"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = {
  name: string;
  phone: string;
  guests: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  phone: "",
  guests: "",
  message: "",
};

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  else if (form.name.trim().length < 2) errors.name = "Name must be at least 2 characters";
  if (!form.phone.trim()) errors.phone = "Phone is required";
  else if (!/^[0-9+\s-]{10,}$/.test(form.phone.replace(/\s/g, ""))) errors.phone = "Enter a valid phone number";
  if (!form.guests.trim()) errors.guests = "Please enter number of guests";
  else {
    const n = parseInt(form.guests, 10);
    if (Number.isNaN(n) || n < 1 || n > 50) errors.guests = "Enter a number between 1 and 50";
  }
  return errors;
}

export default function RSVP() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 4000);
    return () => clearTimeout(t);
  }, [showToast]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name as keyof FormState] ? { ...prev, [name]: undefined } : prev));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const nextErrors = validate(form);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;
      setSubmitted(true);
      setShowToast(true);
      setForm(initialForm);
    },
    [form]
  );

  return (
    <section
      id="rsvp"
      className="relative py-20 sm:py-28 px-4 pattern-kolam bg-theme-bg"
      aria-labelledby="rsvp-heading"
    >
      <div className="max-w-xl mx-auto">
        <motion.h2
          id="rsvp-heading"
          className="font-heading text-3xl sm:text-4xl text-center text-theme-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          RSVP
        </motion.h2>
        <motion.p
          className="text-center text-theme-muted mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Kindly confirm your presence
        </motion.p>

        {submitted ? (
          <motion.div
            className="rounded-card-lg bg-theme-card/90 backdrop-blur border border-theme-gold/20 shadow-glass p-8 text-center"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-theme-gold/20 text-theme-gold mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-theme-text mb-2">Thank you!</h3>
            <p className="text-theme-muted">
              Your response has been recorded. We look forward to celebrating with you.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="rounded-card-lg bg-theme-card/90 backdrop-blur border border-theme-gold/20 shadow-glass p-6 sm:p-8 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="rsvp-name" className="block text-sm font-medium text-theme-text mb-1">
                Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="rsvp-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-theme-bg focus:border-theme-gold focus:ring-2 focus:ring-theme-gold/20 outline-none transition"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "rsvp-name-error" : undefined}
              />
              {errors.name && (
                <p id="rsvp-name-error" className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="rsvp-phone" className="block text-sm font-medium text-theme-text mb-1">
                Phone <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="rsvp-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-theme-bg focus:border-theme-gold focus:ring-2 focus:ring-theme-gold/20 outline-none transition"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "rsvp-phone-error" : undefined}
              />
              {errors.phone && (
                <p id="rsvp-phone-error" className="mt-1 text-sm text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="rsvp-guests" className="block text-sm font-medium text-theme-text mb-1">
                Number of Guests <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="rsvp-guests"
                type="number"
                name="guests"
                min={1}
                max={50}
                value={form.guests}
                onChange={handleChange}
                placeholder="e.g. 2"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-theme-bg focus:border-theme-gold focus:ring-2 focus:ring-theme-gold/20 outline-none transition"
                aria-invalid={!!errors.guests}
                aria-describedby={errors.guests ? "rsvp-guests-error" : undefined}
              />
              {errors.guests && (
                <p id="rsvp-guests-error" className="mt-1 text-sm text-red-600">
                  {errors.guests}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="rsvp-message" className="block text-sm font-medium text-theme-text mb-1">
                Message
              </label>
              <textarea
                id="rsvp-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any dietary preferences or notes..."
                className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-theme-gold text-white font-medium shadow-soft hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-gold focus-visible:ring-offset-2"
            >
              Submit
            </button>
          </motion.form>
        )}
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 rounded-card-lg bg-theme-card text-theme-text px-5 py-3 shadow-lg border border-theme-gold/40 flex items-center gap-2"
            role="status"
            aria-live="polite"
          >
            <svg className="w-5 h-5 text-theme-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Thank you! Your response has been recorded.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
