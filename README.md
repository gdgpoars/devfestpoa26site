# DevFestPoa26 — site (Next.js)

Reescrita do site em Next.js 15 + React 19 + TypeScript + Tailwind v4, seguindo o mesmo
padrão de stack e organização do `dash-devfestpoa26` (shadcn/ui, `cn()` helper, App Router).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
app/                  → rotas (App Router). Cada pasta = uma URL (/sobre, /tema, etc.)
components/site/      → seções do site (Hero, Countdown, Footer, etc.)
components/ui/        → componentes de UI reutilizáveis no padrão shadcn (Button, etc.)
lib/content.ts         → todo o conteúdo textual do site (equivalente ao antigo data/content.js)
lib/utils.ts           → helper `cn()` para combinar classes Tailwind
app/globals.css        → tema (cores, fontes) em variáveis CSS + Tailwind
```

## O que mudou em relação ao site antigo (Vite + React Router)

- **Vite → Next.js (App Router)**: cada página agora é uma pasta em `app/` com um
  `page.tsx`, em vez de rotas declaradas em `App.jsx` com `react-router-dom`.
- **CSS puro → Tailwind v4**: o `index.css` de ~600 linhas foi substituído por classes
  utilitárias direto nos componentes, com o tema de cores (`--primary`, `--secondary`, etc.)
  centralizado em `app/globals.css`.
- **JSX → TSX**: todos os componentes foram tipados.
- **Padrão shadcn**: `components.json`, `lib/utils.ts` e `components/ui/button.tsx`
  seguem a mesma convenção do dashboard.

## Ajustes de conteúdo/UX aplicados nesta versão

- **Countdown**: agora é a primeira seção da home (antes vinha depois do Hero) e os números
  ficaram bem maiores.
- **"Evento em números"** (`Highlights`): seção com fundo destacado e tipografia maior para
  se destacar mais na página.
- **Explore o evento** (`ExploreCards`): cards reordenados por ordem de intenção de quem
  visita (Sobre → Tema → Experiência → Patrocinadores → FAQ → Ingressos), com numeração,
  tags de contexto e o card de Ingressos destacado visualmente como CTA final.
- **Footer**: removidos os 3 botões de redes sociais do canto direito do rodapé
  (🌐 / Instagram / LinkedIn). O link do site do GDG Porto Alegre continua disponível na
  coluna "Comunidade".

## Observações

- Não há integração com Firebase nesta versão — o dashboard usa Firebase para dados
  dinâmicos do evento, mas este é um site institucional estático, então não foi portado.
- As fontes usam a stack padrão do sistema (`Inter` se instalada localmente, com fallback
  para as fontes nativas do SO) em vez de `next/font/google`, para não depender de acesso
  externo ao Google Fonts durante o build.
