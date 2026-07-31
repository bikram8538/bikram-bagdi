export function initNavbar() {
  // ==========================
  // Mobile Menu
  // ==========================
  const menuBtn = document.getElementById("menu-btn");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const offcanvas = document.getElementById("offcanvas");
  const overlay = document.getElementById("overlay");

  function openMenu() {
    offcanvas.classList.remove("translate-x-full");
    offcanvas.classList.add("translate-x-0");

    overlay.classList.remove("opacity-0", "invisible");
    overlay.classList.add("opacity-100", "visible");

    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");
  }

  function closeMenu() {
    offcanvas.classList.remove("translate-x-0");
    offcanvas.classList.add("translate-x-full");

    overlay.classList.remove("opacity-100", "visible");
    overlay.classList.add("opacity-0", "invisible");

    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");

    document.body.classList.remove("overflow-hidden");
  }

  menuBtn?.addEventListener("click", () => {
    if (offcanvas.classList.contains("translate-x-full")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  overlay?.addEventListener("click", closeMenu);

  // Close menu when mobile link is clicked
  document.querySelectorAll("#offcanvas a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // ==========================
  // Theme Toggle
  // ==========================
  const toggle = document.getElementById("theme-toggle");
  const moon = document.getElementById("moon-icon");
  const sun = document.getElementById("sun-icon");

  const isLight = localStorage.getItem("theme") === "light";

  if (isLight) {
    document.documentElement.classList.add("light");
    moon?.classList.add("hidden");
    sun?.classList.remove("hidden");
  }

  toggle?.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");

    const light = document.documentElement.classList.contains("light");

    localStorage.setItem("theme", light ? "light" : "dark");

    moon?.classList.toggle("hidden");
    sun?.classList.toggle("hidden");
  });

  // ==========================
  // Active Navigation
  // ==========================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navlink");

  function setActiveLink() {
    const scrollPosition = window.scrollY + window.innerHeight * 0.3;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.id;

      if (
        scrollPosition >= top &&
        scrollPosition < top + height
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Scroll
  window.addEventListener("scroll", setActiveLink);

  // Initial load
  window.addEventListener("load", setActiveLink);

  // Update when clicking a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(setActiveLink, 100);
    });
  });

  // Initial call
  setActiveLink();
}