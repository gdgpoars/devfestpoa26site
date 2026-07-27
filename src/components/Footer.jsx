import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SYMPLA_URL } from "../data/content";

export default function Footer() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowSticky(window.scrollY > 480);
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand-col">
              <div className="footer-brand">
                <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <circle cx="20" cy="20" r="18" fill="#14161f" stroke="#ff7a29" strokeWidth="1.4" />
                  <circle cx="14" cy="17" r="4" fill="#ff7a29" />
                  <circle cx="26" cy="17" r="4" fill="#9784ff" />
                  <path d="M12 25c3 3 13 3 16 0" stroke="#ffb37a" strokeWidth="2" strokeLinecap="round" />
                </svg>
                DevFestPoa26
              </div>
              <div className="footer-meta">
                <p>GDG Porto Alegre &amp; GDG Caxias do Sul</p>
                <p>31 de outubro de 2026</p>
                <p>Faculdade Dom Bosco — Porto Alegre/RS</p>
              </div>
            </div>

            <div className="footer-col">
              <h4>Navegação</h4>
              <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/tema">Tema</Link></li>
                <li><Link to="/programacao">Programação</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Evento</h4>
              <ul>
                <li><Link to="/patrocinadores">Patrocinadores</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li>
                  <a href={SYMPLA_URL} target="_blank" rel="noopener noreferrer">
                    Ingressos
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Comunidade</h4>
              <ul>
                <li>
                  <a href="https://www.gdgportoalegre.com.br/" target="_blank" rel="noopener noreferrer">
                    Site GDG Porto Alegre
                  </a>
                </li>
                <li><a href="#" data-placeholder="true">Instagram — link em breve</a></li>
                <li><a href="#" data-placeholder="true">LinkedIn — link em breve</a></li>
                <li><a href="#" data-placeholder="true">GDG Caxias do Sul — link em breve</a></li>
              </ul>
            </div>
          </div>

          <div className="divider" />

          <div className="footer-bottom">
            <span>© 2026 DevFestPoa26 · Feito com 🎃 pela comunidade</span>
            <div className="footer-socials">
              <a
                href="https://www.gdgportoalegre.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site GDG Porto Alegre"
              >
                🌐
              </a>
              <a href="#" data-placeholder="true" aria-label="Instagram (link em breve)">IG</a>
              <a href="#" data-placeholder="true" aria-label="LinkedIn (link em breve)">in</a>
            </div>
          </div>
        </div>
      </footer>

      <div className={`mobile-sticky${showSticky ? " show" : ""}`} id="mobileSticky">
        <a className="btn btn-primary btn-block" href={SYMPLA_URL} target="_blank" rel="noopener noreferrer">
          Quero meu ingresso
        </a>
      </div>
    </>
  );
}
