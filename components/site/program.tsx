import Link from "next/link";
import { TRACKS } from "@/lib/schedule";

export function Program() {
  return (
    <section id="programacao" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="card-glow rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <span className="text-4xl">👻</span>
          <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            GRADE OFICIAL DISPONÍVEL
          </span>
          <h3 className="mt-3 text-2xl font-extrabold">Confira a programação do DevFestPoa26</h3>
          <p className="mt-2 text-muted-foreground">
            Palestras, workshops, mentorias e rodas de conversa que vão explorar criar, proteger e
            escalonar na era agêntica, organizados em trilhas para você montar sua própria jornada.
          </p>
          <Link
            href="/programacao"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Ver grade completa
          </Link>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {TRACKS.map((t) => (
              <span
                key={t.id}
                style={{
                  backgroundColor: `${t.color.bg}1a`,
                  color: t.color.bg,
                  border: `1px solid ${t.color.bg}33`,
                }}
                className="inline-flex cursor-default items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition-transform duration-300 hover:scale-110"
              >
                <span aria-hidden="true">{t.emoji}</span>
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
