export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-frame" aria-hidden="true"></div>
      <div className="hero-gridline hero-gridline-a"></div>
      <div className="hero-gridline hero-gridline-b"></div>
      <div className="hero-ghost" aria-hidden="true">
        AVELITH
      </div>
      <div className="hero-meta hero-meta-left">CASABLANCA / WORLDWIDE</div>
      <div className="hero-meta hero-meta-right">
        INDEPENDENT CREATIVE STUDIO — 2026
      </div>

      <div className="hero-copy">
        <p className="kicker hero-kicker">
          Seven disciplines. One visual language.
        </p>
        <h1
          className="hero-title"
          aria-label="We make ideas impossible to ignore"
        >
          <span className="title-line">
            <span>WE MAKE IDEAS</span>
          </span>
          <span className="title-line italic">
            <span>IMPOSSIBLE</span>
          </span>
          <span className="title-line block">
            <span>TO IGNORE.</span>
          </span>
        </h1>
        <div className="hero-bottom">
          <figure className="hero-feature">
            <img
              src="/assets/site/hero-720.webp"
              srcSet="/assets/site/hero-720.webp 720w, /assets/site/hero-1200.webp 1200w"
              sizes="(max-width: 760px) calc(100vw - 30px), 260px"
              alt="Sculptural gold and teal artwork representing Avelith's connected creative disciplines"
              decoding="async"
            />
            <figcaption>
              One idea, many expressions <span>01 / 07</span>
            </figcaption>
          </figure>
          <p>
            Avelith is a multidisciplinary creative studio shaping brands,
            digital experiences, visuals and spaces through one unified creative
            direction.
          </p>
          <div className="hero-actions">
            <a href="#work" className="hero-cta">
              <span>Explore our work</span>
              <span aria-hidden="true">↘</span>
            </a>
            <a href="#contact" className="hero-secondary-cta">
              Start a project <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>BRANDING</span>
          <i>✦</i>
          <span>WEBSITES</span>
          <i>✦</i>
          <span>MOTION</span>
          <i>✦</i>
          <span>SOCIAL + ADS</span>
          <i>✦</i>
          <span>INTERIOR DESIGN</span>
          <i>✦</i>
          <span>EXTERIOR DESIGN</span>
          <i>✦</i>
          <span>GRAPHIC DESIGN</span>
          <i>✦</i>
          <span>BRANDING</span>
          <i>✦</i>
          <span>WEBSITES</span>
          <i>✦</i>
          <span>MOTION</span>
          <i>✦</i>
          <span>SOCIAL + ADS</span>
          <i>✦</i>
          <span>INTERIOR DESIGN</span>
          <i>✦</i>
          <span>EXTERIOR DESIGN</span>
          <i>✦</i>
          <span>GRAPHIC DESIGN</span>
          <i>✦</i>
        </div>
      </div>
    </section>
  );
}
