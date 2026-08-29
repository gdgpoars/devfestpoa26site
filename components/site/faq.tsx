import { FAQS } from "@/lib/content";

export function Faq() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Perguntas frequentes</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Ainda com dúvidas?</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-card p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {f.q}
                <span className="ml-4 text-xl text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <div
                className="mt-3 text-sm text-muted-foreground [&_a]:text-primary [&_a]:underline [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_strong]:font-semibold [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: f.a }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
