import Image from "next/image";
import { Loader2 } from "lucide-react";
import {
  APOIO_INSTITUCIONAL,
  COMMUNITY_PARTNERS,
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
  size?: "default" | "sm" | "smMd" | "md" | "lg";
  bgClassName?: string;
}) {
  const sizeClasses =
    size === "sm"
      ? "h-20 w-40 p-3"
      : size === "smMd"
        ? "h-[5.5rem] w-[11rem] p-3"
        : size === "md"
          ? "h-[6.5rem] w-[13rem] p-3.5"
          : size === "lg"
            ? "h-32 w-72 p-4"
            : "h-28 w-64 p-4";
  const imgMaxHeight =
    size === "sm"
      ? "max-h-12"
      : size === "smMd"
        ? "max-h-14"
        : size === "md"
          ? "max-h-[4.5rem]"
          : size === "lg"
            ? "max-h-24"
            : "max-h-20";
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
        className={`h-auto w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100 ${imgMaxHeight} ${imgClassName ?? ""}`}
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

          <div className="mb-8 flex flex-wrap justify-center gap-10">
            <div>
              <div className="mb-3 flex items-baseline justify-center gap-2">
                <h3 className="text-lg font-bold">Sede</h3>
              </div>
              <div className="flex justify-center">
                <PartnerLogo
                  name={FACULDADE_SEDE.name}
                  logo={FACULDADE_SEDE.logo}
                  href={FACULDADE_SEDE.href}
                  bgClassName="bg-white"
                  size="lg"
                />
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-baseline justify-center gap-2">
                <h3 className="text-lg font-bold">Apoio Institucional</h3>
              </div>
              <div className="flex justify-center">
                <PartnerLogo
                  name={APOIO_INSTITUCIONAL.name}
                  logo={APOIO_INSTITUCIONAL.logo}
                  href={APOIO_INSTITUCIONAL.href}
                  bgClassName="bg-white"
                  size="lg"
                  imgClassName="scale-125"
                />
              </div>
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
            <div className="grid grid-cols-[repeat(2,auto)] justify-center gap-3 sm:grid-cols-[repeat(3,auto)]">
              {PARTNER_LOGOS.map((partner) => (
                <PartnerLogo key={partner.name} name={partner.name} logo={partner.logo} href={partner.href} size="md" />
              ))}
              <LogoSlots count={SPONSOR_TIERS.parceiros - PARTNER_LOGOS.length} className="w-[13rem]" />
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
                  size="smMd"
                  bgClassName={partner.name === "Growdev" ? "bg-transparent" : "bg-white"}
                  imgClassName={partner.name === "Growdev" ? "scale-125" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="comunidades-parceiras" className="scroll-mt-24 pt-0 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Comunidade</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Hall de Comunidades Parceiras 🤝🏻</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Comunidades que caminham junto com o DevFestPoa26.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {COMMUNITY_PARTNERS.map((partner) => (
              <PartnerLogo
                key={partner.name}
                name={partner.name}
                logo={partner.logo}
                href={partner.href}
                imgClassName={
                  partner.name === "Stem Girls"
                    ? "scale-[2.2]"
                    : partner.name === "The AI Collective"
                      ? "scale-110"
                      : undefined
                }
              />
            ))}
            <LogoSlots count={COMMUNITY_PARTNERS_COUNT - COMMUNITY_PARTNERS.length} className="h-28 w-64" />
          </div>
        </div>
      </section>
    </>
  );
}
