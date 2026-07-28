const CARDS = [
  {
    glyph: "🛠️",
    step: "01 / criar",
    title: "Criar",
    text: "Construir novas ideias, produtos, experiências e soluções — com IA como parceira de trabalho, não substituta.",
    accent: "border-t-primary",
  },
  {
    glyph: "🛡️",
    step: "02 / proteger",
    title: "Proteger",
    text: "Pensar em segurança, privacidade, responsabilidade e confiança em cada camada do que construímos.",
    accent: "border-t-secondary",
  },
  {
    glyph: "📈",
    step: "03 / escalonar",
    title: "Escalonar",
    text: "Levar soluções para mais pessoas, mais times e mais negócios — sem perder qualidade pelo caminho.",
    accent: "border-t-accent",
  },
];

export function ThemeSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Tema DevFestPoa26</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Criar, proteger, escalonar</h2>
          <p className="mt-2 text-sm text-muted-foreground">desenvolvedores e criadores na era agêntica</p>
        </div>
        <p className="mx-auto mb-12 max-w-xl text-center text-sm text-muted-foreground">
          A edição de 2026 olha para um cenário em que inteligência artificial e agentes estão
          transformando a forma como criamos produtos, desenvolvemos software e trabalhamos. Nem
          todo agente é assustador — mas todos merecem atenção.
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className={`rounded-2xl border border-border border-t-4 ${c.accent} bg-card p-6`}>
              <span className="text-3xl">{c.glyph}</span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.step}</p>
              <h3 className="mt-1 text-lg font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
