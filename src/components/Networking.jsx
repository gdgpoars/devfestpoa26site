const TAGS = ["Participantes", "Palestrantes", "Empresas", "Comunidades", "Todos os níveis de carreira"];

export default function Networking() {
  return (
    <section className="section-pad networking-section" id="networking-detail">
      <div className="container networking-layout">
        <div className="reveal">
          <p className="eyebrow">Networking estruturado</p>
          <h2>Conexões que vão além do crachá</h2>
          <p>
            No DevFestPoa26, networking não é deixado por conta do acaso. Criamos momentos e
            espaços pensados para aproximar participantes, palestrantes, empresas e comunidades —
            porque as melhores oportunidades quase sempre começam numa boa conversa.
          </p>
          <div className="net-tags">
            {TAGS.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="net-visual reveal" aria-hidden="true">
          <svg viewBox="0 0 300 300">
            <g stroke="#ff7a29" strokeOpacity=".5" strokeWidth="1">
              <line x1="60" y1="60" x2="150" y2="120" />
              <line x1="150" y1="120" x2="240" y2="70" />
              <line x1="150" y1="120" x2="90" y2="200" />
              <line x1="150" y1="120" x2="220" y2="210" />
              <line x1="90" y1="200" x2="220" y2="210" />
              <line x1="60" y1="60" x2="90" y2="200" />
            </g>
            <g fill="#ff7a29">
              <circle cx="60" cy="60" r="6" />
              <circle cx="240" cy="70" r="5" />
            </g>
            <g fill="#9784ff">
              <circle cx="150" cy="120" r="8" />
              <circle cx="90" cy="200" r="6" />
              <circle cx="220" cy="210" r="6" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
