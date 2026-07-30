"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { SYMPLA_URL } from "@/lib/content";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas || reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: { x: number; y: number; vx: number; vy: number; r: number; orange: boolean }[] = [];
    const NODE_COUNT_BASE = 46;
    let rafId: number;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      canvas!.style.width = rect.width + "px";
      canvas!.style.height = rect.height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = window.innerWidth < 720 ? 22 : NODE_COUNT_BASE;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 1,
        orange: Math.random() < 0.18,
      }));
    }

    function step() {
      const cw = canvas!.clientWidth;
      const ch = canvas!.clientHeight;
      ctx!.clearRect(0, 0, cw, ch);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > cw) n.vx *= -1;
        if (n.y < 0 || n.y > ch) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx!.strokeStyle = `rgba(151,132,255,${0.14 * (1 - dist / 140)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx!.beginPath();
        ctx!.fillStyle = n.orange ? "rgba(255,122,41,.85)" : "rgba(200,196,255,.55)";
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
        if (n.orange) {
          ctx!.beginPath();
          ctx!.fillStyle = "rgba(255,122,41,.12)";
          ctx!.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
          ctx!.fill();
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
    <section className="relative overflow-hidden bg-grid">
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <p className="text-center text-base text-muted-foreground sm:text-lg">
          🎃 <b className="text-foreground">GDG Porto Alegre</b> &amp; <b className="text-foreground">GDG Caxias do Sul</b> apresentam
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div ref={logoRef} className="reveal flex justify-center lg:justify-start">
            <div className="animate-float">
              <Image
                src="/logo evento.png"
                alt="DevFestPoa26"
                width={1080}
                height={1080}
                className="h-72 w-72 sm:h-[22rem] sm:w-[22rem] md:h-[27rem] md:w-[27rem] lg:h-[32rem] lg:w-[32rem]"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-2xl font-semibold text-gradient sm:text-3xl lg:text-4xl">
              "Criar, proteger, escalonar: desenvolvedores e criadores na era agêntica."
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground sm:text-base">
                <CalendarDays className="size-5 text-primary" />
                <b className="text-foreground">31 de outubro de 2026</b>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground sm:text-base">
                <Clock className="size-5 text-primary" />
                <b className="text-foreground">09h às 18h</b>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground sm:text-base">
                <MapPin className="size-5 text-primary" />
                <b className="text-foreground">Faculdade Dom Bosco</b>&nbsp;— Porto Alegre/RS
              </span>
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={SYMPLA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pulse inline-flex h-13 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(255,122,41,0.35)]"
              >
                Quero meu ingresso
              </a>
              <Link
                href="/sobre"
                className="inline-flex h-13 items-center justify-center rounded-full border border-border px-8 text-base font-semibold transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-white/5 active:scale-95"
              >
                Conhecer o evento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
