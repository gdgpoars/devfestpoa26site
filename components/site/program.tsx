export function Program() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <span className="text-4xl">👻</span>
          <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            EM BREVE
          </span>
          <h3 className="mt-3 text-2xl font-extrabold">A programação está sendo construída</h3>
          <p className="mt-2 text-muted-foreground">
            Em breve você vai descobrir tudo o que preparamos para o DevFestPoa26 — palestras,
            palestrantes, trilhas e horários.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Trilha 1", "Trilha 2", "Trilha 3", "Palco principal"].map((s) => (
              <div key={s} className="rounded-lg border border-dashed border-border py-4 text-sm text-muted-foreground">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
