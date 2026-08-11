import Image from "next/image";
import { Loader2 } from "lucide-react";
import {
  COMMUNITY_PARTNERS_COUNT,
  FACULDADE_SEDE,
  IMPULSO_PARTNERS,
  PARTNER_LOGOS,
  POWERED_BY_PARTNERS,
  SPONSOR_TIERS,
} from "@/lib/content";

function LogoSlots({ count, className }: { count: number; className?: string }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`flex h-20 flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-border bg-card text-center text-xs text-muted-foreground ${className ?? ""}`}
        >
          <Loader2 className="size-4 animate-spin" />
          Carregando...
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
  size = "default",
  bgClassName = "bg-card",
}: {
  name: string;
  logo: string;
  href: string;
  imgClassName?: string;
  size?: "default" | "sm";
  bgClassName?: string;
}) {
  const sizeClasses = size === "sm" ? "h-20 w-40 p-3" : "h-28 w-64 p-4";
  const imgMaxHeight = size === "sm" ? "max-h-12" : "max-h-20";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className={`logo-soft-glow animate-float-soft group flex items-center justify-center rounded-2xl border border-border transition-all hover:-translate-y-1 hover:border-primary/40 ${bgClassName} ${sizeClasses}`}
    >
      <Image
        src={logo}
        alt={name}
        width={240}
        height={100}
        className={`h-auto w-auto rounded-xl object-contain opacity-90 transition-opacity group-hover:opacity-100 ${imgMaxHeight} ${imgClassName ?? ""}`}
      />
    </a>
  );
}

export function Sponsors() {
  return (
    <>
      <section id="patrocinadores" className="scroll-mt-24 py-16 sm:py-20">
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
            <h3 className="mb-3 text-center text-lg font-bold">Parceiros</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {PARTNER_LOGOS.map((partner) => (
                <PartnerLogo key={partner.name} name={partner.name} logo={partner.logo} href={partner.href} size="sm" />
              ))}
              <LogoSlots count={SPONSOR_TIERS.parceiros - PARTNER_LOGOS.length} className="w-40" />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-3 text-center text-lg font-bold">Colaboradores</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              <LogoSlots count={SPONSOR_TIERS.colab} />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-3 text-center text-lg font-bold">Impulso</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {IMPULSO_PARTNERS.map((partner) => (
                <PartnerLogo
                  key={partner.name}
                  name={partner.name}
                  logo={partner.logo}
                  href={partner.href}
                  size="sm"
                  bgClassName="bg-white"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="comunidades-parceiras" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Comunidade</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Hall de Comunidades Parceiras 🤝🏻</h2>
            <p className="mt-2 text-sm text-muted-foreground">Comunidades que caminham junto com o DevFestPoa26.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            <LogoSlots count={COMMUNITY_PARTNERS_COUNT} />
          </div>
        </div>
      </section>
    </>
  );
}
