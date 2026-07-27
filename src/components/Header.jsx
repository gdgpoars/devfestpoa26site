import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SYMPLA_URL } from "../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="siteHeader">
      <div className="container">
        <Link to="/" className="brand" aria-label="DevFestPoa26 — voltar ao topo">
          <svg
            className="brand-mark"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="20" cy="20" r="18" fill="#14161f" stroke="#ff7a29" strokeWidth="1.4" />
            <circle cx="14" cy="17" r="4" fill="#ff7a29" />
            <circle cx="26" cy="17" r="4" fill="#9784ff" />
            <path d="M12 25c3 3 13 3 16 0" stroke="#ffb37a" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>
            DevFestPoa26
            <small>GDG Porto Alegre × GDG Caxias do Sul</small>
          </span>
        </Link>

        <nav
          className={`nav-links${menuOpen ? " open" : ""}`}
          id="navLinks"
          aria-label="Navegação principal"
        >
          <NavLink to="/" end>
            Início
          </NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/tema">Tema</NavLink>
          <NavLink to="/programacao">Programação</NavLink>
          <NavLink to="/patrocinadores">Patrocinadores</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <a href={SYMPLA_URL} target="_blank" rel="noopener noreferrer">
            Ingressos
          </a>
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary btn-sm" href={SYMPLA_URL} target="_blank" rel="noopener noreferrer">
            Quero meu ingresso
          </a>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
