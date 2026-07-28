import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
