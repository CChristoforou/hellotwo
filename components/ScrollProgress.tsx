"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue shadow-[0_0_12px_rgba(236,72,153,0.8)]"
      aria-hidden
    />
  );
}
