import { SYMPLA_URL } from "@/lib/content";

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-card/60 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Nem todo monstro mora debaixo da cama. Alguns estão no seu código.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Venha descobrir os seus no DevFestPoa26 — 31 de outubro, em Porto Alegre.
        </p>
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-13 items-center justify-center rounded-full bg-primary px-9 text-base font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(255,122,41,0.35)] transition-all hover:brightness-110"
        >
          Garantir meu ingresso
        </a>
      </div>
    </section>
  );
}
