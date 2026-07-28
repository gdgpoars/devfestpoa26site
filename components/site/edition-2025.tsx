import { METRICS_2025 } from "@/lib/content";

export function Edition2025() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">DevFestPoa25</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Se você esteve no DevFestPoa25, sabe.</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            O DevFestPoa26 vem de uma comunidade que já construiu algo incrível.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {METRICS_2025.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="text-2xl font-extrabold text-gradient sm:text-3xl">{m.num}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
