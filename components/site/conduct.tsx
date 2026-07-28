import { CONDUCT_CLOSING, CONDUCT_CONTACT, CONDUCT_INTRO, CONDUCT_SECTIONS, CONDUCT_UPDATED } from "@/lib/content";

const proseClass =
  "text-sm text-muted-foreground [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_strong]:font-semibold [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline";

export function Conduct() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Nossa comunidade</p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Código de Conduta — DevFestPoa26</h1>
          <p className="mt-2 text-sm text-muted-foreground">Última atualização: {CONDUCT_UPDATED}</p>
        </div>

        <div
          className={`${proseClass} mb-8 rounded-2xl border border-border bg-card p-6 sm:p-8`}
          dangerouslySetInnerHTML={{ __html: CONDUCT_INTRO }}
        />

        <div className="space-y-6">
          {CONDUCT_SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="mb-4 text-xl font-bold sm:text-2xl">{s.title}</h2>
              <div className={proseClass} dangerouslySetInnerHTML={{ __html: s.html }} />
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-center sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contatos oficiais</p>
          <p className="mt-3 text-sm text-muted-foreground">
            📞 Telefone/WhatsApp: <span className="text-foreground">{CONDUCT_CONTACT.phone}</span>
            <br />
            📧 E-mail:{" "}
            <a href={`mailto:${CONDUCT_CONTACT.email}`} className="text-primary underline">
              {CONDUCT_CONTACT.email}
            </a>
          </p>
        </div>

        <div
          className={`${proseClass} mt-8 text-center text-xs italic`}
          dangerouslySetInnerHTML={{ __html: CONDUCT_CLOSING }}
        />
      </div>
    </section>
  );
}
