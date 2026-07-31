import Image from "next/image";
import { EXPERIENCE } from "@/lib/content";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
      <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.86.5 3.68 1.451 5.27L2.05 22l4.86-1.373a9.958 9.958 0 0 0 5.094 1.394h.004c5.518 0 10.003-4.486 10.003-10.004C22.011 6.5 17.526 2.014 12.008 2h-.004Zm0 18.117h-.003a8.077 8.077 0 0 1-4.116-1.127l-.295-.176-3.135.886.837-3.058-.192-.315a8.084 8.084 0 0 1-1.24-4.324c0-4.468 3.635-8.103 8.147-8.103a8.05 8.05 0 0 1 5.735 2.383 8.05 8.05 0 0 1 2.376 5.727c0 4.468-3.636 8.104-8.114 8.104Z" />
    </svg>
  );
}

export function Experience() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Guia da pessoa participante</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Experiência da pessoa participante</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tudo o que você precisa saber antes, durante e depois do evento.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCE.map((x) => (
            <div key={x.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="text-2xl">{x.icon}</span>
              <h3 className="mt-3 flex items-center gap-2 font-bold">
                {x.title}
                {x.pending && (
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">
                    Em breve
                  </span>
                )}
              </h3>
              {x.text && <p className="mt-1 text-sm text-muted-foreground">{x.text}</p>}
              {x.extraHtml && (
                <p
                  className="mt-3 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: x.extraHtml }}
                />
              )}
              {x.whatsappUrl && (
                <a
                  href={x.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <WhatsAppIcon className="size-5 shrink-0" />
                  Contato oficial
                  {x.whatsapp && <span className="font-normal text-muted-foreground">{x.whatsapp}</span>}
                </a>
              )}
              {x.address && (
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">Endereço:</span> {x.address}
                </p>
              )}
              {x.mapQuery && (
                <div className="mt-3 overflow-hidden rounded-xl border border-border">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(x.mapQuery)}&output=embed`}
                    className="h-40 w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa: ${x.title}`}
                  />
                </div>
              )}
              {x.mapDirectionsUrl && (
                <a
                  href={x.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-center text-sm font-semibold text-primary hover:underline"
                >
                  Ver rota no Google Maps →
                </a>
              )}
              {x.parking && (
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">Estacionamento:</span> {x.parking}
                </p>
              )}
              {x.items.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {x.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-primary">·</span>
                      <span dangerouslySetInnerHTML={{ __html: it }} />
                    </li>
                  ))}
                </ul>
              )}
              {x.logo && (
                <div className="mt-4 w-24 overflow-hidden rounded-xl border border-border">
                  <Image
                    src={x.logo}
                    alt={x.logoAlt ?? x.title}
                    width={200}
                    height={200}
                    className="h-auto w-full object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
