export function observeMotionVideos(reduceMotion) {
  if (reduceMotion || !("IntersectionObserver" in window)) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) target.play().catch(() => {});
        else target.pause();
      });
    },
    { rootMargin: "300px" },
  );

  document.querySelectorAll('.motion-media[src$=".mp4"]').forEach((video) => {
    observer.observe(video);
  });

  return () => observer.disconnect();
}
