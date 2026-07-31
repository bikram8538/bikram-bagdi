import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Update ScrollTrigger whenever Lenis scrolls
  lenis.on("scroll", ScrollTrigger.update);

  // Use GSAP's ticker instead of requestAnimationFrame
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Disable lag smoothing for smoother syncing
  gsap.ticker.lagSmoothing(0);

  return lenis;
}