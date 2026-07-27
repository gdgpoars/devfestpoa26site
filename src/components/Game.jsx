import { Link } from "react-router-dom";

export default function Game() {
  return (
    <section className="section-pad game-section" id="devfestpoagame">
      <div className="container">
        <div className="game-panel reveal">
          <div>
            <p className="eyebrow">Uma experiência dentro da experiência</p>
            <h2>DevFestPoaGame</h2>
            <p className="lead">Você veio para aprender. Mas será que veio para jogar?</p>
            <p>
              O DevFestPoaGame é a camada de gamificação do DevFestPoa26: uma forma de explorar o
              evento, interagir com a comunidade e descobrir cantos que passariam despercebidos se
              você só seguisse a programação.
            </p>
            <ul className="game-features">
              <li>🕹️ <span>Desafios espalhados pelo evento — em breve</span></li>
              <li>🏆 <span>Pontuação e ranking — em breve</span></li>
              <li>🎁 <span>Premiação — em breve</span></li>
            </ul>
            <Link className="btn btn-ghost btn-sm" to="/faq">
              Saiba mais no FAQ
            </Link>
          </div>
          <div className="game-badge" aria-hidden="true">
            <span className="icon">🎮</span>
            <b>DevFestPoaGame</b>
            <span>regras em breve</span>
          </div>
        </div>
      </div>
    </section>
  );
}
