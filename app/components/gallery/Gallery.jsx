import { galleries } from "../../data/galleries";
import ImageStudyCard from "./ImageStudyCard";
import MotionCard from "./MotionCard";
import WebConceptCard from "./WebConceptCard";

export default function Gallery({ category }) {
  const items = galleries[category] ?? [];

  return (
    <div className="project-rail">
      {items.map((item, index) => {
        const props = { item, index, total: items.length };
        if (category === "websites")
          return <WebConceptCard key={item.variant} {...props} />;
        if (category === "motion")
          return <MotionCard key={item.title} {...props} />;
        return <ImageStudyCard key={item.title} kind={category} {...props} />;
      })}
    </div>
  );
}
