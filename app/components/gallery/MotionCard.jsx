import CardMeta from "./CardMeta";
import { galleryImage, galleryImageSet } from "../../data/galleries";
import ProjectDetails from "./ProjectDetails";

export default function MotionCard({ item, index, total }) {
  return (
    <article className="case-card interactive-card motion-study">
      <div className="case-visual motion-visual">
        {item.type === "video" ? (
          <video
            className="motion-media"
            src={item.media}
            poster={item.media.replace(/\.mp4$/, ".webp")}
            muted
            loop
            playsInline
            preload="none"
          />
        ) : (
          <img
            className="motion-media"
            src={galleryImage(item)}
            srcSet={galleryImageSet(item)}
            sizes="(max-width: 760px) calc(100vw - 30px), (max-width: 1100px) 58vw, 43vw"
            alt={item.title}
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="motion-vignette" />
        <CardMeta index={index} total={total} badge="Visual Exploration" />
        <div className="motion-caption">
          <strong>{item.title}</strong>
          <p>{item.subtitle}</p>
        </div>
      </div>
      <ProjectDetails item={item} kind="motion" />
    </article>
  );
}
