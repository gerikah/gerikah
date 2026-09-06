const ASSETS = {
  portrait: "/assets/(HERO)%20gerikah%20picture.png",
  logo: "/assets/(LOGO)%20-%20black%20G.png",
};

const projects = {
  gcs: {
    slug: "gcs",
    title: "GCS",
    fullTitle: "Ground Control Station",
    category: "WEB & MOBILE · CAPSTONE PROJECT",
    description: "A ground control interface for a smart mosquito-control drone, organizing operational information, flight details, and history.",
    role: "[Add actual responsibilities]",
    tools: "[Add confirmed tools]",
    status: "[Add verified status]",
    tone: "sage",
    next: "riftbound",
    nextLabel: "Riftbound",
  },
  riftbound: {
    slug: "riftbound",
    title: "Riftbound",
    fullTitle: "Pixel RPG Interface",
    category: "GAME UI · SELF-INITIATED CONCEPT",
    description: "A pixel RPG interface exploring navigation, character management, and combat information.",
    role: "[Add actual responsibilities]",
    tools: "[Design tool] · [Prototyping tool]",
    status: "UI/UX concept",
    tone: "mist",
    next: "off-the-rack",
    nextLabel: "Off the Rack",
  },
  "off-the-rack": {
    slug: "off-the-rack",
    title: "Off the Rack",
    fullTitle: "E-commerce Experience",
    category: "E-COMMERCE · IN PROGRESS",
    description: "An evolving shopping experience for a hand-painted clothing brand.",
    role: "[Add actual responsibilities]",
    tools: "[Add tools used so far]",
    status: "In progress",
    tone: "mist",
    next: "gcs",
    nextLabel: "GCS",
  },
};

function logoMarkup(className = "") {
  return `<img class="${className}" src="${ASSETS.logo}" alt="" />`;
}

function navMarkup(active = "") {
  return `<header class="site-nav">
    <div class="nav-inner">
      <a class="brand" href="/" aria-label="Gerikah Alday — Home">${logoMarkup()}</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu">☰</button>
      <nav id="site-menu" class="nav-links" aria-label="Main navigation">
        <a class="${active === "works" ? "active" : ""}" href="/works">Works</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
        <span class="nav-placeholder" title="Add your résumé file path">Résumé file</span>
      </nav>
    </div>
  </header>`;
}

function footerMarkup() {
  return `<footer class="site-footer">
    <div class="site-footer-inner">
      <a class="footer-brand" href="/" aria-label="Gerikah Alday — Home">${logoMarkup()}</a>
      <div class="footer-links"><a href="/#contact">Contact</a><span>LinkedIn URL</span><span>GitHub URL</span></div>
      <p class="footer-note">Designed with intention.</p>
    </div>
  </footer>`;
}

function previewMarkup(kind, tone = "mist") {
  const extra = kind === "gcs" ? '<span class="preview-ghost mobile"></span>' : '<span class="preview-ghost detail"></span>';
  const label = kind === "gcs" ? "GCS preview asset" : kind === "riftbound" ? "Riftbound preview asset" : "Off the Rack preview asset";
  return `<div class="project-canvas ${tone}"><span class="preview-ghost"></span>${extra}<span class="placeholder-copy">${label}</span></div>`;
}

function featuredCard(project) {
  return `<a class="project-card reveal" href="/works/${project.slug}">
    ${previewMarkup(project.slug, project.tone)}
    <div class="project-meta"><p class="kicker">${project.category}</p><h3>${project.title} — ${project.fullTitle}</h3><p>${project.slug === "gcs" ? "A web and mobile experience for organizing drone operations and flight information." : project.description}</p><span class="text-link">View project ↗</span></div>
  </a>`;
}

