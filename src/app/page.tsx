"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import IntegrationCard from "@/components/IntegrationCard";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

/* ─── Hero ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* animated grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      {/* floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light bg-accent/10 rounded-full border border-accent/20 mb-6">
              <span className="w-1.5 h-1.5 bg-accent-light rounded-full animate-pulse" />
              AI-Powered Fleet Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            Transform telematics data into{" "}
            <span className="text-gradient">actionable intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8 max-w-2xl"
          >
            Connect to your existing fleet platforms and unlock AI-powered
            driver risk scoring, safety alerts, and operational insights —
            without replacing your current stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors shadow-lg shadow-accent/25"
            >
              Request a Demo
            </Link>
            <Link
              href="/product"
              className="px-8 py-3.5 text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-colors"
            >
              Explore FleetSentinel
            </Link>
          </motion.div>
        </div>

        {/* Animated data flow visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[420px]"
        >
          <DataFlowVisual />
        </motion.div>
      </div>
    </section>
  );
}

function DataFlowVisual() {
  const nodes = [
    { label: "Vehicle Data", color: "#64748B" },
    { label: "Fleet Platform", color: "#8B5CF6" },
    { label: "AI Engine", color: "#3B82F6" },
    { label: "Risk Score", color: "#10B981" },
  ];

  return (
    <div className="relative p-6">
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
          className="relative flex items-center gap-3 mb-4"
          style={{ marginTop: i === 0 ? 0 : 16 }}
        >
          {/* connector */}
          {i > 0 && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
              className="absolute -top-5 left-5 w-px h-5 bg-gradient-to-b from-white/10 to-white/30 origin-top"
            />
          )}
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ backgroundColor: node.color }}
          >
            {i + 1}
          </div>
          <div className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 font-medium flex-1 backdrop-blur-sm">
            {node.label}
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="ml-2 text-accent-light"
            >
              ●
            </motion.span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Integration Logos ──────────────────────────────── */
function IntegrationLogos() {
  const integrations = [
    { name: "Samsara", color: "#4F46E5", initial: "S", description: "Connected Vehicle Platform" },
    { name: "Geotab", color: "#00A86B", initial: "G", description: "Fleet Management & IoT" },
    { name: "Pegasus", color: "#E11D48", initial: "P", description: "GPS Tracking Solutions" },
    { name: "CalAmp", color: "#0891B2", initial: "C", description: "Telematics Hardware" },
    { name: "Motive", color: "#7C3AED", initial: "M", description: "Fleet Operations" },
    { name: "Verizon Connect", color: "#EF4444", initial: "V", description: "Fleet Tracking & Mgmt" },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Integrations"
          title="Connects to the platforms you already use"
          description="Seamlessly ingest data from leading fleet telematics providers with our pre-built connectors."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((int, i) => (
            <IntegrationCard key={int.name} {...int} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Product Highlight ──────────────────────────────── */
function ProductHighlight() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FleetSentinel"
          title="AI-powered fleet safety intelligence"
          description="FleetSentinel analyzes telematics data from your existing fleet platforms and produces driver risk scoring, safety alerts, and operational intelligence."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                </svg>
              ),
              title: "Driver Risk Scoring",
              description: "ML-powered risk profiles for every driver based on speeding, harsh braking, cornering, distraction patterns, and more.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              ),
              title: "Real-Time Safety Alerts",
              description: "Instant notifications for dangerous driving events, geofence violations, and fleet anomalies detected by our AI models.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              ),
              title: "Operational Intelligence",
              description: "Fleet-wide analytics, utilization trends, route optimization insights, and predictive maintenance indicators.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
                </svg>
              ),
              title: "Compliance Monitoring",
              description: "Automated tracking of HOS violations, DVIR completions, and regulatory compliance metrics across your fleet.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              ),
              title: "Custom Dashboards",
              description: "Configurable reporting and dashboards tailored to your fleet operations, safety teams, and executive stakeholders.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                </svg>
              ),
              title: "API & Webhooks",
              description: "RESTful API and webhook integrations to push insights into your existing TMS, insurance, or BI platforms.",
            },
          ].map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Architecture ───────────────────────────────────── */
function ArchitectureSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Architecture"
          title="End-to-end data pipeline"
          description="From vehicle sensors to actionable insights — see how data flows through the AI Telematics platform."
        />
        <ArchitectureDiagram />
      </div>
    </section>
  );
}

/* ─── Use Cases ──────────────────────────────────────── */
function UseCases() {
  const cases = [
    {
      title: "Insurance Risk Assessment",
      description: "Provide insurers with granular driver risk profiles to enable usage-based insurance and more accurate underwriting.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
        </svg>
      ),
    },
    {
      title: "Fleet Safety Management",
      description: "Identify high-risk drivers, automate coaching workflows, and reduce accident rates across your fleet operations.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
    },
    {
      title: "Regulatory Compliance",
      description: "Automate compliance reporting for FMCSA, DOT, and state-level regulations with real-time monitoring.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
    {
      title: "Predictive Maintenance",
      description: "Leverage engine diagnostics and driving patterns to predict vehicle failures before they happen.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h11.18M4.22 19.78a10 10 0 1114.14-14.14 10 10 0 01-14.14 14.14z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Use Cases"
          title="Built for the entire fleet ecosystem"
          description="AI Telematics serves fleet operators, insurers, brokers, and safety teams with tailored intelligence."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-white hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                {uc.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {uc.title}
              </h3>
              <p className="text-muted leading-relaxed">{uc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to unlock your fleet data?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Join leading fleets that use AI Telematics to reduce accidents,
            lower insurance costs, and improve operational efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors shadow-lg shadow-accent/25"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/architecture"
              className="px-8 py-3.5 text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-colors"
            >
              View Architecture
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <IntegrationLogos />
      <ProductHighlight />
      <ArchitectureSection />
      <UseCases />
      <CTA />
    </>
  );
}
