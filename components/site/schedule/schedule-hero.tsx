import type { ReactNode } from "react";
import { TALKS } from "@/lib/schedule";

function Stat({ children, color }: { children: ReactNode; color: string }) {
  return (
    <b className="stat-pop font-extrabold" style={{ color }}>
      {children}
    </b>
  );
}

export function ScheduleHero() {
  const speakerCount = new Set(TALKS.flatMap((t) => t.speakers.map((s) => s.name))).size;

  return (
    <section className="relative py-14 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Grade oficial 🎃</p>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">
          Programação do <span className="text-gradient">DevFestPoa26</span>
        </h1>

        <p className="mt-4 max-w-2xl text-muted-foreground">31 de outubro de 2026 · Faculdade Dom Bosco, Porto Alegre.</p>

        <p className="mt-2 max-w-2xl text-base text-foreground/90 sm:text-lg">
          <Stat color="var(--primary)">{TALKS.length}</Stat> conteúdos entre palestras, workshops, mentorias e
          rodas de conversa
          <br />
          com <Stat color="var(--secondary)">{speakerCount}+</Stat> pessoas palestrantes, distribuídos em{" "}
          <Stat color="var(--accent)">6</Stat> espaços.
        </p>

        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Em breve, no nosso webapp, você poderá montar a sua trilha personalizada.
        </p>
      </div>
    </section>
  );
}
