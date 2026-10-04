import { projectEmailHref } from "../../data/contact";

export default function Process() {
  return (
    <section className="process section-shell" id="process">
      <div className="process-head">
        <p className="kicker">Our process</p>
        <h2 className="reveal-copy">
          <span className="reveal-mask">
            <span>
              Good work feels surprising.
              <br />
              <em>The process should not.</em>
            </span>
          </span>
        </h2>
      </div>
      <div className="process-list">
        <article>
          <span>01</span>
          <h3>Discover</h3>
          <p>We understand the project, audience, context and ambition.</p>
          <i>↘</i>
        </article>
        <article>
          <span>02</span>
          <h3>Define</h3>
          <p>We establish the strategy, direction and creative system.</p>
          <i>↘</i>
        </article>
        <article>
          <span>03</span>
          <h3>Design</h3>
          <p>
            We translate the direction into clear, distinctive visual
            experiences.
          </p>
          <i>↘</i>
        </article>
        <article>
          <span>04</span>
          <h3>Deliver</h3>
          <p>
            We refine, prepare and deliver everything needed to bring the
            project to life.
          </p>
          <i>↘</i>
        </article>
      </div>
      <div className="process-cta">
        <span>Have a brief or an early idea?</span>
        <a href={projectEmailHref()}>
          Start a project <i>↗</i>
        </a>
      </div>
    </section>
  );
}
