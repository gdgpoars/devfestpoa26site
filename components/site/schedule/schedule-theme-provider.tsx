"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Moon, Sun } from "lucide-react";
import { HalloweenBackground } from "./halloween-background";

export function ScheduleThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("schedule-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("schedule-theme", theme);
  }, [theme]);

  return (
    <div
      data-schedule-theme={theme}
      className="relative isolate bg-background text-foreground transition-colors"
    >
      <HalloweenBackground />
      <button
        type="button"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
        className="fixed right-4 top-20 z-40 inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 sm:right-6"
      >
        {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
      </button>
      {children}
    </div>
  );
}
