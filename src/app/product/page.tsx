"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ProductScreenshots from "@/components/ProductScreenshots";

/* ─── Capabilities ──────────────────────────────────────── */
const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Driver Risk Scoring",
    description:
      "Proprietary ML models analyze driving behavior patterns to produce a composite risk score for every driver in your fleet.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: "Real-Time Alerts",
    description:
      "Configurable alerting rules for harsh braking, speeding, distracted driving, geofence breaches, and anomalous behavior.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Fleet Analytics",
    description:
      "Comprehensive dashboards with fleet utilization, route analysis, fuel consumption trends, and performance benchmarking.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Predictive Models",
    description:
      "Predict accident likelihood, maintenance needs, and driver attrition risk before events occur using our AI engine.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
      </svg>
    ),
    title: "Accident Forensic Reports",
    description:
      "Automatically generated incident reports including pre-crash behavior timeline, speed analysis, and contributing risk factors — court and insurer ready.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
      </svg>
    ),
    title: "Collision Reconstruction",
    description:
      "Reconstruct the sequence of events leading to a collision using telematics data — speed, heading, braking, and GPS position — to support liability determination.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "API-First Platform",
    description:
      "Full REST API and webhook system to integrate FleetSentinel insights into your TMS, insurance, and BI tools.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure with end-to-end encryption, role-based access controls, and audit logging.",
  },
];

/* ─── Insurance differentiators ─────────────────────────── */
const insuranceItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Driver Behavior Analysis",
    description: "Continuous behavioral profiling across speeding, braking, cornering, phone use, and fatigue indicators.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Risk Scoring Models",
    description: "Actuarially-aligned composite risk scores at driver, vehicle, and fleet levels for underwriting and renewal.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: "AI-Powered Safety Alerts",
    description: "Real-time event detection and instant notifications for high-risk behaviors and emerging fleet patterns.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Accident Forensic Reports",
    description: "Structured incident reports generated automatically from telematics data — ready for claims adjusters and legal teams.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
      </svg>
    ),
    title: "Collision Reconstruction",
    description: "Replay and reconstruct any collision event using multi-dimensional telematics data to establish timeline and liability.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
      </svg>
    ),
    title: "Insurance-Grade Insights",
    description: "Deliver structured data packages to insurers, MGAs, and brokers via API — built to meet commercial auto underwriting standards.",
  },
];

/* ─── Metrics ───────────────────────────────────────────── */
const metrics = [
  { value: "40%", label: "Reduction in accident rates" },
  { value: "2.5B+", label: "Miles of data analyzed" },
  { value: "< 500ms", label: "Alert delivery latency" },
  { value: "99.9%", label: "Platform uptime SLA" },
];

/* ─── Page ──────────────────────────────────────────────── */
export default function ProductPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light bg-accent/10 rounded-full border border-accent/20 mb-6">
              Product
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              FleetSentinel
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-4">
              FleetSentinel is the AI-powered intelligence layer that sits on
              top of your existing fleet telematics platforms. Analyze driver
              behavior, predict risk, and generate operational insights — all
              without changing your current stack.
            </p>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8">
              Built as an{" "}
              <span className="text-accent-light font-semibold">
                Insurance Risk Intelligence Platform
              </span>
              , FleetSentinel goes beyond traditional telematics by delivering
              accident forensic analysis and collision reconstruction — enabling
              fleets and insurers to understand exactly what happened, reduce
              liability, and drive better safety outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors shadow-lg shadow-accent/25"
              >
                Request Access
              </Link>
              <Link
                href="/architecture"
                className="px-8 py-3.5 text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {m.value}
                </div>
                <div className="text-sm text-muted">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insurance Intelligence Differentiator ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Insurance Intelligence"
            title="From telematics data to insurance intelligence"
            description="FleetSentinel transforms raw fleet data into structured, insurance-grade insights — from daily risk scoring to post-collision forensics."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {insuranceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-4 p-5 bg-white rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Overview Screenshots ── */}
      <ProductScreenshots />

      {/* ── Capabilities ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Capabilities"
            title="Everything you need for fleet intelligence"
            description="FleetSentinel provides a comprehensive suite of AI-driven tools to monitor, analyze, and optimize your fleet."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <FeatureCard key={c.title} {...c} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Three steps to smarter fleet operations"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect",
                description:
                  "Link your existing fleet platforms — Samsara, Geotab, DCT, and more — using our pre-built connectors. No hardware changes required.",
              },
              {
                step: "02",
                title: "Analyze",
                description:
                  "FleetSentinel ingests, normalizes, and runs your telematics data through our proprietary AI models to score risk, detect patterns, and reconstruct incidents.",
              },
              {
                step: "03",
                title: "Act",
                description:
                  "Receive real-time alerts, forensic reports, and API-driven insights you can use to improve safety, reduce insurance costs, and resolve claims faster.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative p-8 bg-white rounded-2xl border border-border hover:shadow-md transition-shadow"
              >
                <span className="text-5xl font-bold text-accent/10">
                  {s.step}
                </span>
                <h3 className="text-xl font-semibold text-primary mt-4 mb-2">
                  {s.title}
                </h3>
                <p className="text-muted leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
              Start using FleetSentinel today
            </h2>
            <p className="text-lg text-white/60 mb-10">
              See how AI Telematics can transform your fleet safety program and
              insurance outcomes with a personalized demo.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors shadow-lg shadow-accent/25"
            >
              Get a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
