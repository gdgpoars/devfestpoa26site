import { EXPERIENCE } from "@/lib/content";

export function Experience() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Guia da pessoa participante</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Experiência da pessoa participante</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tudo o que você precisa saber antes, durante e depois do evento.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCE.map((x) => (
            <div key={x.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="text-2xl">{x.icon}</span>
              <h3 className="mt-3 flex items-center gap-2 font-bold">
                {x.title}
                {x.pending && (
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">
                    Em breve
                  </span>
                )}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{x.text}</p>
              {x.items.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {x.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-primary">·</span>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
