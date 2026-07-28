"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export function Video() {
  const [loaded, setLoaded] = useState(false);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setLoaded(true);
    }
  }

  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Assista</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Não acredita? Dá uma olhada no que aconteceu na última edição.
          </h2>
        </div>
        <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-card">
          {loaded ? (
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/BFvfRo4isw4?autoplay=1&rel=0"
              title="Vídeo oficial do DevFestPoa25"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div
              className="flex h-full w-full cursor-pointer items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10"
              role="button"
              tabIndex={0}
              aria-label="Reproduzir vídeo do DevFestPoa25"
              onClick={() => setLoaded(true)}
              onKeyDown={handleKeyDown}
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="size-6 fill-current" />
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
