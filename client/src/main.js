import "./css/style.css";
import { Loader } from "./components/loader";
import { initLoader } from "./animations/loaderAnimation";
import { initHeroAnimation } from "./animations/heroAnimation";
import { initScrollAnimations } from "./animations/scrollAnimations";
import { initSmoothScroll } from "./js/smoothScroll";

import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";


import { initNavbar } from "./js/navbar";
import { initSkills } from "./js/skills";
import { initSkillsFilter } from "./js/skillsFilter";
import { initProjectFilter } from "./js/projectFilter";
import { initContact } from "./js/contact";
// import { showToast } from "./js/toast";

document.querySelector("#app").innerHTML = `
${Loader()}
${Navbar()}
${Hero()}
${About()}
${Skills()}
${Projects()}
${Contact()}
${Footer()}
`;

initSmoothScroll();
initNavbar();
initSkills();
initSkillsFilter();
initProjectFilter();
initContact();
initLoader();
initScrollAnimations();