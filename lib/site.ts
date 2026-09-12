// ---------------------------------------------------------------------------
// Single source of truth for company details. Edit here — it updates the whole
// site (header, contact section, footer, SEO metadata).
// ---------------------------------------------------------------------------

export const site = {
  name: "Meridian iGaming",
  shortName: "Meridian",
  tagline: "We run the ops. You run the business.",

  // --- PLACEHOLDERS — replace before going live ---
  url: "https://meridian-igaming.vercel.app",
  email: "hello@meridian-igaming.com",
  phone: "+356 2000 0000",
  phoneHref: "+35620000000",
  linkedin: "https://www.linkedin.com/company/meridian-igaming",

  description:
    "Meridian is a specialist iGaming consultancy. We build, improve, and fully run operational functions — AML, Responsible Gambling, Fraud, Risk, Complaints, and Customer Support — for licensed operators and startups.",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Jurisdictions", href: "#jurisdictions" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
] as const;
