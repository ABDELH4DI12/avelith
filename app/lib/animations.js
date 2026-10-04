import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { observeMotionVideos } from "./motion-video";
import { warmGalleryImages } from "./gallery-images";

export function initializeSite() {
  const preloader = document.querySelector(".preloader");
  const count = document.querySelector(".preloader-count");
  const line = document.querySelector(".preloader-line span");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const stopVideos = observeMotionVideos(reduceMotion);
  const removeListeners = [];
  const on = (element, event, handler, options) => {
    element.addEventListener(event, handler, options);
    removeListeners.push(() =>
      element.removeEventListener(event, handler, options),
    );
  };

  let lenis = null;
  if (!reduceMotion)
    lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      smoothTouch: false,
    });

  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    removeListeners.push(() => gsap.ticker.remove(tick));
  }

  let mm;
  const context = gsap.context(() => {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      on(a, "click", (e) => {
        const target = document.querySelector(a.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(target, { offset: -74, duration: 1.1 });
        else target.scrollIntoView({ behavior: "smooth" });
      });
    });

    if (!reduceMotion && preloader) {
      document.body.classList.add("is-loading");
      const state = { v: 0 };
      gsap
        .timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            document.body.classList.remove("is-loading");
            preloader.style.display = "none";
            ScrollTrigger.refresh();
          },
        })
        .to(state, {
          v: 100,
          duration: 0.9,
          onUpdate() {
            if (count)
              count.textContent = String(Math.round(state.v)).padStart(2, "0");
            if (line) line.style.width = `${state.v}%`;
          },
        })
        .to(
          ".preloader-mark",
          { rotate: 18, scale: 0.86, duration: 0.4 },
          "<.48",
        )
        .to(".preloader", {
          yPercent: -100,
          duration: 0.78,
          ease: "expo.inOut",
        })
        .from(".site-header", { y: -18, opacity: 0, duration: 0.45 }, "-=.2")
        .from(".hero-kicker", { y: 16, opacity: 0, duration: 0.4 }, "<")
        .from(
          ".title-line>span",
          { yPercent: 106, duration: 0.82, stagger: 0.07, ease: "expo.out" },
          "<.04",
        )
        .from(
          ".hero-bottom>*",
          { y: 16, opacity: 0, duration: 0.55, stagger: 0.09 },
          "-=.4",
        );
    } else if (preloader) preloader.style.display = "none";

    gsap.to(".scroll-progress span", {
      width: "100%",
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
    });
    if (!reduceMotion)
      gsap.to(".ticker-track", {
        xPercent: -50,
        duration: 36,
        repeat: -1,
        ease: "none",
      });

    gsap.to(".hero-title", {
      yPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".hero-bottom", {
      y: -40,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "48% top",
        end: "bottom top",
        scrub: true,
      },
    });

    document
      .querySelectorAll(".reveal-copy .reveal-mask > span")
      .forEach((inner) => {
        gsap.from(inner, {
          yPercent: 102,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: inner, start: "top 84%", once: true },
        });
      });

    mm = gsap.matchMedia();
    mm.add("(min-width:761px)", () => {
      document.querySelectorAll(".service-chapter").forEach((chapter) => {
        const rail = chapter.querySelector(".project-rail");
        const viewport = chapter.querySelector(".project-viewport");
        const progress = chapter.querySelector(".chapter-progress i");
        const title = chapter.querySelector(".chapter-copy h2");
        const cards = gsap.utils.toArray(
          chapter.querySelectorAll(".case-card"),
        );
        if (!rail || !viewport) return;

        const getDistance = () =>
          Math.max(0, rail.scrollWidth - viewport.clientWidth + 42);
        const setHeight = () => {
          chapter.style.height = `${window.innerHeight + getDistance() + window.innerHeight * 0.45}px`;
        };
        setHeight();

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: chapter,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.7,
            invalidateOnRefresh: true,
            onRefresh: setHeight,
            onUpdate: (self) => {
              if (progress) progress.style.width = `${self.progress * 100}%`;
            },
          },
        });
        tl.to(rail, { x: () => -getDistance(), ease: "none" }, 0).to(
          title,
          { y: -13, ease: "none" },
          0,
        );

        cards.forEach((card) => {
          const visual = card.querySelector(".case-visual");
          gsap.fromTo(
            visual,
            { scale: 0.977, opacity: 0.88 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tl,
                start: "left 90%",
                end: "center 64%",
                scrub: true,
              },
            },
          );
        });
      });
    });

    mm.add("(max-width:760px)", () => {
      gsap.utils.toArray(".case-card").forEach((card) =>
        gsap.from(card, {
          y: 34,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        }),
      );
    });

    gsap.from(".process-list article", {
      x: 34,
      opacity: 0,
      duration: 0.65,
      stagger: 0.09,
      ease: "power3.out",
      scrollTrigger: { trigger: ".process-list", start: "top 82%", once: true },
    });
    gsap.fromTo(
      ".studio-word",
      { xPercent: -3 },
      {
        xPercent: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".studio",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    gsap.to(".orbit-1", {
      rotate: 90,
      x: 70,
      ease: "none",
      scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".orbit-2", {
      rotate: -120,
      x: -55,
      ease: "none",
      scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    const clamp = gsap.utils.clamp;
    document.querySelectorAll(".interactive-card").forEach((card) => {
      on(card, "pointermove", (e) => {
        if (innerWidth < 761) return;
        const r = card.getBoundingClientRect();
        const rx = clamp(
          -2.2,
          2.2,
          ((e.clientY - r.top) / r.height - 0.5) * -4,
        );
        const ry = clamp(-2.8, 2.8, ((e.clientX - r.left) / r.width - 0.5) * 5);
        gsap.to(card, {
          rotateX: rx,
          rotateY: ry,
          transformPerspective: 1100,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      on(card, "pointerleave", () =>
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.4,
          ease: "power2.out",
        }),
      );
    });

    document.querySelectorAll(".magnetic").forEach((el) => {
      on(el, "pointermove", (e) => {
        if (innerWidth < 761) return;
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * 0.11,
          y: (e.clientY - r.top - r.height / 2) * 0.11,
          duration: 0.24,
          ease: "power2.out",
        });
      });
      on(el, "pointerleave", () =>
        gsap.to(el, { x: 0, y: 0, duration: 0.38, ease: "power3.out" }),
      );
    });

    if (document.readyState === "complete") ScrollTrigger.refresh();
    else on(window, "load", () => ScrollTrigger.refresh(), { once: true });
  });

  const stopWarmingImages = warmGalleryImages();

  return () => {
    context.revert();
    mm.revert();
    removeListeners.forEach((remove) => remove());
    lenis?.destroy();
    stopVideos();
    stopWarmingImages();
    document.body.classList.remove("is-loading");
  };
}
