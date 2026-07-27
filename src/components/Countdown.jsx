import { useEffect, useState } from "react";
import { EVENT_TARGET_ISO } from "../data/content";

function pad(n) {
  return String(n).padStart(2, "0");
}

function getRemaining() {
  const target = new Date(EVENT_TARGET_ISO).getTime();
  const diff = target - Date.now();
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown() {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section" id="countdown">
      <div className="container countdown-inner">
        <div className="countdown-label reveal">
          <p className="eyebrow">A contagem começou</p>
          <h2 className="section-title">Faltam menos dias do que parece</h2>
          <p>31 de outubro de 2026 · 09h (horário de Brasília) · Faculdade Dom Bosco, Porto Alegre.</p>
        </div>

        {remaining ? (
          <div className="countdown-grid reveal" role="timer" aria-live="polite" aria-atomic="true">
            <div className="countdown-box">
              <span className="countdown-num">{pad(remaining.d)}</span>
              <span className="countdown-unit">dias</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-num">{pad(remaining.h)}</span>
              <span className="countdown-unit">horas</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-num">{pad(remaining.m)}</span>
              <span className="countdown-unit">min</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-num">{pad(remaining.s)}</span>
              <span className="countdown-unit">seg</span>
            </div>
          </div>
        ) : (
          <p className="countdown-done reveal">🎃 O DevFestPoa26 está rolando agora mesmo!</p>
        )}
      </div>
    </section>
  );
}
