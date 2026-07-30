"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { SYMPLA_URL } from "@/lib/content";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm text-muted-foreground">
            🎃 <b className="text-foreground">GDG Porto Alegre</b> &amp; <b className="text-foreground">GDG Caxias do Sul</b> apresentam
          </p>
          <Image
            src="/logo evento.png"
            alt="DevFestPoa26"
            width={1080}
            height={1080}
            className="mt-3 h-20 w-20 sm:h-24 sm:w-24"
            priority
          />
          <p className="mt-4 text-lg font-semibold text-gradient">
            "Criar, proteger, escalonar: desenvolvedores e criadores na era agêntica."
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4 text-primary" />
              <b className="text-foreground">31 de outubro de 2026</b>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              <b className="text-foreground">09h às 18h</b>
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              <b className="text-foreground">Faculdade Dom Bosco</b>&nbsp;— Porto Alegre/RS
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(255,122,41,0.35)] transition-all hover:brightness-110"
            >
              Quero meu ingresso
            </a>
            <Link
              href="/sobre"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-sm font-semibold hover:bg-white/5"
            >
              Conhecer o evento
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card/80 p-1 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between rounded-t-xl bg-white/5 px-4 py-2 text-xs text-muted-foreground">
            <span>devfestpoa26 — terminal</span>
            <span className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
            </span>
          </div>
          <div className="space-y-2 p-5 font-mono text-sm">
            <div><span className="text-primary">&gt;</span> whoami</div>
            <div className="text-muted-foreground">pessoa de tech curiosa por IA agêntica</div>
            <div><span className="text-primary">&gt;</span> connect --community gdg-poa gdg-caxias</div>
            <div className="text-muted-foreground">300 pessoas · 1 palco · 3 trilhas</div>
            <div><span className="text-primary">&gt;</span> git checkout devfestpoa26</div>
            <div className="text-muted-foreground">Já estamos na branch certa 👻</div>
            <div><span className="text-primary">&gt;</span> <span className="animate-pulse">▌</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
