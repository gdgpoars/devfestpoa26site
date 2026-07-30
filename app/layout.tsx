import type { Metadata, Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

const GTM_ID = "GTM-52JL87HH";

export const metadata: Metadata = {
  title: "DevFestPoa26 — Tecnologia, Comunidade e Futuro em Porto Alegre",
  description:
    "O DevFest de Porto Alegre: um dia de conteúdo técnico, comunidade e networking, feito pelas comunidades GDG Porto Alegre e GDG Caxias do Sul.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0c0d13",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className="antialiased bg-background text-foreground font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>

      <GoogleTagManager gtmId={GTM_ID} />
    </html>
  );
}