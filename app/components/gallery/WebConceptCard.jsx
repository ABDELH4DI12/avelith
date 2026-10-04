import CardMeta from "./CardMeta";

const concepts = {
  commerce: {
    eyebrow: "AVELITH / COMMERCE",
    headline: ["DESIRE", "IN EVERY", "DETAIL."],
    action: "SHOP THE STORY ↗",
  },
  architecture: {
    eyebrow: "SPATIAL DIGITAL",
    headline: ["SPACE,", "BEFORE", "ARRIVAL."],
    action: "EXPLORE PROJECT ↗",
  },
  launch: {
    eyebrow: "CAMPAIGN / 2026",
    headline: ["MAKE THE", "FIRST SCROLL", "COUNT."],
    action: "ENTER EXPERIENCE ↗",
  },
  portfolio: {
    eyebrow: "SELECTED WORK",
    headline: ["WORK", "WITH A", "POINT OF VIEW."],
    action: "VIEW INDEX ↗",
  },
  saas: {
    eyebrow: "PRODUCT SYSTEM",
    headline: ["CLARITY", "BUILDS", "TRUST."],
    action: "SEE PLATFORM ↗",
  },
  hospitality: {
    eyebrow: "HOSPITALITY",
    headline: ["SELL THE", "FEELING", "FIRST."],
    action: "BOOK THE STORY ↗",
  },
};

export default function WebConceptCard({ item, index, total }) {
  const concept = concepts[item.variant];
  return (
    <article
      className="case-card interactive-card web-concept-card"
      aria-label={item.title}
    >
      <div className={`case-visual web-concept web-concept--${item.variant}`}>
        <CardMeta index={index} total={total} badge="Avelith digital concept" />
        <div className="browser-chrome">
          <span />
          <span />
          <span />
          <small>avelith.digital/{String(index + 1).padStart(2, "0")}</small>
        </div>
        <div className="web-concept-stage">
          <img
            className="web-concept-image"
            src={`/assets/web-concepts/${item.variant}-1200.webp`}
            srcSet={`/assets/web-concepts/${item.variant}-720.webp 720w, /assets/web-concepts/${item.variant}-1200.webp 1200w`}
            sizes="(max-width: 760px) calc(100vw - 50px), (max-width: 1100px) 58vw, 43vw"
            alt={`${item.eyebrow} website visual concept`}
            loading="lazy"
            decoding="async"
          />
          <div className="wc-copy">
            <small>{concept.eyebrow}</small>
            <b>
              {concept.headline.map((line, lineIndex) => (
                <span key={line}>
                  {line}
                  {lineIndex < concept.headline.length - 1 && <br />}
                </span>
              ))}
            </b>
            <span className="concept-cta">{concept.action}</span>
          </div>
        </div>
      </div>
      <div className="case-meta">
        <span>
          {item.eyebrow} — {item.line}
        </span>
        <strong>{item.metric}</strong>
      </div>
    </article>
  );
}
