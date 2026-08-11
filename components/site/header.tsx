"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS, SYMPLA_URL } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex shrink-0 items-center gap-2 font-bold" onClick={() => setOpen(false)}>
            <Image
              src="/ambrosia.png"
              alt="DevFestPoa26"
              width={1080}
              height={1080}
              className="size-8 shrink-0 rounded-full"
            />
            <span className="whitespace-nowrap leading-tight">DevFestPoa26</span>
          </Link>

          <nav className="hidden flex-nowrap items-center gap-4 whitespace-nowrap text-sm font-medium xl:flex">
            {NAV_LINKS.map((l) =>
              l.children ? (
                <div key={l.href} className="group relative">
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-1 whitespace-nowrap text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {l.label}
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-10 min-w-[200px] pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-xl">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="whitespace-nowrap px-4 py-2.5 text-foreground/80 transition-colors hover:bg-white/5 hover:text-foreground"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="whitespace-nowrap text-foreground/80 transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <a
            href={SYMPLA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse hidden h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(255,122,41,0.35)] xl:inline-flex"
          >
            Quero meu ingresso
          </a>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground xl:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed left-0 right-0 top-16 bottom-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <nav
        id="mobile-menu"
        aria-label="Menu principal"
        aria-hidden={!open}
        className={cn(
          "fixed right-0 top-16 bottom-0 z-[60] flex w-full max-w-xs flex-col gap-1 overflow-y-auto border-l border-border bg-background p-4 shadow-2xl transition-transform duration-300 ease-out xl:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {NAV_LINKS.map((l) =>
          l.children ? (
            <div key={l.href} className="flex flex-col">
              <Link
                href={l.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
              <div className="ml-3 flex flex-col border-l border-border pl-3">
                {l.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ),
        )}
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-pulse mt-3 flex h-11 w-full items-center justify-center rounded-full bg-primary px-4 text-center text-sm font-semibold text-primary-foreground"
        >
          Quero meu ingresso
        </a>
      </nav>
    </>
  );
}
