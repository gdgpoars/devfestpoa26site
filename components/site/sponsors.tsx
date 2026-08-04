import Image from "next/image";
import { FACULDADE_SEDE, POWERED_BY_PARTNERS, SPONSOR_TIERS } from "@/lib/content";

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

function PartnerLogo({
  name,
  logo,
  href,
  imgClassName,
}: {
  name: string;
  logo: string;
  href: string;
  imgClassName?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="logo-soft-glow animate-float-soft group flex h-28 w-64 items-center justify-center rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/40"
    >
      <Image
        src={logo}
        alt={name}
        width={240}
        height={100}
        className={`h-auto max-h-20 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100 ${imgClassName ?? ""}`}
      />
    </a>
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
          <div className="mb-3 flex items-baseline justify-center gap-2">
            <h3 className="text-lg font-bold">Faculdade Sede</h3>
          </div>
          <div className="flex justify-center">
            <PartnerLogo name={FACULDADE_SEDE.name} logo={FACULDADE_SEDE.logo} href={FACULDADE_SEDE.href} />
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-3 flex items-baseline justify-center gap-2">
            <h3 className="text-lg font-bold">Powered by</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {POWERED_BY_PARTNERS.map((partner) => (
              <PartnerLogo
                key={partner.name}
                name={partner.name}
                logo={partner.logo}
                href={partner.href}
                imgClassName={partner.name === "Dentsu World Services" ? "scale-125" : undefined}
              />
            ))}
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
