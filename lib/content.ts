export const SYMPLA_URL =
  "https://www.sympla.com.br/evento/devfest-porto-alegre-2026/3511958";

export const EVENT_TARGET_ISO = "2026-10-31T09:00:00-03:00";
export const EVENT_END_ISO = "2026-10-31T18:00:00-03:00";

export const SITE_URL = "https://devfestportoalegre.com.br";
export const SITE_NAME = "DevFestPoa26";

export const SITE_DESCRIPTION =
  "O DevFest de Porto Alegre: um dia de conteúdo técnico, comunidade e networking, feito pelas comunidades GDG Porto Alegre e GDG Caxias do Sul. 31 de outubro de 2026, na Faculdade Dom Bosco.";

export const SITE_KEYWORDS = [
  "DevFest Porto Alegre",
  "DevFestPoa26",
  "evento tech",
  "evento de tecnologia",
  "conferência de tecnologia",
  "comunidade tech",
  "comunidade de desenvolvedores",
  "desenvolvimento de software",
  "GDG Porto Alegre",
  "GDG Caxias do Sul",
  "Google Developer Groups",
  "inteligência artificial",
  "agentes de IA",
  "cloud",
  "segurança da informação",
  "carreira em tecnologia",
  "networking tech",
  "palestras de tecnologia",
  "evento de tecnologia Porto Alegre",
  "evento de tecnologia 2026",
];

export const HIGHLIGHTS = [
  { icon: "👥", title: "300 pessoas", text: "Comunidade tech reunida em um só lugar." },
  { icon: "🎤", title: "1 palco + 3 trilhas", text: "Estrutura pensada para todos os perfis." },
  { icon: "🤝", title: "Networking estruturado", text: "Conexões que vão além do crachá." },
  { icon: "🎮", title: "DevFestPoaGame", text: "Uma experiência dentro da experiência." },
  { icon: "📍", title: "Faculdade Dom Bosco", text: "Porto Alegre/RS." },
  { icon: "📅", title: "31 de outubro de 2026", text: "Sábado, das 9h às 18h." },
];

export const PILLARS = [
  { icon: "🤖", title: "AI & Agents", text: "Inteligência artificial, IA generativa e agentes autônomos." },
  { icon: "☁️", title: "Cloud & Arquitetura", text: "Infraestrutura, arquitetura e escalabilidade." },
  { icon: "💻", title: "Dev & Tech", text: "Desenvolvimento, mobile, front-end e tecnologias modernas." },
  { icon: "🛡️", title: "Segurança", text: "Segurança, privacidade e desenvolvimento responsável." },
  { icon: "🚀", title: "Carreira & Futuro", text: "Carreira, liderança, mercado e futuro profissional." },
  { icon: "🧠", title: "Pessoas & Comunidade", text: "Saúde mental, diversidade, inclusão e comunidade." },
];

export const POWERED_BY_INTRO = [
  "O DevFest Porto Alegre é um evento organizado por voluntários, sem fins lucrativos e movido pela comunidade. Por isso, contamos com o apoio de empresas que acreditam no fortalecimento do ecossistema de tecnologia e tornam esta experiência possível.",
  "As marcas Powered by vão além do patrocínio: elas impulsionam conhecimento, conexões e oportunidades para centenas de pessoas, ajudando a transformar o evento em realidade e fortalecendo a comunidade local.",
];

export const POWERED_BY_PARTNERS = [
  { name: "Kobe", logo: "/kobe logo.png", href: "https://www.kobe.io/" },
  { name: "Dentsu World Services", logo: "/dws logo.png", href: "https://www.dentsu.com/br/pt" },
];

export const FACULDADE_SEDE = {
  name: "Faculdade Dom Bosco",
  logo: "/dom bosco logo.png",
  href: "https://faculdadedombosco.net/pt/",
};

export const APOIO_INSTITUCIONAL = {
  name: "Secretaria da Inovação, Ciência e Tecnologia do RS",
  logo: "/brasão estado.png",
  href: "https://sict.rs.gov.br/inicial",
};

export const PARTNER_LOGOS = [
  { name: "WK", logo: "/wk logo.png", href: "https://wkrh.com.br/" },
  { name: "Nort", logo: "/nort logo.png", href: "https://nortjobs.com/pt-BR" },
  { name: "Eximia", logo: "/eximia logo.png", href: "https://eximia.co/" },
];

export const IMPULSO_PARTNERS = [
  { name: "Casa do Código", logo: "/casa do codigo logo.jpg", href: "https://www.casadocodigo.com.br/" },
  { name: "Growdev", logo: "/logo growdev.png", href: "https://growdev.com.br/" },
];

export const COMMUNITY_PARTNERS = [
  { name: "Dev Girls", logo: "/devgirls logo.png", href: "https://www.linkedin.com/company/dev-girls/" },
  { name: "Stem Girls", logo: "/stem girls logo.png", href: "https://linktr.ee/stemgirlsbr" },
  { name: "Produteiros", logo: "/produteiros logo.png", href: "https://linktr.ee/produteirosRS" },
];

