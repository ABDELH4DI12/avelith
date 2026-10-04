import { contactEmail, projectEmailHref } from "../../data/contact";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-orbit orbit-1"></div>
      <div className="contact-orbit orbit-2"></div>
      <div className="contact-inner section-shell">
        <p className="kicker">Have something ambitious in mind?</p>
        <h2>
          MAKE IT
          <br />
          <em>UNMISSABLE.</em>
        </h2>
        <p className="contact-intro">
          Tell us what you’re building. We’ll shape the idea, the experience,
          and every detail people remember.
        </p>
        <div className="contact-bottom">
          <div className="contact-email-group">
            <span className="contact-label">PROJECT INQUIRIES</span>
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
