export function warmGalleryImages() {
  const chapters = document.querySelectorAll(".service-chapter");

  const warm = (chapter) => {
    chapter.querySelectorAll('img[loading="lazy"]').forEach((image, index) => {
      image.loading = "eager";
      if (index < 2) image.fetchPriority = "high";
    });
  };

  if (!("IntersectionObserver" in window)) {
    chapters.forEach(warm);
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        warm(target);
        observer.unobserve(target);
      });
    },
    { rootMargin: "1200px 0px" },
  );

  chapters.forEach((chapter) => observer.observe(chapter));
  return () => observer.disconnect();
}