type ExperienceItem = {
  icon: string;
  title: string;
  pending: boolean;
  text: string;
  items: string[];
  address?: string;
  parking?: string;
  mapQuery?: string;
  mapDirectionsUrl?: string;
  logo?: string;
  logoAlt?: string;
  extraHtml?: string;
  whatsapp?: string;
  whatsappUrl?: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    icon: "📍",
    title: "Como chegar",
    pending: false,
    text: "A Faculdade Dom Bosco fica no bairro Passo d'Areia, em Porto Alegre.",
    items: [],
    address: "R. Mal. José Inácio da Silva, 355 - Passo d'Areia, Porto Alegre - RS, 90520-280",
    parking: "particular, ao lado da Faculdade, no Colégio Dom Bosco.",
    mapQuery: "Faculdade Dom Bosco, R. Mal. José Inácio da Silva, 355 - Passo d'Areia, Porto Alegre - RS, 90520-280",
    mapDirectionsUrl:
      "https://www.google.com/maps/dir//Faculdade+Dom+Bosco,+R.+Mal.+Jos%C3%A9+In%C3%A1cio+da+Silva,+355+-+Passo+d'Areia,+Porto+Alegre+-+RS,+90520-280/@-30.0994818,-51.085312,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x95197762900397a9:0xdf8886a358bebab4!2m2!1d-51.1791948!2d-30.0120424!3e3?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: "🎒",
    title: "O que levar",
    pending: false,
    text: "O básico para aproveitar o dia inteiro:",
    items: ["Ingresso (físico ou digital)", "Documento com foto", "Celular e carregador", "Notebook, se for usar", "Disposição para fazer networking", "Garrafinha de água"],
  },
  {
    icon: "☕",
    title: "Alimentação",
    pending: false,
    text: "",
    items: [
      "<strong>Coffee Break manhã e tarde incluso</strong> em todos os tipos de ingressos.",
      "Indicamos a Cantina Gabigu para almoço, que já está dentro da Faculdade. Opção de buffet e lanches.",
    ],
    logo: "/cantina gabigu logo.jpeg",
    logoAlt: "Cantina Gabigu",
  },
  {
    icon: "📱",
    title: "Informações úteis",
    pending: true,
    text: "Tudo para o dia do evento correr redondo.",
    items: ["Credenciamento", "Horários detalhados", "Wi-Fi", "Canais oficiais e contatos"],
  },
  {
    icon: "♿",
    title: "Acessibilidade",
    pending: false,
    text: "O DevFest Porto Alegre acredita que tecnologia é para todas as pessoas. Por isso, realizamos o evento em um espaço com infraestrutura acessível e incentivamos um ambiente diverso, inclusivo e respeitoso para toda a comunidade.",
    items: [],
    extraHtml:
      "Se você precisar de algum recurso de acessibilidade ou suporte específico para participar do evento, entre em contato conosco.",
    whatsapp: "(51) 2185-0587",
    whatsappUrl: "https://wa.me/555121850587",
  },
  {
    icon: "🤝",
    title: "Networking",
    pending: false,
    text: "O DevFestPoa26 terá networking estruturado, com espaços e momentos pensados para gerar conexões reais entre participantes, palestrantes, empresas e comunidades.",
    items: [],
  },
];

const DOM_BOSCO_MAPS_URL = "https://maps.app.goo.gl/RMh3NpXR9jhzD24t8";
const ORG_CONTACT_EMAIL = "gdgpoars@gmail.com";

