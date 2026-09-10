/**
 * Camada decorativa fixa: espectro de luzes suaves (tema Halloween) atrás de todo o
 * conteúdo da página. Puramente visual — aria-hidden, sem interação, respeita
 * prefers-reduced-motion (animate-drift já é desligado via globals.css).
 */
export function SpookyBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-drift absolute -left-32 top-[-10%] size-[26rem] rounded-full bg-primary/10 blur-3xl" />
      <div
        className="animate-drift absolute -right-24 top-[18%] size-[22rem] rounded-full bg-secondary/10 blur-3xl"
        style={{ animationDelay: "4s", animationDuration: "26s" }}
      />
      <div
        className="animate-drift absolute left-[8%] top-[52%] size-80 rounded-full bg-[#45d6c9]/[0.07] blur-3xl"
        style={{ animationDelay: "8s", animationDuration: "30s" }}
      />
      <div
        className="animate-drift absolute right-[12%] top-[72%] size-96 rounded-full bg-[#5be08a]/[0.06] blur-3xl"
        style={{ animationDelay: "2s", animationDuration: "24s" }}
      />
      <div
        className="animate-drift absolute left-[35%] top-[92%] size-72 rounded-full bg-[#f6cf4d]/[0.06] blur-3xl"
        style={{ animationDelay: "6s", animationDuration: "28s" }}
      />
    </div>
  );
}
