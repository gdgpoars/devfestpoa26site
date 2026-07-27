import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SYMPLA_URL } from "../data/content";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canvas = canvasRef.current;
    if (!canvas || reduceMotion) return;

    const ctx = canvas.getContext("2d");
    let nodes = [];
    const NODE_COUNT_BASE = 46;
    let rafId;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
      const count = window.innerWidth < 720 ? 22 : NODE_COUNT_BASE;
      const cw = rect.width,
        ch = rect.height;
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * cw,
          y: Math.random() * ch,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 1,
          orange: Math.random() < 0.18,
        });
      }
    }

    function step() {
      const cw = canvas.clientWidth,
        ch = canvas.clientHeight;
      ctx.clearRect(0, 0, cw, ch);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > cw) n.vx *= -1;
        if (n.y < 0 || n.y > ch) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const dx = a.x - b.x,
            dy = a.y - b.y,
            dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(151,132,255,${0.14 * (1 - dist / 140)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.fillStyle = n.orange ? "rgba(255,122,41,.85)" : "rgba(200,196,255,.55)";
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        if (n.orange) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(255,122,41,.12)";
          ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      rafId = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    rafId = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} id="hero-canvas" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          <div>
            <p className="hero-org">
              🎃 <b>GDG Porto Alegre</b> &amp; <b>GDG Caxias do Sul</b> apresentam
            </p>
            <h1>DevFestPoa26</h1>
            <p className="hero-theme">
                        <strong>
                "Criar, proteger, escalonar: desenvolvedores e criadores na era agêntica."
              </strong>
            </p>

            <div className="hero-meta">
              <span className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M3 10h18M8 3v4M16 3v4" />
                </svg>
                <b>31 de outubro de 2026</b>&nbsp;
              </span>
              <span className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
                <b>09h às 18h</b>
              </span>
              <span className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.4" />
                </svg>
                <b>Faculdade Dom Bosco</b>&nbsp;— Porto Alegre/RS
              </span>
            </div>

            <div className="hero-ctas">
              <a className="btn btn-primary" href={SYMPLA_URL} target="_blank" rel="noopener noreferrer">
                Quero meu ingresso
              </a>
              <Link className="btn btn-ghost" to="/sobre">
                Conhecer o evento
              </Link>
            </div>
            <p className="hero-note" style={{ marginTop: 16 }}>
            
            </p>
          </div>

          <div className="hero-side">
            <div className="hero-card">
              <div className="hero-card-top">
                <span>devfestpoa26 — terminal</span>
                <span className="hero-card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div className="hero-terminal">
                <div>
                  <span className="prompt">&gt;</span> whoami
                </div>
                <div className="out">pessoa de tech curiosa por IA agêntica</div>
                <div>
                  <span className="prompt">&gt;</span> connect --community gdg-poa gdg-caxias
                </div>
                <div className="out">300 pessoas · 1 palco · 3 trilhas</div>
                <div>
                  <span className="prompt">&gt;</span> git checkout devfestpoa26
                </div>
                <div className="out">Já estamos na branch certa 👻</div>
                <div>
                  <span className="prompt">&gt;</span> <span className="cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="scroll-cue">
        <span className="line"></span>role para saber mais
      </span>
    </section>
  );
}
