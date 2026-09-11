import Image from "next/image";
import { POWERED_BY_INTRO, POWERED_BY_PARTNERS } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";

export function PoweredBy() {
  return (
    <section id="powered-by" className="scroll-mt-24 border-t border-border bg-card/60 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          🚀 Quem impulsiona o evento
        </p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Powered by</h2>

        <div className="mx-auto mt-5 max-w-2xl space-y-4 text-sm text-muted-foreground sm:text-base">
          {POWERED_BY_INTRO.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {POWERED_BY_PARTNERS.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 100}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.name}
                className="card-glow group flex h-32 w-72 items-center justify-center rounded-2xl border border-border bg-card p-4"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={280}
                  height={110}
                  className="h-auto max-h-24 w-auto object-contain opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
