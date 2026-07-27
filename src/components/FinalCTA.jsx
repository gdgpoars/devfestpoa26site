import { SYMPLA_URL } from "../data/content";

export default function FinalCTA() {
  return (
    <section className="section-pad final-cta" id="ingressos">
      <div className="container">
        <h2 className="reveal">Nem todo monstro mora debaixo da cama. Alguns estão no seu código.</h2>
        <p className="reveal">Venha descobrir os seus no DevFestPoa26 — 31 de outubro, em Porto Alegre.</p>
        <a
          className="btn btn-primary reveal"
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "1.05rem", padding: "18px 36px" }}
        >
          Garantir meu ingresso
        </a>
      </div>
    </section>
  );
}
