"use client";

import { useEffect, useState } from "react";
import { EVENT_TARGET_ISO } from "@/lib/content";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getRemaining() {
  const target = new Date(EVENT_TARGET_ISO).getTime();
  const diff = target - Date.now();
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

const UNITS: { key: "d" | "h" | "m" | "s"; label: string }[] = [
  { key: "d", label: "dias" },
  { key: "h", label: "horas" },
  { key: "m", label: "min" },
  { key: "s", label: "seg" },
];

export function Countdown() {
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setRemaining(getRemaining());
    const timer = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="border-b border-border bg-gradient-to-b from-primary/10 via-background to-background py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          A contagem começou
        </p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
          Faltam menos dias do que parece
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          31 de outubro de 2026 · 09h (horário de Brasília) · Faculdade Dom Bosco, Porto Alegre
        </p>

        {!mounted ? (
          <div className="mt-8 h-24 sm:h-32" aria-hidden="true" />
        ) : remaining ? (
          <div
            className="mt-8 grid grid-cols-4 gap-3 sm:gap-6"
            role="timer"
            aria-live="polite"
            aria-atomic="true"
          >
            {UNITS.map((u) => (
              <div
                key={u.key}
                className="rounded-2xl border border-border bg-card px-2 py-5 sm:px-4 sm:py-8"
              >
                <span className="block font-mono text-4xl font-extrabold tabular-nums text-gradient sm:text-6xl">
                  {pad(remaining[u.key])}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-wide text-muted-foreground sm:text-sm">
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-8 text-lg font-semibold">
            🎃 O DevFestPoa26 está rolando agora mesmo!
          </p>
        )}
      </div>
    </section>
  );
}
