import Link from "next/link";
import { TALKS } from "@/lib/schedule";

type Weight = "track" | "lg" | "md" | "sm";

const WORD_WEIGHT_CLASSES: Record<Weight, string> = {
  track: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl",
  lg: "text-lg font-bold text-foreground sm:text-xl",
  md: "text-base font-semibold text-foreground/70 sm:text-lg",
  sm: "text-sm font-medium text-muted-foreground sm:text-base",
};

// Deriva a nuvem de palavras das tags reais da grade de conteúdo: quanto mais
// conteúdos usam uma tag, maior e mais em destaque ela aparece.
function buildWordCloud() {
  const counts = new Map<string, number>();
  for (const talk of TALKS) {
    for (const tag of talk.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  const ranked = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  const total = ranked.length;

  const tiers: Record<Weight, string[]> = { track: [], lg: [], md: [], sm: [] };
  ranked.forEach(([label], rank) => {
    const pct = rank / total;
    const weight: Weight = pct < 0.18 ? "track" : pct < 0.48 ? "lg" : pct < 0.78 ? "md" : "sm";
    tiers[weight].push(label);
  });

  // Intercala os tamanhos (em vez de agrupar por tier) para a nuvem parecer orgânica.
  const order: Weight[] = ["track", "lg", "md", "sm"];
  const words: { label: string; weight: Weight }[] = [];
  let remaining = total;
  let i = 0;
  while (remaining > 0) {
    const weight = order[i % order.length];
    const label = tiers[weight].shift();
    if (label) {
      words.push({ label, weight });
      remaining--;
    }
    i++;
  }
  return words;
}

const WORD_CLOUD = buildWordCloud();

export function Program() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <span className="text-4xl">👻</span>
          <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            GRADE OFICIAL DISPONÍVEL
          </span>
          <h3 className="mt-3 text-2xl font-extrabold">Confira a programação do DevFestPoa26</h3>
          <p className="mt-2 text-muted-foreground">
            Palestras, workshops, mentorias e rodas de conversa que vão explorar criar, proteger e
            escalonar na era agêntica, organizados em trilhas para você montar sua própria jornada.
          </p>
          <Link
            href="/programacao"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Ver grade completa
          </Link>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {WORD_CLOUD.map((word, i) => (
              <span
                key={word.label}
                style={{
                  animationDelay: `${(i % 7) * 0.35}s`,
                  animationDuration: `${4.5 + (i % 4) * 0.5}s`,
                }}
                className={`animate-float-soft inline-block leading-none opacity-90 transition-opacity duration-300 hover:opacity-100 ${WORD_WEIGHT_CLASSES[word.weight]}`}
              >
                {word.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
