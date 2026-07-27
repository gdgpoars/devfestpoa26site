import { PROGRAMACAO } from "../data/content";

export default function programacao() {
  return (
    <section className="section-pad" id="programacao">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Guia da pessoa participante</p>
          <h2 className="section-title">Experiência da pessoa participante</h2>
          <p className="section-sub">Tudo o que você precisa saber antes, durante e depois do evento.</p>
        </div>
        <div className="exp-grid">
          {EXPERIENCE.map((x, i) => (
            <div className="exp-card card reveal" key={i}>
              <span className="glyph">{x.icon}</span>
              <h3>
                {x.title}
                {x.pending && <span className="tag pending">Em breve</span>}
              </h3>
              <p>{x.text}</p>
              {x.items && x.items.length > 0 && (
                <ul>
                  {x.items.map((it, j) => (
                    <li key={j}>{it}</li>
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
