const WORD_CLOUD = [
  { label: "Carreira", weight: "track" },
  { label: "Mentorias", weight: "lg" },
  { label: "Gestão", weight: "md" },
  { label: "Produto", weight: "lg" },
  { label: "Liderança", weight: "md" },
  { label: "Dados", weight: "track" },
  { label: "IA", weight: "lg" },
  { label: "Backend", weight: "md" },
  { label: "Frontend", weight: "track" },
  { label: "Web", weight: "md" },
  { label: "Mobile", weight: "lg" },
  { label: "UX/UI", weight: "md" },
  { label: "QA", weight: "sm" },
  { label: "Testes", weight: "sm" },
] as const;

const WORD_WEIGHT_CLASSES: Record<(typeof WORD_CLOUD)[number]["weight"], string> = {
  track: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl",
  lg: "text-lg font-bold text-foreground sm:text-xl",
  md: "text-base font-semibold text-foreground/70 sm:text-lg",
  sm: "text-sm font-medium text-muted-foreground sm:text-base",
};

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
            Em breve você vai descobrir tudo o que preparamos para o DevFestPoa26 — palestras e
            palestrantes que vão explorar criar, proteger e escalonar na era agêntica, organizados
            em trilhas para você montar sua própria jornada.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {WORD_CLOUD.map((word, i) => (
              <span
                key={word.label}
                style={{
                  animationDelay: `${(i % 7) * 0.35}s`,
                  animationDuration: `${4.5 + (i % 4) * 0.5}s`,
                }}
                className={`animate-float-soft inline-block leading-none opacity-90 transition-opacity duration-300 hover:opacity-100 ${WORD_WEIGHT_CLASSES[word.weight]}`}
              >
                {word.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
