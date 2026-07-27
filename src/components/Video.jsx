import { useState } from "react";

export default function Video() {
  const [loaded, setLoaded] = useState(false);

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setLoaded(true);
    }
  }

  return (
    <section className="section-pad" id="video">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Assista</p>
          <h2 className="section-title">
            Não acredita? Dá uma olhada no que aconteceu na última edição.
          </h2>
        </div>
        <div className="video-wrap reveal">
          {loaded ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/BFvfRo4isw4?autoplay=1&rel=0"
              title="Vídeo oficial do DevFestPoa25"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div
              className="video-poster"
              role="button"
              tabIndex={0}
              aria-label="Reproduzir vídeo do DevFestPoa25"
              onClick={() => setLoaded(true)}
              onKeyDown={handleKeyDown}
            >
              <span className="play-btn">▶</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
