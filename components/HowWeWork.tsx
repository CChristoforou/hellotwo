"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Hammer, Rocket } from "lucide-react";
import { fadeInUp, popIn, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Assess",
    body: "We audit what you've got against what your licence demands. Gaps in AML, RG, fraud, complaints and support — ranked by risk, not by what's easiest to fix.",
    color: "#A855F7",
  },
  {
    icon: Hammer,
    num: "02",
    title: "Build",
    body: "Procedures drafted. Content written. Tooling configured. Teams hired and trained. Everything documented so it survives an audit and a staff change.",
    color: "#EC4899",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Operate",
    body: "We run it day to day with clear SLAs — or hand you a function that works and step back. Your call, and you can change your mind later.",
    color: "#3B82F6",
  },
];

export default function HowWeWork() {
  const ref = useRef<HTMLDivElement>(null);
  // Draw the connecting line as the section scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "center 45%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="process" className="relative scroll-mt-24 py-20 sm:py-28">
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
            className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neon-yellow sm:text-sm"
          >
            How we work
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Assess. Build. <span className="grad-text">Operate.</span>
          </motion.h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Desktop: horizontal neon line */}
          <div className="absolute left-0 right-0 top-[42px] hidden h-[2px] bg-white/[0.08] lg:block">
            <motion.div
              style={{ scaleX: progress }}
              className="h-full w-full origin-left bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue shadow-[0_0_14px_rgba(236,72,153,0.9)]"
            />
          </div>

          {/* Mobile / tablet: vertical neon line */}
          <div className="absolute bottom-6 left-[42px] top-6 w-[2px] bg-white/[0.08] lg:hidden">
            <motion.div
              style={{ scaleY: progress }}
              className="h-full w-full origin-top bg-gradient-to-b from-neon-purple via-neon-pink to-neon-blue shadow-[0_0_14px_rgba(236,72,153,0.9)]"
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-12 lg:grid-cols-3 lg:gap-8"
          >
            {steps.map((s) => (
              <motion.div
                key={s.title}
                variants={popIn}
                className="relative flex gap-6 lg:flex-col lg:gap-0"
              >
                <div className="relative z-10 shrink-0">
                  <span
                    className="flex h-[86px] w-[86px] items-center justify-center rounded-3xl bg-base-800 ring-1 ring-white/[0.12]"
                    style={{ boxShadow: `0 0 34px ${s.color}55` }}
                  >
                    <s.icon
                      className="h-9 w-9"
                      style={{ color: s.color }}
                      strokeWidth={1.8}
                    />
                  </span>
                  <span
                    className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full font-display text-xs font-extrabold text-white"
                    style={{
                      background: s.color,
                      boxShadow: `0 0 18px ${s.color}`,
                    }}
                  >
                    {s.num}
                  </span>
                </div>

                <div className="lg:mt-7">
                  <h3 className="mb-3 font-display text-2xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-zinc-400">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
