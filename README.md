# DevFestPoa26 — React

Site do DevFestPoa26 reescrito 100% em **React** (Vite + React Router),
mantendo o mesmo visual, conteúdo e comportamento do site original.

Cada item do menu agora é uma rota real de verdade (não uma âncora `#`):

| Menu            | Rota              | Página / componentes                                                                 |
|-----------------|-------------------|----------------------------------------------------------------------------------------|
| Início          | `/`               | Hero, contagem regressiva, destaques, cards de navegação, CTA final                   |
| Sobre           | `/sobre`          | Sobre o evento + pilares de conteúdo                                                  |
| Tema            | `/tema`           | Tema da edição 2026                                                                    |
| Experiência     | `/experiencia`    | Programação, guia do participante, networking, DevFestPoaGame, edição 2025, galeria, vídeo |
| Patrocinadores  | `/patrocinadores` | Patrocinadores e parceiros                                                             |
| FAQ             | `/faq`            | Perguntas frequentes                                                                    |
| Ingressos       | link externo      | Sympla (abre em nova aba, como no site original)                                       |

## Como rodar no VS Code

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  main.jsx              → bootstrap do React + BrowserRouter
  App.jsx                → definição das rotas
  index.css               → todo o CSS do site (design tokens, layout, animações)
  data/content.js          → todo o conteúdo editável (destaques, pilares, FAQ, métricas etc.)
  hooks/
    useScrollReveal.js      → replica o efeito de "revelar ao rolar" do site original
    usePageTitle.js          → define o <title> de cada página
  components/               → um componente por seção (Hero, Countdown, About, Theme,
                               Program, Experience, Networking, Game, Sponsors,
                               Edition2025, Gallery, Video, Faq, FinalCTA, Header, Footer, Layout)
  pages/                     → uma página por rota (Home, Sobre, Tema, Experiencia,
                               Patrocinadores, FaqPage), cada uma compondo os componentes acima
```

## Observações

- Todo o conteúdo textual (destaques, pilares, FAQ, métricas da edição 2025 etc.)
  fica centralizado em `src/data/content.js` — edite ali para atualizar o site
  sem mexer nos componentes.
- A contagem regressiva, o menu mobile, o header com efeito de scroll, a
  animação do canvas no Hero e o vídeo com carregamento sob demanda foram
  todos reimplementados com hooks do React (`useState`/`useEffect`/`useRef`),
  preservando o comportamento original.
- `npm run lint` roda o `oxlint` (linter incluído no template do Vite).
