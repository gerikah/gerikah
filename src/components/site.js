import { ASSETS } from "../data/assets.js";

export function logoMarkup(className = "") {
  return `<img class="${className}" src="${ASSETS.logo}" alt="" />`;
}

export function navMarkup(active = "") {
  return `<header class="site-nav">
    <div class="nav-inner">
      <a class="brand" href="/" aria-label="Gerikah Alday — Home">${logoMarkup()}</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu">☰</button>
      <nav id="site-menu" class="nav-links" aria-label="Main navigation">
        <a class="${active === "works" ? "active" : ""}" href="/works">Works</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
        <span class="nav-placeholder" title="Add your résumé file path">Download résumé</span>
      </nav>
    </div>
  </header>`;
}

export function footerMarkup() {
  return `<footer class="site-footer">
    <div class="site-footer-inner">
      <a class="footer-brand" href="/" aria-label="Gerikah Alday — Home">${logoMarkup()}</a>
      <div class="footer-links"><a href="/#contact">Contact</a><span>LinkedIn URL</span><span>GitHub URL</span></div>
      <p class="footer-note">Designed with intention.</p>
    </div>
  </footer>`;
}
