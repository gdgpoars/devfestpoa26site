export function Game() {
  return (
    <section id="game" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="card-glow relative overflow-hidden rounded-2xl border border-secondary/40 bg-gradient-to-br from-secondary/10 via-card to-card p-8 sm:p-12">
          <span
            aria-hidden="true"
            className="animate-float-soft absolute right-6 top-6 text-4xl opacity-70 sm:right-10 sm:top-10"
          >
            🎮
          </span>
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Uma experiência dentro da experiência
          </p>
          <h2 className="mt-2 text-3xl font-extrabold">DevFestPoaGame</h2>
          <p className="mt-3 text-lg font-semibold">
            Você veio para aprender. Mas será que veio para jogar?
          </p>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            O DevFestPoaGame é a camada de gamificação do DevFestPoa26: uma forma de explorar o
            evento, interagir com a comunidade e descobrir cantos que passariam despercebidos se
            você só seguisse a programação.
          </p>
        </div>
      </div>
    </section>
  );
}
