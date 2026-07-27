import { PILLARS } from "../data/content";

export default function Pillars() {
  return (
    <section className="section-pad" id="pilares">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Pilares de conteúdo</p>
          <h2 className="section-title">Trilhas para todo tipo de curiosidade</h2>
        </div>
        <div className="pillars-grid">
          {PILLARS.map((p, i) => (
            <div className="pillar-card card reveal" key={i}>
              <span className="glyph">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
