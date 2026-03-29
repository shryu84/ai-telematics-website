"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const solutions = [
  {
    title: "Fleet Operators",
    description:
      "Reduce accidents, optimize routes, and lower operational costs. FleetSentinel gives fleet managers a single pane of glass for safety, compliance, and performance across all vehicles and drivers.",
    benefits: [
      "Driver risk scoring and coaching recommendations",
      "Real-time safety event alerts",
      "Fleet utilization and performance analytics",
      "Predictive maintenance indicators",
      "Custom reporting and dashboards",
    ],
    color: "#3B82F6",
  },
  {
    title: "Insurance Carriers",
    description:
      "Underwrite commercial auto policies with telematics-backed risk intelligence. FleetSentinel provides granular driver behavior data to support usage-based insurance programs.",
    benefits: [
      "Individual driver risk profiles",
      "Fleet-wide risk aggregation",
      "Claims correlation analytics",
      "Loss-run trend analysis",
      "API-driven underwriting data feeds",
    ],
    color: "#10B981",
  },
  {
    title: "Insurance Brokers & MGAs",
    description:
      "Differentiate your offering with data-driven fleet safety programs. Give your clients actionable insights that reduce claims frequency and improve retention.",
    benefits: [
      "Client fleet benchmarking reports",
      "Risk improvement recommendations",
      "White-label dashboard options",
      "Renewal data packages",
      "Loss prevention programs",
    ],
    color: "#8B5CF6",
  },
  {
    title: "Safety & Compliance Teams",
    description:
      "Automate compliance monitoring and streamline safety reporting. FleetSentinel tracks HOS, DVIR, and regulatory metrics so your team can focus on intervention.",
    benefits: [
      "Automated HOS violation detection",
      "DVIR completion tracking",
      "FMCSA/DOT compliance dashboards",
      "Driver coaching workflows",
      "Incident investigation support",
    ],
    color: "#F59E0B",
  },
];

export default function SolutionsPage() {
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
              Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Intelligence for every stakeholder
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
              Whether you&apos;re managing a fleet, underwriting policies, or
              running a safety program, AI Telematics delivers the insights
              you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col lg:flex-row gap-10 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className="inline-block w-1 h-8 rounded-full mb-4"
                    style={{ backgroundColor: s.color }}
                  />
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {s.title}
                  </h2>
                  <p className="text-lg text-muted leading-relaxed mb-6">
                    {s.description}
                  </p>
                  <ul className="space-y-3">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
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
                        <span className="text-primary/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Visual placeholder */}
                <div className="flex-1 w-full">
                  <div
                    className="w-full aspect-[4/3] rounded-2xl border border-border flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${s.color}08 0%, ${s.color}15 100%)`,
                    }}
                  >
                    <div className="text-center p-8">
                      <div
                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${s.color}20` }}
                      >
                        <svg
                          className="w-8 h-8"
                          style={{ color: s.color }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-muted">
                        {s.title} Dashboard
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Find the right solution for your organization
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Our team will walk you through a tailored demo based on your
              specific use case and data sources.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors shadow-lg shadow-accent/25"
            >
              Talk to Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
