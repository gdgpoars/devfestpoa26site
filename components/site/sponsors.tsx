import { SPONSOR_TIERS } from "@/lib/content";

function LogoSlots({ count, label }: { count: number; label: string }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex h-20 items-center justify-center rounded-xl border border-dashed border-border bg-card text-center text-xs text-muted-foreground"
        >
          Logo
          <br />
          {label} {i + 1}
        </div>
      ))}
    </>
  );
}

export function Sponsors() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Patrocinadores &amp; parceiros</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Empresas que acreditam na comunidade</h2>
          <p className="mt-2 text-sm text-muted-foreground">E ajudam a tornar o DevFestPoa26 possível.</p>
        </div>

        <div className="mb-8">
          <div className="mb-3 flex items-baseline gap-2">
            <h3 className="text-lg font-bold">Powered by</h3>
            <span className="text-xs text-muted-foreground">— cota máxima</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <LogoSlots count={SPONSOR_TIERS.powered} label="em breve" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-lg font-bold">Parceiros</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <LogoSlots count={SPONSOR_TIERS.parceiros} label="em breve" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-lg font-bold">Colaboradores</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            <LogoSlots count={SPONSOR_TIERS.colab} label="em breve" />
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Quer patrocinar o DevFestPoa26? Fale com a organização pelos canais oficiais do GDG Porto Alegre.
        </p>
      </div>
    </section>
  );
}
