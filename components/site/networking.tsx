import Link from "next/link";
import { FORMATS, TALKS_BY_TRACK, TRACK_BY_ID, formatTimeRange } from "@/lib/schedule";
import { Reveal } from "@/components/site/reveal";

const covil = TRACK_BY_ID.covil;
const covilTalks = [...TALKS_BY_TRACK.covil].sort((a, b) => a.start - b.start);

export function Networking() {
  return (
    <section id="networking" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {covil.emoji} Sala Covil · {covil.room}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold">A sala que não para de conectar gente</h2>
              <p className="mt-4 text-muted-foreground">
                Enquanto as trilhas do DevFestPoa26 avançam entre criar, proteger e escalonar, a Covil
                funciona em paralelo, o dia inteiro, como o point de conversa do evento. É pra lá que
                você vai quando quiser trocar ideia de verdade — sem slide, sem palco, só gente e boas
                perguntas.
              </p>
              <p className="mt-3 text-muted-foreground">
                Mentorias sobre carreira e liderança, rodas de conversa sinceras sobre produto e sobre
                virar sênior, e o Speed Networking fechando a tarde: as melhores oportunidades do
                DevFestPoa26 quase sempre começam ali dentro.
              </p>
              <Link
                href="/programacao"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform hover:translate-x-1 hover:underline"
              >
                Ver a grade completa →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-glow rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                O dia todo na Covil
              </p>
              <ol className="mt-4 space-y-1">
                {covilTalks.map((t) => {
                  const format = FORMATS[t.format];
                  return (
                    <li
                      key={t.id}
                      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/5"
                    >
                      <span className="mt-0.5 shrink-0 text-xs font-semibold tabular-nums text-muted-foreground">
                        {formatTimeRange(t.start, t.end)}
                      </span>
                      <div className="min-w-0">
                        <span
                          style={{
                            backgroundColor: `${format.color.bg}1a`,
                            color: format.color.bg,
                          }}
                          className="inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                        >
                          {format.label}
                        </span>
                        <p className="mt-1 text-sm font-medium text-foreground/90 transition-transform duration-300 group-hover:translate-x-1">
                          {t.title}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
