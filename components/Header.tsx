"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    // Let the overlay unmount before scrolling so the target lands correctly.
    requestAnimationFrame(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-base-900/75 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="section-shell flex h-16 items-center justify-between md:h-20">
          <a
            href="#hero"
            onClick={(e) => go(e, "#hero")}
            className="flex items-center gap-2.5"
            aria-label={`${site.name} home`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              {site.shortName}
              <span className="grad-text"> iGaming</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="group relative text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="hidden min-h-[44px] items-center rounded-full bg-brand-gradient px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.45)] transition-all hover:scale-105 hover:shadow-[0_0_32px_rgba(236,72,153,0.7)] sm:inline-flex"
            >
              Contact Us
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Gradient wash behind the overlay nav */}
            <div className="absolute inset-0 bg-base-950/95 backdrop-blur-2xl" />
            <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-neon-purple/30 blur-[100px]" />
            <div className="absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-neon-pink/25 blur-[100px]" />

            <nav className="relative flex h-full flex-col items-center justify-center gap-2 px-8">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.08 }}
                  className="w-full max-w-xs rounded-2xl px-6 py-4 text-center font-display text-2xl font-bold text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => go(e, "#contact")}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * navLinks.length + 0.08 }}
                className="mt-5 flex min-h-[56px] w-full max-w-xs items-center justify-center rounded-full bg-brand-gradient px-8 text-lg font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.6)]"
              >
                Book a Call
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
