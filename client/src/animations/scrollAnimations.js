import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function createReveal(trigger, elements, options = {}) {
  const tl = gsap.timeline({ paused: true });

  tl.from(cards, {
    y: 80,
    opacity: 0,
    scale: 0.95,
    stagger: 0.15,
    duration: 0.8,
    ease: "power4.out",
  });

  ScrollTrigger.create({
    trigger: "#skills",
    start: "top 75%",
    end: "bottom 25%",

    onEnter: () => tl.play(),

    onLeaveBack: () => tl.reverse(),

    onEnterBack: () => tl.play(),
  });
}

export function initScrollAnimations() {
  createReveal(
    "#skills",
    document.querySelectorAll("#skills [data-item]"),
    {
      stagger: 0.18,
    }
  );
}