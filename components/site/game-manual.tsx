import Link from "next/link";
import { Reveal } from "@/components/site/reveal";

const QUICK_LINKS = [
  { href: "#pato-pila", icon: "🦆", label: "O Pato Pila" },
  { href: "#como-participar", icon: "🎮", label: "Como participar" },
  { href: "#pontos", icon: "🏆", label: "Como pontuar" },
  { href: "#ranking", icon: "📊", label: "Ranking" },
  { href: "#premiacao", icon: "🥇", label: "Premiação" },
  { href: "#regras", icon: "📜", label: "Regras" },
];

const STEPS = [
  {
    title: "Entre no Game",
    text: "Acesse o web app do DevFest e faça login com sua conta Google.",
  },
  {
    title: "Informe o código do seu Welcome Kit",
    text: "Digite o código encontrado no seu adesivo, crachá ou material de credenciamento. Esse código define automaticamente sua equipe.",
    warning: "A equipe é fixa. Depois de confirmada, não será possível trocar.",
  },
  {
    title: "Acesse a aba Desafios",
    text: "Ali você encontrará as missões disponíveis durante o evento.",
  },
  {
    title: "Complete as missões",
    text: "Participe das atividades e cumpra os desafios.",
  },
  {
    title: "Resgate seus Patos Pila",
    text: "Dependendo da missão, você deverá digitar um código de validação ou escanear o QR Code disponível no local.",
  },
  {
    title: "Acompanhe o Ranking",
    text: "Veja seus Patos Pila e acompanhe o desempenho da sua equipe em tempo real.",
  },
  {
    title: "Jogue até o final!",
    text: "As missões ficam disponíveis durante o evento. No encerramento, teremos a contagem final e a premiação.",
  },
];

const MISSIONS = [
  {
    icon: "❓",
    title: "Responda perguntas durante as sessões",
    points: "+1",
    text: "Algumas sessões terão perguntas selecionadas que podem render pontos para sua equipe.",
  },
  {
    icon: "📸",
    title: "Participe da ativação da Ambrosia",
    points: "+10",
    text: "Tire sua foto no totem da Ambrosia e publique conforme as instruções da missão.",
    note: "Válido para as 10 primeiras pessoas que completarem a missão.",
  },
  {
    icon: "🚀",
    title: "Participe das atividades interativas",
    points: "+1 a +3",
    text: "Entre nas atividades propostas nas salas do evento. A pontuação varia de acordo com a atividade.",
  },
  {
    icon: "🎪",
    title: "Visite os stands",
    points: "🎯",
    text: "Explore a área de patrocinadores, conheça as empresas, converse com as pessoas e participe das ativações. Algumas dessas interações podem render Patos Pila.",
  },
  {
    icon: "🦆",
    title: "Encontre o Pato Dourado",
    points: "+5",
    text: "Existe um Pato Dourado escondido em algum lugar do evento. Mas não espere um mapa com um X vermelho — as pistas serão liberadas durante o evento. 👀",
  },
  {
    icon: "🤝",
    title: "Missão de Networking",
    points: "🎯",
    text: "Conecte-se com 3 pessoas de equipes diferentes, escaneando o QR Code pessoal delas na tela Conectar do web app. Ao completar 3/3, a missão é validada — e conta para você e para sua equipe.",
  },
];

const VALEM = [
  "Apenas Patos Pila oficiais disponibilizados pelas equipes do DevFestPoa.",
  "Missões concluídas e devidamente validadas.",
  "Pontos conquistados até o horário final da programação do evento.",
];

const NAO_VALEM = [
  "Transferir Patos Pila entre equipes.",
  "Alterar ou editar Patos Pila já validados.",
  "Tentar validar uma missão sem ter realizado a atividade.",
  "Burlar, manipular ou explorar falhas da dinâmica para obter vantagem.",
];

