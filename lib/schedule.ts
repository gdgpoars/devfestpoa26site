// Grade de conteúdo do DevFestPoa26.
// Fonte: grade oficial de curadoria (palestras submetidas e aprovadas pela organização).
// Dados sujeitos a pequenos ajustes até a divulgação final da programação.

export type ColorPair = { bg: string; fg: string };

/** Clareia (percent > 0) ou escurece (percent < 0) uma cor hex, misturando com branco/preto. */
export function shade(hex: string, percent: number): string {
  const num = parseInt(hex.slice(1), 16);
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;
  const target = percent < 0 ? 0 : 255;
  const p = Math.min(Math.abs(percent), 1);
  const mix = (c: number) => Math.round((target - c) * p) + c;
  return `#${[mix(r), mix(g), mix(b)].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

/** Degradê leve para blocos coloridos por inteiro (grade completa). */
export function solidGradient(pair: ColorPair): string {
  return `linear-gradient(150deg, ${shade(pair.bg, 0.22)} 0%, ${pair.bg} 55%, ${shade(pair.bg, -0.14)} 100%)`;
}

/** Degradê leve para cards neutros, com um leve tingimento na cor do conteúdo. */
export function cardWashGradient(pair: ColorPair): string {
  return `linear-gradient(150deg, var(--card) 0%, ${pair.bg}1f 100%)`;
}

/** Fundo "vidro" translúcido para cards modernos: mistura o card com transparência e um leve tom da cor do conteúdo. */
export function glassCardBackground(pair: ColorPair): string {
  return `linear-gradient(160deg, color-mix(in srgb, var(--card) 88%, transparent) 0%, color-mix(in srgb, ${pair.bg} 16%, var(--card)) 100%)`;
}

export type TrackId =
  | "salao-comunal"
  | "trilha-magia"
  | "trilha-lua-cheia"
  | "trilha-sentinela"
  | "trilha-alquimia"
  | "covil";

export type Track = {
  id: TrackId;
  name: string;
  emoji: string;
  description: string;
  room?: string;
  color: ColorPair;
};

export const TRACKS: Track[] = [
  {
    id: "salao-comunal",
    name: "Salão Comunal",
    emoji: "🏰",
    description: "O palco principal do DevFestPoa26.",
    color: { bg: "#ff8a3d", fg: "#2b0f00" },
  },
  {
    id: "trilha-magia",
    name: "Trilha Magia",
    emoji: "🪄",
    description: "A magia de um ótimo design e mobile eficiente.",
    room: "Sala 408",
    color: { bg: "#b18cff", fg: "#1f0f42" },
  },
  {
    id: "trilha-lua-cheia",
    name: "Trilha Lua Cheia",
    emoji: "🌕",
    description: "Transformação, ciclos e crescimento.",
    room: "Sala 406",
    color: { bg: "#f6cf4d", fg: "#3a2900" },
  },
  {
    id: "trilha-sentinela",
    name: "Trilha Sentinela",
    emoji: "🕯️",
    description: "Vigilância, proteção e confiabilidade.",
    room: "Sala 409",
    color: { bg: "#45d6c9", fg: "#00312c" },
  },
  {
    id: "trilha-alquimia",
    name: "Trilha Alquimia",
    emoji: "⚗️",
    description: "Testar e criar.",
    room: "Sala 410",
    color: { bg: "#5be08a", fg: "#04331a" },
  },
  {
    id: "covil",
    name: "Covil",
    emoji: "🦇",
    description: "Conversa, networking, evolução.",
    room: "Sala 401",
    color: { bg: "#ff6a88", fg: "#38000f" },
  },
];

export const TRACK_BY_ID: Record<TrackId, Track> = Object.fromEntries(
  TRACKS.map((t) => [t.id, t]),
) as Record<TrackId, Track>;

export type FormatId =
  | "palestra"
  | "palestra-patrocinada"
  | "workshop"
  | "mentoria"
  | "laboratorio"
  | "roda-de-conversa";

export const FORMATS: Record<FormatId, { label: string; color: ColorPair }> = {
  palestra: { label: "Palestra", color: { bg: "#5aa2ff", fg: "#001238" } },
  "palestra-patrocinada": { label: "Palestra patrocinada", color: { bg: "#ff6fb8", fg: "#380018" } },
  workshop: { label: "Workshop", color: { bg: "#ff9d4d", fg: "#331200" } },
  mentoria: { label: "Mentoria", color: { bg: "#ffd23f", fg: "#332600" } },
  laboratorio: { label: "Laboratório", color: { bg: "#9b8cff", fg: "#180f42" } },
  "roda-de-conversa": { label: "Roda de conversa", color: { bg: "#ff6b6b", fg: "#330000" } },
};

export type Level = "Iniciante" | "Intermediário" | "Todos os níveis";

export const LEVEL_COLORS: Record<Level, ColorPair> = {
  Iniciante: { bg: "#c9f4dc", fg: "#0d5c33" },
  Intermediário: { bg: "#ffe6b3", fg: "#7a4b00" },
  "Todos os níveis": { bg: "#dcdcff", fg: "#33308a" },
};

export type Speaker = { name: string; linkedin: string | null };

export type Talk = {
  id: string;
  title: string;
  format: FormatId;
  level: Level | null;
  tags: string[];
  speakers: Speaker[];
  summary: string | null;
  track: TrackId;
  start: number; // minutos desde 00:00
  end: number;
  hasDetails: boolean;
};

export function formatTime(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
}

export function formatTimeRange(start: number, end: number): string {
  return `${formatTime(start)}–${formatTime(end)}`;
}

/** Converte minutos desde 00:00 em um horário ISO completo no dia do evento (31/10/2026, -03:00). */
export function toISODateTime(min: number): string {
  const h = String(Math.floor(min / 60)).padStart(2, "0");
  const m = String(min % 60).padStart(2, "0");
  return `2026-10-31T${h}:${m}:00-03:00`;
}

export type Break = { id: string; label: string; start: number; end: number; sub?: string };

export const BREAKS: Break[] = [
  {
    id: "credenciamento",
    label: "Credenciamento e Welcome Coffee",
    start: 495,
    end: 540,
    sub: "Incluso em todos os tipos de ingressos",
  },
  { id: "abertura", label: "Abertura", start: 540, end: 555 },
  { id: "almoco", label: "Almoço", start: 735, end: 810 },
  {
    id: "coffee",
    label: "Coffee break",
    start: 930,
    end: 975,
    sub: "Incluso em todos os tipos de ingressos",
  },
  { id: "encerramento", label: "Encerramento", start: 1020, end: 1040 },
];

export const TALKS: Talk[] = [
  {
    id: "t062",
    title: "Conteúdo em breve",
    format: "palestra",
    level: "Todos os níveis",
    tags: [],
    speakers: [{ name: "Elemar Jr.", linkedin: "https://www.linkedin.com/in/elemarjr/" }],
    summary: "Conteúdo em breve.",
    track: "salao-comunal",
    start: 555,
    end: 610,
    hasDetails: true,
  },
  {
    id: "t008",
    title: "Grandes mentes pensam igual.",
    format: "palestra",
    level: "Intermediário",
    tags: ["Mobile", "Dados"],
    speakers: [{ name: "Ricardo da Silva Ogliari", linkedin: "https://www.linkedin.com/in/ricardoogliari/" }],
    summary:
      "Minha proposta é mostrar como a programação declarativa tomou de assalto o mundo mobile. Pretendo fazer isso mostrando como conceitos-chave, como hosting, stateless e stateful, são compartilhados entre as principais plataformas mobile contemporâneas — notadamente Kotlin Nativo, KMP/CMP, SwiftUI, Flutter e React Native. O objetivo é mostrar como essa abordagem unificada facilita nossa vida e como podemos pensar aplicativos arquiteturalmente parecidos, no que tange à construção e à absorção de dados nas telas das nossas aplicações.",
    track: "trilha-magia",
    start: 555,
    end: 600,
    hasDetails: true,
  },
  {
    id: "t006",
    title:
      "Mulheres na Tecnologia: Construindo uma Trajetória de Impacto na Jornada do Cliente e Liderança de Projetos",
    format: "palestra",
    level: "Iniciante",
    tags: ["IA / Agentes", "Carreira", "Liderança / Gestão", "Diversidade", "Comunidade"],
    speakers: [{ name: "Michele dos Santos Scheffel", linkedin: "https://www.linkedin.com/in/michele-scheffel" }],
    summary:
      "Um compartilhamento dos aprendizados de mais de 10 anos de trajetória em tecnologia, com foco na transformação do relacionamento com clientes e na liderança de projetos de implantação. Vamos explorar como metodologias híbridas e o uso prático de OKRs ajudam a organizar etapas de projeto, superar desafios de gestão e impulsionar resultados sustentáveis — além de um espaço dedicado ao fortalecimento do protagonismo feminino no mercado de tecnologia, com ferramentas para desenvolvimento de carreira, superação de barreiras e conexões.",
    track: "trilha-lua-cheia",
    start: 555,
    end: 600,
    hasDetails: true,
  },
  {
    id: "t010",
    title: "Deploy sem barreira: Module Federation na prática",
    format: "palestra",
    level: "Intermediário",
    tags: ["Mobile", "Arquitetura", "DevOps / SRE"],
    speakers: [{ name: "Luiz Rebelatto", linkedin: "https://www.linkedin.com/in/luizgabrielrebelatto/" }],
    summary:
      "Como uma aplicação consegue importar um componente que não existe em seu próprio bundle? Module Federation torna possível expor, descobrir e executar módulos produzidos por builds independentes durante o runtime.",
    track: "trilha-magia",
    start: 825,
    end: 870,
    hasDetails: true,
  },
  {
    id: "t054",
    title:
      "AI Agents: SDD - Spec Driven Development no SDLC - Ciclo de desenvolvimento de software e Graph Engineering",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Arquitetura", "Qualidade / Testes", "Produto", "Legado"],
    speakers: [{ name: "Sabrina Santos da Silva", linkedin: "https://www.linkedin.com/in/sabrina-santos-architect/" }],
    summary:
      "Um relato de experiência sobre a modernização de APIs legadas para uma arquitetura moderna e segura. O grande diferencial do projeto foi a aplicação prática de Spec-Driven Development (SDD) orquestrada via Cursor e agentes de Inteligência Artificial com loop engineering, transformando o ciclo de vida de desenvolvimento (SDLC). A abordagem utilizou uma estrutura de \"Harness Engineering\" — uma camada de fundação que garante a confiabilidade dos artefatos gerados por IA por meio de guardrails rígidos, contratos claros e revisão humana ativa (human-in-the-loop).",
    track: "trilha-alquimia",
    start: 555,
    end: 600,
    hasDetails: true,
  },
  {
    id: "t031",
    title:
      "Mentoria para Tech Leads: o que realmente sustenta um time de engenharia de alta performance",
    format: "mentoria",
    level: "Intermediário",
    tags: ["IA / Agentes", "Liderança / Gestão", "Qualidade / Testes"],
    speakers: [{ name: "Gabriel Schmitt Kohlrausch", linkedin: "https://www.linkedin.com/in/gabrielsk/" }],
    summary:
      "Se um time não performa, quase sempre alguém sugere mais rito, mais controle ou mais pressão — quase nunca esse é o melhor caminho. Nesta mentoria, a proposta é discutir com Tech Leads o que realmente sustenta um time de engenharia de alta performance: não heroísmo, não modismo de gestão, mas consciência situacional suficiente para reduzir incerteza e melhorar a qualidade da decisão, reduzindo atrito, custo e risco da mudança ao longo da evolução do software.",
    track: "covil",
    start: 570,
    end: 630,
    hasDetails: true,
  },
  {
    id: "t061",
    title: "Quem é a máquina? Construa em 90 minutos o impostor que vai enganar o DevFest inteiro",
    format: "workshop",
    level: "Intermediário",
    tags: ["IA / Agentes", "Mobile", "Segurança"],
    speakers: [{ name: "Gabul", linkedin: null }],
    summary:
      "Toda demo de IA que você já viu mostra o modelo acertando. Este workshop faz ele mentir — e coloca o evento inteiro para trabalhar tentando descobrir onde está a mentira. O jogo funciona assim: uma pergunta aparece, várias pessoas respondem, e o Gemini também responde, misturado com o resto — todo mundo vota em qual resposta veio da máquina. Em 90 minutos você vai construir o cliente desse jogo em Flutter usando o Google Antigravity, conectar tudo ao Gemini via Firebase AI Logic e publicar no Firebase Hosting.",
    track: "trilha-sentinela",
    start: 595,
    end: 685,
    hasDetails: true,
  },
  {
    id: "t048",
    title: "Design System + IA: construindo interfaces Flutter com precisão",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Mobile", "Arquitetura", "Dados"],
    speakers: [{ name: "Gabriel Bronzatti Moro", linkedin: "https://www.linkedin.com/in/gabrielbronzattimoro15031994/" }],
    summary:
      "Como utilizar IA como parte do processo de implementação de um Design System em Flutter, indo além da simples geração de código: fornecer à IA especificações de design, tokens, componentes e referências visuais para construir componentes cada vez mais próximos do resultado esperado. Serão abordados como estruturar o contexto do Design System para a IA, transformar especificações em componentes Flutter, identificar diferenças entre design e implementação, e iterar entre design → código → resultado.",
    track: "trilha-magia",
    start: 600,
    end: 645,
    hasDetails: true,
  },
  {
    id: "t026",
    title: "A IA sabe programar. Mas ela sabe o que deveria ser construído?",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Arquitetura", "Qualidade / Testes", "Produto"],
    speakers: [{ name: "Gabriella Selbach Staniecki", linkedin: "https://www.linkedin.com/in/gabriella-selbach/" }],
    summary:
      "A inteligência artificial está transformando a engenharia de software em uma velocidade sem precedentes: já escreve código, cria testes, documenta e sugere arquiteturas. Mas se construir software está cada vez mais fácil, uma pergunta se torna mais importante: estamos construindo a coisa certa? A partir dos conceitos do livro O Engenheiro de Software com Mentalidade de Produto, vamos explorar por que essa mentalidade está se tornando uma competência essencial.",
    track: "trilha-lua-cheia",
    start: 600,
    end: 645,
    hasDetails: true,
  },
  {
    id: "t055",
    title: "Build. Scale. Breathe. — Performance sustentável para quem vive de tecnologia.",
    format: "palestra",
    level: "Todos os níveis",
    tags: ["IA / Agentes", "Carreira", "Bem-estar"],
    speakers: [{ name: "Morgana Basso", linkedin: "https://www.linkedin.com/in/morgana-basso-245b36a0" }],
    summary:
      "Em tecnologia, estamos acostumados a pensar em performance, escala, velocidade e evolução constante. Mas existe uma pergunta que raramente fazemos: a forma como estamos construindo nossas carreiras hoje é sustentável no longo prazo? Uma reflexão prática sobre saúde mental, bem-estar e sustentabilidade na carreira em tecnologia, a partir de conceitos da Psicologia Positiva e da Psicologia do Trabalho, como o equilíbrio entre demandas e recursos e o job crafting.",
    track: "salao-comunal",
    start: 610,
    end: 650,
    hasDetails: true,
  },
  {
    id: "t056",
    title:
      "O caminho curto que a gente descobriu do jeito longo - IA no desenvolvimento mobile: por onde começar e o que evitar",
    format: "palestra",
    level: "Todos os níveis",
    tags: ["IA / Agentes", "Mobile", "Carreira", "Comunidade"],
    speakers: [
      { name: "Júlia Martins", linkedin: "https://www.linkedin.com/in/j%C3%BAlia-martins-9a1830248" },
      { name: "Laís Silva", linkedin: "https://www.linkedin.com/in/laís-pinto" },
    ],
    summary:
      "Como está sendo a trajetória de duas profissionais imersas no mundo de IA aplicada ao desenvolvimento mobile: a diferença entre o desenvolvimento antes e depois da IA, os gaps encontrados pelo caminho, e tópicos como skills, MCPs e o que fazer (e não fazer) ao utilizar IA no dia a dia.",
    track: "trilha-magia",
    start: 645,
    end: 690,
    hasDetails: true,
  },
  {
    id: "t018",
    title: "Release Management: Muito Além do Deploy",
    format: "palestra",
    level: "Intermediário",
    tags: ["Liderança / Gestão", "Segurança", "DevOps / SRE"],
    speakers: [{ name: "Nathalia Karnas", linkedin: "https://www.linkedin.com/in/nathalia-karnas/" }],
    summary:
      "CI/CD automatiza grande parte do caminho até a produção, mas não elimina os desafios de entregar software com segurança e previsibilidade. Uma exploração do que acontece além da automação: dependências entre equipes, governança, gestão de riscos, comunicação e os custos de uma release mal planejada, a partir de experiências práticas em ambientes corporativos de grande escala.",
    track: "trilha-lua-cheia",
    start: 645,
    end: 690,
    hasDetails: true,
  },
  {
    id: "t067",
    title: "Roda de conversa sobre Produto",
    format: "roda-de-conversa",
    level: "Todos os níveis",
    tags: ["Produto", "Comunidade"],
    speakers: [
      { name: "Yasmin Stivelman", linkedin: "https://www.linkedin.com/in/yasmin-stivelman/" },
      { name: "Bibiana Fontanive Diogo", linkedin: "https://www.linkedin.com/in/bibiana-fontanive-diogo/" },
    ],
    summary: "Descrição em breve.",
    track: "covil",
    start: 645,
    end: 695,
    hasDetails: true,
  },
  {
    id: "t036",
    title: "Entre escolhas e ameaças: o fator humano na cibersegurança.",
    format: "palestra",
    level: "Todos os níveis",
    tags: ["IA / Agentes", "Segurança", "Dados"],
    speakers: [{ name: "Janine Veigas Farias", linkedin: "https://www.linkedin.com/in/janine-veigas-farias-b73a232ba/" }],
    summary:
      "Uma reflexão sobre como nossas próprias escolhas e comportamentos no ambiente digital podem influenciar diretamente nossa segurança. A partir de situações do cotidiano, serão abordados temas como oversharing, engenharia social, OSINT, stalking digital, doxxing, vazamentos de dados e inteligência artificial — mostrando como informações aparentemente inofensivas podem ser combinadas para criar ataques personalizados.",
    track: "trilha-sentinela",
    start: 555,
    end: 595,
    hasDetails: true,
  },
  {
    id: "salao-1050-tbd",
    title: "Conteúdo em breve",
    format: "palestra",
    level: null,
    tags: [],
    speakers: [],
    summary: "Conteúdo em breve.",
    track: "salao-comunal",
    start: 650,
    end: 690,
    hasDetails: true,
  },
  {
    id: "t045",
    title: "Teu 1º RAG de Bolso: construindo com Clean Code para Agentes",
    format: "workshop",
    level: "Iniciante",
    tags: ["IA / Agentes", "Comunidade"],
    speakers: [{ name: "Ulises Bravo", linkedin: "https://www.linkedin.com/in/ulisesbravo/" }],
    summary:
      "Todo mundo já usou um chat de IA. Poucas pessoas já escreveram o mecanismo que faz esse chat responder com base em documentos próprios — e menos gente ainda escreveu isso de um jeito sustentável. Quem puder participar faz fork de um repositório-esqueleto e constrói, do zero e ao vivo, um RAG de bolso em Node.js, com práticas de Clean Code para Agentes validadas em produção.",
    track: "trilha-alquimia",
    start: 660,
    end: 720,
    hasDetails: true,
  },
  {
    id: "t052",
    title: "Confia, mas confere - Capture the flag e o básico de segurança",
    format: "laboratorio",
    level: "Iniciante",
    tags: ["IA / Agentes", "Segurança"],
    speakers: [
      { name: "Gabriel Dias", linkedin: "https://www.linkedin.com/in/gabrieldias102" },
      { name: "Mikhael Groschitz", linkedin: "https://linkedin.com/in/mikhael-groschitz" },
    ],
    summary:
      "Segurança tem fama de ser uma lista infinita de coisas para saber. Não é: se você olhar o que realmente aparece em produção, quase tudo cai em cinco famílias — e todas respondem à mesma pergunta: em quem esse código confiou sem conferir? Neste laboratório, percorremos as cinco famílias uma por uma, com o código errado e o código certo lado a lado: controle de acesso quebrado, falhas de criptografia, injeção, configuração e segredos expostos, e falhas de autenticação.",
    track: "trilha-sentinela",
    start: 685,
    end: 735,
    hasDetails: true,
  },
  {
    id: "t022",
    title: "On-Device vs. Cloud: quando (e como) rodar modelos localmente para reduzir latência e custos",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Mobile", "Bem-estar", "Cloud"],
    speakers: [{ name: "Olivar Tamele", linkedin: "https://www.linkedin.com/in/olivar-neemias/" }],
    summary:
      "Integrar IA em apps mobile tornou-se trivial, mas torná-la sustentável e performática é o verdadeiro desafio de engenharia em 2026. Uma imersão na matriz de decisão entre processamento em nuvem e execução local (on-device), com métricas reais de latência, consumo de bateria e o impacto financeiro de \"queimar tokens\" em APIs externas — e estratégias híbridas de semantic routing.",
    track: "salao-comunal",
    start: 690,
    end: 735,
    hasDetails: true,
  },
  {
    id: "t046",
    title: "Além do console.log: telemetria de ponta a ponta com Angular e .NET",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Frontend"],
    speakers: [{ name: "Esmael Winter", linkedin: "https://linkedin.com/in/esmael-winter" }],
    summary:
      "Os principais conceitos de telemetria, com exemplos práticos de implementação em frontend Angular e backend .NET utilizando OpenTelemetry e integração com ferramentas de monitoramento — vantagens, ganhos e boas práticas de adoção.",
    track: "trilha-magia",
    start: 690,
    end: 735,
    hasDetails: true,
  },
  {
    id: "t011",
    title: "Escalonando o Impacto: Gestão de Engenharia, Maturidade e Produtividade na Era Agêntica",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Liderança / Gestão", "Arquitetura"],
    speakers: [{ name: "Guilherme Soares", linkedin: "https://www.linkedin.com/in/guilherme-soares-se/" }],
    summary:
      "Em um cenário onde a inteligência artificial e novas ferramentas aceleram o desenvolvimento, o principal desafio deixa de ser apenas tecnológico e passa a ser organizacional. Escalar soluções — especialmente em ambientes complexos como o financeiro e o agro — exige primeiro escalar a maturidade do time.",
    track: "trilha-lua-cheia",
    start: 690,
    end: 735,
    hasDetails: true,
  },
  {
    id: "t063",
    title: "Design System não é uma biblioteca: é o contrato entre design e código",
    format: "palestra",
    level: "Intermediário",
    tags: ["Frontend", "Arquitetura", "IA / Agentes"],
    speakers: [{ name: "Rafael Nunes", linkedin: "https://www.linkedin.com/in/rafaelasn/" }],
    summary:
      "Muitas equipes tratam o Design System como uma coleção de componentes. O problema começa quando Figma e código representam o mesmo produto com nomes, estados e regras diferentes, e cada implementação precisa interpretar o que ficou pelo caminho. A proposta é enxergar o Design System como um acordo compartilhado entre design e engenharia, apresentando os Component Contracts como a materialização técnica desse acordo: artefatos estruturados que centralizam a intenção de um componente para que ela possa ser implementada, versionada e verificada em diferentes plataformas. A partir da anatomia de um botão, serão explorados elementos como propriedades, tokens, estados, comportamento e acessibilidade, conectando essa estrutura ao conceito de Self-Aware Design System.",
    track: "salao-comunal",
    start: 820,
    end: 860,
    hasDetails: true,
  },
  {
    id: "t013",
    title: "Quando Engenharia, Produto e Negócio Colidem: O Papel do Líder Técnico",
    format: "palestra",
    level: "Todos os níveis",
    tags: ["IA / Agentes", "Liderança / Gestão", "Qualidade / Testes", "Produto"],
    speakers: [{ name: "Valéria Baptista", linkedin: "https://www.linkedin.com/in/valeriabaptista/" }],
    summary:
      "Em muitas organizações, conflitos entre engenharia, produto e negócio são inevitáveis, e o líder técnico exerce um papel fundamental como mediador dessas decisões. Frameworks e abordagens práticas para transformar conflitos em decisões estratégicas, equilibrando qualidade técnica, prazos e objetivos de negócio.",
    track: "trilha-lua-cheia",
    start: 825,
    end: 860,
    hasDetails: true,
  },
  {
    id: "t066",
    title: "A Autópsia da IA: Como a máquina realmente enxerga, pensa e toma decisões",
    format: "workshop",
    level: "Todos os níveis",
    tags: ["IA / Agentes"],
    speakers: [{ name: "Vitor Britis", linkedin: "https://www.linkedin.com/in/vittorbritis/" }],
    summary:
      "Todo mundo usa inteligência artificial todos os dias, mas quase ninguém sabe o que acontece por trás da tela. Nesta oficina, cada etapa é comandada por você, no próprio notebook ou celular, sem instalar nada e sem precisar de matemática avançada. Como ela enxerga: veja sua imagem virar números e descubra como o computador encontra bordas e reconhece objetos. Como ela pensa: converse com sua própria IA e acompanhe, em tempo real, como ela calcula qual palavra vem a seguir. Como ela toma decisões: construa seu próprio modelo em poucos segundos, escolhendo quais informações ele usa para aprender.",
    track: "trilha-sentinela",
    start: 825,
    end: 885,
    hasDetails: true,
  },
  {
    id: "t040",
    title: "DJ Verbosa - Compilando batidas",
    format: "workshop",
    level: "Iniciante",
    tags: ["Frontend", "Comunidade", "Criativo / Arte"],
    speakers: [{ name: "Francielli Pinheiro Dias", linkedin: "https://www.linkedin.com/in/francielli-pinheiro-dias-32b516187/" }],
    summary:
      "Uma sessão 100% prática e no estilo \"siga o mestre\" para explorar live coding musical, com a teoria reduzida ao mínimo, usando JavaScript para codar as batidas. Base principal: o Strudel, ferramenta que roda direto no navegador, sem barreira de setup — e uma passagem rápida por FoxDot, TidalCycles e as tendências do algorave ao redor do mundo.",
    track: "trilha-alquimia",
    start: 825,
    end: 870,
    hasDetails: true,
  },
  {
    id: "t068",
    title: "Roda de conversa: carreira em tech, de júnior a sênior+",
    format: "roda-de-conversa",
    level: "Todos os níveis",
    tags: ["Carreira", "Comunidade"],
    speakers: [
      { name: "Priscila Rachevsky", linkedin: "https://www.linkedin.com/in/priscila-rachevsky/" },
      { name: "Isadora Possebon", linkedin: "https://www.linkedin.com/in/isadorapossebon/" },
      { name: "Eduardo Pereira", linkedin: "https://www.linkedin.com/in/egpereira/" },
      { name: "Daniel Castro", linkedin: "https://www.linkedin.com/in/odanieldcs/" },
    ],
    summary:
      "Um bate-papo aberto sobre carreira em tech, do primeiro estágio ao cargo sênior+. Com participantes que já atuaram em empresas de produto e de consultoria, nacionais e multinacionais, vamos trocar experiências reais sobre como os papéis, desafios e expectativas mudam em cada contexto — e em cada fase da carreira.",
    track: "covil",
    start: 825,
    end: 875,
    hasDetails: true,
  },
  {
    id: "t029",
    title:
      "Pessoas contam histórias. O código conta fatos: como tomar decisões melhores a partir dos sinais da engenharia",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Arquitetura", "Qualidade / Testes"],
    speakers: [{ name: "Gabriel Schmitt Kohlrausch", linkedin: "https://www.linkedin.com/in/gabrielsk/" }],
    summary:
      "A maior parte das decisões de design ainda é conduzida mais por interpretação do que por evidência. Como sinais extraídos do próprio sistema — código, fluxo, commits, bloqueios, bugs e outros rastros operacionais — ajudam a melhorar a qualidade da decisão técnica, do design e da arquitetura de software, transformando observabilidade em ação.",
    track: "salao-comunal",
    start: 860,
    end: 910,
    hasDetails: true,
  },
  {
    id: "t065",
    title: "O novo jogo das contratações em TI: como as empresas vão escolher os profissionais do futuro",
    format: "palestra",
    level: "Todos os níveis",
    tags: ["Carreira", "Liderança / Gestão"],
    speakers: [{ name: "André Streppel", linkedin: "https://www.linkedin.com/in/andr%C3%A9-streppel-527ab119/" }],
    summary: "Dados sobre as formas de contratação no Brasil, cases de sucesso e ações para futuras contratações.",
    track: "trilha-lua-cheia",
    start: 860,
    end: 900,
    hasDetails: true,
  },
  {
    id: "t038",
    title: "O que é e por que algumas pessoas ainda insistem em Flutter",
    format: "palestra",
    level: "Iniciante",
    tags: ["Mobile"],
    speakers: [{ name: "Vilson Blanco Dauinheimer", linkedin: "https://linkedin.com/bwolf.dev" }],
    summary:
      "Um overview do início do Flutter e da sua evolução, mostrando os motivos pelos quais algumas empresas grandes ainda seguem utilizando o framework.",
    track: "trilha-magia",
    start: 870,
    end: 910,
    hasDetails: true,
  },
  {
    id: "t050",
    title: "Antes de escalar agentes: cinco decisões de arquitetura e governança que evitam a automação errada",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Arquitetura", "Segurança", "Dados", "Legado"],
    speakers: [{ name: "Youssef Bouguerra", linkedin: "https://www.linkedin.com/in/ybouguerra/" }],
    summary:
      "Agentes de IA tornam possível automatizar processos cada vez mais complexos — mas a capacidade técnica de automatizar não responde à pergunta mais importante: o que realmente deveria ser delegado à máquina? Um framework prático de cinco decisões que deveriam acontecer antes de escalar uma solução agêntica: qual problema estamos resolvendo, qual o custo de um erro, que nível de autonomia faz sentido, onde fica a validação humana, e que evidências precisamos antes de ir para produção.",
    track: "trilha-alquimia",
    start: 870,
    end: 915,
    hasDetails: true,
  },
  {
    id: "t069",
    title: "LinkedIn Estratégico: aumente sua visibilidade e conquiste sua próxima oportunidade",
    format: "mentoria",
    level: "Todos os níveis",
    tags: ["Carreira"],
    speakers: [{ name: "Orientadores a divulgar", linkedin: null }],
    summary:
      "Uma mentoria prática para quem quer usar o LinkedIn de forma estratégica para se posicionar melhor no mercado, aumentar sua visibilidade e se aproximar de novas oportunidades profissionais.",
    track: "covil",
    start: 880,
    end: 930,
    hasDetails: true,
  },
  {
    id: "speed-networking",
    title: "Speed Networking",
    format: "roda-de-conversa",
    level: "Todos os níveis",
    tags: ["Comunidade", "Carreira"],
    speakers: [
      { name: "Carol Paier", linkedin: "https://www.linkedin.com/in/carolpaier/" },
      { name: "Daniel Castro", linkedin: "https://www.linkedin.com/in/odanieldcs/" },
    ],
    summary:
      "Uma dinâmica para conhecer pessoas, trocar experiências e ampliar sua rede de conexões no DevFest. Em rodadas rápidas de conversa, você vai conhecer diferentes participantes da comunidade, sem divisão por área ou nível de experiência. A cada rodada, uma nova pessoa, uma nova conversa e uma nova possibilidade de conexão.",
    track: "covil",
    start: 975,
    end: 1020,
    hasDetails: true,
  },
  {
    id: "t059",
    title: "IA confiável não nasce no prompt: qualidade, testes e guardrails em produtos com LLM",
    format: "palestra",
    level: "Iniciante",
    tags: ["IA / Agentes", "Segurança", "Qualidade / Testes", "Produto"],
    speakers: [{ name: "Eduardo Neves de Souza", linkedin: "https://www.linkedin.com/in/eduardo-neves-de-souza" }],
    summary:
      "Quando uma IA entra em produção, ela deixa de ser apenas uma feature inteligente e passa a ser uma dependência crítica, capaz de falhar de maneiras novas e difíceis de prever. Como aplicar princípios de engenharia de qualidade a produtos com LLM: critérios de aceite para respostas, avaliações e testes de regressão, guardrails de entrada e saída, tratamento de falhas e observabilidade.",
    track: "trilha-sentinela",
    start: 885,
    end: 930,
    hasDetails: true,
  },
  {
    id: "t016",
    title: "Toda lacuna vira uma decisão do modelo: como fugir do AI slop",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Arquitetura", "Qualidade / Testes", "Dados", "Produto"],
    speakers: [{ name: "Thiago Xikota", linkedin: "https://www.linkedin.com/in/thiagoxikota" }],
    summary:
      "Dê o mesmo briefing para IA cinco vezes e compare o que volta. Um piloto de estudo publicado em 2026 mostrou: sem especificação, a IA converge para a mesma hierarquia de informação; com especificação, a convergência cai. O achado é simples e incômodo — decisão que você deixa em aberto, o modelo preenche com o padrão mais provável. O AI slop é o sintoma; a convergência acidental é o mecanismo.",
    track: "trilha-lua-cheia",
    start: 900,
    end: 930,
    hasDetails: true,
  },
  {
    id: "t064",
    title: "Design to Code: IA e Acessibilidade",
    format: "palestra",
    level: "Intermediário",
    tags: ["Frontend", "IA / Agentes", "Produto"],
    speakers: [
      { name: "Gustavo Diefenbach", linkedin: "https://www.linkedin.com/in/gstvdfnbch/" },
      { name: "Schar Queiroz", linkedin: "https://www.linkedin.com/in/scharrr/" },
    ],
    summary:
      "Uma demonstração de como transformar tokens, modos e componentes em um ambiente de experimentação no Figma Make, permitindo testar diferentes recursos de acessibilidade antes da implementação. Em seguida, como o Figma MCP pode conectar essas decisões ao desenvolvimento, aproximando o Design System do código e reduzindo retrabalho entre Design e Desenvolvimento.",
    track: "salao-comunal",
    start: 975,
    end: 1015,
    hasDetails: true,
  },
  {
    id: "t012",
    title: "Mobile Architecture para a Era da IA",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Mobile", "Arquitetura"],
    speakers: [{ name: "Gabriel Bronzatti Moro", linkedin: "https://www.linkedin.com/in/gabrielbronzattimoro15031994/" }],
    summary:
      "A Inteligência Artificial deixou de ser apenas uma ferramenta de autocomplete e passou a fazer parte do processo de desenvolvimento de software. Mas será que as arquiteturas mobile que usamos hoje foram projetadas para serem compreendidas e evoluídas por agentes de IA? Como a arquitetura de aplicações Android e Compose Multiplatform pode evoluir para uma abordagem AI-native, com especificações claras, modularização e regras arquiteturais.",
    track: "trilha-magia",
    start: 975,
    end: 1015,
    hasDetails: true,
  },
  {
    id: "t021",
    title: "Por trás de um emoji",
    format: "palestra",
    level: "Intermediário",
    tags: ["IA / Agentes", "Mobile", "Arquitetura", "Segurança", "Qualidade / Testes"],
    speakers: [{ name: "Mário de Araújo Jr", linkedin: "https://www.linkedin.com/in/m4riodev/" }],
    summary:
      "O Zoji é um mensageiro onde não existem mensagens de texto: toda a comunicação acontece exclusivamente através de emojis. A história de como uma ideia aparentemente simples evoluiu de um protótipo para um produto real, publicado em iOS e Android — mudanças de arquitetura, React Native e Expo, API em PHP puro, MySQL, WebSocket em tempo real, autenticação por OTP e moderação de conteúdo.",
    track: "trilha-lua-cheia",
    start: 975,
    end: 1015,
    hasDetails: true,
  },
  {
    id: "t051",
    title: "DORA na Era da IA: Medindo Impacto sem Criar Métricas que Enganam",
    format: "palestra",
    level: "Iniciante",
    tags: ["IA / Agentes", "Qualidade / Testes", "Dados", "DevOps / SRE", "Bem-estar"],
    speakers: [{ name: "Darci Neto", linkedin: "https://www.linkedin.com/in/darcineto/" }],
    summary:
      "A adoção de IA está mudando a forma como times de engenharia desenvolvem software, mas fica a dúvida: como diferenciar ganhos reais de produtividade de uma métrica que só parece boa no papel? Os conceitos fundamentais de métricas de engenharia, os riscos de otimizar indicadores isolados e as métricas DORA — frequência de deploy, lead time, taxa de falha e tempo de recuperação — como forma de avaliar impacto real.",
    track: "trilha-sentinela",
    start: 975,
    end: 1020,
    hasDetails: true,
  },
  {
    id: "t043",
    title: "De dias para minutos: automatizando engenharia CAD com Python, APIs e agentes inteligentes",
    format: "palestra",
    level: "Todos os níveis",
    tags: ["IA / Agentes", "Qualidade / Testes", "Dados"],
    speakers: [{ name: "Douglas Gomes", linkedin: "https://www.linkedin.com/in/douglas-gomes-155348263" }],
    summary:
      "A preparação geométrica é um dos maiores gargalos da engenharia computacional moderna — engenheiros gastam mais tempo corrigindo e adaptando modelos CAD para simulação do que realizando a própria análise. O desenvolvimento de uma plataforma de automação para identificar e reconstruir geometrias complexas usando Python, APIs CAD e algoritmos de reconhecimento geométrico, reduzindo horas ou dias de trabalho para poucos minutos.",
    track: "trilha-alquimia",
    start: 975,
    end: 1020,
    hasDetails: true,
  },
];

export const TALKS_BY_TRACK: Record<TrackId, Talk[]> = TRACKS.reduce(
  (acc, track) => {
    acc[track.id] = TALKS.filter((talk) => talk.track === track.id).sort((a, b) => a.start - b.start);
    return acc;
  },
  {} as Record<TrackId, Talk[]>,
);

export const TIME_SLOTS: number[] = Array.from(new Set(TALKS.map((t) => t.start))).sort((a, b) => a - b);

export const DAY_START = 495; // 8h15 (credenciamento)
export const DAY_END = 1040; // 17h20 (após encerramento)

/** Tags curadas por trilha, usadas na busca por tags. Não são exaustivas: servem como
 * atalho de descoberta e são combinadas com correspondência textual nos conteúdos. */
export const TRACK_TAGS: Partial<Record<TrackId, string[]>> = {
  "trilha-magia": ["Mobile", "Design", "Frontend", "Flutter", "UX", "Arquitetura"],
  "trilha-lua-cheia": ["Liderança", "Carreira", "Produto", "Gestão", "Pessoas", "Impacto"],
  "trilha-sentinela": ["Segurança", "IA Confiável", "Testes", "Qualidade", "Governança", "Cyber"],
  "trilha-alquimia": ["IA", "Agentes", "RAG", "Automação", "Python", "Arquitetura"],
  covil: ["Mentoria", "Carreira", "Networking", "Produto", "Liderança", "Comunidade"],
};

/** Remove acentos e normaliza para minúsculas, para permitir buscas tolerantes. */
export function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

/** Verifica se um conteúdo corresponde a uma tag/termo de busca: compara com as tags do
 * conteúdo, título, resumo e nome da trilha, de forma tolerante a acentos e maiúsculas. */
export function talkMatchesQuery(talk: Talk, query: string): boolean {
  const q = normalizeSearch(query);
  if (!q) return true;
  if (talk.tags.some((tag) => normalizeSearch(tag).includes(q) || q.includes(normalizeSearch(tag)))) return true;
  if (normalizeSearch(talk.title).includes(q)) return true;
  if (talk.summary && normalizeSearch(talk.summary).includes(q)) return true;
  const trackName = TRACK_BY_ID[talk.track]?.name ?? "";
  if (normalizeSearch(trackName).includes(q)) return true;
  return false;
}
