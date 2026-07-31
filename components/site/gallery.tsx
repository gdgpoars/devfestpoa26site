import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/content";

export function Gallery() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Galeria</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Um pouco do que já vivemos</h2>
          <p className="mt-2 text-sm text-muted-foreground">Registros da DevFestPoa25, feita pela e para a comunidade.</p>
        </div>
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
          {GALLERY_PHOTOS.map((p, i) => (
            <div
              key={p.src}
              className="group animate-float-soft mb-3 break-inside-avoid overflow-hidden rounded-xl border border-border bg-card"
              style={{ animationDelay: `${(i % 5) * 0.5}s`, animationDuration: `${5 + (i % 3)}s` }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
