"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  HeartHandshake,
  Headphones,
  MessageSquareWarning,
  ShieldAlert,
  Activity,
  PenLine,
  FileText,
  ClipboardList,
} from "lucide-react";
import {
  fadeInUp,
  gridEntry,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

const services = [
  {
    icon: FileSearch,
    title: "AML / KYC Compliance",
    desc: "Risk-based onboarding, ongoing monitoring, SARs and source-of-funds done properly.",
    color: "#A855F7",
  },
  {
    icon: HeartHandshake,
    title: "Responsible Gambling",
    desc: "RG frameworks, affordability checks and safer-gambling interactions that actually land.",
    color: "#EC4899",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Set it up or hand it over. Multi-channel teams, trained on your product and tone.",
    color: "#3B82F6",
  },
  {
    icon: MessageSquareWarning,
    title: "Complaints Handling",
    desc: "Structured, regulator-aligned complaints and ADR that close cleanly.",
    color: "#06D6A0",
  },
  {
    icon: ShieldAlert,
    title: "Fraud Prevention",
    desc: "Bonus abuse, multi-accounting, payment fraud and chargebacks — caught early.",
    color: "#F97316",
  },
  {
    icon: Activity,
    title: "Risk Management",
    desc: "Risk appetite, rules and thresholds tuned so you block the bad, not the good.",
    color: "#FACC15",
  },
  {
    icon: PenLine,
    title: "Content Writing",
    desc: "T&Cs, player comms and internal docs. Clear, on-brand, compliant.",
    color: "#A855F7",
  },
  {
    icon: FileText,
    title: "Procedure & Policy Drafting",
    desc: "Audit-ready documentation mapped directly to your licence conditions.",
    color: "#EC4899",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Migrations, go-lives and operational change, delivered on schedule.",
    color: "#3B82F6",
  },
];

export default function ServiceGrid() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-tint bg-dots opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      <div className="section-shell">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan sm:text-sm"
          >
            The full stack
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Nine things we <span className="grad-text">do better</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={gridEntry[i % 3]}
              className="group relative"
            >
              <div className="glass grad-border relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2">
                {/* neon bloom */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: s.color }}
                />

                <span
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}22` }}
                >
                  <s.icon
                    className="h-6 w-6"
                    style={{ color: s.color }}
                    strokeWidth={1.9}
                  />
                </span>

                <h3 className="mb-2 font-display text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