export const FAQS = [
  {
    q: "O que é o DevFest Porto Alegre 2026 (DevFestPoa26)?",
    a: "O DevFest Porto Alegre 2026 (DevFestPoa26) é um evento de tecnologia realizado em Porto Alegre, no Rio Grande do Sul, pelas comunidades GDG Porto Alegre e GDG Caxias do Sul. É um dia inteiro dedicado a conteúdo técnico, aprendizado, networking, carreira, inovação e experiências práticas para toda a galera tech. 🚀",
  },
  {
    q: "Quando e onde acontece o DevFest Porto Alegre 2026?",
    a: `<p>O DevFestPoa26 acontece no sábado, 31 de outubro de 2026, das 9h às 18h, na Faculdade Dom Bosco, em Porto Alegre/RS. O credenciamento começa às 8h15, com coffee break esperando você. ☕🥐</p><p>Chegue cedo para fazer seu credenciamento com calma e já começar o dia no clima do DevFest!</p>`,
  },
  {
    q: "Onde fica a Faculdade Dom Bosco?",
    a: `<p>A Faculdade Dom Bosco está localizada na Rua Marechal José Inácio da Silva, 355, no bairro Passo D'Areia, em Porto Alegre/RS.</p><p>📍 Para visualizar a localização e traçar sua rota, acesse o <a href="${DOM_BOSCO_MAPS_URL}" target="_blank" rel="noopener">Google Maps</a>.</p>`,
  },
  {
    q: "Quem organiza o DevFest Porto Alegre 2026?",
    a: `<p>O DevFestPoa26 é organizado de forma voluntária e sem fins lucrativos pelas comunidades GDG Porto Alegre e GDG Caxias do Sul, que fazem parte do ecossistema Google Developer Groups.</p><p>Por trás do evento existe uma galera de voluntários colocando a mão na massa para fazer tudo acontecer. 💙</p>`,
  },
  {
    q: "O DevFestPoa26 é presencial ou online?",
    a: "O DevFestPoa26 é 100% presencial! 📍 Prepare-se para um dia inteiro de conteúdo, networking, experiências práticas e, claro, muita interação com a comunidade tech.",
  },
  {
    q: "Quem pode participar do DevFest Porto Alegre 2026?",
    a: `<p>O DevFestPoa26 é para toda a galera que já atua na área de tecnologia ou pretende ingressar no mercado! 💻</p><p>São muito bem-vindas pessoas desenvolvedoras, profissionais de tecnologia, Product Owners (POs), Product Managers (PMs), profissionais de Design, UX/UI, Dados, Inteligência Artificial e Machine Learning, Cloud, DevOps, Cibersegurança, Qualidade e Testes (QA), estudantes, pessoas em transição de carreira, entusiastas e qualquer pessoa interessada em aprender, trocar experiências e se conectar com a comunidade tech.</p><p>Se tem curiosidade, vontade de aprender e interesse por tecnologia, pode chegar! 🚀</p>`,
  },
  {
    q: "Preciso ser desenvolvedor para participar do DevFestPoa26?",
    a: `<p>Não! 🙌</p><p>O DevFestPoa26 é para toda a comunidade tech e está aberto a diferentes áreas, perfis e níveis de experiência. Vale para quem está começando a estudar, para quem está entrando no mercado e também para profissionais experientes e especialistas.</p><p>Você não precisa saber programar para fazer parte do DevFest. 💙</p>`,
  },
  {
    q: "Como e onde compro meu ingresso para o DevFest Porto Alegre 2026?",
    a: `<p>Os ingressos são vendidos exclusivamente pelo Sympla, nosso canal oficial de vendas.</p><p>🎟️ <a href="${SYMPLA_URL}" target="_blank" rel="noopener">Garanta seu ingresso aqui</a>.</p><p>Evento sem fins lucrativos. Todo o valor arrecadado com os ingressos é destinado à realização do DevFestPoa26, ajudando a viabilizar a estrutura, alimentação, experiências e demais custos necessários para proporcionar uma ótima experiência para as pessoas participantes.</p>`,
  },
  {
    q: "Quanto custa o ingresso do DevFestPoa26?",
    a: `<p>O valor do ingresso varia de acordo com o lote disponível. 🎟️</p><p>Os preços e a disponibilidade atualizados podem ser consultados diretamente na <a href="${SYMPLA_URL}" target="_blank" rel="noopener">página oficial do evento no Sympla</a>.</p><p>E fica a dica: não deixe para garantir seu ingresso na última hora. Os lotes são limitados e os valores podem mudar. 👀</p>`,
  },
  {
    q: "O ingresso do DevFestPoa26 dá acesso a todo o evento?",
    a: `<p>Sim! 🎟️</p><p>O ingresso garante acesso ao evento presencial e às atividades abertas da programação, incluindo palestras, trilhas de conteúdo, networking, experiências e coffee breaks.</p><p>Algumas atividades específicas, como determinados workshops ou experiências práticas, podem ter vagas limitadas ou exigir inscrição prévia. As informações serão divulgadas na programação e no web app do evento.</p>`,
  },
  {
    q: "Qual é o horário do DevFest Porto Alegre 2026?",
    a: `<p>O evento acontece das 9h às 18h, no sábado, 31 de outubro de 2026.</p><p>O credenciamento começa às 8h15, com coffee break antes da abertura oficial. ☕🥐</p><p>Nossa recomendação? Chegue cedo, faça seu credenciamento com tranquilidade, pegue um café e já comece a explorar o DevFest! 🚀</p>`,
  },
  {
    q: "Como chegar à Faculdade Dom Bosco para o DevFestPoa26?",
    a: `<p>A Faculdade Dom Bosco está localizada na Rua Marechal José Inácio da Silva, 355, no bairro Passo D'Areia, em Porto Alegre/RS.</p>
      <p>📍 <a href="${DOM_BOSCO_MAPS_URL}" target="_blank" rel="noopener">Google Maps</a></p>
      <p>🚌 <strong>Vindo de ônibus:</strong> a Faculdade fica próxima a importantes vias como Av. Assis Brasil, Av. Brasiliano Índio de Moraes, Av. Cristóvão Colombo e Av. Plínio Brasil Milano.</p>
      <ul>
        <li><strong>Do Centro de Porto Alegre:</strong> linhas T2A, T13 e 605, que atendem diferentes regiões e possuem paradas próximas à Faculdade.</li>
        <li><strong>Da Zona Norte:</strong> linhas pela região da Av. Assis Brasil, incluindo B51, T2A e 605, além de linhas metropolitanas que passam pelas proximidades.</li>
        <li><strong>Da Zona Sul:</strong> linhas que fazem conexão com a região central e seguem em direção à Zona Norte, como a T2A, chegando às proximidades da Faculdade.</li>
      </ul>
      <p>🚏 <strong>Ponto de referência:</strong> a Faculdade Dom Bosco fica no bairro Passo D'Areia, próxima ao IAPI e às avenidas Assis Brasil e Brasiliano Índio de Moraes.</p>
      <p>🚗 <strong>De carro ou aplicativo:</strong> no Google Maps, Uber ou outro aplicativo de navegação, pesquise por "Faculdade Dom Bosco – Rua Marechal José Inácio da Silva, 355, Porto Alegre/RS".</p>
      <p>💡 Dica: horários e itinerários do transporte público podem sofrer alterações. Consulte o Google Maps ou Moovit no dia do evento para encontrar a melhor rota a partir do seu endereço.</p>`,
  },
  {
    q: "Existe estacionamento na Faculdade Dom Bosco?",
    a: `<p>Sim! 🚗 Há um estacionamento particular ao lado da Faculdade Dom Bosco, junto ao Colégio Dom Bosco, que poderá ser utilizado pelas pessoas participantes do evento.</p><p>Como se trata de um estacionamento particular, a utilização é paga e está sujeita à disponibilidade de vagas no dia do evento. Recomendamos chegar com antecedência, especialmente nos horários de maior movimento.</p>`,
  },
  {
    q: "O que devo levar para o DevFestPoa26?",
    a: `<p>Para aproveitar o DevFestPoa26 ao máximo, recomendamos levar:</p>
      <ul>
        <li>🎟️ <strong>Ingresso do Sympla:</strong> deixe o ingresso facilmente acessível no celular. Não precisa imprimir!</li>
        <li>🪪 <strong>Documento com foto:</strong> será utilizado no credenciamento.</li>
        <li>📱 <strong>Celular:</strong> essencial para acompanhar as informações do evento, participar das interações e aproveitar as experiências do DevFest.</li>
        <li>🔋 <strong>Carregador ou power bank:</strong> porque bateria acaba justamente quando a gente mais precisa. 😅</li>
        <li>💻 <strong>Notebook:</strong> super recomendado para quem pretende participar dos workshops, labs e atividades práticas.</li>
      </ul>
      <p>🧠 E, principalmente: traga curiosidade, vontade de aprender, trocar experiências e fazer networking com toda a galera tech!</p>`,
  },
  {
    q: "Qual será a programação do DevFest Porto Alegre 2026?",
    a: `<p>A programação do DevFestPoa26 está sendo construída e será divulgada em breve. 👀</p><p>O evento contará com diferentes formatos de conteúdo, incluindo palestras, workshops e atividades práticas, distribuídos entre o palco principal e as trilhas de conteúdo.</p><p>A programação será pensada para contemplar diferentes áreas e níveis de experiência em tecnologia, permitindo que cada participante escolha os conteúdos que mais fazem sentido para seus interesses e objetivos.</p><p>Spoiler: estamos preparando uma grade robusta para você sair do evento com bastante coisa nova na cabeça. 🧠🚀</p>`,
  },
  {
    q: "Quais tecnologias e temas serão abordados no DevFestPoa26?",
    a: `<p>O DevFestPoa26 terá conteúdos voltados para diferentes áreas da tecnologia, contemplando temas técnicos e profissionais relevantes para a comunidade tech.</p><p>A programação poderá incluir assuntos relacionados a desenvolvimento de software, Inteligência Artificial, Machine Learning, Google Cloud, Cloud Computing, DevOps, Dados, Cibersegurança, desenvolvimento web e mobile, Firebase, carreira, produto, UX/UI e outras áreas do ecossistema de tecnologia.</p><p>A programação completa, com temas, palestrantes, horários e trilhas, será divulgada em breve. 💻</p>`,
  },
  {
    q: "Como funciona a trilha personalizada do DevFestPoa26?",
    a: `<p>Aqui entra uma das novidades do DevFestPoa26! 🚀</p><p>O evento contará com um web app desenvolvido para facilitar a experiência dos participantes. Por meio da plataforma, você poderá explorar a programação, conhecer os conteúdos e palestrantes e selecionar as palestras que deseja acompanhar, criando sua própria "Minha Trilha".</p><p>Assim, cada pessoa poderá montar uma programação personalizada de acordo com seus interesses, área de atuação e objetivos.</p><p>Ou seja: nada de ficar perdido tentando decidir "qual palestra eu vou agora?". O app ajuda você a montar sua própria experiência no DevFest. 😎</p>`,
  },
  {
    q: "Posso escolher quais palestras quero assistir no DevFestPoa26?",
    a: `<p>Sim! 🙌</p><p>O DevFestPoa26 terá diferentes trilhas e um palco principal, permitindo que cada participante escolha os conteúdos que mais fazem sentido para seus interesses.</p><p>Por meio do web app do evento, você poderá explorar a programação e adicionar os conteúdos que deseja acompanhar à sua "Minha Trilha", criando uma experiência personalizada durante o DevFest.</p>`,
  },
  {
    q: "Terá workshops, labs e atividades práticas?",
    a: `<p>Sim! 🧑‍💻</p><p>Além das palestras e conteúdos no palco principal e nas trilhas, o DevFestPoa26 contará com workshops, labs e outras atividades práticas para quem quiser colocar a mão na massa e aprofundar seus conhecimentos.</p><p>Algumas atividades poderão ter vagas limitadas ou exigir inscrição prévia. As informações serão divulgadas na programação oficial e no web app do evento.</p><p>💻 Dica: se você pretende participar das atividades práticas, leve seu notebook!</p>`,
  },
  {
    q: "Terá networking no DevFestPoa26?",
    a: `<p>Sim! 🤝</p><p>O DevFestPoa26 contará com uma sala de networking estruturado, pensada para facilitar conexões mais intencionais entre participantes, profissionais, empresas, palestrantes e toda a galera tech.</p><p>O espaço terá atividades e dinâmicas em grupos menores, criando um ambiente mais confortável para trocar experiências, conhecer novas pessoas, compartilhar oportunidades e fortalecer conexões profissionais.</p><p>A ideia é ir além do tradicional "oi, qual é o seu nome?" e criar oportunidades reais de conexão. 😉</p>`,
  },
  {
    q: "Haverá empresas e patrocinadores no DevFest Porto Alegre 2026?",
    a: `<p>Sim! 🤝</p><p>O DevFestPoa26 contará com empresas patrocinadoras e parceiras, criando oportunidades para participantes conhecerem organizações, produtos, serviços e iniciativas do mercado de tecnologia.</p><p>Além de interagir com as empresas durante o evento, você poderá aproveitar os espaços e experiências preparados pelos patrocinadores e ampliar seu networking profissional.</p><p>Quem sabe aquele contato não vira uma oportunidade depois do evento, né? 👀</p>`,
  },
  {
    q: "O que é o DevFestPoaGame?",
    a: `<p>O DevFestPoaGame é a experiência de gamificação do DevFestPoa26. 🎮</p><p>A proposta é tornar a participação no evento ainda mais interativa, incentivando as pessoas a explorarem os espaços, participarem das atividades e se conectarem com a comunidade.</p><p>Os desafios, regras e informações sobre possíveis premiações serão divulgados em breve.</p><p>Prepare-se para jogar — porque evento tech também pode ter competição saudável. 👀🏆</p>`,
  },
  {
    q: "Terá alimentação e coffee break no DevFestPoa26?",
    a: `<p>Sim! ☕🥐</p><p>Teremos um coffee break antes da abertura do evento, das 8h15 às 9h. Então, chegue cedo!</p><p>Também teremos outro coffee break durante a tarde, com comidinhas e interações para deixar o momento ainda mais gostoso.</p><p>E para manter a energia da galera tech lá em cima, teremos café quentinho disponível durante todo o evento nas dependências da Faculdade Dom Bosco. ☕🚀</p>`,
  },
  {
    q: "O DevFestPoa26 é gratuito?",
    a: `<p>Não. O DevFestPoa26 possui ingressos pagos, vendidos oficialmente pelo Sympla.</p><p>O evento é realizado sem fins lucrativos, e todo o valor arrecadado com os ingressos é destinado à realização do evento e aos custos necessários para sua estrutura, alimentação, experiências e operação.</p><p>🎟️ <a href="${SYMPLA_URL}" target="_blank" rel="noopener">Consulte os ingressos disponíveis</a>.</p>`,
  },
  {
    q: "O DevFest Porto Alegre 2026 oferece certificado?",
    a: `<p>As informações sobre certificação de participação serão divulgadas pela organização do DevFestPoa26.</p><p>Caso o certificado seja disponibilizado, serão informados posteriormente os critérios, formato e forma de acesso.</p><p>Assim que tivermos novidades, avisaremos nos canais oficiais. 📢</p>`,
  },
  {
    q: "O evento possui acessibilidade?",
    a: `<p>Sim! 💙</p><p>A Faculdade Dom Bosco conta com estrutura e espaços acessíveis para receber as pessoas participantes.</p><p>Também podemos disponibilizar intérprete de Libras conforme a necessidade. Caso você precise de algum recurso específico de acessibilidade, entre em contato com a organização pelo e-mail <a href="mailto:${ORG_CONTACT_EMAIL}">${ORG_CONTACT_EMAIL}</a> para que possamos buscar a melhor forma de atender você.</p>`,
  },
  {
    q: "Como posso entrar em contato com a organização do DevFestPoa26?",
    a: `<p>Tem alguma dúvida que não encontrou por aqui? Fala com a gente! 💙</p><p>Você pode entrar em contato com a organização do DevFest Porto Alegre 2026 pelo e-mail oficial <a href="mailto:${ORG_CONTACT_EMAIL}">${ORG_CONTACT_EMAIL}</a>.</p><p>Para dúvidas sobre ingressos, recomendamos também consultar as informações disponíveis na página oficial do evento no Sympla.</p>`,
  },
  {
    q: "Como posso acompanhar as novidades do DevFest Porto Alegre 2026?",
    a: `<p>Acompanhe as novidades, anúncios de palestrantes, programação, ingressos, experiências e outras informações pelos canais oficiais do GDG Porto Alegre e do GDG Caxias do Sul.</p><p>📱 Também acompanhe as publicações utilizando a hashtag #DevFestPoa26.</p><p>Não quer perder nenhuma novidade? Então já segue a gente e fica de olho! 👀🚀</p>`,
  },
  {
    q: "Onde posso encontrar a programação, palestrantes e informações atualizadas do DevFestPoa26?",
    a: `<p>As informações oficiais sobre programação, palestrantes, trilhas, horários, experiências e novidades do DevFest Porto Alegre 2026 serão divulgadas nos canais oficiais da organização e no web app do evento.</p><p>📢 Como a programação pode receber atualizações, recomendamos acompanhar os canais oficiais e o web app para sempre consultar as informações mais recentes.</p><p>Assim você não corre o risco de descobrir uma novidade do DevFest só depois que o evento acabar. 😅</p>`,
  },
];

