# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Institutional website for DevFestPoa26 (GDG Porto Alegre / GDG Caxias do Sul). A static
marketing/informational site — no backend, no Firebase, no dynamic data. This is a Next.js
rewrite of a previous Vite + React Router site (`dash-devfestpoa26` is the sibling dashboard
project that *does* use Firebase; this repo intentionally does not).

## Commands

```bash
npm install
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm start        # run production build
npm run lint     # eslint .
```

There is no test suite in this repo. There is no ESLint config file checked in and `eslint`
is not in `devDependencies`, so `npm run lint` will need config/deps added before it works.

## Stack

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind v4, following the same
conventions (shadcn/ui, `cn()` helper) as the sibling `dash-devfestpoa26` dashboard.

## Architecture

- `app/` — routes via App Router. Each folder is a URL (`/sobre`, `/tema`, `/experiencia`,
  `/patrocinadores`, `/faq`); every page is a thin composition of section components from
  `components/site/`. `app/layout.tsx` wraps every page with `SiteHeader` and `SiteFooter`
  and sets global `<html>`/metadata (site is dark-theme only, `lang="pt-BR"`).
- `components/site/` — one component per page section (Hero, Countdown, Highlights,
  ExploreCards, FAQ, Sponsors, etc.). Most are server components; only ones needing
  interactivity/browser APIs (countdown timer, header menu, footer, hero animation, video)
  are `"use client"`.
- `components/ui/` — shadcn-style reusable primitives (currently just `Button`, using `cva`
  for variants). Add new shared UI primitives here following the same `cva` + `cn()` pattern.
- `lib/content.ts` — **single source of truth for all site copy** (Portuguese text, dates,
  FAQ entries, links like `SYMPLA_URL`, the event date `EVENT_TARGET_ISO`). When updating
  event details, dates, or copy, edit this file rather than hardcoding strings in components.
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) for merging conditional Tailwind
  classes; used throughout instead of manual `className` string concatenation.
- `app/globals.css` — theme tokens as CSS variables (`--background`, `--primary`,
  `--secondary`, etc.) consumed via Tailwind's `@theme inline` block, plus a couple of
  utility classes (`.reveal`/`.in-view`) used for scroll-reveal animations.

## Conventions

- Path alias `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/ui/button`,
  `@/lib/content`.
- No `next/font/google` — fonts fall back to system stack (`Inter` if locally installed) so
  the build doesn't depend on external network access to Google Fonts.
- shadcn config (`components.json`): style `new-york`, base color `neutral`, icon library
  `lucide`, no Tailwind prefix.
