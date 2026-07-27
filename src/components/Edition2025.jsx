import { METRICS_2025 } from "../data/content";

export default function Edition2025() {
  return (
    <section className="section-pad edition-section" id="edicao2025">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">DevFestPoa25</p>
          <h2 className="section-title">Se você esteve no DevFestPoa25, sabe.</h2>
          <p className="section-sub">O DevFestPoa26 vem de uma comunidade que já construiu algo incrível.</p>
        </div>
        <div className="metrics-grid reveal">
          {METRICS_2025.map((m, i) => (
            <div className="metric" key={i}>
              <div className="metric-num">{m.num}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