export const CONDUCT_UPDATED = "julho de 2026";

export const CONDUCT_CONTACT = {
  phone: "(51) 21850587",
  email: "devfestpoa@gmail.com",
};

export const CONDUCT_INTRO = `
  <p>O <strong>DevFestPoa26</strong> é um evento realizado pelo <strong>GDG Porto Alegre</strong> e pelo <strong>GDG Caxias do Sul</strong>, construído pela comunidade e para a comunidade.</p>
  <p>Acreditamos que tecnologia, conhecimento e inovação só fazem sentido quando podem ser compartilhados em um ambiente seguro, acolhedor, diverso e respeitoso.</p>
  <p>Por isso, esperamos que todas as pessoas que participam, colaboram, organizam, palestram, patrocinam ou representam o DevFestPoa26 contribuam para criar uma experiência positiva para todos.</p>
  <p>Este Código de Conduta existe para deixar claro o que esperamos da nossa comunidade e quais atitudes não serão toleradas.</p>
  <p>Ao participar do DevFestPoa26, você concorda em respeitar estas diretrizes.</p>
`;

export const CONDUCT_SECTIONS = [
  {
    title: "1. Nosso compromisso",
    html: `
      <p>Nós, da organização do DevFestPoa26, nos comprometemos a proporcionar um ambiente inclusivo, seguro e livre de assédio para todas as pessoas, independentemente de:</p>
      <ul>
        <li>raça, cor ou etnia;</li>
        <li>nacionalidade ou origem;</li>
        <li>gênero ou identidade de gênero;</li>
        <li>expressão de gênero;</li>
        <li>orientação sexual;</li>
        <li>idade;</li>
        <li>deficiência ou condição de acessibilidade;</li>
        <li>aparência ou tipo corporal;</li>
        <li>religião ou ausência de religião;</li>
        <li>condição socioeconômica;</li>
        <li>nível de experiência profissional ou técnica;</li>
        <li>formação acadêmica;</li>
        <li>área de atuação;</li>
        <li>ou qualquer outra característica pessoal.</li>
      </ul>
      <p>O DevFestPoa26 é um espaço para aprender, compartilhar, fazer conexões e construir oportunidades.</p>
      <p>Queremos que todas as pessoas se sintam respeitadas e tenham liberdade para participar, fazer perguntas, compartilhar experiências e ocupar seus espaços na comunidade.</p>
    `,
  },
  {
    title: "2. Comportamentos esperados",
    html: `
      <p>Esperamos que todas as pessoas participantes do DevFestPoa26:</p>
      <ul>
        <li>tratem as outras pessoas com respeito, empatia e cordialidade;</li>
        <li>utilizem uma linguagem acolhedora e inclusiva;</li>
        <li>respeitem diferentes opiniões, experiências e perspectivas;</li>
        <li>estejam abertas ao diálogo e à troca de conhecimentos;</li>
        <li>ofereçam e recebam críticas construtivas de maneira respeitosa;</li>
        <li>respeitem os limites pessoais e o espaço de cada pessoa;</li>
        <li>respeitem as regras e orientações da organização, equipe, local do evento e parceiros;</li>
        <li>contribuam para um ambiente seguro e positivo;</li>
        <li>respeitem as necessidades de acessibilidade das outras pessoas;</li>
        <li>evitem comportamentos que possam constranger, intimidar ou excluir outras pessoas;</li>
        <li>comuniquem à organização qualquer situação que possa comprometer a segurança ou o bem-estar da comunidade.</li>
      </ul>
      <p>Não é necessário concordar com todo mundo.</p>
      <p><strong>É necessário respeitar todo mundo.</strong></p>
    `,
  },
  {
    title: "3. Comportamentos inaceitáveis",
    html: `
      <p>Não serão tolerados comportamentos que promovam assédio, discriminação, intimidação, violência ou qualquer forma de desrespeito.</p>
      <p>Entre os comportamentos considerados inaceitáveis estão:</p>
      <ul>
        <li>assédio de qualquer natureza;</li>
        <li>discriminação ou comentários preconceituosos;</li>
        <li>racismo, misoginia, LGBTfobia, capacitismo, xenofobia ou qualquer outra forma de preconceito;</li>
        <li>ameaças, violência física ou verbal;</li>
        <li>intimidação, perseguição ou comportamento abusivo;</li>
        <li>comentários, imagens ou interações de natureza sexual não solicitadas;</li>
        <li>avanços ou abordagens sexuais indesejadas;</li>
        <li>contato físico sem consentimento;</li>
        <li>exposição ou compartilhamento de informações pessoais de outra pessoa sem autorização;</li>
        <li>fotografar, filmar ou divulgar imagens de uma pessoa em situação que possa colocá-la em risco ou constrangimento, especialmente após solicitação para não fazê-lo;</li>
        <li>interromper ou impedir deliberadamente a participação de outras pessoas;</li>
        <li>ataques pessoais, insultos ou humilhações;</li>
        <li>trolling ou comportamento deliberadamente provocativo com o objetivo de causar conflito;</li>
        <li>publicação de conteúdo ofensivo ou discriminatório nos canais oficiais do evento;</li>
        <li>uso de espaços do evento para promover discursos de ódio ou violência;</li>
        <li>qualquer comportamento que possa ser considerado inadequado ou abusivo em um ambiente profissional e comunitário.</li>
      </ul>
      <p>A organização poderá considerar inadequados outros comportamentos que, mesmo não estando explicitamente listados neste documento, sejam incompatíveis com os princípios de respeito, segurança e inclusão do DevFestPoa26.</p>
    `,
  },
  {
    title: "4. Espaços e canais abrangidos",
    html: `
      <p>Este Código de Conduta se aplica a todas as atividades relacionadas ao DevFestPoa26, incluindo, mas não se limitando a:</p>
      <ul>
        <li>evento presencial;</li>
        <li>palestras, workshops, labs e demais atividades;</li>
        <li>filas, áreas de convivência e espaços de networking;</li>
        <li>espaços de patrocinadores e parceiros;</li>
        <li>atividades sociais oficiais relacionadas ao evento;</li>
        <li>canais oficiais de comunicação;</li>
        <li>grupos e comunidades utilizados oficialmente para organização ou participação no evento;</li>
        <li>interações online relacionadas diretamente ao DevFestPoa26;</li>
        <li>redes sociais quando a pessoa estiver representando oficialmente o evento ou a comunidade.</li>
      </ul>
      <p>Também esperamos que palestrantes, patrocinadores, parceiros, voluntários, fornecedores e integrantes da organização respeitem este Código de Conduta durante suas atividades relacionadas ao evento.</p>
    `,
  },
  {
    title: "5. Palestras, workshops e atividades",
    html: `
      <p>Palestrantes e facilitadores são responsáveis por garantir que seus conteúdos e atividades estejam alinhados aos princípios deste Código de Conduta.</p>
      <p>Não serão aceitos conteúdos que:</p>
      <ul>
        <li>promovam discurso de ódio ou discriminação;</li>
        <li>incentivem violência;</li>
        <li>assediem ou humilhem indivíduos ou grupos;</li>
        <li>utilizem estereótipos discriminatórios como forma de entretenimento;</li>
        <li>promovam comportamentos ilegais ou perigosos;</li>
        <li>sejam deliberadamente ofensivos ou incompatíveis com um ambiente profissional e comunitário.</li>
      </ul>
      <p>Discussões técnicas podem envolver opiniões divergentes e temas sensíveis. O debate é bem-vindo quando conduzido com respeito, responsabilidade e foco na troca de conhecimento.</p>
      <p>A organização poderá interromper uma atividade ou solicitar ajustes em conteúdos que violem este Código de Conduta.</p>
    `,
  },
  {
    title: "6. Patrocinadores, parceiros e ativações",
    html: `
      <p>O DevFestPoa26 valoriza as empresas e organizações que apoiam a comunidade e tornam o evento possível.</p>
      <p>Ao mesmo tempo, espaços de patrocinadores e ativações também devem respeitar este Código de Conduta.</p>
      <p>Não serão permitidas abordagens abusivas, insistentes ou invasivas, incluindo:</p>
      <ul>
        <li>insistência após uma pessoa demonstrar desinteresse;</li>
        <li>abordagens discriminatórias;</li>
        <li>coleta inadequada de dados pessoais;</li>
        <li>constrangimento para participação em ações promocionais;</li>
        <li>qualquer forma de assédio ou intimidação.</li>
      </ul>
      <p>A participação em ativações, pesquisas, sorteios e ações promocionais deve ser voluntária e respeitar as regras de privacidade e proteção de dados aplicáveis.</p>
    `,
  },
  {
    title: "7. Como relatar uma situação",
    html: `
      <p>Se você presenciar ou vivenciar uma situação que viole este Código de Conduta, recomendamos que comunique a organização assim que se sentir confortável e seguro para fazê-lo.</p>
      <p>Você pode procurar:</p>
      <ul>
        <li>qualquer pessoa identificada como parte da organização ou equipe do DevFestPoa26;</li>
        <li>a equipe de credenciamento ou recepção;</li>
        <li>integrantes identificados como voluntários;</li>
        <li>os canais oficiais de contato do evento.</li>
      </ul>
      <p>Ao realizar uma denúncia, você pode compartilhar, se possível:</p>
      <ul>
        <li>o que aconteceu;</li>
        <li>quando aconteceu;</li>
        <li>onde aconteceu;</li>
        <li>quem estava envolvido;</li>
        <li>se existem testemunhas;</li>
        <li>qualquer informação adicional que possa ajudar na compreensão da situação.</li>
      </ul>
      <p>Você não precisa ter todas essas informações para realizar uma denúncia.</p>
      <p>Se você não souber exatamente quem procurar, procure qualquer integrante da equipe do evento e explique que precisa falar sobre uma situação relacionada ao Código de Conduta.</p>
      <p>A organização fará o possível para acolher a situação com seriedade, respeito e confidencialidade, dentro dos limites necessários para realizar a apuração e tomar as medidas adequadas.</p>
    `,
  },
  {
    title: "8. Confidencialidade e proteção",
    html: `
      <p>A organização do DevFestPoa26 se compromete a tratar relatos de violações com responsabilidade e discrição.</p>
      <p>Informações sobre uma denúncia serão compartilhadas apenas quando necessário para avaliar a situação, proteger as pessoas envolvidas e tomar as providências adequadas.</p>
      <p>Não toleraremos retaliação contra pessoas que, de boa-fé, relatem uma situação ou contribuam para sua apuração.</p>
      <p>Denúncias intencionalmente falsas ou feitas de má-fé também poderão ser consideradas uma violação deste Código de Conduta.</p>
    `,
  },
  {
    title: "9. Medidas em caso de violação",
    html: `
      <p>A organização do DevFestPoa26 poderá tomar as medidas que considerar adequadas de acordo com a gravidade e as circunstâncias de cada situação.</p>
      <p>As medidas podem incluir:</p>
      <ol>
        <li><strong>Orientação ou conversa privada</strong> — Para situações de menor gravidade ou quando uma orientação for suficiente para corrigir o comportamento.</li>
        <li><strong>Advertência</strong> — Quando houver uma violação mais significativa ou repetição de um comportamento inadequado.</li>
        <li><strong>Solicitação de interrupção do comportamento</strong> — A pessoa poderá ser orientada a interromper imediatamente determinada conduta.</li>
        <li><strong>Restrição de participação</strong> — A organização poderá restringir o acesso da pessoa a determinadas atividades ou espaços.</li>
        <li><strong>Retirada do evento</strong> — Em situações graves, a pessoa poderá ser convidada ou obrigada a deixar o evento, sem direito a reembolso.</li>
        <li><strong>Banimento de futuras atividades</strong> — Em casos graves ou reincidentes, a pessoa poderá ser impedida de participar de futuras atividades organizadas pelo DevFestPoa26 ou pelas comunidades organizadoras, conforme aplicável.</li>
        <li><strong>Acionamento das autoridades competentes</strong> — Em situações que envolvam ameaça, violência, risco à integridade física ou possíveis crimes, a organização poderá acionar os responsáveis pelo local ou as autoridades competentes.</li>
      </ol>
      <p>A aplicação das medidas será realizada considerando a natureza, gravidade e contexto da situação.</p>
    `,
  },
  {
    title: "10. Responsabilidade coletiva",
    html: `
      <p>Um ambiente seguro não é responsabilidade apenas da organização.</p>
      <p>Cada pessoa que participa do DevFestPoa26 tem um papel importante na construção da comunidade que queremos.</p>
      <p>Se você perceber que alguém está desconfortável, sendo assediado ou enfrentando uma situação inadequada, considere oferecer apoio e, quando possível, procurar a equipe do evento.</p>
      <p>Se você cometer um erro, esteja aberto a ouvir, refletir e corrigir sua atitude.</p>
      <p>Se você perceber um comportamento inadequado, não normalize.</p>
      <p>Nossa comunidade é construída por pessoas diferentes, com histórias, experiências e perspectivas diferentes.</p>
      <p><strong>Inclusão intencional.</strong></p>
      <p><strong>Respeito sempre.</strong></p>
    `,
  },
  {
    title: "11. Dúvidas, denúncias e contato oficial",
    html: `
      <p>Se você tiver dúvidas sobre este Código de Conduta, quiser relatar uma situação ou precisar de ajuda durante o evento, entre em contato com a organização do DevFestPoa26 por meio dos canais oficiais:</p>
      <p>📞 <strong>Telefone/WhatsApp:</strong> ${CONDUCT_CONTACT.phone}<br />
      📧 <strong>E-mail:</strong> <a href="mailto:${CONDUCT_CONTACT.email}">${CONDUCT_CONTACT.email}</a></p>
      <p>Durante o evento, você também pode procurar qualquer integrante identificado da organização, equipe de credenciamento ou voluntariado.</p>
      <p>Estamos aqui para ouvir, acolher e ajudar.</p>
    `,
  },
  {
    title: "12. Nosso compromisso final",
    html: `
      <p>O <strong>DevFestPoa26</strong> é feito pela comunidade, para a comunidade.</p>
      <p>Organizado pelo <strong>GDG Porto Alegre</strong> e pelo <strong>GDG Caxias do Sul</strong>, nosso objetivo é construir um evento onde pessoas possam aprender, ensinar, criar conexões, encontrar oportunidades e, acima de tudo, sentir que pertencem.</p>
      <p>Queremos que cada participante faça sua parte para tornar essa experiência melhor para todos.</p>
      <p><strong>Seja gentil. Seja respeitoso. Inclua. Colabore.</strong></p>
      <p><strong>Nos vemos no DevFestPoa26! 🚀🎃</strong></p>
    `,
  },
];

