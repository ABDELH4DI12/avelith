const projectTypes = {
  branding: {
    type: "Branding",
    services: "Identity · Packaging · Art direction",
  },
  websites: { type: "Website", services: "UX · UI · Creative development" },
  motion: { type: "Motion", services: "Animation · Visual direction" },
  social: {
    type: "Social + Ads",
    services: "Campaigns · Content · Art direction",
  },
  interior: {
    type: "Interior Design",
    services: "Spatial concepts · Materials · Lighting",
  },
  exterior: {
    type: "Exterior Design",
    services: "Architecture · Materials · Landscape",
  },
  graphic: {
    type: "Graphic Design",
    services: "Editorial · Print · Visual systems",
  },
};

export default function ProjectDetails({ item, kind }) {
  const { type, services } = projectTypes[kind];
  const isConcept = kind === "websites";
  const name = item.projectName ?? item.title;
  const status = isConcept ? "Concept Study" : "Visual Exploration";
  const focus = item.subtitle?.toLowerCase().replaceAll(" / ", ", ");
  const description = isConcept
    ? `A self-initiated ${item.eyebrow.toLowerCase()} website concept.`
    : `This curated reference explores ${focus}.`;

  return (
    <div className="project-details">
      <div className="project-details-head">
        <h3>{name}</h3>
        <span>{status}</span>
      </div>
      <p>{description}</p>
      <dl>
        <div>
          <dt>Type</dt>
          <dd>{type}</dd>
        </div>
        <div>
          <dt>{isConcept ? "Services" : "Relevant services"}</dt>
          <dd>{services}</dd>
        </div>
      </dl>
    </div>
  );
}
