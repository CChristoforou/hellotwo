"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Trophy, Globe2, Blocks, Clock } from "lucide-react";
import SectionDivider from "./SectionDivider";
import {
  easeOutExpo,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

const stats = [
  { value: 14, suffix: "+", label: "Years in regulated markets", icon: Trophy },
  { value: 11, suffix: "", label: "Jurisdictions covered", icon: Globe2 },
  { value: 60, suffix: "+", label: "Projects delivered", icon: Blocks },
  { value: 24, suffix: "/7", label: "Outsourced coverage", icon: Clock },
];

const reasons = [
  {
    title: "We've sat in your chair",
    body: "Our team has held the licences, faced the audits and answered the regulator. We're not reading this out of a textbook.",
  },
  {
    title: "Multi-jurisdictional by default",
    body: "UKGC, MGA, SGA, AGCO, ONJN, DGOJ, GGL and more. We know where the rules diverge — and where they quietly don't.",
  },
  {
    title: "Scale us up or down",
    body: "Advisory this quarter, full outsourcing next. No lock-in, no bloated retainers for work you don't need.",
  },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: easeOutExpo,
      onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => setLanded(true),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <motion.span
      ref={ref}
      animate={
        landed
          ? {
              // drop-shadow (not text-shadow) — the number is gradient-clipped text
              filter: [
                "drop-shadow(0 0 0px rgba(236,72,153,0))",
                "drop-shadow(0 0 22px rgba(236,72,153,0.95))",
                "drop-shadow(0 0 0px rgba(236,72,153,0))",
              ],
              scale: [1, 1.12, 1],
            }
          : {}
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="inline-block"
    >
      {n}
      {suffix}
    </motion.span>
  );
}

export default function WhyUs() {
  return (
    <>
      <SectionDivider variant="wave" />
      <section
        id="why-us"
        className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
      >
        {/* Vibrant gradient wash for this section */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-neon-pink/10 to-neon-blue/20" />
          <div className="absolute -left-20 top-0 h-96 w-96 animate-aurora rounded-full bg-neon-purple/25 blur-[120px]" />
          <div
            className="absolute -right-20 bottom-0 h-96 w-96 animate-aurora rounded-full bg-neon-blue/25 blur-[120px]"
            style={{ animationDelay: "-8s" }}
          />
        </div>

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
              Why us
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              Insiders. <span className="grad-text">Not generalists.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeInUp}
                className="glass grad-border rounded-2xl p-6 text-center"
              >
                <s.icon className="mx-auto mb-3 h-6 w-6 text-neon-pink" />
                <div className="grad-text font-display text-4xl font-extrabold sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-xs text-zinc-300 sm:text-sm">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 md:grid-cols-3"
          >
            {reasons.map((r) => (
              <motion.div
                key={r.title}
                variants={fadeInUp}
                className="glass grad-border rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <h3 className="mb-3 font-display text-lg font-bold text-white">
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {r.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
