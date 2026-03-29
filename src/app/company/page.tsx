"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    title: "Safety First",
    description:
      "Every feature we build is measured by its impact on driver safety and accident prevention. We believe data-driven safety programs save lives.",
  },
  {
    title: "Platform Agnostic",
    description:
      "We meet fleets where they are. No lock-in, no hardware requirements — just intelligence layered on top of the tools you already use.",
  },
  {
    title: "AI with Integrity",
    description:
      "Our models are transparent, auditable, and fair. We publish model accuracy metrics and never use black-box scoring that impacts driver livelihoods.",
  },
  {
    title: "Customer Partnership",
    description:
      "We build with customers, not for them. Every major feature is shaped by feedback from fleet operators, insurers, and safety professionals.",
  },
];

const stats = [
  { value: "2022", label: "Founded" },
  { value: "50+", label: "Fleet customers" },
  { value: "2.5B+", label: "Miles analyzed" },
  { value: "15+", label: "Team members" },
];

export default function CompanyPage() {
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
              Company
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Making roads safer with AI
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
              AI Telematics was founded with a simple mission: connect to fleet
              telematics platforms and transform raw data into AI-powered
              safety, risk, and operational insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-muted">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Our mission
              </h2>
              <div className="space-y-4 text-lg text-muted leading-relaxed">
                <p>
                  The commercial fleet industry generates enormous volumes of
                  telematics data every day — GPS coordinates, engine
                  diagnostics, driver behavior events, dashcam footage, and
                  more. But most of this data sits unused or is only
                  partially analyzed.
                </p>
                <p>
                  AI Telematics exists to unlock the full potential of that
                  data. We build the AI intelligence layer that sits on top of
                  existing fleet platforms like Samsara, Geotab, and Pegasus,
                  transforming raw telematics streams into actionable insights
                  for fleet operators, insurance carriers, and safety teams.
                </p>
                <p>
                  Our flagship product, FleetSentinel, uses proprietary
                  machine learning models to score driver risk, detect safety
                  events, and predict incidents before they happen — helping
                  our customers reduce accidents, lower insurance costs, and
                  improve fleet operations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Values"
            title="What drives us"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-border"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-muted leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join our team
            </h2>
            <p className="text-lg text-white/60 mb-10">
              We&apos;re building the future of fleet intelligence. If you&apos;re
              passionate about AI, telematics, and making roads safer, we&apos;d
              love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors shadow-lg shadow-accent/25"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
