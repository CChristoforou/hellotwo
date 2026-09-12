"use client";

/**
 * Ambient geometry drifting behind the whole page. Purely decorative, fixed
 * position, and hidden on small screens to keep mobile scrolling smooth.
 */

type Shape = {
  kind: "ring" | "circle" | "hex";
  className: string;
  size: number;
  color: string;
  delay: string;
  duration: string;
};

const shapes: Shape[] = [
  {
    kind: "ring",
    className: "left-[6%] top-[14%]",
    size: 150,
    color: "#A855F7",
    delay: "0s",
    duration: "18s",
  },
  {
    kind: "hex",
    className: "right-[9%] top-[26%]",
    size: 110,
    color: "#EC4899",
    delay: "-4s",
    duration: "22s",
  },
  {
    kind: "circle",
    className: "left-[16%] top-[62%]",
    size: 80,
    color: "#3B82F6",
    delay: "-8s",
    duration: "20s",
  },
  {
    kind: "ring",
    className: "right-[14%] top-[72%]",
    size: 190,
    color: "#06D6A0",
    delay: "-2s",
    duration: "26s",
  },
  {
    kind: "hex",
    className: "left-[46%] top-[42%]",
    size: 90,
    color: "#F97316",
    delay: "-11s",
    duration: "24s",
  },
];

function ShapeSvg({ kind, size, color }: Pick<Shape, "kind" | "size" | "color">) {
  if (kind === "circle") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" fill={color} fillOpacity="0.07" />
      </svg>
    );
  }
  if (kind === "ring") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke={color}
          strokeOpacity="0.28"
          strokeWidth="1.5"
        />
        <circle
          cx="50"
          cy="50"
          r="32"
          stroke={color}
          strokeOpacity="0.16"
          strokeWidth="1"
        />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <polygon
        points="50,3 93,27 93,73 50,97 7,73 7,27"
        stroke={color}
        strokeOpacity="0.3"
        strokeWidth="1.5"
        fill={color}
        fillOpacity="0.05"
      />
    </svg>
  );
}

export default function FloatingShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block"
    >
      {shapes.map((s, i) => (
        <div
          key={i}
          className={`absolute animate-drift blur-[1px] ${s.className}`}
          style={{ animationDelay: s.delay, animationDuration: s.duration }}
        >
          <ShapeSvg kind={s.kind} size={s.size} color={s.color} />
        </div>
      ))}
    </div>
  );
}
