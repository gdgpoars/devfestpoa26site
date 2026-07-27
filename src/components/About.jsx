const ITEMS = [
  { num: "01", title: "Conteúdo técnico relevante", text: "Palestras e trilhas pensadas pela e para a comunidade tech." },
  { num: "02", title: "Experiências práticas", text: "Hands-on, demos e momentos de aprender fazendo." },
  { num: "03", title: "Conexão com empresas", text: "Patrocinadores e parceiros que também são comunidade." },
  { num: "04", title: "Networking de verdade", text: "Espaços pensados para gerar conversas, não só crachás." },
];

export default function About() {
  return (
    <section className="section-pad" id="sobre">
      <div className="container">
        <div className="about-layout">
          <div className="reveal">
            <p className="eyebrow">Sobre o evento</p>
            <h2 className="section-title">Onde tecnologia, comunidade e futuro se encontram</h2>
            <div className="about-copy">
              <p>
                O DevFestPoa26 não é só mais uma conferência de tecnologia. É o encontro anual das
                comunidades <strong>GDG Porto Alegre</strong> e <strong>GDG Caxias do Sul</strong> —
                feito por quem programa, projeta, lidera e aprende no dia a dia, para quem quer
                fazer parte disso.
              </p>
              <p>
                Um dia inteiro de conteúdo técnico relevante, experiências práticas e conversas que
                só acontecem quando a comunidade toda está no mesmo lugar. Sem enrolação, sem
                discurso corporativo — é sobre código, carreira e conexão de verdade.
              </p>
            </div>
          </div>
          <ul className="about-list reveal">
            {ITEMS.map((it) => (
              <li key={it.num}>
                <span className="num">{it.num}</span>
                <div>
                  <b>{it.title}</b>
                  <span>{it.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
