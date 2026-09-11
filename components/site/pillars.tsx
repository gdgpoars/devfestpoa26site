import { TRACKS } from "@/lib/schedule";
import { Reveal } from "@/components/site/reveal";

export function Pillars() {
  return (
    <section id="pilares" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">🧭 Pilares de conteúdo</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Trilhas para todo tipo de curiosidade</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t, i) => (
            <Reveal key={t.id} delay={i * 70}>
              <div className="card-glow group h-full rounded-2xl border border-border bg-card p-6">
                <span className="inline-block text-3xl transition-transform duration-300 group-hover:scale-125">
                  {t.emoji}
                </span>
                <h3 className="mt-3 font-bold">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  {t.room ?? "Palco principal"}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
