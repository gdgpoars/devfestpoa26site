import { SPONSOR_TIERS } from "../data/content";

function LogoSlots({ count, label, sizeClass }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div className={`logo-slot ${sizeClass}`} key={i}>
          Logo
          <br />
          {label} {i + 1}
        </div>
      ))}
    </>
  );
}

export default function Sponsors() {
  return (
    <section className="section-pad" id="patrocinadores">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Patrocinadores &amp; parceiros</p>
          <h2 className="section-title">Empresas que acreditam na comunidade</h2>
          <p className="section-sub">E ajudam a tornar o DevFestPoa26 possível.</p>
        </div>

        <div className="sponsor-tier tier-powered reveal">
          <div className="tier-head">
            <h3>Powered by</h3>
            <span className="tier-note">— cota máxima</span>
          </div>
          <div className="logo-grid">
            <LogoSlots count={SPONSOR_TIERS.powered} label="em breve" sizeClass="" />
          </div>
        </div>

        <div className="sponsor-tier tier-parceiros reveal">
          <div className="tier-head">
            <h3>Parceiros</h3>
          </div>
          <div className="logo-grid">
            <LogoSlots count={SPONSOR_TIERS.parceiros} label="em breve" sizeClass="" />
          </div>
        </div>

        <div className="sponsor-tier tier-colab reveal">
          <div className="tier-head">
            <h3>Colaboradores</h3>
          </div>
          <div className="logo-grid">
            <LogoSlots count={SPONSOR_TIERS.colab} label="em breve" sizeClass="" />
          </div>
        </div>

        <p className="sponsors-cta reveal">
          Quer patrocinar o DevFestPoa26? Fale com a organização pelos canais oficiais do GDG
          Porto Alegre.
        </p>
      </div>
    </section>
  );
}
