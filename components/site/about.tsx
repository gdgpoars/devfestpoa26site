const ITEMS = [
  { num: "01", title: "Conteúdo técnico relevante", text: "Palestras e trilhas pensadas pela e para a comunidade tech." },
  { num: "02", title: "Experiências práticas", text: "Hands-on, demos e momentos de aprender fazendo." },
  { num: "03", title: "Conexão com empresas", text: "Patrocinadores e parceiros que também são comunidade." },
  { num: "04", title: "Networking de verdade", text: "Espaços pensados para gerar conversas, não só crachás." },
];

export function About() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Sobre o evento</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Onde tecnologia, comunidade e futuro se encontram
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
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
            </div>
          </div>
          <ul className="space-y-5">
            {ITEMS.map((it) => (
              <li key={it.num} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="text-2xl font-extrabold text-primary/60">{it.num}</span>
                <div>
                  <b className="block">{it.title}</b>
                  <span className="text-sm text-muted-foreground">{it.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
