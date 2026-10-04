import { projectEmailHref } from "../../data/contact";

export default function Process() {
  return (
    <section className="process section-shell" id="process">
      <div className="process-head">
        <p className="kicker">The operating system</p>
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
          <p>
            Business, audience, category, ambition. We learn before we decorate.
          </p>
          <i>↘</i>
        </article>
        <article>
          <span>02</span>
          <h3>Define</h3>
          <p>
            We sharpen the problem, positioning, message and creative direction.
          </p>
          <i>↘</i>
        </article>
        <article>
          <span>03</span>
          <h3>Design</h3>
          <p>Systems first, outputs second. Every touchpoint has a reason.</p>
          <i>↘</i>
        </article>
        <article>
          <span>04</span>
          <h3>Deliver</h3>
          <p>We launch, refine and hand over a system that can keep growing.</p>
          <i>↘</i>
        </article>
      </div>
      <div className="process-cta">
        <span>Have a brief, or just the beginning of an idea?</span>
        <a href={projectEmailHref()}>
          Let’s build what comes next <i>↗</i>
        </a>
      </div>
    </section>
  );
}
