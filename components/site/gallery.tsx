import { GALLERY_SLOTS } from "@/lib/content";

export function Gallery() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Galeria</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Um pouco do que já vivemos</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Array.from({ length: GALLERY_SLOTS }).map((_, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-border bg-card p-6 text-center text-xs text-muted-foreground ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <span className="text-2xl">📸</span>
              Foto DevFestPoa25
              <br />
              em breve
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
