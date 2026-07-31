import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animations = {
  up: {
    y: 70,
    opacity: 0,
  },
  down: {
    y: -70,
    opacity: 0,
  },

  left: {
    x: -80,
    opacity: 0,
  },

  right: {
    x: 80,
    opacity: 0,
  },

  zoom: {
    scale: 0.9,
    opacity: 0,
  },

  rotate: {
    rotation: 4,
    scale: 0.9,
    opacity: 0,
  },
};

export function initScrollAnimations() {

  const elements = document.querySelectorAll("[data-reveal]");

  elements.forEach((element) => {

    const type = element.dataset.reveal || "up";

    gsap.from(element, {
      ...animations[type],

      duration: 0.9,

      ease: "power3.out",

      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "top 30%",

        toggleActions: "play none none reverse",
      },
    });

  });

}