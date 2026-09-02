"use client";

import { useMemo, useState } from "react";
import { Lock, Search, Sparkles, X } from "lucide-react";
import {
  TALKS,
  TALKS_BY_TRACK,
  TIME_SLOTS,
  TRACKS,
  TRACK_BY_ID,
  TRACK_TAGS,
  formatTime,
  talkMatchesQuery,
  type Talk,
  type TrackId,
} from "@/lib/schedule";
import { cn } from "@/lib/utils";
import { FullGrid } from "./full-grid";
import { TalkCard } from "./talk-card";
import { TalkModal } from "./talk-modal";

type ViewMode = "dia" | "trilha" | "horario" | "tags";

const VIEW_LABELS: { id: ViewMode; label: string }[] = [
  { id: "dia", label: "Dia completo" },
  { id: "trilha", label: "Por trilha" },
  { id: "horario", label: "Por horário" },
  { id: "tags", label: "Buscar por tags" },
];

export function ScheduleView() {
  const [view, setView] = useState<ViewMode>("dia");
  const [selectedTrack, setSelectedTrack] = useState<TrackId>(TRACKS[0].id);
  const [selectedTime, setSelectedTime] = useState<number>(TIME_SLOTS[0]);
  const [activeTalk, setActiveTalk] = useState<Talk | null>(null);
  const [tagQuery, setTagQuery] = useState("");

  const tagResults = useMemo(() => {
    if (!tagQuery.trim()) return [];
    return TALKS.filter((talk) => talkMatchesQuery(talk, tagQuery)).sort((a, b) => a.start - b.start);
  }, [tagQuery]);

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
              className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderTopColor: track.color.bg, borderTopWidth: 2 }}
            >
              <span className="text-lg leading-none">{track.emoji}</span>
              <div className="min-w-0">
                <p className="text-xs font-bold leading-tight" style={{ color: track.color.bg }}>
                  {track.name}
                </p>
                {track.room && (
                  <p className="text-[10px] font-semibold leading-tight text-muted-foreground">{track.room}</p>
                )}
                <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{track.description}</p>
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

            {(() => {
              const track = TRACK_BY_ID[selectedTrack];
              const tags = TRACK_TAGS[selectedTrack];
              return (
                <div
                  className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-border bg-card/60 px-4 py-3 text-sm"
                  style={{ borderLeft: `3px solid ${track.color.bg}` }}
                >
                  {track.room && (
                    <span className="font-bold" style={{ color: track.color.bg }}>
                      {track.emoji} {track.room}
                    </span>
                  )}
                  <span className="text-muted-foreground">{track.description}</span>
                  {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Buscar por tags */}
        {view === "tags" && (
          <div className="mt-6">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={tagQuery}
                onChange={(e) => setTagQuery(e.target.value)}
                placeholder="Buscar por tag, assunto, trilha ou palavra-chave..."
                className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-11 text-sm font-medium outline-none transition-colors focus:border-primary"
              />
              {tagQuery && (
                <button
                  type="button"
                  onClick={() => setTagQuery("")}
                  aria-label="Limpar busca"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {TRACKS.filter((t) => TRACK_TAGS[t.id]).map((track) => (
                <div key={track.id} className="flex flex-wrap items-center gap-1.5">
                  <span className="mr-0.5 text-xs font-bold" style={{ color: track.color.bg }}>
                    {track.emoji} {track.name}
                  </span>
                  {TRACK_TAGS[track.id]!.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setTagQuery(tag)}
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-xs font-semibold transition-all",
                        tagQuery.trim().toLowerCase() === tag.toLowerCase()
                          ? "border-transparent"
                          : "border-border bg-card text-muted-foreground hover:text-foreground",
                      )}
                      style={
                        tagQuery.trim().toLowerCase() === tag.toLowerCase()
                          ? { background: track.color.bg, color: track.color.fg }
                          : undefined
                      }
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-6">
              {tagQuery.trim() === "" ? (
                <p className="rounded-xl border border-dashed border-border bg-card/50 p-6 text-center text-sm text-muted-foreground">
                  Digite um termo ou escolha uma tag acima para encontrar conteúdos.
                </p>
              ) : tagResults.length === 0 ? (
                <p className="rounded-xl border border-dashed border-border bg-card/50 p-6 text-center text-sm text-muted-foreground">
                  Nenhum conteúdo encontrado para &ldquo;{tagQuery}&rdquo;.
                </p>
              ) : (
                <>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {tagResults.length} conteúdo{tagResults.length > 1 ? "s" : ""} encontrado
                    {tagResults.length > 1 ? "s" : ""}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {tagResults.map((talk) => (
                      <TalkCard key={talk.id} talk={talk} onOpen={setActiveTalk} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {activeTalk && <TalkModal talk={activeTalk} onClose={() => setActiveTalk(null)} />}
    </section>
  );
}
