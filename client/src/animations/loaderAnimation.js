import gsap from "gsap";
import { initHeroAnimation } from "./heroAnimation";

export function initLoader() {
  const tl = gsap.timeline();

  tl.from("#loader-title", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  })
    .from(
      "#loader-subtitle",
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
      },
      "-=0.4"
    )
    .to("#loader-bar", {
      width: "100%",
      duration: 1.2,
      ease: "power2.inOut",
    })
    .to("#loader", {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
      delay: 0.3,
    })
    .call(() => {
      initHeroAnimation();
    })
    .set("#loader", {
      display: "none",
    });
}