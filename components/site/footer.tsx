import { GDG_COMMUNITIES } from "@/lib/content";
import { Globe, Instagram, Linkedin, Link2, Mail } from "lucide-react";

const SOCIAL_ICONS = { instagram: Instagram, linkedin: Linkedin, globe: Globe, mail: Mail, link: Link2 };

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-center gap-2 text-2xl font-extrabold">
          <span className="text-primary">{"{"}</span>
          DevFestPoa
          <span className="text-primary">{"}"}</span>
        </div>
        <p className="mt-4 max-w-md text-muted-foreground">
          Organizado pelas comunidades GDG Porto Alegre e GDG Caxias do Sul.
          Já estamos preparando a próxima edição — nos vemos em 2027.
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {GDG_COMMUNITIES.map((community) => (
            <div key={community.name}>
              <h4 className="mb-3 text-sm font-bold">{community.name}</h4>
              <ul className="flex flex-wrap gap-3">
                {community.links.map((l) => {
                  const Icon = SOCIAL_ICONS[l.icon];
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("mailto:")
                          ? {}
                          : { target: "_blank", rel: "noopener noreferrer" })}
                        aria-label={`${l.label} do ${community.name}`}
                        className="flex size-11 items-center justify-center rounded-full border-2 border-border bg-card text-foreground transition-transform hover:-translate-y-0.5"
                      >
                        <Icon className="size-5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 h-px w-full bg-border" />

        <div className="mt-8 text-sm text-muted-foreground">
          © 2026 DevFestPoa · Feito com 🧉 pela comunidade
        </div>
      </div>
    </footer>
  );
}
