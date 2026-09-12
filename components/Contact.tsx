"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, CheckCircle2 } from "lucide-react";
import SectionDivider from "./SectionDivider";
import {
  fadeInUp,
  flyFromLeft,
  flyFromRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { site } from "@/lib/site";

type Fields = { name: string; email: string; company: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (v: Fields): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Tell us your name.";
    if (!v.email.trim()) e.email = "We need an email to reply to.";
    else if (!EMAIL_RE.test(v.email)) e.email = "That doesn't look like a valid email.";
    if (!v.message.trim()) e.message = "Tell us what you need.";
    else if (v.message.trim().length < 10)
      e.message = "A bit more detail helps us give you a straight answer.";
    return e;
  };

  const update =
    (field: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((p) => ({ ...p, [field]: e.target.value }));
      if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
    };

  // Visual only — no backend. Validates, then shows a success state.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setSent(true);
  };

  const field =
    "w-full min-h-[52px] rounded-xl border bg-base-950/70 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-all focus:ring-2 focus:ring-neon-purple/70";

  const details = [
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      color: "#A855F7",
      external: false,
    },
    {
      icon: Phone,
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phoneHref}`,
      color: "#EC4899",
      external: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with us",
      href: site.linkedin,
      color: "#3B82F6",
      external: true,
    },
  ];

  return (
    <>
      <SectionDivider variant="angle" flip />
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[28rem] w-[28rem] animate-aurora rounded-full bg-neon-purple/25 blur-[130px]" />
          <div
            className="absolute bottom-0 right-1/4 h-[28rem] w-[28rem] animate-aurora rounded-full bg-neon-pink/25 blur-[130px]"
            style={{ animationDelay: "-7s" }}
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
              className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neon-yellow sm:text-sm"
            >
              Let&rsquo;s talk
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              Tell us where it <span className="grad-text">hurts</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-base text-zinc-300 sm:text-lg"
            >
              Failed audit? Drowning in complaints? Launching in a new market?
              Send us the short version — we&rsquo;ll come back within one
              business day.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-5">
            {/* Details */}
            <motion.div
              variants={flyFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-2"
            >
              <div className="glass grad-border h-full rounded-3xl p-7 sm:p-8">
                <h3 className="mb-6 font-display text-lg font-bold text-white">
                  Reach us direct
                </h3>
                <div className="space-y-3">
                  {details.map((d) => (
                    <a
                      key={d.label}
                      href={d.href}
                      target={d.external ? "_blank" : undefined}
                      rel={d.external ? "noopener noreferrer" : undefined}
                      className="group flex min-h-[60px] items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/10 transition-transform group-hover:scale-110"
                        style={{ background: `${d.color}25` }}
                      >
                        <d.icon
                          className="h-5 w-5"
                          style={{ color: d.color }}
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-zinc-500">
                          {d.label}
                        </span>
                        <span className="block truncate font-medium text-white">
                          {d.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-base-950/60 p-5">
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Prefer email? Hit us at{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold text-neon-pink underline-offset-2 hover:underline"
                    >
                      {site.email}
                    </a>
                    . NDA before anything sensitive — just ask.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={flyFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-3"
            >
              <form
                onSubmit={onSubmit}
                noValidate
                className="glass grad-border rounded-3xl p-7 sm:p-8"
              >
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-start gap-3 rounded-2xl border border-neon-cyan/40 bg-neon-cyan/10 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" />
                    <p className="text-sm text-zinc-100">
                      Thanks {values.name.split(" ")[0]} — message received.
                      We&rsquo;ll be in touch within one business day.
                    </p>
                  </motion.div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-zinc-200"
                    >
                      Name <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={values.name}
                      onChange={update("name")}
                      placeholder="Jane Doe"
                      aria-invalid={!!errors.name}
                      className={`${field} ${
                        errors.name
                          ? "border-red-400/70 focus:ring-red-400/60"
                          : "border-white/10"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-zinc-200"
                    >
                      Email <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={update("email")}
                      placeholder="jane@operator.com"
                      aria-invalid={!!errors.email}
                      className={`${field} ${
                        errors.email
                          ? "border-red-400/70 focus:ring-red-400/60"
                          : "border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-zinc-200"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={values.company}
                    onChange={update("company")}
                    placeholder="Your brand or operator name"
                    className={`${field} border-white/10`}
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-zinc-200"
                  >
                    Message <span className="text-neon-pink">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={update("message")}
                    placeholder="Licence(s), markets, and what's not working…"
                    aria-invalid={!!errors.message}
                    className={`w-full rounded-xl border bg-base-950/70 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-all focus:ring-2 focus:ring-neon-purple/70 ${
                      errors.message
                        ? "border-red-400/70 focus:ring-red-400/60"
                        : "border-white/10"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group mt-7 inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 text-base font-bold text-white shadow-[0_0_26px_rgba(168,85,247,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(236,72,153,0.75)]"
                >
                  Send it
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
