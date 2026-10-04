import { contactEmail } from "../../data/contact";

export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-identity">
        <a className="brand footer-brand" href="#home">
          <span className="brand-word">
            AVELITH<small>STUDIO</small>
          </span>
        </a>
        <a className="footer-email" href={`mailto:${contactEmail}`}>
          {contactEmail} ↗
        </a>
      </div>
      <div className="footer-nav">
        <a href="#branding">Brand</a>
        <a href="#websites">Web</a>
        <a href="#motion">Motion</a>
        <a href="#social">Social</a>
        <a href="#interior">Interior</a>
        <a href="#exterior">Exterior</a>
        <a href="#graphic">Graphic</a>
      </div>
      <div className="footer-end">
        <span>
          © <span id="year">{new Date().getFullYear()}</span>
        </span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
