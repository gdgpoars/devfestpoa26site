import { Link } from "react-router-dom";
import { SYMPLA_URL } from "../data/content";

const CARDS = [
  { to: "/sobre", icon: "📖", title: "Sobre o evento", text: "Conheça a proposta do DevFestPoa26 e os pilares de conteúdo." },
  { to: "/tema", icon: "🎯", title: "Tema 2026", text: "Criar, proteger, escalonar: a era agêntica." },
  { to: "/experiencia", icon: "🧭", title: "Experiência", text: "Programação, networking, DevFestPoaGame e a edição anterior." },
  { to: "/patrocinadores", icon: "🤝", title: "Patrocinadores", text: "Empresas que acreditam e apoiam a comunidade." },
  { to: "/faq", icon: "❓", title: "FAQ", text: "Tire suas dúvidas sobre o evento." },
];

export default function ExploreCards() {
  return (
    <section className="section-pad" id="explorar">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Explore o evento</p>
          <h2 className="section-title">Descubra tudo sobre o DevFestPoa26</h2>
        </div>
        <div className="highlights-grid">
          {CARDS.map((c) => (
            <Link className="card hl-card reveal" to={c.to} key={c.to} style={{ textDecoration: "none" }}>
              <div className="hl-icon">{c.icon}</div>
              <div>
                <div className="hl-title">{c.title}</div>
                <div className="hl-text">{c.text}</div>
              </div>
            </Link>
          ))}
          <a
            className="card hl-card reveal"
            href={SYMPLA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="hl-icon">🎟️</div>
            <div>
              <div className="hl-title">Ingressos</div>
              <div className="hl-text">Garanta o seu no Sympla.</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
