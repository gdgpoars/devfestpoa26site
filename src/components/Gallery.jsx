import { GALLERY_SLOTS } from "../data/content";

export default function Gallery() {
  return (
    <section className="section-pad" id="galeria">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Galeria</p>
          <h2 className="section-title">Um pouco do que já vivemos</h2>
        </div>
        <div className="gallery-grid reveal">
          {Array.from({ length: GALLERY_SLOTS }).map((_, i) => (
            <div className={`g-slot${i === 0 ? " big" : ""}`} key={i}>
              <span>📸</span>Foto DevFestPoa25
              <br />
              em breve
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
