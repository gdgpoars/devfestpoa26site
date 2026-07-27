import { FAQS } from "../data/content";

export default function Faq() {
  return (
    <section className="section-pad" id="faq">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="section-title">Ainda com dúvidas?</h2>
        </div>
        <div className="faq-list reveal">
          {FAQS.map((f, i) => (
            <details className="faq-item" key={i}>
              <summary>
                {f.q}
                <span className="faq-plus" aria-hidden="true"></span>
              </summary>
              {/* eslint-disable-next-line react/no-danger */}
              <div className="faq-body" dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
