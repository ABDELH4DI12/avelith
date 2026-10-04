export default function Studio() {
  return (
    <section className="studio" id="studio">
      <div className="studio-word" aria-hidden="true">
        AVELITH
      </div>
      <div className="studio-inner section-shell">
        <div className="studio-copy">
          <p className="kicker">Why one multidisciplinary studio?</p>
          <h2>
            A brand is never
            <br /> experienced through
            <br /> one medium.
          </h2>
        </div>
        <figure className="studio-visual">
          <img
            src="/assets/site/studio-1200.webp"
            srcSet="/assets/site/studio-720.webp 720w, /assets/site/studio-1200.webp 1200w"
            sizes="(max-width: 760px) calc(100vw - 30px), 65vw"
            alt="Avelith visual direction with packaging, architecture models, materials, and graphic studies"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>THE AVELITH POINT OF VIEW</span>
            <span>CASABLANCA / WORLDWIDE</span>
          </figcaption>
        </figure>
        <div className="studio-aside">
          <p>
            People encounter a brand through its identity, website, content,
            campaigns, products and physical spaces. Avelith brings those
            disciplines together so every touchpoint feels like part of the same
            world.
          </p>
          <div className="studio-stats">
            <div>
              <strong>07</strong>
              <span>disciplines</span>
            </div>
            <div>
              <strong>01</strong>
              <span>visual language</span>
            </div>
            <div>
              <strong>03</strong>
              <span>creative worlds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
