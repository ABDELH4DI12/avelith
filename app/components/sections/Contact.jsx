import { contactEmail, projectEmailHref } from "../../data/contact";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-orbit orbit-1"></div>
      <div className="contact-orbit orbit-2"></div>
      <div className="contact-inner section-shell">
        <p className="kicker">Start a project</p>
        <h2>
          HAVE AN IDEA
          <br />
          <em>WORTH BUILDING?</em>
        </h2>
        <p className="contact-intro">
          Whether you have a complete brief or just the beginning of an idea,
          let’s shape it into something people remember.
        </p>
        <div className="contact-bottom">
          <div className="contact-email-group">
            <span className="contact-label">START A PROJECT</span>
            <a href={projectEmailHref()} className="contact-mail magnetic">
              {contactEmail} <span>↗</span>
            </a>
          </div>
          <p>
            Casablanca / Worldwide
            <br />
            Available for selected projects.
          </p>
        </div>
      </div>
    </section>
  );
}
