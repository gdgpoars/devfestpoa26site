import { HIGHLIGHTS } from "@/lib/content";

export function Highlights() {
  return (
    <section className="border-y border-border bg-card/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            O evento em números
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Tudo o que você precisa saber, rápido
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-transform hover:-translate-y-1 sm:text-left"
            >
              <div className="mx-auto mb-3 text-4xl sm:mx-0 sm:text-5xl">{h.icon}</div>
              <div className="text-xl font-extrabold sm:text-2xl">{h.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{h.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
