"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
  badge?: string;
  badgeColor?: string;
}

const screenshots: Screenshot[] = [
  {
    src: "/screenshots/fleet-dashboard.png",
    alt: "FleetSentinel Driver Risk Dashboard showing trip history, safety scores, and real-time map",
    caption: "Driver Risk Dashboard",
    badge: "Live Platform",
    badgeColor: "bg-accent",
  },
  {
    src: "/screenshots/collision-report.png",
    alt: "FleetSentinel Collision Analysis & Reconstruction report with speed graph and incident details",
    caption: "Collision Analysis & Reconstruction",
    badge: "Incident Report",
    badgeColor: "bg-danger",
  },
];

function ScreenshotCard({ shot, index }: { shot: Screenshot; index: number }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      className="group flex flex-col"
    >
      {/* Image frame */}
      <div className="relative overflow-hidden rounded-xl border border-border shadow-xl shadow-primary/10 bg-primary/5">
        {/* Badge */}
        {shot.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`${shot.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow`}
            >
              {shot.badge}
            </span>
          </div>
        )}

        {/* Placeholder shown while image loads or on error */}
        {(!loaded || error) && (
          <div
            className={`w-full aspect-[16/10] flex items-center justify-center ${
              index === 0 ? "bg-primary" : "bg-surface-dark"
            }`}
          >
            <div className="text-center px-6">
              <div
                className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                  index === 0 ? "bg-accent/20" : "bg-border"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${index === 0 ? "text-accent-light" : "text-muted"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M3.75 21V7.5A2.25 2.25 0 016 5.25h12A2.25 2.25 0 0120.25 7.5V21"
                  />
                </svg>
              </div>
              <p
                className={`text-xs font-medium ${
                  index === 0 ? "text-white/40" : "text-muted"
                }`}
              >
                {error
                  ? `Place screenshot at /public/screenshots/${index === 0 ? "fleet-dashboard" : "collision-report"}.png`
                  : "Loading…"}
              </p>
            </div>
          </div>
        )}

        {/* Actual screenshot */}
        <div
          className={`transition-transform duration-500 group-hover:scale-[1.02] ${
            !loaded ? "sr-only" : ""
          }`}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={1280}
            height={800}
            className="w-full h-auto block"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            priority={index === 0}
          />
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Caption */}
      <div className="mt-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
        <p className="text-sm font-semibold text-primary">{shot.caption}</p>
      </div>
    </motion.div>
  );
}

export default function ProductScreenshots() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-4">
            Platform Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            See FleetSentinel in action
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From real-time driver risk dashboards to court-ready collision
            reconstruction reports — built for both fleet operators and
            insurance professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {screenshots.map((shot, i) => (
            <ScreenshotCard key={shot.src} shot={shot} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
