"use client";

import { useMemo, useState } from "react";
import { Lock, Sparkles } from "lucide-react";
import {
  TALKS,
  TALKS_BY_TRACK,
  TIME_SLOTS,
  TRACKS,
  formatTime,
  type Talk,
  type TrackId,
} from "@/lib/schedule";
import { cn } from "@/lib/utils";
import { FullGrid } from "./full-grid";
import { TalkCard } from "./talk-card";
import { TalkModal } from "./talk-modal";

type ViewMode = "dia" | "trilha" | "horario";

const VIEW_LABELS: { id: ViewMode; label: string }[] = [
  { id: "dia", label: "Dia completo" },
  { id: "trilha", label: "Por trilha" },
  { id: "horario", label: "Por horário" },
];

export function ScheduleView() {
  const [view, setView] = useState<ViewMode>("dia");
  const [selectedTrack, setSelectedTrack] = useState<TrackId>(TRACKS[0].id);
  const [selectedTime, setSelectedTime] = useState<number>(TIME_SLOTS[0]);
  const [activeTalk, setActiveTalk] = useState<Talk | null>(null);

  const talksBySlot = useMemo(() => {
    const map = new Map<number, Talk[]>();
    for (const talk of TALKS) {
      const list = map.get(talk.start) ?? [];
      list.push(talk);
      map.set(talk.start, list);
    }
    for (const list of map.values()) {
      list.sort((a, b) => TRACKS.findIndex((t) => t.id === a.track) - TRACKS.findIndex((t) => t.id === b.track));
    }
    return map;
  }, []);

  function goToTrack(track: TrackId) {
    setSelectedTrack(track);
    setView("trilha");
  }

  return (
    <section className="relative pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Legenda de trilhas — clicável */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {TRACKS.map((track) => (
            <button
              key={track.id}
              type="button"
              onClick={() => goToTrack(track.id)}
              className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderTopColor: track.color.bg, borderTopWidth: 2 }}
            >
              <span className="text-lg leading-none">{track.emoji}</span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold leading-tight" style={{ color: track.color.bg }}>
                  {track.name}
                </p>
                <p className="truncate text-[11px] leading-tight text-muted-foreground">{track.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Ações: Monte sua trilha */}
        <div className="mt-6 flex justify-end">
          <div className="group relative w-fit">
            <button
              type="button"
              disabled
              className="inline-flex h-11 cursor-not-allowed items-center gap-2 rounded-full border border-border bg-muted px-5 text-sm font-semibold text-muted-foreground"
            >
              <Sparkles className="size-4" />
              Monte sua trilha
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                <Lock className="size-2.5" />
                Em breve
              </span>
            </button>
            <div className="pointer-events-none absolute right-0 top-full z-10 mt-2 w-64 rounded-xl border border-border bg-background p-3 text-xs text-muted-foreground opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
              Em breve você vai poder fazer login no web app do evento e montar sua trilha personalizada de
              conteúdos.
            </div>
          </div>
        </div>

        {/* Título + tabs de visualização */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Grade completa</h2>

          <div className="inline-flex w-fit flex-wrap gap-1 rounded-full border border-border bg-card p-1">
            {VIEW_LABELS.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setView(v.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  view === v.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dia completo: grade real, com todas as trilhas e horários na tela */}
        {view === "dia" && <FullGrid onOpen={setActiveTalk} />}

        {/* Por trilha */}
        {view === "trilha" && (
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {TRACKS.map((track) => (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedTrack(track.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-bold transition-all",
                    selectedTrack === track.id
                      ? "border-transparent"
                      : "border-border bg-card text-muted-foreground hover:text-foreground",
                  )}
                  style={
                    selectedTrack === track.id
                      ? { background: track.color.bg, color: track.color.fg }
                      : undefined
                  }
                >
                  <span>{track.emoji}</span>
                  {track.name}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {TALKS_BY_TRACK[selectedTrack].map((talk) => (
                <TalkCard key={talk.id} talk={talk} onOpen={setActiveTalk} showTrack={false} />
              ))}
            </div>
          </div>
        )}

        {/* Por horário */}
        {view === "horario" && (
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={cn(
                    "rounded-full border px-3.5 py-2 font-mono text-sm font-semibold transition-all",
                    selectedTime === slot
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  {formatTime(slot)}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(talksBySlot.get(selectedTime) ?? []).map((talk) => (
                <TalkCard key={talk.id} talk={talk} onOpen={setActiveTalk} />
              ))}
            </div>
          </div>
        )}
      </div>

      {activeTalk && <TalkModal talk={activeTalk} onClose={() => setActiveTalk(null)} />}
    </section>
  );
}
