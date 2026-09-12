"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Holographic 3D tilt wrapper. Tracks the pointer across the card and maps it
 * to rotateX/rotateY, plus a moving sheen. Tilt is pointer-driven only, so it
 * simply never activates on touch devices.
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 9,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const config = { stiffness: 200, damping: 22, mass: 0.6 };
  const rotateX = useSpring(
    useTransform(py, [0, 1], [intensity, -intensity]),
    config
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-intensity, intensity]),
    config
  );

  const sheenX = useTransform(px, [0, 1], ["0%", "100%"]);
  const sheenY = useTransform(py, [0, 1], ["0%", "100%"]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative [perspective:1100px] ${className}`}
    >
      {children}
      {/* pointer-following sheen */}
      <motion.div
        aria-hidden
        style={{
          background: useTransform(
            [sheenX, sheenY],
            ([x, y]) =>
              `radial-gradient(320px circle at ${x} ${y}, rgba(255,255,255,0.10), transparent 60%)`
          ),
        }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
      />
    </motion.div>
  );
}
