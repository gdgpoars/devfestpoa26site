import Link from "next/link";

export function Game() {
  return (
    <section id="game" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="card-glow relative overflow-hidden rounded-2xl border border-secondary/40 bg-gradient-to-br from-secondary/10 via-card to-card p-8 sm:p-12">
          <span
            aria-hidden="true"
            className="animate-float-soft absolute right-6 top-6 text-4xl transition-transform duration-500 hover:scale-125 sm:right-10 sm:top-10"
          >
            🦆
          </span>
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Uma experiência dentro da experiência
          </p>
          <h2 className="mt-2 text-3xl font-extrabold">DevFestPoaGAME</h2>
          <p className="mt-3 text-lg font-semibold">Criar. Proteger. Escalonar. Jogar.</p>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Complete missões, conecte-se com pessoas de outras equipes, explore os espaços do evento
            e acumule Patos Pila 🦆 — a moeda oficial do jogo — para levar sua equipe ao topo do
            ranking.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
              🎯 Missões
            </span>
            <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
              🦆 Patos Pila
            </span>
            <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
              🏆 Ranking ao vivo
            </span>
          </div>
          <Link
            href="/experiencia/devfestpoagame"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-secondary px-6 text-sm font-semibold text-secondary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Ver o manual completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
