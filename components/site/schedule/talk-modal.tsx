"use client";

import { useEffect } from "react";
import { Linkedin, X } from "lucide-react";
import { FORMATS, LEVEL_COLORS, TRACK_BY_ID, formatTimeRange, type Talk } from "@/lib/schedule";

export function TalkModal({ talk, onClose }: { talk: Talk; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const track = TRACK_BY_ID[talk.track];
  const format = FORMATS[talk.format];
  const level = talk.level ? LEVEL_COLORS[talk.level] : null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="talk-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className="rounded-full px-2.5 py-1 text-xs font-bold"
              style={{ background: format.color.bg, color: format.color.fg }}
            >
              {format.label}
            </span>
            {level && (
              <span
                className="rounded-full px-2.5 py-1 text-xs font-bold"
                style={{ background: level.bg, color: level.fg }}
              >
                {talk.level}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="-mr-1 -mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <h3 id="talk-modal-title" className="mt-3 text-xl font-extrabold leading-snug sm:text-2xl">
          {talk.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 font-bold" style={{ color: track.color.bg }}>
            <span
              className="inline-flex size-5 items-center justify-center rounded-full text-[10px]"
              style={{ background: `${track.color.bg}33` }}
            >
              {track.emoji}
            </span>
            {track.name}
            {track.room && <span className="font-normal text-muted-foreground">· {track.room}</span>}
          </span>
          <span className="font-mono text-xs">{formatTimeRange(talk.start, talk.end)}</span>
        </div>

        {talk.speakers.length > 0 && (
          <div className="mt-5 rounded-xl border border-border bg-muted/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {talk.speakers.length > 1 ? "Palestrantes" : "Palestrante"}
            </p>
            <div className="mt-2 space-y-2.5">
              {talk.speakers.map((speaker) => (
                <div key={speaker.name} className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-base font-bold">{speaker.name}</p>
                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110"
                    >
                      <Linkedin className="size-3.5" />
                      LinkedIn
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {talk.summary && (
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Resumo</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{talk.summary}</p>
          </div>
        )}

        {talk.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {talk.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
