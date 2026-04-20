"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

/* ─── Pricing data ─────────────────────────────────────── */
const tiers = [
  {
    id: "starter",
    name: "Starter",
    range: "1–200 vehicles",
    price: "$200",
    unit: "/ month flat",
    description: "Perfect for small fleets getting started with AI-powered safety.",
    popular: false,
    cta: "Start with Starter",
    features: [
      "Up to 200 vehicles",
      "Driver risk scoring",
      "Real-time safety alerts",
      "Basic analytics dashboard",
      "1 telematics integration",
      "Email support",
      "Standard API access",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    range: "201–1,000 vehicles",
    price: "$1.00",
    unit: "/ vehicle / month",
    description: "For growing fleets that need advanced intelligence across their operations.",
    popular: true,
    cta: "Get Started",
    features: [
      "Up to 1,000 vehicles",
      "Everything in Starter",
      "Advanced AI risk models",
      "Compliance monitoring (HOS/DVIR)",
      "3 telematics integrations",
      "Custom alert rules",
      "Priority email & chat support",
      "Webhook notifications",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    range: "1,001–5,000 vehicles",
    price: "$0.90",
    unit: "/ vehicle / month",
    description: "Built for enterprise fleets that need deep customization and dedicated support.",
    popular: false,
    cta: "Contact Sales",
    features: [
      "Up to 5,000 vehicles",
      "Everything in Growth",
      "Custom ML model tuning",
      "Unlimited integrations",
      "Predictive maintenance",
      "Custom dashboards & reports",
      "Dedicated Customer Success Manager",
      "99.9% uptime SLA",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    range: "5,000+ vehicles",
    price: "From $0.80",
    unit: "/ vehicle / month",
    description: "Volume pricing for the largest fleets, insurers, and platform partners.",
    popular: false,
    cta: "Talk to Sales",
    features: [
      "Unlimited vehicles",
      "Everything in Enterprise",
      "Tiered volume discounts",
      "Enterprise SSO & SCIM",
      "On-premise deployment option",
      "Custom data retention policies",
      "SLA with financial penalties",
      "Dedicated engineering support",
    ],
  },
];

const volumeRates = [
  { min: 1,      max: 200,      label: "1–200",          rate: null,  flat: 200  },
  { min: 201,    max: 1000,     label: "201–1,000",      rate: 1.00,  flat: null },
  { min: 1001,   max: 5000,     label: "1,001–5,000",    rate: 0.90,  flat: null },
  { min: 5001,   max: 20000,    label: "5,001–20,000",   rate: 0.80,  flat: null },
  { min: 20001,  max: 100000,   label: "20,001–100,000", rate: 0.70,  flat: null },
  { min: 100001, max: 500000,   label: "100,001–500,000",rate: 0.60,  flat: null },
  { min: 500001, max: 1000000,  label: "500,001–1M",     rate: 0.50,  flat: null },
];

function calcMonthly(vehicles: number): number {
  for (const band of volumeRates) {
    if (vehicles >= band.min && vehicles <= band.max) {
      return band.flat ?? (vehicles * (band.rate ?? 0));
    }
  }
  // >1M: $0.50/vehicle
  return vehicles * 0.50;
}

/* ─── Calculator ───────────────────────────────────────── */
function PriceCalculator() {
  const [vehicles, setVehicles] = useState(500);
  const monthly = calcMonthly(vehicles);
  const annual = monthly * 12;

  const activeBand = volumeRates.find(
    (b) => vehicles >= b.min && vehicles <= b.max
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-white rounded-2xl border border-border shadow-lg overflow-hidden"
    >
      <div className="px-8 py-6 border-b border-border bg-surface">
        <h3 className="text-xl font-bold text-primary mb-1">
          Fleet Cost Estimator
        </h3>
        <p className="text-sm text-muted">
          Drag the slider or type your fleet size to estimate your monthly cost.
        </p>
      </div>

      <div className="px-8 py-8 space-y-6">
        {/* Input */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-primary">
              Number of Vehicles
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                max={1000000}
                value={vehicles}
                onChange={(e) => {
                  const v = Math.max(1, Math.min(1000000, Number(e.target.value) || 1));
                  setVehicles(v);
                }}
                className="w-28 px-3 py-1.5 text-sm text-right font-semibold border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              />
              <span className="text-sm text-muted">vehicles</span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={5000}
            step={1}
            value={Math.min(vehicles, 5000)}
            onChange={(e) => setVehicles(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer accent-accent"
          />
          <div className="flex justify-between text-xs text-muted mt-1.5">
            <span>1</span>
            <span>1,000</span>
            <span>2,500</span>
            <span>5,000</span>
          </div>
        </div>

        {/* Active tier badge */}
        {activeBand && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-xs font-semibold text-accent">
              {activeBand.label} vehicles —{" "}
              {activeBand.flat
                ? `$${activeBand.flat.toFixed(0)} flat rate`
                : `$${activeBand.rate?.toFixed(2)}/vehicle/month`}
            </span>
          </div>
        )}

        {/* Result */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 bg-accent/5 rounded-xl border border-accent/20">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent/70 mb-1">
              Monthly
            </p>
            <p className="text-3xl font-bold text-primary">
              ${monthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="p-5 bg-surface rounded-xl border border-border">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
              Annual Estimate
            </p>
            <p className="text-3xl font-bold text-primary">
              ${annual.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>

        <p className="text-xs text-muted text-center">
          Estimates are based on fleet size only. Contact sales for a precise
          quote including integrations and support tier.
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Volume rate table ─────────────────────────────────── */
function VolumeTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="max-w-2xl mx-auto rounded-2xl border border-border overflow-hidden bg-white"
    >
      <div className="px-6 py-4 border-b border-border bg-surface">
        <h3 className="font-semibold text-primary">Volume Pricing Schedule</h3>
        <p className="text-sm text-muted mt-0.5">
          Volume discounts applied automatically based on fleet size.
        </p>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Fleet Size
            </th>
            <th className="text-right px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {volumeRates.map((row, i) => (
            <tr
              key={row.label}
              className={`border-b border-border last:border-0 transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-surface/50"
              }`}
            >
              <td className="px-6 py-3 font-medium text-primary">{row.label}</td>
              <td className="px-6 py-3 text-right font-semibold text-accent">
                {row.flat
                  ? `$${row.flat}/month flat`
                  : `$${row.rate?.toFixed(2)}/vehicle/month`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

/* ─── Check icon ────────────────────────────────────────── */
function Check() {
  return (
    <svg
      className="w-4 h-4 text-accent shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light bg-accent/10 rounded-full border border-accent/20 mb-6">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              Pay only for what you use. Volume discounts kick in automatically
              as your fleet grows — no negotiations, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border transition-all duration-300 ${
                  tier.popular
                    ? "border-accent shadow-xl shadow-accent/10 bg-white scale-[1.02]"
                    : "border-border bg-white hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                    <span className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-white bg-accent rounded-full shadow-lg shadow-accent/30">
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`p-6 rounded-t-2xl ${
                    tier.popular
                      ? "bg-gradient-to-br from-accent/10 to-accent/5"
                      : "bg-surface"
                  }`}
                >
                  <h3 className="text-lg font-bold text-primary mb-0.5">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-muted mb-4">{tier.range}</p>
                  <div className="flex items-end gap-1.5">
                    <span
                      className={`text-3xl font-bold ${
                        tier.popular ? "text-accent" : "text-primary"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span className="text-sm text-muted pb-1">{tier.unit}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {tier.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-primary/80">
                        <Check />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 text-sm font-semibold rounded-lg transition-colors ${
                      tier.popular
                        ? "bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/25"
                        : "bg-primary/5 hover:bg-primary/10 text-primary border border-border"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-sm text-muted mt-8"
          >
            Volume discounts applied automatically based on fleet size. All plans
            billed monthly. Annual billing available at 10% savings.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-4">
              Cost Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Estimate your monthly cost
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Enter your fleet size to instantly see your estimated FleetSentinel
              investment.
            </p>
          </motion.div>
          <PriceCalculator />
        </div>
      </section>

      {/* Volume rate table */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Full pricing schedule
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Every fleet size has a defined rate. The larger your fleet, the
              lower your per-vehicle cost.
            </p>
          </motion.div>
          <VolumeTable />
        </div>
      </section>

      {/* FAQ strip */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                q: "Are there setup or onboarding fees?",
                a: "No. Onboarding and integration setup are included in all plans at no extra charge.",
              },
              {
                q: "Can I switch plans as my fleet grows?",
                a: "Yes. Pricing adjusts automatically each billing cycle based on your active vehicle count.",
              },
              {
                q: "What counts as a 'vehicle'?",
                a: "Any asset with an active telematics data stream connected to FleetSentinel counts as one vehicle.",
              },
              {
                q: "Is there a free trial?",
                a: "We offer a 30-day pilot program for qualified fleets. Contact sales to get started.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <h3 className="font-semibold text-primary mb-1.5">{item.q}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need a custom quote?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              For fleets over 20,000 vehicles, enterprise agreements, or white-label
              partnerships — our team will build a tailored proposal.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors shadow-lg shadow-accent/25"
            >
              Talk to Sales
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
