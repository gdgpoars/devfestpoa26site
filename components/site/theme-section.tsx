import Link from "next/link";
import { Reveal } from "@/components/site/reveal";

const CARDS = [
  {
    id: "criar",
    glyph: "🛠️",
    step: "01 / criar",
    title: "Criar",
    text: "Construir novas ideias, produtos, experiências e soluções — com IA como parceira de trabalho, não substituta.",
    accent: "border-t-primary",
    badgeBg: "bg-primary/10",
    track: { name: "Trilha Alquimia", room: "Sala 410" },
    tags: ["IA / Agentes", "Produto", "Frontend"],
    examples: ["Design to Code: IA e Acessibilidade", "DJ Verbosa — Compilando batidas"],
  },
  {
    id: "proteger",
    glyph: "🛡️",
    step: "02 / proteger",
    title: "Proteger",
    text: "Pensar em segurança, privacidade, responsabilidade e confiança em cada camada do que construímos.",
    accent: "border-t-secondary",
    badgeBg: "bg-secondary/10",
    track: { name: "Trilha Sentinela", room: "Sala 409" },
    tags: ["Segurança", "Qualidade / Testes"],
    examples: [
      "IA confiável não nasce no prompt: qualidade, testes e guardrails em produtos com LLM",
      "Confia, mas confere — Capture the Flag e o básico de segurança",
    ],
  },
  {
    id: "escalonar",
    glyph: "📈",
    step: "03 / escalonar",
    title: "Escalonar",
    text: "Levar soluções para mais pessoas, mais times e mais negócios — sem perder qualidade pelo caminho.",
    accent: "border-t-accent",
    badgeBg: "bg-accent/10",
    track: { name: "Trilha Lua Cheia", room: "Sala 406" },
    tags: ["Arquitetura", "Liderança / Gestão"],
    examples: [
      "Escalonando o Impacto: Gestão de Engenharia, Maturidade e Produtividade na Era Agêntica",
      "Antes de escalar agentes: cinco decisões de arquitetura e governança que evitam a automação errada",
    ],
  },
];

export function ThemeSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
          <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 text-xs font-semibold uppercase tracking-widest text-primary duration-700">
            Tema DevFestPoa26
          </p>
          <h1 className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 mt-2 text-4xl font-extrabold duration-700 sm:text-5xl">
            <span className="text-gradient">Criar, proteger, escalonar</span>
          </h1>
          <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 mt-2 text-lg font-semibold text-muted-foreground duration-700">
            desenvolvedores e criadores na era agêntica
          </p>
          <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 mx-auto mt-5 max-w-xl text-muted-foreground duration-700">
            A edição de 2026 olha para um cenário em que inteligência artificial e agentes estão
            transformando a forma como criamos produtos, desenvolvemos software e trabalhamos. Nem
            todo agente é assustador — mas todos merecem atenção. Por isso organizamos a
            programação inteira em torno de três verbos: criar, proteger e escalonar.
          </p>

          <nav aria-label="Ir para seção" className="mt-8 flex flex-wrap justify-center gap-2">
            {CARDS.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:scale-125">
                  {c.glyph}
                </span>
                {c.title}
              </a>
            ))}
            <Link
              href="/programacao"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/20"
            >
              👻 Ver a grade completa
            </Link>
          </nav>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-5 sm:grid-cols-3">
            {CARDS.map((c, i) => (
              <Reveal key={c.id} delay={i * 90}>
                <div
                  id={c.id}
                  className={`card-glow scroll-mt-24 h-full rounded-2xl border border-border border-t-4 ${c.accent} bg-card p-6`}
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 hover:scale-110 ${c.badgeBg}`}
                  >
                    {c.glyph}
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {c.step}
                  </p>
                  <h2 className="mt-1 text-lg font-bold">{c.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-primary">
                    Você vai ver isso na prática em
                  </p>
                  <p className="text-sm font-semibold">
                    {c.track.name} <span className="font-normal text-muted-foreground">· {c.track.room}</span>
                  </p>

                  <ul className="mt-3 space-y-1.5 border-t border-border pt-3 text-sm text-muted-foreground">
                    {c.examples.map((ex) => (
                      <li key={ex} className="flex gap-2">
                        <span className="text-primary">·</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
