"use client";

import { useMemo } from "react";
import {
  BREAKS,
  DAY_END,
  DAY_START,
  FORMATS,
  TALKS_BY_TRACK,
  TIME_SLOTS,
  TRACKS,
  formatTime,
  glassCardBackground,
  type Talk,
} from "@/lib/schedule";

const PX_PER_MIN = 2.05;
const HEADER_H = 62;
const INSET = 1;

function toY(min: number) {
  return HEADER_H + (min - DAY_START) * PX_PER_MIN;
}

export function FullGrid({ onOpen }: { onOpen: (talk: Talk) => void }) {
  const totalHeight = useMemo(() => HEADER_H + (DAY_END - DAY_START) * PX_PER_MIN, []);
  const labelMinutes = useMemo(() => {
    const marks = new Set<number>([...TIME_SLOTS, ...BREAKS.map((b) => b.start)]);
    return Array.from(marks).sort((a, b) => a - b);
  }, []);

  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card/40 p-3">
      <div className="relative" style={{ width: "max(900px, 100%)" }}>
        <div className="flex">
          {/* Gutter de horários */}
          <div className="relative w-14 shrink-0" style={{ height: totalHeight }}>
            {labelMinutes.map((min) => (
              <div
                key={min}
                className="absolute right-2 -translate-y-1/2 font-mono text-[10px] font-medium text-muted-foreground"
                style={{ top: toY(min) }}
              >
                {formatTime(min)}
              </div>
            ))}
          </div>

          {/* Colunas de trilhas */}
          {TRACKS.map((track) => (
            <div
              key={track.id}
              className="relative min-w-[150px] flex-1 border-l border-border/60"
              style={{ height: totalHeight }}
            >
              <div
                className="absolute inset-x-0 top-0 z-20 flex flex-col items-center justify-center gap-0.5 border-b border-border bg-card px-1"
                style={{ height: HEADER_H }}
              >
                <span className="text-base leading-none">{track.emoji}</span>
                <span className="text-[11px] font-bold leading-tight" style={{ color: track.color.bg }}>
                  {track.name}
                </span>
                {track.room && (
                  <span className="text-[9px] font-medium leading-tight text-muted-foreground">{track.room}</span>
                )}
              </div>

              <div
                className="absolute inset-x-0"
                style={{
                  top: HEADER_H,
                  height: totalHeight - HEADER_H,
                  backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent ${
                    15 * PX_PER_MIN - 1
                  }px, var(--border) ${15 * PX_PER_MIN - 1}px, var(--border) ${15 * PX_PER_MIN}px)`,
                }}
              />

              {TALKS_BY_TRACK[track.id].map((talk) => {
                const format = FORMATS[talk.format];
                const top = toY(talk.start) + INSET;
                const height = toY(talk.end) - toY(talk.start) - INSET * 2;
                return (
                  <button
                    key={talk.id}
                    type="button"
                    onClick={() => onOpen(talk)}
                    className="group absolute left-1 right-1 z-10 flex flex-col overflow-hidden rounded-lg border border-border p-2 text-left backdrop-blur-md transition-all duration-300 ease-out hover:z-30 hover:-translate-y-0.5 hover:scale-[1.04] hover:border-transparent"
                    style={{
                      top,
                      height,
                      background: glassCardBackground(format.color),
                      boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.06), 0 4px 10px -6px rgba(0,0,0,0.3)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `inset 0 1px 0 0 rgba(255,255,255,0.08), 0 14px 24px -10px ${format.color.bg}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `inset 0 1px 0 0 rgba(255,255,255,0.06), 0 4px 10px -6px rgba(0,0,0,0.3)`;
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[3px] opacity-90"
                      style={{ background: `linear-gradient(90deg, transparent, ${format.color.bg}, transparent)` }}
                    />
                    <span className="text-[9px] font-bold uppercase leading-none text-muted-foreground">
                      {formatTime(talk.start)}
                    </span>
                    <span className="mt-1 line-clamp-2 text-[11px] font-bold leading-tight transition-colors group-hover:text-primary">
                      {talk.title}
                    </span>
                    {talk.speakers.length > 0 && (
                      <span className="mt-auto line-clamp-1 pt-1 text-[11px] font-semibold leading-tight text-muted-foreground">
                        {talk.speakers.map((s) => s.name).join(" & ")}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Blocos de intervalo, sobrepostos a todas as trilhas */}
        <div className="pointer-events-none absolute inset-y-0 left-14 right-0">
          {BREAKS.map((b) => (
            <div
              key={b.id}
              className="absolute left-0 right-0 flex flex-col items-center justify-center gap-0.5 overflow-hidden rounded-md border border-border bg-card/90 px-2 text-center shadow-sm backdrop-blur-sm"
              style={{
                top: toY(b.start),
                height: Math.max(toY(b.end) - toY(b.start), 20),
              }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] opacity-70"
                style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
              />
              <span className="text-[11px] font-bold uppercase tracking-wide text-foreground/90">
                {b.label}
              </span>
              {b.sub && <span className="text-[9px] font-medium normal-case text-muted-foreground">{b.sub}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
