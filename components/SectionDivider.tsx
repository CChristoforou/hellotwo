"use client";

import { useId } from "react";

/**
 * Non-flat section transitions: an angled cut or a wave, with a gradient hairline.
 */
export default function SectionDivider({
  variant = "wave",
  flip = false,
}: {
  variant?: "wave" | "angle";
  flip?: boolean;
}) {
  // Unique per instance so multiple dividers never share a gradient def.
  const gradId = `divider-grad-${useId().replace(/:/g, "")}`;

  return (
    <div
      aria-hidden
      className={`pointer-events-none relative h-16 w-full overflow-hidden sm:h-24 ${
        flip ? "rotate-180" : ""
      }`}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#EC4899" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <path
          d={
            variant === "wave"
              ? "M0,60 C240,110 480,10 720,50 C960,90 1200,20 1440,55 L1440,100 L0,100 Z"
              : "M0,100 L1440,18 L1440,100 Z"
          }
          fill={`url(#${gradId})`}
          fillOpacity="0.08"
          stroke={`url(#${gradId})`}
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
