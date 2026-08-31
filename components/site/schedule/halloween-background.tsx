"use client";

const ICONS = [
  { emoji: "🎃", top: "6%", left: "6%", size: "2.4rem", duration: "9s", delay: "0s" },
  { emoji: "👻", top: "14%", left: "88%", size: "2rem", duration: "7.5s", delay: "0.6s" },
  { emoji: "🦇", top: "34%", left: "18%", size: "1.6rem", duration: "6.5s", delay: "1.1s" },
  { emoji: "🕸️", top: "4%", left: "48%", size: "2.2rem", duration: "11s", delay: "0.3s" },
  { emoji: "🦇", top: "58%", left: "92%", size: "1.4rem", duration: "8s", delay: "1.6s" },
  { emoji: "👻", top: "72%", left: "8%", size: "1.8rem", duration: "9.5s", delay: "2s" },
  { emoji: "🎃", top: "82%", left: "70%", size: "1.6rem", duration: "8.5s", delay: "0.8s" },
  { emoji: "🕷️", top: "24%", left: "64%", size: "1.3rem", duration: "6s", delay: "1.4s" },
  { emoji: "🦇", top: "48%", left: "40%", size: "1.5rem", duration: "7s", delay: "2.4s" },
  { emoji: "🕸️", top: "88%", left: "30%", size: "1.8rem", duration: "10s", delay: "0.5s" },
  { emoji: "🌕", top: "10%", left: "68%", size: "2rem", duration: "12s", delay: "1.9s" },
  { emoji: "🕯️", top: "64%", left: "54%", size: "1.4rem", duration: "8s", delay: "2.8s" },
];

const GLOWS = [
  { color: "#ff8a3d", top: "-10%", left: "-8%", size: "42vw", duration: "24s", delay: "0s" },
  { color: "#b18cff", top: "20%", left: "70%", size: "38vw", duration: "28s", delay: "3s" },
  { color: "#45d6c9", top: "70%", left: "10%", size: "34vw", duration: "26s", delay: "6s" },
  { color: "#ff6a88", top: "55%", left: "60%", size: "30vw", duration: "20s", delay: "1.5s" },
];

export function HalloweenBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {GLOWS.map((glow, i) => (
        <span
          key={i}
          className="animate-drift absolute rounded-full blur-3xl"
          style={{
            top: glow.top,
            left: glow.left,
            width: glow.size,
            height: glow.size,
            background: `radial-gradient(circle, ${glow.color}33 0%, transparent 70%)`,
            animationDuration: glow.duration,
            animationDelay: glow.delay,
          }}
        />
      ))}
      {ICONS.map((icon, i) => (
        <span
          key={i}
          className="animate-float-soft absolute select-none opacity-[0.14] blur-[0.3px]"
          style={{
            top: icon.top,
            left: icon.left,
            fontSize: icon.size,
            animationDuration: icon.duration,
            animationDelay: icon.delay,
          }}
        >
          {icon.emoji}
        </span>
      ))}
    </div>
  );
}
