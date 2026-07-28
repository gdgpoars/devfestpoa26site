const TAGS = ["Participantes", "Palestrantes", "Empresas", "Comunidades", "Todos os níveis de carreira"];

export function Networking() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Networking estruturado</p>
          <h2 className="mt-2 text-3xl font-extrabold">Conexões que vão além do crachá</h2>
          <p className="mt-4 text-muted-foreground">
            No DevFestPoa26, networking não é deixado por conta do acaso. Criamos momentos e
            espaços pensados para aproximar participantes, palestrantes, empresas e comunidades —
            porque as melhores oportunidades quase sempre começam numa boa conversa.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center" aria-hidden="true">
          <svg viewBox="0 0 300 300" className="w-56 sm:w-72">
            <g stroke="#ff7a29" strokeOpacity=".5" strokeWidth="1">
              <line x1="60" y1="60" x2="150" y2="120" />
              <line x1="150" y1="120" x2="240" y2="70" />
              <line x1="150" y1="120" x2="90" y2="200" />
              <line x1="150" y1="120" x2="220" y2="210" />
              <line x1="90" y1="200" x2="220" y2="210" />
              <line x1="60" y1="60" x2="90" y2="200" />
            </g>
            <g fill="#ff7a29">
              <circle cx="60" cy="60" r="6" />
              <circle cx="240" cy="70" r="5" />
            </g>
            <g fill="#9784ff">
              <circle cx="150" cy="120" r="8" />
              <circle cx="90" cy="200" r="6" />
              <circle cx="220" cy="210" r="6" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
