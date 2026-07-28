"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TocItem = { id: string; title: string };

export function ConductProgress({ sections }: { sections: TocItem[] }) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sectionEls = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (doc.scrollTop / scrollable) * 100)) : 0);

      let current: string | null = sectionEls[0]?.id ?? null;
      for (const el of sectionEls) {
        if (el.getBoundingClientRect().top - 140 <= 0) current = el.id;
        else break;
      }
      setActiveId(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  return (
    <>
      <div className="fixed inset-x-0 top-16 z-40 h-1 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        aria-label="Sumário do Código de Conduta"
        className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-56 shrink-0 self-start overflow-y-auto pr-2 lg:block"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Sumário · {Math.round(progress)}%
        </p>
        <ol className="space-y-1 border-l border-border text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "-ml-px block border-l-2 py-1.5 pl-3 leading-snug transition-colors",
                  activeId === s.id
                    ? "border-primary font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
