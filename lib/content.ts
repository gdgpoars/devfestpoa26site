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

export const FAQS = [
  { q: "O que é o DevFestPoa26?", a: "É o DevFest de Porto Alegre, o maior evento anual das comunidades GDG Porto Alegre e GDG Caxias do Sul: um dia de conteúdo técnico, comunidade, networking e experiências práticas em tecnologia." },
  { q: "Quando acontece o evento?", a: "No sábado, 31 de outubro de 2026, das 9h às 18h." },
  { q: "Onde será realizado?", a: "Na Faculdade Dom Bosco, em Porto Alegre/RS." },
  { q: "Quem organiza o DevFestPoa26?", a: "O evento é organizado de forma voluntária e sem fins lucrativos pelas comunidades GDG Porto Alegre e GDG Caxias do Sul." },
  { q: "O evento é presencial ou online?", a: "O DevFestPoa26 é 100% presencial." },
  { q: "Quem pode participar?", a: "Pessoas desenvolvedoras, profissionais de tecnologia, estudantes, entusiastas e qualquer pessoa interessada em aprender e se conectar com a comunidade tech." },
  { q: "Preciso ser desenvolvedor para participar?", a: "Não. O DevFestPoa26 é aberto a diferentes níveis de experiência e áreas — de quem está começando a quem já é referência no mercado." },
  { q: "Como compro meu ingresso?", a: `Pelo Sympla, nosso canal oficial de vendas. <a href="${SYMPLA_URL}" target="_blank" rel="noopener">Clique aqui para garantir o seu</a>.` },
  { q: "Onde compro o ingresso?", a: `Exclusivamente pelo Sympla, no link oficial: <a href="${SYMPLA_URL}" target="_blank" rel="noopener">sympla.com.br</a>. Valores e lotes disponíveis diretamente por lá.` },
  { q: "Qual é o horário do evento?", a: "Das 9h às 18h, no sábado, 31 de outubro de 2026." },
  { q: "Como chegar à Faculdade Dom Bosco?", a: "Endereço completo, opções de transporte público e estacionamento serão divulgados em breve nesta página." },
  { q: "O que devo levar?", a: "Ingresso, documento com foto, celular, carregador e, se quiser, notebook — além de disposição para aprender e fazer networking." },
  { q: "A programação já está disponível?", a: "Ainda não. A programação está sendo construída e será divulgada em breve, com palestras, palestrantes, trilhas e horários." },
  { q: "Terá networking?", a: "Sim! O DevFestPoa26 contará com networking estruturado, com espaços pensados para gerar conexões reais entre participantes, palestrantes e empresas." },
  { q: "O que é o DevFestPoaGame?", a: "É a experiência de gamificação do evento — uma forma extra de explorar o DevFestPoa26 e interagir com a comunidade. Regras, desafios e premiação serão detalhados em breve." },
  { q: "Terá alimentação?", a: "Detalhes sobre coffee break e opções de alimentação serão atualizados em breve nesta página." },
  { q: "O evento possui acessibilidade?", a: "Estamos organizando as informações de acessibilidade do local e do evento, que serão publicadas em breve." },
  { q: "Como posso acompanhar as novidades?", a: "Pelos canais oficiais do GDG Porto Alegre e do GDG Caxias do Sul e pela hashtag #DevFestPoa26." },
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
