import { ASSETS } from "../data/assets.js";

export const CONTACT_LINKS = {
  email: "",
  linkedin: "",
  github: "https://github.com/gerikah",
  resume: "",
};

export function logoMarkup(className = "") {
  return `<img class="${className}" src="${ASSETS.logo}" alt="" />`;
}

export function navMarkup(active = "") {
  const resumeLink = CONTACT_LINKS.resume
    ? `<a class="resume-link" href="${CONTACT_LINKS.resume}" download>Download résumé</a>`
    : "";
  return `<header class="site-nav">
    <div class="nav-inner">
      <a class="brand" href="/" aria-label="Gerikah Alday — Home">${logoMarkup()}</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu">☰</button>
      <nav id="site-menu" class="nav-links" aria-label="Main navigation">
        <a class="${active === "works" ? "active" : ""}" href="/works">Works</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
        ${resumeLink}
      </nav>
    </div>
  </header>`;
}

export function footerMarkup() {
  const linkedin = CONTACT_LINKS.linkedin ? `<a href="${CONTACT_LINKS.linkedin}">LinkedIn ↗</a>` : "";
  const github = CONTACT_LINKS.github ? `<a href="${CONTACT_LINKS.github}">GitHub ↗</a>` : "";
  return `<footer class="site-footer">
    <div class="site-footer-inner">
      <a class="footer-brand" href="/" aria-label="Gerikah Alday — Home">${logoMarkup()}</a>
      <div class="footer-links"><a href="/#contact">Contact</a>${linkedin}${github}</div>
      <p class="footer-note">Designed with intention.</p>
    </div>
  </footer>`;
}