function homePage() {
  return `${navMarkup()}
  <main class="page">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="kicker eyebrow">Gerikah Alday / UI/UX Designer</p>
        <h1 id="hero-title" class="display">I design interfaces for <em>work, play,</em> and everyday life.</h1>
        <p class="lede">With a background in Computer Engineering, I bring visual creativity and structured thinking to digital experiences.</p>
        <div class="hero-actions"><a class="button" href="/works">Explore my work ↗</a><a class="text-link" href="#about">About me ↓</a></div>
      </div>
      <div class="hero-visual"><div class="portrait-frame"><img src="${ASSETS.portrait}" alt="Black-and-white portrait of Gerikah Alday in a dark suit, white shirt, and tie" /></div><p class="caption">Based in the Philippines.</p></div>
    </section>
    <section class="section" aria-labelledby="featured-title">
      <div class="section-intro"><div><p class="kicker">01 / Featured work</p><h2 id="featured-title" class="section-heading">Selected projects.</h2></div><p class="lede">A small collection of interfaces and digital experiences in progress.</p></div>
      <div class="feature-grid">${featuredCard(projects.gcs)}${featuredCard(projects.riftbound)}</div>
      <div class="view-all"><a class="text-link" href="/works">View all works ↗</a></div>
    </section>
    <section id="about" class="section" aria-labelledby="about-title">
      <div class="section-intro"><div><p class="kicker">02 / About</p><h2 id="about-title" class="section-heading">A creative eye.<br />A technical foundation.</h2></div></div>
      <div class="about-layout"><p class="about-lede">I’m Gerikah, a UI/UX designer with a Computer Engineering background. I enjoy making complicated workflows easier to understand and giving useful interfaces a little personality.</p><div class="about-info">
        <div class="info-block"><h3 class="info-heading"><span>Experience</span><span>Selected background</span></h3><div class="info-content"><div class="experience-row"><div><h4>Freelance role</h4><p>Fiverr · [Add verified responsibilities and deliverables]</p></div><span class="date">[Dates]</span></div></div></div>
        <div class="info-block"><h3 class="info-heading"><span>Education</span><span>Academic foundation</span></h3><div class="info-content education"><h4>Polytechnic University of the Philippines</h4><p>[Exact Computer Engineering degree title] · [Graduation year or confirmed graduation status]</p></div></div>
        <div class="info-block"><h3 class="info-heading"><span>Tools &amp; technologies</span><span>Personal stack</span></h3><div class="info-content"><div class="tools"><span class="tool">[Design &amp; prototyping tool]</span><span class="tool">[Development tool]</span><span class="tool">[Workflow &amp; collaboration tool]</span></div></div></div>
        <div class="resume-callout"><span class="text-link">Download résumé ↗</span></div>
      </div></div>
    </section>
    <section id="contact" class="section" aria-labelledby="contact-title"><div class="contact"><p class="kicker">03 / Contact</p><h2 id="contact-title" class="section-heading">Let’s make something<br />worth using.</h2><p class="lede">Have a role or project in mind? I’d love to hear about it.</p><div class="contact-details"><span class="contact-item placeholder">[Email address]</span><span class="contact-item placeholder">[LinkedIn URL]</span><span class="contact-item placeholder">[GitHub URL]</span><span class="contact-item placeholder">[Résumé file]</span></div></div></section>
  </main>${footerMarkup()}`;
}

function standardCard(project) {
  return `<a class="project-card standard-card" href="/works/${project.slug}">${previewMarkup(project.slug, project.tone)}<div class="project-meta"><p class="kicker">${project.category}</p><h3>${project.title} — ${project.fullTitle}</h3><p>${project.description}</p><div class="project-details"><span>Role: ${project.role}</span><span>Tools: ${project.tools}</span><span>Status: ${project.status}</span></div><span class="text-link">${project.slug === "off-the-rack" ? "View progress ↗" : "View project ↗"}</span></div></a>`;
}