export const CONDUCT_CLOSING = `
  <p>Este Código de Conduta foi elaborado para o DevFestPoa26, organizado pelo GDG Porto Alegre e GDG Caxias do Sul, e poderá ser atualizado pela organização sempre que necessário para refletir as necessidades da comunidade e do evento.</p>
`;

export const GALLERY_PHOTOS = [
  { src: "/DEVFEST-028.jpg", width: 2048, height: 1538 },
  { src: "/DEVFEST-011.jpg", width: 1365, height: 2048 },
  { src: "/DEVFEST-043.jpg", width: 2048, height: 1538 },
  { src: "/DEVFEST-057.jpg", width: 1638, height: 2048 },
  { src: "/DEVFEST-047.jpg", width: 2048, height: 1639 },
  { src: "/DEVFEST-058.jpg", width: 1538, height: 2048 },
  { src: "/DEVFEST-054.jpg", width: 2048, height: 1537 },
  { src: "/DEVFEST-090.jpg", width: 2048, height: 1537 },
  { src: "/DEVFEST-110.jpg", width: 1365, height: 2048 },
  { src: "/DEVFEST-164.jpg", width: 2048, height: 1538 },
  { src: "/DEVFEST-126 (1).jpg", width: 1538, height: 2048 },
  { src: "/DEVFEST-227.jpg", width: 2048, height: 1538 },
  { src: "/DEVFEST-207 (1).jpg", width: 2048, height: 1537 },
  { src: "/DEVFEST-308.jpg", width: 2048, height: 1365 },
  { src: "/DEVFEST-210.jpg", width: 1365, height: 2048 },
  { src: "/DEVFEST-258.jpg", width: 1538, height: 2048 },
].map((p, i) => ({ ...p, alt: `DevFestPoa25 — registro ${i + 1}` }));

