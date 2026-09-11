import { REAL_ESTATE_ASSETS } from "../data/assets.js";

export function realEstateCover() {
  return `<img class="real-estate-cover" src="${REAL_ESTATE_ASSETS.hero}" alt="Marci Metzger Homes homepage redesign preview" />`;
}

export function realEstateCaseSections() {
  return `<div class="case-body">
    <section class="case-section"><h2>The challenge</h2><div><p>Modernize the homepage while preserving the provided copy and existing photography. The challenge was to balance an elevated visual style with clear information hierarchy, helping visitors understand the realtor’s services, explore property imagery, and find contact options across different screen sizes.</p></div></section>
    <section class="case-section"><h2>Mapping the experience</h2><div><p>The homepage supports three visitor needs: getting to know the realtor, exploring what the business offers, and taking the next step. The hero introduces the brand and primary actions, while sales highlights, imagery, and service sections provide more context as visitors scroll. Contact and location options give visitors a clear path to continue their inquiry.</p><p>Within this homepage-only scope, listing search remains a labeled preview that directs visitors to the original listings page. The contact form is not connected to a messaging service and offers phone contact instead.</p></div></section>
    <section class="case-section"><h2>Design decisions</h2><div>
      <h3>Property photography as the focal point</h3><p>A large hero image establishes the visual tone, while restrained typography and clear calls to action keep the opening section focused.</p>
      <h3>An editorial, earthy visual system</h3><p>White space, olive accents, and rounded imagery give the page a refined but approachable character. Distinct headings and grouped content make longer sections easier to scan.</p>
      <h3>Responsive layouts with accessible interactions</h3><p>The layout adapts across mobile, tablet, and desktop. Keyboard focus states, a skip link, and keyboard-accessible gallery controls support navigation beyond mouse interactions.</p>
      <h3>Subtle motion with practical limits</h3><p>Scroll reveals and hover effects add movement without dominating the content. Reduced-motion support, lazy-loaded images, and an opt-in map help keep the experience considerate of visitor preferences and loading needs.</p>
    </div></section>
    <section class="case-section"><h2>The interface</h2><div class="real-estate-gallery">
      <figure><a href="${REAL_ESTATE_ASSETS.homepageOne}" target="_blank" rel="noopener noreferrer"><img src="${REAL_ESTATE_ASSETS.homepageOne}" alt="Marci Metzger Homes homepage redesign — first screenshot" loading="lazy" /></a><figcaption>Homepage redesign · View full-size screenshot 1</figcaption></figure>
      <figure><a href="${REAL_ESTATE_ASSETS.homepageTwo}" target="_blank" rel="noopener noreferrer"><img src="${REAL_ESTATE_ASSETS.homepageTwo}" alt="Marci Metzger Homes homepage redesign — second screenshot" loading="lazy" /></a><figcaption>Homepage redesign · View full-size screenshot 2</figcaption></figure>
    </div></section>
    <section class="case-section"><h2>What I learned</h2><div><p>This project helped me explore how hierarchy, spacing, and typography can refresh a page without replacing its content. It also reinforced that a polished interface depends on more than its desktop appearance—responsive behavior, keyboard navigation, and motion preferences deserve attention too.</p><p>Working within a homepage-only scope highlighted the importance of communicating limitations clearly. Search previews and disconnected forms should never imply functionality they do not provide. A next step would be usability testing to evaluate how easily visitors understand the page and find their preferred contact option.</p></div></section>
  </div>`;
}
