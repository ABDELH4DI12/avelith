import Gallery from "../gallery/Gallery";
import { projectEmailHref } from "../../data/contact";

export default function ServiceChapter({ service }) {
  return (
    <section className={`service-chapter ${service.theme}`} id={service.id}>
      <div className="chapter-sticky">
        <div className="chapter-copy">
          <div className="chapter-topline">
            <span>{service.number}</span>
            <span>{service.label}</span>
          </div>
          <h2>
            {service.title}
            <br />
            <em>{service.emphasis}</em>
          </h2>
          <p>{service.description}</p>
          <a
            className="chapter-cta"
            href={projectEmailHref(`Avelith ${service.title} project`)}
          >
            {service.cta} <span>↗</span>
          </a>
          <div className="deliverables">
            {service.deliverables.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="chapter-progress">
            <i />
          </div>
        </div>
        <div className="project-viewport">
          <Gallery category={service.id} />
        </div>
      </div>
    </section>
  );
}
