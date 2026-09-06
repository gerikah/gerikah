import { ASSETS } from "../data/assets.js";
import { projects } from "../data/projects.js";
import { footerMarkup, navMarkup } from "../components/site.js";
import { featuredCard } from "../components/projects.js";

export function homePage() {
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
