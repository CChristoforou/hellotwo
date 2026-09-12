"use client";

import { Zap, Linkedin, Mail, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { handleAnchorClick } from "@/lib/scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-base-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-gradient opacity-60" />

      <div className="section-shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#hero"
              onClick={(e) => handleAnchorClick(e, "#hero")}
              className="flex items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                {site.shortName}
                <span className="grad-text"> iGaming</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              {site.tagline} Advisory, operations build-out and full
              outsourcing for licensed iGaming operators across 11
              jurisdictions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-zinc-300">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleAnchorClick(e, l.href)}
                    className="text-sm text-zinc-500 transition-colors hover:text-neon-pink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-zinc-300">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-neon-pink"
                >
                  <Mail className="h-4 w-4" /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-neon-pink"
                >
                  <Phone className="h-4 w-4" /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-neon-pink"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-500 transition-all hover:border-neon-purple/50 hover:text-neon-purple"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-500 transition-all hover:border-neon-pink/50 hover:text-neon-pink"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
