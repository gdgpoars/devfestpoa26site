"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SYMPLA_URL } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-bold" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-8 shrink-0">
            <circle cx="20" cy="20" r="18" fill="#14161f" stroke="#ff7a29" strokeWidth="1.4" />
            <circle cx="14" cy="17" r="4" fill="#ff7a29" />
            <circle cx="26" cy="17" r="4" fill="#9784ff" />
            <path d="M12 25c3 3 13 3 16 0" stroke="#ffb37a" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="flex flex-col whitespace-nowrap leading-tight">
            DevFestPoa26
            <small className="hidden text-xs font-normal text-muted-foreground xl:block">
              GDG Porto Alegre × GDG Caxias do Sul
            </small>
          </span>
        </Link>

        <nav className="hidden flex-nowrap items-center gap-4 whitespace-nowrap text-sm font-medium xl:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(255,122,41,0.35)] transition-all hover:brightness-110 xl:inline-flex"
        >
          Quero meu ingresso
        </a>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground xl:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <nav
        className={cn(
          "flex flex-col gap-1 border-t border-border px-4 pb-4 xl:hidden",
          open ? "block" : "hidden",
        )}
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-white/5"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
        >
          Quero meu ingresso
        </a>
      </nav>
    </header>
  );
}
