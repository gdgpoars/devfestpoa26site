import Link from "next/link";
import { Reveal } from "@/components/site/reveal";

const ITEMS = [
  { num: "01", icon: "🎤", title: "Conteúdo técnico relevante", text: "Palestras e trilhas pensadas pela e para a comunidade tech." },
  { num: "02", icon: "🧪", title: "Experiências práticas", text: "Hands-on, demos e momentos de aprender fazendo." },
  { num: "03", icon: "🤝", title: "Conexão com empresas", text: "Patrocinadores e parceiros que também são comunidade." },
  { num: "04", icon: "🔗", title: "Networking de verdade", text: "Espaços pensados para gerar conversas, não só crachás." },
];

const QUICK_LINKS = [
  { href: "#pilares", icon: "🧭", label: "Trilhas" },
  { href: "#powered-by", icon: "🚀", label: "Powered by" },
  { href: "/programacao", icon: "👻", label: "Programação" },
];

export function About() {
  return (
    <>
      <section id="sobre" className="relative overflow-hidden bg-grid">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 text-xs font-semibold uppercase tracking-widest text-primary duration-700">
                Sobre o evento
              </p>
              <h1 className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 mt-2 text-3xl font-extrabold duration-700 sm:text-4xl">
                Onde tecnologia, comunidade e futuro se encontram
              </h1>
              <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 mt-5 space-y-4 text-muted-foreground duration-700">
                <p>
                  O DevFestPoa26 não é só mais uma conferência de tecnologia. É o encontro anual das
                  comunidades <strong className="text-foreground">GDG Porto Alegre</strong> e{" "}
                  <strong className="text-foreground">GDG Caxias do Sul</strong> — feito por quem
                  programa, projeta, lidera e aprende no dia a dia, para quem quer fazer parte disso.
                </p>
                <p>
                  Um dia inteiro de conteúdo técnico relevante, experiências práticas e conversas que
                  só acontecem quando a comunidade toda está no mesmo lugar. Sem enrolação, sem
                  discurso corporativo — é sobre código, carreira e conexão de verdade.
                </p>
                <p>
                  São 6 espaços simultâneos — o Salão Comunal (palco principal) e as trilhas Magia,
                  Lua Cheia, Sentinela, Alquimia e Covil —, reunindo palestras, workshops, mentorias,
                  laboratórios e rodas de conversa para todos os níveis e interesses.
                </p>
              </div>

              <nav aria-label="Ir para seção" className="mt-7 flex flex-wrap gap-2">
                {QUICK_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:scale-125">
                      {l.icon}
                    </span>
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            <ul className="space-y-5">
              {ITEMS.map((it, i) => (
                <Reveal key={it.num} delay={i * 80}>
                  <li className="card-glow group flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl transition-transform duration-300 group-hover:scale-110">
                      {it.icon}
                    </span>
                    <div>
                      <b className="block">{it.title}</b>
                      <span className="text-sm text-muted-foreground">{it.text}</span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="card-glow flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-border bg-card p-6 text-center">
              <div>
                <p className="text-2xl font-extrabold text-gradient">37+</p>
                <p className="text-xs text-muted-foreground">conteúdos na grade</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gradient">40+</p>
                <p className="text-xs text-muted-foreground">pessoas palestrantes</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gradient">6</p>
                <p className="text-xs text-muted-foreground">trilhas simultâneas</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gradient">1</p>
                <p className="text-xs text-muted-foreground">dia inteiro de comunidade</p>
              </div>
              <Link href="/programacao" className="text-sm font-semibold text-primary hover:underline">
                Ver a grade completa →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
