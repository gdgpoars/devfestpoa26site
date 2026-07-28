"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SYMPLA_URL } from "@/lib/content";
import { cn } from "@/lib/utils";

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
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2 font-bold">
                <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-8">
                  <circle cx="20" cy="20" r="18" fill="#14161f" stroke="#ff7a29" strokeWidth="1.4" />
                  <circle cx="14" cy="17" r="4" fill="#ff7a29" />
                  <circle cx="26" cy="17" r="4" fill="#9784ff" />
                  <path d="M12 25c3 3 13 3 16 0" stroke="#ffb37a" strokeWidth="2" strokeLinecap="round" />
                </svg>
                DevFestPoa26
              </div>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p>GDG Porto Alegre &amp; GDG Caxias do Sul</p>
                <p>31 de outubro de 2026</p>
                <p>Faculdade Dom Bosco — Porto Alegre/RS</p>
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

            <div>
              <h4 className="mb-3 text-sm font-semibold">Comunidade</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://www.gdgportoalegre.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Site GDG Porto Alegre
                  </a>
                </li>
                <li className="text-muted-foreground/60">Instagram — link em breve</li>
                <li className="text-muted-foreground/60">LinkedIn — link em breve</li>
                <li className="text-muted-foreground/60">GDG Caxias do Sul — link em breve</li>
              </ul>
            </div>
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
          className="flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
        >
          Quero meu ingresso
        </a>
      </div>
    </>
  );
}
