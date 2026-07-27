import { HIGHLIGHTS } from "../data/content";

export default function Highlights() {
  return (
    <section className="section-pad" id="highlights">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">O evento em números</p>
          <h2 className="section-title">Tudo o que você precisa saber, rápido</h2>
        </div>
        <div className="highlights-grid">
          {HIGHLIGHTS.map((h, i) => (
            <div className="hl-card card reveal" key={i}>
              <div className="hl-icon">{h.icon}</div>
              <div>
                <div className="hl-title">{h.title}</div>
                <div className="hl-text">{h.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
