const QUICK_LINKS = [
  { href: "#programacao", icon: "👻", label: "Programação" },
  { href: "#guia", icon: "🎒", label: "Guia prático" },
  { href: "#networking", icon: "🤝", label: "Networking" },
  { href: "#game", icon: "🎮", label: "DevFestPoaGame" },
  { href: "#devfestpoa25", icon: "📸", label: "DevFestPoa25" },
  { href: "#galeria", icon: "🖼️", label: "Galeria" },
  { href: "#video", icon: "▶️", label: "Vídeo" },
];

export function ExperienceHero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
        <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 text-xs font-semibold uppercase tracking-widest text-primary duration-700">
          Guia da pessoa participante
        </p>
        <h1 className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 mt-2 text-3xl font-extrabold duration-700 sm:text-4xl">
          Experiência da pessoa participante
        </h1>
        <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 mx-auto mt-3 max-w-xl text-muted-foreground duration-700">
          Tudo o que você precisa saber antes, durante e depois do evento — de onde chegar a onde fazer a
          próxima boa conversa.
        </p>

        <nav aria-label="Ir para seção" className="mt-8 flex flex-wrap justify-center gap-2">
          {QUICK_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:scale-125">
                {l.icon}
              </span>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
