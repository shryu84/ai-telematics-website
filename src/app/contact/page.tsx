"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light bg-accent/10 rounded-full border border-accent/20 mb-6">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Let&apos;s talk fleet intelligence
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
              Whether you&apos;re exploring AI Telematics for the first time or
              ready to integrate FleetSentinel, our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="p-12 bg-surface rounded-2xl border border-border text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Thank you!
                  </h3>
                  <p className="text-muted">
                    We&apos;ve received your message and will be in touch within
                    one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    Request a Demo
                  </h2>
                  <p className="text-muted mb-6">
                    Fill out the form and our team will reach out to schedule a
                    personalized demo.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                      placeholder="Acme Logistics"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Fleet Size
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                    >
                      <option value="">Select fleet size</option>
                      <option>1–50 vehicles</option>
                      <option>51–200 vehicles</option>
                      <option>201–1,000 vehicles</option>
                      <option>1,000+ vehicles</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Message (optional)
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition resize-none"
                      placeholder="Tell us about your fleet and what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors shadow-lg shadow-accent/25"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Why AI Telematics?
                </h3>
                <ul className="space-y-3">
                  {[
                    "No hardware changes — works with your current fleet platform",
                    "AI-powered driver risk scoring in days, not months",
                    "Pre-built integrations with Samsara, Geotab, Pegasus, and more",
                    "Enterprise-grade security and 99.9% uptime SLA",
                    "Dedicated customer success team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-primary/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  General Inquiries
                </h3>
                <p className="text-muted text-sm mb-4">
                  For partnership, press, or other inquiries:
                </p>
                <p className="text-accent font-medium">info@aitelematics.com</p>
              </div>

              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Technical Support
                </h3>
                <p className="text-muted text-sm mb-4">
                  Existing customers can reach our support team:
                </p>
                <p className="text-accent font-medium">
                  support@aitelematics.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
