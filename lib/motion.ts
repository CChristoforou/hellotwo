import type { Variants } from "framer-motion";

// Mutable tuple (not `as const`) — Framer's Easing type rejects readonly tuples.
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Snappier curve for count-ups.
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.9,
} as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export const springUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: spring },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easeOut } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const fastStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export const flyFromLeft: Variants = {
  hidden: { opacity: 0, x: -70, rotate: -4 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const flyFromRight: Variants = {
  hidden: { opacity: 0, x: 70, rotate: 4 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const flyFromBottom: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: spring },
};

// Cards in the 9-up grid fly in from alternating directions.
export const gridEntry = [flyFromLeft, flyFromBottom, flyFromRight];

export const viewportOnce = { once: true, amount: 0.2 } as const;
