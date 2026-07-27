export default function Program() {
  return (
    <section className="section-pad program-section" id="programacao">
      <div className="container">
        <div className="program-panel reveal">
          <div className="ghost-wrap">
            <span className="ghost">👻</span>
          </div>
          <span className="soon-badge">EM BREVE</span>
          <h3>A programação está sendo construída</h3>
          <p>
            Em breve você vai descobrir tudo o que preparamos para o DevFestPoa26 — palestras,
            palestrantes, trilhas e horários.
          </p>
          <div className="program-skeleton" aria-hidden="true">
            <div className="skeleton-slot">Trilha 1</div>
            <div className="skeleton-slot">Trilha 2</div>
            <div className="skeleton-slot">Trilha 3</div>
            <div className="skeleton-slot">Palco principal</div>
          </div>
        </div>
      </div>
    </section>
  );
}
