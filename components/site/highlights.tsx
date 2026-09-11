import Link from "next/link";
import { HIGHLIGHTS } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";

export function Highlights() {
  return (
    <section className="border-y border-border bg-card/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            O evento em números
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Tudo o que você precisa saber, rápido
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 70}>
              <div
                className="spooky-card group flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-center sm:text-left"
                style={{ "--glow": h.color } as React.CSSProperties}
              >
                <div className="mx-auto mb-3 text-4xl transition-transform duration-300 group-hover:scale-110 sm:mx-0 sm:text-5xl">
                  {h.icon}
                </div>
                <div className="text-xl font-extrabold sm:text-2xl">{h.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{h.text}</div>
                <div className="mt-4">
                  {h.cta.external ? (
                    <a
                      href={h.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 items-center justify-center rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {h.cta.label}
                    </a>
                  ) : (
                    <Link
                      href={h.cta.href}
                      className="inline-flex h-8 items-center justify-center rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {h.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
