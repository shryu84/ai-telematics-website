"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const platforms = [
  {
    name: "Samsara",
    initial: "S",
    color: "#4F46E5",
    description:
      "Full API integration with Samsara's Connected Operations platform. Ingest vehicle GPS, driver behavior events, dashcam footage metadata, and engine diagnostics in real time.",
    features: ["Real-time GPS tracking", "Driver behavior events", "Dashcam metadata", "Engine diagnostics", "HOS data"],
  },
  {
    name: "Geotab",
    initial: "G",
    color: "#00A86B",
    description:
      "Deep integration with Geotab's MyGeotab platform via the SDK and Data Feed APIs. Access accelerometer data, engine data, trip history, and custom rules.",
    features: ["Accelerometer data", "Engine fault codes", "Trip history", "Zone tracking", "Custom rules"],
  },
  {
    name: "Pegasus",
    initial: "P",
    color: "#E11D48",
    description:
      "Connect to Pegasus Gateway for GPS tracking data, events, and alerts from Syrus devices and compatible hardware.",
    features: ["GPS tracking", "Device events", "Geofence alerts", "I/O monitoring", "OBD-II data"],
  },
  {
    name: "CalAmp",
    initial: "C",
    color: "#0891B2",
    description:
      "Integration with CalAmp's telematics cloud for LMU and TTU device data, including location, speed, heading, and event streams.",
    features: ["LMU/TTU devices", "Location streams", "Event triggers", "PEG scripts", "CAN bus data"],
  },
  {
    name: "Motive (KeepTruckin)",
    initial: "M",
    color: "#7C3AED",
    description:
      "Pull ELD logs, vehicle inspection reports, driver scorecards, and GPS breadcrumbs from Motive's fleet management platform.",
    features: ["ELD logs", "DVIR reports", "Driver scorecards", "GPS breadcrumbs", "Fuel data"],
  },
  {
    name: "Verizon Connect",
    initial: "V",
    color: "#EF4444",
    description:
      "Access fleet tracking, driver behavior scoring, and maintenance data from Verizon Connect Reveal and related products.",
    features: ["Fleet tracking", "Driver scoring", "Maintenance alerts", "Route history", "Fuel analytics"],
  },
];

export default function IntegrationsPage() {
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
              Integrations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Works with the platforms you already trust
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
              AI Telematics connects to leading fleet telematics platforms via
              pre-built connectors. No hardware swaps, no data migration — just
              plug in and start getting insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Supported Platforms"
            title="Pre-built connectors for top telematics providers"
            description="Each integration is maintained by AI Telematics and kept in sync with provider API updates."
          />
          <div className="space-y-8">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl shrink-0"
                  style={{ backgroundColor: p.color }}
                >
                  {p.initial}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {p.name}
                  </h3>
                  <p className="text-muted leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom integrations */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Don&apos;t see your platform?
              </h2>
              <p className="text-lg text-muted mb-8">
                We build custom integrations for enterprise customers. Our
                engineering team can connect to any telematics provider with a
                documented API.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors"
              >
                Request an Integration
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
