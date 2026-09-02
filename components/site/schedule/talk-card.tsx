"use client";

import { FORMATS, LEVEL_COLORS, TRACK_BY_ID, glassCardBackground, formatTimeRange, type Talk } from "@/lib/schedule";

export function TalkCard({
  talk,
  onOpen,
  showTrack = true,
}: {
  talk: Talk;
  onOpen: (talk: Talk) => void;
  showTrack?: boolean;
}) {
  const track = TRACK_BY_ID[talk.track];
  const format = FORMATS[talk.format];
  const level = talk.level ? LEVEL_COLORS[talk.level] : null;

  return (
    <button
      type="button"
      onClick={() => onOpen(talk)}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border p-4 text-left shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.025] hover:border-transparent focus-visible:-translate-y-1.5 focus-visible:scale-[1.025] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      style={{
        background: glassCardBackground(format.color),
        boxShadow: `0 1px 0 0 rgba(255,255,255,0.06) inset, 0 12px 30px -18px ${format.color.bg}66`,
      }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${format.color.bg}, transparent)` }}
      />

      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
        <span className="rounded-full px-2 py-0.5" style={{ background: format.color.bg, color: format.color.fg }}>
          {format.label}
        </span>
        {level && (
          <span className="rounded-full px-2 py-0.5" style={{ background: level.bg, color: level.fg }}>
            {talk.level}
          </span>
        )}
        <span className="ml-auto font-mono text-[11px] font-medium text-muted-foreground">
          {formatTimeRange(talk.start, talk.end)}
        </span>
      </div>

      <p className="mt-3 text-[15px] font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
        {talk.title}
      </p>

      {talk.speakers.length > 0 && (
        <p className="mt-1.5 text-sm text-muted-foreground">{talk.speakers.map((s) => s.name).join(" & ")}</p>
      )}

      {showTrack && (
        <div className="mt-auto flex items-center gap-1.5 border-t border-border/60 pt-3 text-[11px] font-semibold text-muted-foreground">
          <span
            className="inline-flex size-4 shrink-0 items-center justify-center rounded-full text-[9px]"
            style={{ background: `${track.color.bg}33` }}
          >
            {track.emoji}
          </span>
          <span style={{ color: track.color.bg }}>{track.name}</span>
          {track.room && <span className="text-muted-foreground">· {track.room}</span>}
        </div>
      )}
    </button>
  );
}
