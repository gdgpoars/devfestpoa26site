"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
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
const GAP = 4;
const MIN_LABEL_GAP = 15;

function toY(min: number) {
  return HEADER_H + (min - DAY_START) * PX_PER_MIN;
}

export function FullGrid({ onOpen }: { onOpen: (talk: Talk) => void }) {
  const contentHeight = useMemo(() => (DAY_END - DAY_START) * PX_PER_MIN, []);
  const baseHeight = contentHeight + HEADER_H;
  const labelMinutes = useMemo(() => {
    const marks = new Set<number>([...TIME_SLOTS, ...BREAKS.map((b) => b.start)]);
    return Array.from(marks).sort((a, b) => a - b);
  }, []);

  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [tops, setTops] = useState<Record<string, number>>({});
  const [breakTops, setBreakTops] = useState<Record<string, number>>({});
  const [labelTops, setLabelTops] = useState<Record<number, number>>({});
  const [totalHeight, setTotalHeight] = useState(baseHeight);

  // Após o primeiro render, mede a altura real de cada card (que pode crescer além
  // do horário proporcional para caber título e palestrante por inteiro) e empilha os
  // seguintes da mesma trilha sem sobrepor. Horários (marcas do gutter) e intervalos
  // são tratados como pontos de sincronização: se alguma trilha "atrasar" por causa de
  // um card maior, a marca de horário/intervalo seguinte — e tudo depois dela — é
  // empurrada igualmente, então o gutter sempre reflete onde o conteúdo realmente está.
  useLayoutEffect(() => {
    function recompute() {
      const nextTops: Record<string, number> = {};
      const nextBreakTops: Record<string, number> = {};
      const nextLabelTops: Record<number, number> = {};
      const pointers: Record<string, number> = {};
      const cursor: Record<string, number> = {};
      TRACKS.forEach((t) => {
        pointers[t.id] = 0;
        cursor[t.id] = HEADER_H;
      });

      function placeTalksBefore(limit: number) {
        for (const track of TRACKS) {
          const list = TALKS_BY_TRACK[track.id];
          while (pointers[track.id] < list.length && list[pointers[track.id]].start < limit) {
            const talk = list[pointers[track.id]];
            const top = Math.max(toY(talk.start), cursor[track.id]);
            const el = cardRefs.current[talk.id];
            const height = el?.offsetHeight ?? Math.max(toY(talk.end) - toY(talk.start), 34);
            nextTops[talk.id] = top;
            cursor[track.id] = top + height + GAP;
            pointers[track.id]++;
          }
        }
      }

      const breakByStart = new Map(BREAKS.map((b) => [b.start, b]));
      for (const min of labelMinutes) {
        placeTalksBefore(min);
        const syncTop = Math.max(toY(min), ...TRACKS.map((t) => cursor[t.id]));
        nextLabelTops[min] = syncTop;

        const brk = breakByStart.get(min);
        if (brk) {
          const breakHeight = Math.max(toY(brk.end) - toY(brk.start), 20);
          nextBreakTops[brk.id] = syncTop;
          const breakBottom = syncTop + breakHeight + GAP;
          TRACKS.forEach((t) => {
            cursor[t.id] = Math.max(cursor[t.id], breakBottom);
          });
        }
      }
      placeTalksBefore(Infinity);

      // Garante espaço mínimo entre marcas de horário consecutivas: quando o atraso
      // acumulado "engole" mais de uma marca, elas colapsariam na mesma posição e
      // ficariam ilegíveis sobrepostas.
      let lastLabelTop = -Infinity;
      for (const min of labelMinutes) {
        const top = Math.max(nextLabelTops[min], lastLabelTop + MIN_LABEL_GAP);
        nextLabelTops[min] = top;
        lastLabelTop = top;
      }

      const maxBottom = Math.max(baseHeight, ...TRACKS.map((t) => cursor[t.id]));
      setTops(nextTops);
      setBreakTops(nextBreakTops);
      setLabelTops(nextLabelTops);
      setTotalHeight(maxBottom);
    }
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, [baseHeight, labelMinutes]);

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
                style={{ top: labelTops[min] ?? toY(min) }}
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
                const top = tops[talk.id] ?? toY(talk.start);
                const minHeight = Math.max(toY(talk.end) - toY(talk.start), 34);
                return (
                  <button
                    key={talk.id}
                    ref={(el) => {
                      cardRefs.current[talk.id] = el;
                    }}
                    type="button"
                    onClick={() => onOpen(talk)}
                    className="group absolute left-1 right-1 z-10 flex flex-col overflow-hidden rounded-lg border border-border p-2 text-left backdrop-blur-md transition-all duration-300 ease-out hover:z-30 hover:-translate-y-0.5 hover:scale-[1.04] hover:border-transparent"
                    style={{
                      top,
                      minHeight,
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
                    <span className="mt-1 text-[11px] font-bold leading-tight transition-colors group-hover:text-primary">
                      {talk.title}
                    </span>
                    {talk.speakers.length > 0 && (
                      <span className="mt-auto pt-1 text-[11px] font-semibold leading-tight text-muted-foreground">
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
              className="absolute left-0 right-0 flex flex-col items-center justify-center gap-0.5 rounded-md border border-dashed border-border/70 bg-muted/70 px-2 text-center backdrop-blur-sm"
              style={{
                top: breakTops[b.id] ?? toY(b.start),
                height: Math.max(toY(b.end) - toY(b.start), 20),
              }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {b.label}
              </span>
              {b.sub && <span className="text-[9px] font-normal normal-case text-muted-foreground/60">{b.sub}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
