"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

const techDetails = [
  {
    title: "Data Ingestion Layer",
    description:
      "High-throughput connectors pull data from fleet platforms via REST APIs, webhooks, and streaming protocols. Automatic retry, deduplication, and schema validation ensure data quality.",
    specs: ["REST & WebSocket connectors", "< 30s ingestion latency", "Automatic deduplication", "Schema validation"],
  },
  {
    title: "Normalization Engine",
    description:
      "Raw telematics data from different providers is normalized into a unified data model. This allows FleetSentinel's AI models to work across platforms without provider-specific logic.",
    specs: ["Unified data model", "Provider-agnostic schema", "Time-series alignment", "Coordinate normalization"],
  },
  {
    title: "AI / ML Pipeline",
    description:
      "Proprietary machine learning models process normalized data to generate driver risk scores, detect anomalies, and predict incidents. Models are continuously retrained on new data.",
    specs: ["Driver risk scoring models", "Anomaly detection", "Incident prediction", "Continuous retraining"],
  },
  {
    title: "Insight Delivery",
    description:
      "Processed insights are delivered through real-time dashboards, REST APIs, webhooks, and scheduled reports. Role-based access ensures the right stakeholders see the right data.",
    specs: ["Real-time dashboards", "REST API & webhooks", "Scheduled PDF reports", "Role-based access"],
  },
];

export default function ArchitecturePage() {
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
              Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Built for scale, designed for reliability
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
              A deep look at how AI Telematics processes millions of data
              points per day from vehicle sensors to actionable insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual diagram */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Data Flow"
            title="From vehicles to risk insights"
            description="Telematics data flows through five distinct stages before reaching stakeholders as actionable intelligence."
          />
          <ArchitectureDiagram />
        </div>
      </section>

      {/* Tech details */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Technical Details"
            title="Under the hood"
            description="Each layer of the platform is designed for high availability, low latency, and enterprise-grade security."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {techDetails.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-border"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {t.title}
                </h3>
                <p className="text-muted leading-relaxed mb-4">
                  {t.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.specs.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-xs font-medium text-primary/70 bg-surface-dark rounded-full border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Security"
            title="Enterprise-grade security"
            description="Your fleet data is protected with industry-leading security practices at every layer."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "SOC 2 Type II", desc: "Certified compliance" },
              { title: "AES-256", desc: "End-to-end encryption" },
              { title: "RBAC", desc: "Role-based access control" },
              { title: "99.9% SLA", desc: "Guaranteed uptime" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 text-center bg-white rounded-xl border border-border"
              >
                <div className="text-2xl font-bold text-accent mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-muted">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Want a technical deep dive?
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Our solutions engineers can walk you through the architecture,
              security model, and integration details for your specific setup.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors shadow-lg shadow-accent/25"
            >
              Schedule a Technical Call
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
