const CARDS = [
  {
    cls: "criar",
    glyph: "🛠️",
    step: "01 / criar",
    title: "Criar",
    text: "Construir novas ideias, produtos, experiências e soluções — com IA como parceira de trabalho, não substituta.",
  },
  {
    cls: "proteger",
    glyph: "🛡️",
    step: "02 / proteger",
    title: "Proteger",
    text: "Pensar em segurança, privacidade, responsabilidade e confiança em cada camada do que construímos.",
  },
  {
    cls: "escalonar",
    glyph: "📈",
    step: "03 / escalonar",
    title: "Escalonar",
    text: "Levar soluções para mais pessoas, mais times e mais negócios — sem perder qualidade pelo caminho.",
  },
];

export default function Theme() {
  return (
    <section className="section-pad theme-section" id="tema">
      <div className="container">
        <div className="section-head center reveal" style={{ maxWidth: 720 }}>
          <p className="eyebrow">Tema DevFestPoa26</p>
          <h2 className="section-title">Criar, proteger, escalonar</h2>
          <p className="section-sub">desenvolvedores e criadores na era agêntica</p>
        </div>
        <p
          className="reveal"
          style={{ maxWidth: 680, margin: "0 auto 44px", textAlign: "center", color: "var(--text-dim)" }}
        >
          A edição de 2026 olha para um cenário em que inteligência artificial e agentes estão
          transformando a forma como criamos produtos, desenvolvemos software e trabalhamos. Nem
          todo agente é assustador — mas todos merecem atenção.
        </p>
        <div className="theme-cards">
          {CARDS.map((c) => (
            <div className={`card theme-card ${c.cls} reveal`} key={c.cls}>
              <span className="glyph">{c.glyph}</span>
              <p className="step">{c.step}</p>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
