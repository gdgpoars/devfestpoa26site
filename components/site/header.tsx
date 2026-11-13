import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b-2 border-border bg-background">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-2xl font-extrabold">
          <span className="text-primary">{"{"}</span>
          DevFestPoa
          <span className="text-primary">{"}"}</span>
        </Link>

        <span className="rounded-full border-2 border-border bg-card px-4 py-2 text-sm font-bold">
          Até 2027 🧉
        </span>
      </div>
    </header>
  );
}