export function GameManual() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
          <Link
            href="/experiencia"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Voltar para Experiência
          </Link>
          <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 text-xs font-semibold uppercase tracking-widest text-secondary duration-700">
            🦆 Manual DevFestPoaGAME
          </p>
          <h1 className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 mt-2 text-3xl font-extrabold duration-700 sm:text-5xl">
            A Jornada dos Patos Pila
          </h1>
          <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 mt-3 text-lg font-semibold text-gradient duration-700">
            Criar. Proteger. Escalonar. Jogar.
          </p>
          <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 mx-auto mt-4 max-w-xl text-muted-foreground duration-700">
            O DevFestPoaGAME é a dinâmica gamificada do DevFest Porto Alegre 2026. Durante todo o
            evento, você poderá completar missões, interagir com outras pessoas, explorar os
            espaços, conhecer patrocinadores e, claro, acumular muitos Patos Pila. Tudo acontece
            dentro do web app oficial do evento, em paralelo à programação.
          </p>
          <p className="mt-4 text-sm font-medium text-muted-foreground">
            Nem todo monstro mora debaixo da cama. Alguns estão no seu código. 👀
          </p>

          <nav aria-label="Ir para seção" className="mt-8 flex flex-wrap justify-center gap-2">
            {QUICK_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:scale-125">
                  {l.icon}
                </span>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="pato-pila" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <div className="card-glow rounded-2xl border border-border bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl transition-transform duration-300 hover:scale-110">
                🦆
              </span>
              <h2 className="mt-4 text-2xl font-extrabold">O que é o Pato Pila?</h2>
              <p className="mt-2 text-muted-foreground">
                O Pato Pila é a moeda oficial do DevFestPoaGAME. Você conquista Patos Pila ao
                completar missões e participar das atividades espalhadas pelo evento — e cada Pato
                Pila que você conquista também ajuda a aumentar o placar da sua equipe.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary">Importante</p>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Os Patos Pila são contabilizados automaticamente após a validação da missão.</li>
                <li>• Um Pato Pila validado não pode ser alterado ou removido.</li>
                <li>• Não é possível transferir Patos Pila entre equipes.</li>
                <li>• Quanto mais você participa, mais sua equipe sobe no ranking!</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="como-participar" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">🎮 Como participar</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">É simples assim</h2>
          </div>
          <ol className="space-y-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <li className="card-glow flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-sm font-extrabold text-secondary">
                    {i + 1}
                  </span>
                  <div>
                    <b className="block">{s.title}</b>
                    <span className="text-sm text-muted-foreground">{s.text}</span>
                    {s.warning && (
                      <p className="mt-1.5 text-sm font-semibold text-primary">⚠️ {s.warning}</p>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="pontos" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">🏆 Como pontuar</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Como ganhar Patos Pila</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Tem Pato Pila para quem gosta de tudo: responder perguntas, explorar o evento, fazer
              networking, participar das atividades e até procurar um pato escondido. 🦆
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MISSIONS.map((m, i) => (
              <Reveal key={m.title} delay={i * 70}>
                <div className="card-glow group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                      {m.icon}
                    </span>
                    <span className="rounded-full bg-secondary/15 px-2.5 py-1 text-xs font-extrabold text-secondary">
                      {m.points}
                    </span>
                  </div>
                  <h3 className="mt-4 font-bold">{m.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{m.text}</p>
                  {m.note && <p className="mt-2 text-xs font-semibold text-primary">⚠️ {m.note}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="ranking" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <div className="card-glow rounded-2xl border border-border bg-card p-8 text-center">
              <span className="text-4xl">📊</span>
              <h2 className="mt-3 text-2xl font-extrabold">Ranking</h2>
              <p className="mt-2 text-muted-foreground">
                O ranking mostra, em tempo real, o total de Patos Pila acumulados por cada equipe. A
                equipe que estiver na liderança aparecerá em destaque com o 🏆 troféu.
              </p>
              <p className="mt-3 font-semibold">
                Então, sim: cada missão conta. Cada Pato Pila conta. Cada pessoa da equipe faz
                diferença.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="premiacao" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <div className="card-glow rounded-2xl border border-secondary/40 bg-gradient-to-br from-secondary/10 via-card to-card p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">🥇 Premiação</p>
              <h2 className="mt-2 text-2xl font-extrabold">E a premiação?</h2>
              <p className="mt-2 text-muted-foreground">
                No encerramento do DevFest Porto Alegre 2026, faremos a contagem final dos Patos
                Pila. As três melhores equipes ganharão:
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm font-semibold">
                <span className="rounded-full border border-border bg-card px-4 py-2 transition-transform duration-300 hover:scale-110">
                  🥇 1º lugar
                </span>
                <span className="rounded-full border border-border bg-card px-4 py-2 transition-transform duration-300 hover:scale-110">
                  🥈 2º lugar
                </span>
                <span className="rounded-full border border-border bg-card px-4 py-2 transition-transform duration-300 hover:scale-110">
                  🥉 3º lugar
                </span>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                🏆 Troféu do DevFestPoaGAME + 🎁 Prêmios exclusivos, anunciados no encerramento do
                evento.
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">
                Guarde energia para o final. A disputa pode mudar até o último Pato Pila. 👀🦆
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="regras" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">📜 Regras</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Regras do jogo</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Para manter o jogo justo e divertido para todo mundo.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="card-glow h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-[#5be08a]">✅ Valem</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {VALEM.map((v) => (
                    <li key={v} className="flex gap-2.5">
                      <span className="text-[#5be08a]">✓</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card-glow h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-[#ff6b6b]">❌ Não valem</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {NAO_VALEM.map((v) => (
                    <li key={v} className="flex gap-2.5">
                      <span className="text-[#ff6b6b]">✗</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Após a validação, a pontuação é registrada automaticamente e não poderá ser desfeita. A
            contagem final será pública e não sofrerá alterações após o encerramento do jogo.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <Reveal>
            <div>
              <span className="text-4xl">👻</span>
              <h2 className="mt-3 text-2xl font-extrabold">O principal: divirta-se!</h2>
              <p className="mt-3 text-muted-foreground">
                O DevFestPoaGAME foi criado para fazer você participar mais, conhecer mais gente,
                explorar o evento e viver o DevFest de um jeito diferente. Não importa se você é
                dev, designer, pessoa de produto, dados, cloud, segurança, liderança, estudante ou
                está chegando agora na área de tecnologia.
              </p>
              <p className="mt-3 font-semibold">
                Monte sua estratégia. Chame seu squad. Explore o evento. Faça conexões. Colecione
                Patos. E, principalmente: 🦆 faça sua equipe chegar ao topo!
              </p>
              <p className="mt-5 text-sm text-muted-foreground">
                Nos vemos no DevFestPoaGAME.
                <br />
                Boa sorte, boas conexões e que vença a equipe com mais Patos Pila! 🏆
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
