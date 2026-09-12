"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Hammer, Rocket, ArrowUpRight } from "lucide-react";
import TiltCard from "./TiltCard";
import SectionDivider from "./SectionDivider";
import {
  fadeInUp,
  flyFromLeft,
  flyFromBottom,
  flyFromRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { handleAnchorClick } from "@/lib/scroll";

const pillars = [
  {
    icon: ShieldCheck,
    num: "01",
    label: "Advise",
    title: "Advisory & Compliance",
    body: "AML, Responsible Gambling, Fraud, Risk, Complaints. We translate licence conditions into things your team can actually do — and keep you audit-ready all year, not just before an inspection.",
    bullets: ["AML & KYC frameworks", "RG & affordability checks", "Audit prep & gap analysis"],
    glow: "rgba(168,85,247,0.55)",
    entry: flyFromLeft,
  },
  {
    icon: Hammer,
    num: "02",
    label: "Build",
    title: "Operations Build-Out",
    body: "From zero, or from a mess. We draft the procedures, write the content, run the project, and stand up support teams that hold up when volume hits.",
    bullets: ["Policy & procedure drafting", "Support team setup", "Project management"],
    glow: "rgba(236,72,153,0.55)",
    entry: flyFromBottom,
  },
  {
    icon: Rocket,
    num: "03",
    label: "Operate",
    title: "Full Operational Outsourcing",
    body: "Hand us the whole thing. AML, support, RG, complaints, fraud, risk — owned and run by our specialists, with clear SLAs. You get your headspace back for growth and product.",
    bullets: ["End-to-end ownership", "Trained iGaming specialists", "SLA-backed delivery"],
    glow: "rgba(59,130,246,0.55)",
    entry: flyFromRight,
  },
];

export default function Pillars() {
  return (
    <>
      <SectionDivider variant="wave" />
      <section id="services" className="relative scroll-mt-24 py-20 sm:py-28">
        <div className="section-shell">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neon-pink sm:text-sm"
            >
              Three ways in
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              Pick your <span className="grad-text">depth</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-base text-zinc-400 sm:text-lg"
            >
              Advice when you need a steer. A build when you need it done. Full
              outsourcing when you'd rather never think about it again.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={p.entry}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <TiltCard className="group h-full">
                  <div
                    className="glass grad-border relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-shadow duration-300 sm:p-8"
                    style={
                      {
                        "--glow": p.glow,
                      } as React.CSSProperties
                    }
                  >
                    {/* corner bloom on hover */}
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: p.glow }}
                    />

                    <div className="mb-6 flex items-center justify-between">
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-white/[0.15] transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${p.glow}, rgba(255,255,255,0.04))`,
                        }}
                      >
                        <p.icon className="h-7 w-7 text-white" strokeWidth={1.9} />
                      </span>
                      <span className="font-display text-4xl font-extrabold text-white/10 transition-colors duration-300 group-hover:text-white/25">
                        {p.num}
                      </span>
                    </div>

                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-neon-cyan">
                      {p.label}
                    </p>
                    <h3 className="mb-4 font-display text-2xl font-bold text-white">
                      {p.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
                      {p.body}
                    </p>

                    <ul className="mb-7 space-y-2.5">
                      {p.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2.5 text-sm text-zinc-200"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: p.glow }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      onClick={(e) => handleAnchorClick(e, "#contact")}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-white transition-colors hover:text-neon-pink"
                    >
                      Talk to us
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
