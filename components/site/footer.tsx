"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarDays, Globe, Instagram, Linkedin, MapPin } from "lucide-react";
import { GDG_COMMUNITIES, SYMPLA_URL } from "@/lib/content";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS = { instagram: Instagram, linkedin: Linkedin, globe: Globe };

export function SiteFooter() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowSticky(window.scrollY > 480);
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2 font-bold">
                <Image
                  src="/ambrosia.png"
                  alt="DevFestPoa26"
                  width={1080}
                  height={1080}
                  className="size-8 shrink-0 rounded-full"
                />
                DevFestPoa26
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <CalendarDays className="size-4 shrink-0 text-primary" />
                  31 de outubro de 2026
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="size-4 shrink-0 text-primary" />
                  Faculdade Dom Bosco — Porto Alegre/RS
                </p>
              </div>

              <div className="mt-5 space-y-1.5 border-t border-border pt-4 text-center text-sm text-muted-foreground">
                <p>
                  <span className="block text-muted-foreground/60">Realização</span>
                  GDG Porto Alegre &amp; GDG Caxias do Sul
                </p>
                <p>
                  <span className="block text-muted-foreground/60">Powered by</span>
                  Kobe Apps &amp; Dentsu World Services
                </p>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold">Navegação</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-foreground">Início</Link></li>
                <li><Link href="/sobre" className="hover:text-foreground">Sobre</Link></li>
                <li><Link href="/tema" className="hover:text-foreground">Tema</Link></li>
                <li><Link href="/experiencia" className="hover:text-foreground">Programação</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold">Evento</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/patrocinadores" className="hover:text-foreground">Patrocinadores</Link></li>
                <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
                <li><Link href="/codigo-de-conduta" className="hover:text-foreground">Código de Conduta</Link></li>
                <li>
                  <a href={SYMPLA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Ingressos
                  </a>
                </li>
              </ul>
            </div>

            {GDG_COMMUNITIES.map((community) => (
              <div key={community.name}>
                <h4 className="mb-3 text-sm font-semibold">{community.name}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {community.links.map((l) => {
                    const Icon = SOCIAL_ICONS[l.icon];
                    return (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 hover:text-foreground"
                        >
                          <Icon className="size-4" />
                          {l.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="my-8 h-px w-full bg-border" />

          <div className="text-sm text-muted-foreground">
            © 2026 DevFestPoa26 · Feito com 🎃 pela comunidade
          </div>
        </div>
      </footer>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 translate-y-full border-t border-border bg-card p-3 transition-transform duration-300 md:hidden",
          showSticky && "translate-y-0",
        )}
      >
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-pulse flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
        >
          Quero meu ingresso
        </a>
      </div>
    </>
  );
}