export const SPONSOR_TIERS = { parceiros: 6 };

export const COMMUNITY_PARTNERS_COUNT = 5;

export const METRICS_2025 = [
  { num: "325", label: "pessoas inscritas" },
  { num: "283", label: "presentes no dia" },
  { num: "26", label: "talks e painéis" },
  { num: "4", label: "trilhas simultâneas" },
  { num: "7h+", label: "de conteúdo" },
  { num: "22", label: "patrocinadores" },
  { num: "20", label: "voluntários na equipe" },
  { num: "4,8/5", label: "avaliação média" },
  { num: "198,4k+", label: "de alcance social" },
  { num: "42%", label: "participantes mulheres" },
  { num: "45%", label: "palestrantes mulheres" },
  { num: "2026", label: "é a nossa próxima edição" },
];

export const GDG_COMMUNITIES = [
  {
    name: "GDG Porto Alegre",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/gdgpoa/", icon: "instagram" as const },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/gdg-porto-alegre/", icon: "linkedin" as const },
      { label: "Site", href: "https://gdgportoalegre.com.br/", icon: "globe" as const },
    ],
  },
  {
    name: "GDG Caxias do Sul",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/gdgcaxiasdosul", icon: "instagram" as const },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/gdg-caxias-do-sul/", icon: "linkedin" as const },
    ],
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  {
    href: "/#explore",
    label: "Explore o evento",
    children: [
      { href: "/sobre", label: "Sobre" },
      { href: "/tema", label: "Tema" },
      { href: "/experiencia", label: "Experiência" },
    ],
  },
  {
    href: "/patrocinadores",
    label: "Conexões",
    children: [
      { href: "/patrocinadores#patrocinadores", label: "Patrocinadores" },
      { href: "/patrocinadores#comunidades-parceiras", label: "Comunidades Parceiras" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  { href: "/codigo-de-conduta", label: "Código de Conduta" },
];

// Ordem pensada por intenção de quem visita: primeiro entender o evento,
// depois o conteúdo, a experiência no dia, quem apoia, e por fim tirar dúvidas.
export const EXPLORE_CARDS = [
  {
    href: "/sobre",
    icon: "📖",
    title: "Sobre o evento",
    text: "Conheça a proposta do DevFestPoa26 e os pilares de conteúdo.",
    tag: "Comece por aqui",
  },
  {
    href: "/tema",
    icon: "🎯",
    title: "Tema 2026",
    text: "Criar, proteger, escalonar: a era agêntica.",
    tag: "Conteúdo",
  },
  {
    href: "/experiencia",
    icon: "🧭",
    title: "Experiência",
    text: "Programação, networking, DevFestPoaGame e a edição anterior.",
    tag: "No dia do evento",
  },
  {
    href: "/patrocinadores",
    icon: "🤝",
    title: "Patrocinadores",
    text: "Empresas que acreditam e apoiam a comunidade.",
    tag: "Comunidade",
  },
  {
    href: "/faq",
    icon: "❓",
    title: "FAQ",
    text: "Tire suas dúvidas sobre o evento.",
    tag: "Dúvidas",
  },
];
