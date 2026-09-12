# Meridian iGaming

A bold, high-energy marketing site for a specialist iGaming consultancy. Neon
gradients, aurora backgrounds, 3D tilt cards, and scroll-driven motion — built
with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide.

> **Placeholder branding.** The company name "Meridian iGaming" and all contact
> details are placeholders — see [Customising](#customising) below.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

## Deploying to Vercel

### Option A — Vercel dashboard (easiest)

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Click **Import** next to the `hellotwo` repository. (If you don't see it,
   hit **Adjust GitHub App Permissions** and grant access to the repo.)
3. Vercel auto-detects Next.js — **leave every setting at its default**:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
4. No environment variables are needed — the site has no backend or API keys.
5. Click **Deploy** and wait ~1–2 minutes.

You'll get a live URL like `https://hellotwo.vercel.app`. Every push to `main`
redeploys automatically; pull requests get their own preview URLs.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Accept the prompts, then ship to production:

```bash
vercel --prod
```

### After deploying

- **Custom domain:** Project → *Settings* → *Domains* → add your domain and
  follow the DNS instructions.
- **Update the canonical URL:** set `url` in `lib/site.ts` to your live domain so
  Open Graph tags and SEO metadata point at the right place, then push.

## Customising

Everything you'll want to change on day one lives in **`lib/site.ts`**:

| Field                  | Used by                                  |
| ---------------------- | ---------------------------------------- |
| `name` / `shortName`   | Header, footer, SEO title                 |
| `tagline`              | Footer                                    |
| `url`                  | Open Graph / canonical metadata           |
| `email`                | Contact card, footer, `mailto:` links     |
| `phone` / `phoneHref`  | Contact card, footer, `tel:` link         |
| `linkedin`             | Contact card, footer, social icons        |
| `description`          | Meta description, Open Graph              |

`navLinks` in the same file drives both the desktop nav and the mobile overlay.

Section copy lives in each component:

| Section            | File                            |
| ------------------ | ------------------------------- |
| Sticky header      | `components/Header.tsx`          |
| Hero               | `components/Hero.tsx`            |
| Three pillars      | `components/Pillars.tsx`         |
| 9-service grid     | `components/ServiceGrid.tsx`     |
| Jurisdictions (11) | `components/Jurisdictions.tsx`   |
| How we work        | `components/HowWeWork.tsx`       |
| Why us + stats     | `components/WhyUs.tsx`           |
| About              | `components/About.tsx`           |
| Contact form       | `components/Contact.tsx`         |
| Footer             | `components/Footer.tsx`          |

Shared pieces: `TiltCard` (3D hover), `SectionDivider` (wave / angled cuts),
`FloatingShapes` (ambient geometry), `CursorGlow` (desktop spotlight),
`ScrollProgress` (gradient top bar).

Colours and animation keyframes are defined in `tailwind.config.ts`; the
gradient-text, glass and gradient-border utilities live in `app/globals.css`.

## Contact form

**Visual only — there is no backend.** The form validates client-side (name,
valid email, message ≥ 10 chars) and shows a success state on submit. Nothing is
sent anywhere. To make it live, wire the `onSubmit` handler in
`components/Contact.tsx` to a form service (Formspree, Resend, a Next.js route
handler, etc.).

## Notes

- **Performance:** the cursor spotlight and floating shapes are desktop-only;
  heavy blur and tilt never mount on touch devices.
- **Accessibility:** `prefers-reduced-motion` disables the ambient loops, all tap
  targets are ≥ 44px, and form fields use real labels with `aria-invalid`.
- **Responsive:** built mobile-first from 375px; verified breakpoints at 375 /
  768 / 1024 / 1440. No horizontal scroll.
- **Self-contained:** no external API calls. Fonts are self-hosted by
  `next/font`.
