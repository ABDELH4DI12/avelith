import { serviceGroups, services } from "../../data/services";

export default function Intro() {
  return (
    <section className="intro section-shell" id="services">
      <div className="intro-index">00 — 07</div>
      <div className="intro-copy">
        <p className="kicker">What Avelith does</p>
        <h2 className="reveal-copy">
          <span className="reveal-mask">
            <span>
              Seven disciplines. Three creative worlds.
              <br />
              <em>One visual language.</em>
            </span>
          </span>
        </h2>
      </div>
      <div className="intro-note">
        From identity and digital experiences to campaigns and physical spaces,
        Avelith connects every touchpoint through one consistent creative
        direction.
      </div>
      <nav className="intro-nav" aria-label="Explore our disciplines">
        {serviceGroups.map((group) => (
          <div className="intro-nav-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="intro-nav-links">
              {group.ids.map((id) => {
                const service = services.find((item) => item.id === id);
                return (
                  <a href={`#${id}`} key={id}>
                    <span>{service.number.slice(0, 2)}</span>
                    <strong>{service.title}</strong>
                    <i aria-hidden="true">↗</i>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="work-intro" id="work">
        <span className="kicker">Selected work / visual studies</span>
        <p>
          Selected explorations, concept studies and creative projects
          demonstrating how Avelith approaches brands, digital experiences,
          communication and spaces.
        </p>
        <small>
          Website concepts are self-initiated. Other imagery is curated as
          visual reference.
        </small>
      </div>
    </section>
  );
}
