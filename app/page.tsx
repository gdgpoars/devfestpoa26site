import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

const FORM_URL = "https://forms.gle/56DvG7MR6ARXjSxB7";

export const metadata: Metadata = pageMetadata({
  title: "Já estamos preparando a próxima edição",
  description:
    "Já estamos preparando a próxima edição do DevFest Porto Alegre. Deixe seu contato para saber antes de todo mundo quando ela for anunciada.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <span className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-foreground">
          DevFest Porto Alegre
        </span>

        <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Nos vemos em <span className="text-gradient">2027</span>! 🧉
        </h1>

        <p className="max-w-xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
          Já estamos preparando a próxima edição. Enquanto isso, deixa seu
          contato que você fica sabendo de tudo antes de todo mundo.
        </p>

        <div className="mt-2 flex flex-col items-center gap-3">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse group inline-flex h-13 items-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(255,122,41,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Sparkles className="size-5 transition-transform duration-300 group-hover:scale-110" />
            Saiba antes de todo mundo
          </a>
          <span className="text-sm text-muted-foreground">
            Preencha o formulário rápido e a gente te avisa em primeira mão.
          </span>
        </div>
      </div>
    </div>
  );
}
