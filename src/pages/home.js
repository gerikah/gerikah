import { ASSETS } from "../data/assets.js";
import { projects } from "../data/projects.js";
import { CONTACT_LINKS, footerMarkup, navMarkup } from "../components/site.js";
import { featuredCard } from "../components/projects.js";

export function homePage() {
  const emailLink = CONTACT_LINKS.email ? `<a class="contact-item primary" href="mailto:${CONTACT_LINKS.email}">Email me ↗</a>` : "";
  const linkedinLink = CONTACT_LINKS.linkedin ? `<a class="contact-item" href="${CONTACT_LINKS.linkedin}">LinkedIn ↗</a>` : "";
  const githubLink = CONTACT_LINKS.github ? `<a class="contact-item" href="${CONTACT_LINKS.github}">GitHub ↗</a>` : "";
  const resumeLink = CONTACT_LINKS.resume ? `<a class="contact-item" href="${CONTACT_LINKS.resume}" download>Download résumé ↗</a>` : "";
  return `${navMarkup()}
  <main class="page">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="kicker eyebrow">Gerikah Alday / UI/UX Designer</p>
        <h1 id="hero-title" class="hero-title"><span>Thoughtful</span><span>Interfaces.</span><em>Human</em><em>Experiences.</em></h1>
        <p class="lede hero-lede">I’m Gerikah. I bring visual creativity and an engineering mindset to interfaces for work, play, and everyday life.</p>
        <div class="hero-actions"><a class="button" href="/works">Explore my work ↗</a><a class="text-link" href="#about">About me ↓</a></div>
      </div>
      <div class="hero-visual"><div class="portrait-composition"><div class="portrait-panel"></div><div class="portrait-frame"><img src="${ASSETS.portrait}" alt="Black-and-white portrait of Gerikah Alday in a dark suit, white shirt, and tie" /></div></div><p class="caption">Based in the Philippines.</p></div>
    </section>
    <section class="section featured-section" aria-labelledby="featured-title">
      <div class="section-intro"><div><p class="kicker">01 / Featured work</p><h2 id="featured-title" class="section-heading">Selected projects.</h2></div><p class="lede">A small collection of interfaces and digital experiences in progress.</p></div>
      <div class="feature-grid">${featuredCard(projects.gcs)}${featuredCard(projects.riftbound)}</div>
      <div class="view-all"><a class="text-link" href="/works">View all works ↗</a></div>
    </section>
    <section id="about" class="section" aria-labelledby="about-title">
      <div class="section-intro"><div><p class="kicker">02 / About</p><h2 id="about-title" class="section-heading">A creative eye.<br />A technical foundation.</h2></div><p class="lede about-section-lede">I design for clarity, structure, and the moment an idea becomes usable.</p></div>
      <div class="about-layout"><div class="about-intro"><p class="kicker eyebrow">Designer / developer / documentarian</p><p class="about-lede">I’m Gerikah Alday, a UI/UX designer with a Computer Engineering background. I enjoy turning complex workflows into clear interfaces, from drone-control dashboards to pixel game experiences.</p><p class="about-lede">My experience also includes full-stack web and mobile development, which helps me think about how a design will work beyond the screen.</p><div class="about-principles"><div><span class="mono-label">01</span><p>Make complexity legible.</p></div><div><span class="mono-label">02</span><p>Connect structure with feeling.</p></div><div><span class="mono-label">03</span><p>Design with implementation in mind.</p></div></div></div><div class="about-info">
        <div class="info-block"><h3 class="info-heading"><span>Experience</span></h3><div class="info-content"><div class="experience-row"><div><h4>Freelance Technical Documentation Assistant</h4><p>Fiverr · Dec 30 2022 - January 2026</p><p>Delivered flowcharts, pseudocode, wireframes, and UI/UX documentation for 3+ years of client projects across academic and software development contexts.</p><ul class="experience-list"><li>Assisted clients with logic design, system analysis, and front-end structure planning for web-based applications.</li><li>Maintained consistent positive client feedback, demonstrating ability to translate technical requirements into clear written and visual documentation.</li></ul><a class="text-link related-work-link" href="/works">View related work ↗</a></div></div></div></div>
        <div class="info-block"><h3 class="info-heading"><span>Education</span></h3><div class="info-content education"><h4>Polytechnic University of the Philippines</h4><p>Computer Engineering</p><p>Expected graduation: September 2026</p></div></div>
        <div class="info-block"><h3 class="info-heading"><span>Tools &amp; technologies</span></h3><div class="info-content tool-groups"><div><h4>Design &amp; prototyping</h4><div class="tools"><span class="tool">Figma</span><span class="tool">Framer</span></div></div><div><h4>Development</h4><div class="tools"><span class="tool">React</span><span class="tool">TypeScript</span><span class="tool">Node.js</span><span class="tool">Supabase</span></div></div><div><h4>Workflow &amp; version control</h4><div class="tools"><span class="tool">VS Code</span><span class="tool">GitHub</span></div></div></div></div>
        ${resumeLink ? `<div class="resume-callout">${resumeLink}</div>` : ""}
      </div></div>
    </section>
    <section id="contact" class="section" aria-labelledby="contact-title"><div class="contact"><p class="kicker">03 / Contact</p><h2 id="contact-title" class="section-heading">Let’s make something<br />worth using.</h2><p class="lede">I’m open to UI/UX design opportunities and freelance projects. If you’re looking for someone who enjoys both the creative and technical sides of digital work, I’d love to connect.</p><div class="contact-details">${emailLink}${linkedinLink}${githubLink}${resumeLink}</div><p class="contact-location">Based in Manila, Philippines.</p></div></section>
  </main>${footerMarkup()}`;
}
