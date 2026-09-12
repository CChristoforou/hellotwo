"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  fadeInUp,
  flyFromLeft,
  flyFromRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

const badges = [
  ["Independent", "No software to upsell you"],
  ["Hands-on", "We operate, not just advise"],
  ["Discreet", "NDA-first, always"],
  ["Regulator-ready", "Built to survive an audit"],
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={flyFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neon-orange sm:text-sm">
              Who we are
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Built by people who&rsquo;ve{" "}
              <span className="grad-text">actually run this</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300">
              <p>
                We&rsquo;re iGaming specialists. Not a big-four firm with a
                gambling practice bolted on the side. Every person here has
                built or run the operational functions that keep licensed
                operators live and players safe.
              </p>
              <p>
                That means we know the difference between a policy that reads
                well and one that holds up when the UKGC asks for evidence. We
                know what a real SAR looks like, why your affordability
                thresholds keep triggering the wrong players, and how to fix it
                without torching conversion.
              </p>
              <p className="font-semibold text-white">
                No waffle. No 90-slide decks. Just operations that work.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={flyFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass grad-border relative rounded-3xl p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon-pink/25 blur-3xl" />
            <Quote className="mb-6 h-10 w-10 text-neon-purple" />
            <p className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
              &ldquo;Our job is to take the operational weight off operators —
              so they can build a product players love, while we keep them
              compliant and their players protected.&rdquo;
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-9 grid grid-cols-2 gap-5 border-t border-white/10 pt-8"
            >
              {badges.map(([t, d]) => (
                <motion.div key={t} variants={fadeInUp}>
                  <p className="font-display text-sm font-bold text-neon-cyan">
                    {t}
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-400">{d}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
