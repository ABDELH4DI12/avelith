export const contactEmail = "studioavelith@gmail.com";

export function projectEmailHref(subject = "Avelith project inquiry") {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}
