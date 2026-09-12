"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const jurisdictions = [
  { flag: "🇬🇧", country: "UK", body: "UKGC", full: "UK Gambling Commission" },
  { flag: "🇲🇹", country: "Malta", body: "MGA", full: "Malta Gaming Authority" },
  { flag: "🇸🇪", country: "Sweden", body: "SGA", full: "Spelinspektionen" },
  { flag: "🇩🇰", country: "Denmark", body: "DGA", full: "Spillemyndigheden" },
  {
    flag: "🇨🇦",
    country: "Ontario",
    body: "AGCO",
    full: "AGCO / iGaming Ontario",
  },
  { flag: "🇷🇴", country: "Romania", body: "ONJN", full: "Oficiul Naţional ONJN" },
  { flag: "🇬🇷", country: "Greece", body: "HGC", full: "Hellenic Gaming Commission" },
  { flag: "🇪🇸", country: "Spain", body: "DGOJ", full: "Dirección General DGOJ" },
  { flag: "🇩🇪", country: "Germany", body: "GGL", full: "Gemeinsame Glücksspielbehörde" },
  { flag: "🇲🇽", country: "Mexico", body: "SEGOB", full: "Secretaría de Gobernación" },
  {
    flag: "🇨🇼",
    country: "Curaçao",
    body: "Curaçao eGaming",
    full: "Curaçao Gaming Authority",
  },
];

// Each badge pops in and flashes its neon ring as it lands.
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    boxShadow: [
      "0 0 0px rgba(236,72,153,0)",
      "0 0 28px rgba(236,72,153,0.75)",
      "0 0 0px rgba(236,72,153,0)",
    ],
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 18,
      boxShadow: { duration: 0.9, times: [0, 0.45, 1] },
    },
  },
};

export default function Jurisdictions() {
  return (
    <>
      <SectionDivider variant="angle" />
      <section
        id="jurisdictions"
        className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-neon-purple/15 blur-[130px]" />

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
              className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-neon-orange sm:text-sm"
            >
              <Globe2 className="h-4 w-4" />
              Where we operate
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              <span className="grad-text">11 jurisdictions.</span>
              <br />
              One team that knows them all.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-base text-zinc-400 sm:text-lg"
            >
              Every regulator asks different questions. We've answered them —
              from UKGC affordability to MGA player funds to Curaçao's new
              licensing regime.
            </motion.p>
          </motion.div>

          {/* Badge grid — lights up one by one */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {jurisdictions.map((j) => (
              <motion.div
                key={j.country}
                variants={badgeVariants}
                className="glass grad-border group flex min-h-[76px] items-center gap-4 rounded-2xl px-5 py-4 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="text-3xl leading-none" aria-hidden>
                  {j.flag}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-base font-bold text-white">
                    {j.country}
                  </span>
                  <span className="block truncate text-sm text-zinc-400 transition-colors group-hover:text-neon-pink">
                    {j.body}
                  </span>
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Infinite marquee strip */}
          <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee gap-3">
              {[...jurisdictions, ...jurisdictions].map((j, i) => (
                <span
                  key={`${j.country}-${i}`}
                  className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-300"
                >
                  <span aria-hidden>{j.flag}</span>
                  {j.full}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
