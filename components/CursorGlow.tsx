"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Spotlight that trails the mouse. Desktop / fine-pointer only — it is never
 * mounted on touch devices, where it would be dead weight.
 */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 180, damping: 26, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 180, damping: 26, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[65] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-screen blur-[90px] md:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.55)_0%,rgba(236,72,153,0.22)_45%,transparent_70%)]" />
    </motion.div>
  );
}
