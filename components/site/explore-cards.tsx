import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EXPLORE_CARDS, SYMPLA_URL } from "@/lib/content";

export function ExploreCards() {
  return (
    <section className="py-16 sm:py-20">
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
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="absolute right-5 top-5 text-xs font-medium text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="text-3xl">{c.icon}</div>
              <span className="mt-4 inline-block w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {c.tag}
              </span>
              <div className="mt-3 text-lg font-bold">{c.title}</div>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{c.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors group-hover:text-primary">
                Ver mais <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}

          <a
            href={SYMPLA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/15 via-card to-card p-6 transition-all hover:-translate-y-1"
          >
            <div>
              <div className="text-3xl">🎟️</div>
              <span className="mt-4 inline-block w-fit rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                Última etapa
              </span>
              <div className="mt-3 text-lg font-bold">Ingressos</div>
              <p className="mt-1 text-sm text-muted-foreground">Garanta o seu no Sympla.</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Comprar agora <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
