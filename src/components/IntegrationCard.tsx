"use client";

import { motion } from "framer-motion";

interface IntegrationCardProps {
  name: string;
  description: string;
  color: string;
  initial: string;
  delay?: number;
}

export default function IntegrationCard({
  name,
  description,
  color,
  initial,
  delay = 0,
}: IntegrationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-4 p-5 bg-white rounded-xl border border-border hover:border-accent/20 hover:shadow-md transition-all duration-300"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0"
        style={{ backgroundColor: color }}
      >
        {initial}
      </div>
      <div>
        <h3 className="font-semibold text-primary">{name}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </motion.div>
  );
}
