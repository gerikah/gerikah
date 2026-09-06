import { projects } from "./src/data/projects.js";
import { homePage } from "./src/pages/home.js";
import { worksPage } from "./src/pages/works.js";
import { casePage } from "./src/pages/case-study.js";

function getRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return homePage();
  if (path === "/works") return worksPage();

  const projectSlug = path.split("/")[2];
  if (path.startsWith("/works/") && projects[projectSlug]) return casePage(projects[projectSlug]);

  return `<main class="page"><p class="kicker">404 / Not found</p><h1 class="display">This page is still being designed.</h1><a class="text-link" href="/works">Back to works ↗</a></main>`;
}

function bindNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#site-menu");
  toggle?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    toggle.textContent = isOpen ? "×" : "☰";
  });
  menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => menu.classList.remove("open")));
}

function bindScrollTransition() {
  const hero = document.querySelector(".hero");
  const featured = document.querySelector(".featured-section");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!hero || !featured || reduceMotion) return;

  let framePending = false;
  const update = () => {
    framePending = false;
    const heroRect = hero.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, -heroRect.top / Math.max(heroRect.height * .72, 1)));
    const featuredRect = featured.getBoundingClientRect();
    const reveal = Math.min(1, Math.max(0, (window.innerHeight - featuredRect.top) / Math.min(window.innerHeight * .72, 520)));
    hero.style.setProperty("--scroll-progress", progress.toFixed(3));
    featured.style.setProperty("--reveal-progress", reveal.toFixed(3));
  };
  const requestUpdate = () => {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
}

function mount() {
  document.querySelector("#app").innerHTML = getRoute();
  bindNavigation();
  bindScrollTransition();
}

mount();
