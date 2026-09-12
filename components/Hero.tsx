"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { handleAnchorClick } from "@/lib/scroll";
import { spring } from "@/lib/motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: spring },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* --- Aurora / mesh background --- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-base-900" />
        <div className="absolute -left-40 -top-32 h-[42rem] w-[42rem] animate-aurora rounded-full bg-neon-purple/35 blur-[140px]" />
        <div
          className="absolute right-[-10rem] top-0 h-[38rem] w-[38rem] animate-aurora rounded-full bg-neon-pink/30 blur-[140px]"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute bottom-[-12rem] left-1/3 h-[40rem] w-[40rem] animate-aurora rounded-full bg-neon-blue/30 blur-[150px]"
          style={{ animationDelay: "-12s" }}
        />
        <div
          className="absolute bottom-10 right-1/4 h-[22rem] w-[22rem] animate-aurora rounded-full bg-neon-cyan/20 blur-[120px]"
          style={{ animationDelay: "-3s" }}
        />
        {/* tinted grid */}
        <div className="absolute inset-0 bg-grid-tint bg-grid [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_72%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-900" />
      </div>

      <div className="section-shell relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={item}
            className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-200 sm:text-sm"
          >
            <Sparkles className="h-4 w-4 text-neon-yellow" />
            iGaming ops specialists
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance font-display text-[34px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
          >
            We run the ops.
            <br />
            <span className="grad-text">You run the business.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-xl"
          >
            AML. Responsible Gambling. Fraud. Risk. Complaints. Support. We
            build it, fix it, or run the whole thing — across 11 regulated
            markets. You focus on growth.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="group inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-9 text-base font-bold text-white transition-transform hover:scale-[1.04] sm:w-auto md:animate-glow-pulse"
            >
              Book a Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              onClick={(e) => handleAnchorClick(e, "#services")}
              className="glass grad-border inline-flex min-h-[56px] w-full items-center justify-center rounded-full px-9 text-base font-bold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              See What We Do
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 sm:text-sm"
          >
            {["UKGC", "MGA", "SGA", "AGCO", "ONJN", "DGOJ", "GGL"].map((j) => (
              <span
                key={j}
                className="rounded-full border border-white/10 px-3 py-1.5"
              >
                {j}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