function worksPage() {
  return `${navMarkup("works")}<main class="page"><section class="page-header"><div><p class="kicker eyebrow">Archive / 2026</p><h1 class="display">Works</h1></div><p class="lede">A selection of interfaces, digital experiences, and projects I’m exploring.</p></section><section class="works-grid" aria-label="Project collection">${standardCard(projects.gcs)}${standardCard(projects.riftbound)}${standardCard(projects["off-the-rack"])}<div class="empty-card"><span class="kicker">Future case study</span><span class="empty-number">Future project 01</span></div><div class="empty-card"><span class="kicker">Future case study</span><span class="empty-number">Future project 02</span></div><div class="empty-card"><span class="kicker">Future case study</span><span class="empty-number">Future project 03</span></div></section></main>${footerMarkup()}`;
}

function casePage(project) {
  const isOffRack = project.slug === "off-the-rack";
  const isGcs = project.slug === "gcs";
  return `${navMarkup("works")}<main class="page"><article class="case-study"><header class="case-head"><p class="kicker eyebrow">${project.category}</p><h1 class="display">${project.title}<br /><em>${project.fullTitle}</em></h1><p class="case-summary">${project.description}</p></header><div class="case-cover ${project.tone}">${isGcs ? previewMarkup("gcs", project.tone) : isOffRack ? '<div class="asset-placeholder">[Add available progress visual: sitemap, workflow, or design exploration]</div>' : previewMarkup("riftbound", project.tone)}</div><div class="case-overview"><div><span class="kicker">Role</span><p>${project.role}</p></div><div><span class="kicker">Project type</span><p>${isOffRack ? "E-commerce experience" : isGcs ? "Capstone project" : "Self-initiated concept"}</p></div><div><span class="kicker">Status</span><p>${project.status}</p></div><div><span class="kicker">Tools &amp; technologies</span><p>${project.tools}</p></div></div><div class="case-body">
    <section class="case-section"><h2>The challenge</h2><div><p>${isOffRack ? "[Add the problem, intended users, and constraints as the project develops.]" : isGcs ? "[Add the operational problem, intended users, and constraints for the drone control experience.]" : "[Add the design prompt, intended players, and constraints behind this UI/UX concept.]"}</p></div></section>
    <section class="case-section"><h2>Mapping the experience</h2><div><p>[Add selected workflows, wireframes, or diagrams and a short explanation of how they informed the interface.]</p><div class="asset-placeholder">[Add workflow, wireframe, or diagram]</div></div></section>
    <section class="case-section"><h2>Design decisions</h2><div><div class="design-decision"><div class="asset-placeholder">[Add screen or detail crop]</div><div><h3>${isGcs ? "Web and mobile, with different jobs" : isOffRack ? "Early exploration" : "Information with a little personality"}</h3><p>[Add a concise explanation of this meaningful design decision.]</p></div></div><div class="design-decision"><div class="asset-placeholder">[Add screen or detail crop]</div><div><h3>[Add design decision]</h3><p>[Add supporting rationale.]</p></div></div></div></section>
    <section class="case-section"><h2>The interface</h2><div><p>[Add final screens where available, supported by short captions. Keep this section hidden or replace this placeholder when assets are ready.]</p><div class="asset-placeholder">[Add final interface screens]</div></div></section>
    <section class="case-section"><h2>What I learned</h2><div><p>[Add honest reflections, limitations, and next steps.]</p></div></section>
  </div><nav class="case-nav" aria-label="Project navigation"><a class="text-link" href="/works">← All works</a><a class="text-link" href="/works/${project.next}">Next: ${project.nextLabel} ↗</a></nav></article></main>${footerMarkup()}`;
}

function getRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return homePage();
  if (path === "/works") return worksPage();
  const projectSlug = path.split("/")[2];
  if (path.startsWith("/works/") && projects[projectSlug]) return casePage(projects[projectSlug]);
  return `<main class="page"><p class="kicker">404 / Not found</p><h1 class="display">This page is still being designed.</h1><a class="text-link" href="/works">Back to works ↗</a></main>`;
}

function mount() {
  document.querySelector("#app").innerHTML = getRoute();
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

mount();
