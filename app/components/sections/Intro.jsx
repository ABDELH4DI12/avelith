import { services } from "../../data/services";

export default function Intro() {
  return (
    <section className="intro section-shell" id="services">
      <div className="intro-index">00 — 07</div>
      <div className="intro-copy">
        <p className="kicker">What Avelith actually does</p>
        <h2 className="reveal-copy">
          <span className="reveal-mask">
            <span>
              Not seven disconnected services.
              <br />
              <em>One creative system, expressed seven ways.</em>
            </span>
          </span>
        </h2>
      </div>
      <div className="intro-note">
        Each chapter combines custom Avelith concept studies with curated visual
        references so clients can understand the level, direction and type of
        work we can create.
      </div>
      <nav className="intro-nav" aria-label="Explore our disciplines">
        {services.map((service) => (
          <a href={`#${service.id}`} key={service.id}>
            <span>{service.number.slice(0, 2)}</span>
            <strong>{service.title}</strong>
            <i aria-hidden="true">↗</i>
          </a>
        ))}
      </nav>
    </section>
  );
}
