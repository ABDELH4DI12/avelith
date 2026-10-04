import { galleryImage, galleryImageSet } from "../../data/galleries";
import CardMeta from "./CardMeta";
import ProjectDetails from "./ProjectDetails";

export default function ImageStudyCard({ item, index, total, kind }) {
  return (
    <article className={`case-card interactive-card study-card ${kind}-study`}>
      <div className="case-visual study-visual">
        <img
          className="reference-image"
          src={galleryImage(item)}
          srcSet={galleryImageSet(item)}
          sizes="(max-width: 760px) calc(100vw - 30px), (max-width: 1100px) 58vw, 43vw"
          alt={`${item.title} visual direction`}
          loading="lazy"
          decoding="async"
        />
        <div className="study-overlay" />
        <CardMeta index={index} total={total} />
        <div className="study-caption">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>{item.title}</strong>
            <p>{item.subtitle}</p>
          </div>
        </div>
      </div>
      <ProjectDetails item={item} kind={kind} />
    </article>
  );
}
