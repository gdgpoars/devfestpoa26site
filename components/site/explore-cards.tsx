import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EXPLORE_CARDS, SYMPLA_URL } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";

export function ExploreCards() {
  return (
    <section id="explore" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Explore o evento
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Descubra tudo sobre o DevFestPoa26
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Um roteiro rápido: comece entendendo o evento e vá até garantir o seu ingresso.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXPLORE_CARDS.map((c, i) => (
            <Reveal key={c.href} delay={i * 60}>
              <Link
                href={c.href}
                className="spooky-card group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6"
                style={{ "--glow": c.color } as React.CSSProperties}
              >
                <span className="absolute right-5 top-5 text-xs font-medium text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {c.icon}
                </span>
                <span className="mt-4 inline-block w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {c.tag}
                </span>
                <div className="mt-3 text-lg font-bold">{c.title}</div>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{c.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors group-hover:text-primary">
                  Ver mais <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={EXPLORE_CARDS.length * 60} className="mt-4">
          <a
            href={SYMPLA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="spooky-card group flex flex-col items-center gap-4 rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/15 via-card to-card p-6 text-center sm:flex-row sm:justify-between sm:text-left"
            style={{ "--glow": "#ff7a29" } as React.CSSProperties}
          >
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-2xl transition-transform duration-300 group-hover:scale-110">
                🎟️
              </span>
              <div>
                <span className="inline-block rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                  Última etapa
                </span>
                <div className="mt-2 text-lg font-bold">Pronto para garantir o seu?</div>
                <p className="mt-1 text-sm text-muted-foreground">Ingressos disponíveis no Sympla.</p>
              </div>
            </div>
            <span className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all group-hover:-translate-y-0.5 group-hover:brightness-110">
              Comprar agora <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
