import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#050509",
          900: "#0A0A0F",
          800: "#12121C",
          700: "#1B1B2B",
        },
        neon: {
          purple: "#A855F7",
          pink: "#EC4899",
          blue: "#3B82F6",
          cyan: "#06D6A0",
          orange: "#F97316",
          yellow: "#FACC15",
        },
      },
      fontFamily: {
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-tint":
          "linear-gradient(to right, rgba(168,85,247,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.07) 1px, transparent 1px)",
        "dot-tint": "radial-gradient(rgba(236,72,153,0.14) 1px, transparent 1px)",
        "brand-gradient":
          "linear-gradient(90deg, #A855F7 0%, #EC4899 50%, #3B82F6 100%)",
      },
      backgroundSize: {
        grid: "64px 64px",
        dots: "22px 22px",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(6%,-4%,0) scale(1.12)" },
          "66%": { transform: "translate3d(-5%,5%,0) scale(0.94)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-26px) rotate(180deg)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 24px rgba(168,85,247,0.55), 0 0 48px rgba(236,72,153,0.25)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(236,72,153,0.75), 0 0 80px rgba(59,130,246,0.45)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        drift: "drift 16s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.8s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
