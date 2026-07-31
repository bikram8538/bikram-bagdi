import gsap from "gsap";

export function initHeroAnimation() {
  gsap.set(
    [
      "hero-intro",
      "#hero-title",
      "#hero-description",
      "#hero-buttons",
      "hero-social",
      "#hero-image",
    ],
    {
      opacity: 0,
      y: 40,
    }
  );
  gsap.set("#hero-image", {
    scale: 0.95,
  });

  const tl = gsap.timeline();

  tl.to("#hero-intro", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power3.out",
  })

    .to("#hero-title", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out",
    }, "-=0.2")

    .to("#hero-description", {
      opacity: 1,
      y: 0,
      duration: 0.5,
    }, "-=0.45")

    .to("#hero-buttons", {
      opacity: 1,
      y: 0,
      duration: 0.5,
    }, "-=0.35")

    .to("#hero-social", {
      opacity: 1,
      y: 0,
      duration: 0.5,
    }, "-=0.35")

    .to("#hero-image", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: "power4.out",
    }, "-=0.6");
}