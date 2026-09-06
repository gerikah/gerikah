import { projects } from "../data/projects.js";
import { footerMarkup, navMarkup } from "../components/site.js";
import { standardCard } from "../components/projects.js";

export function worksPage() {
  return `${navMarkup("works")}<main class="page"><section class="page-header"><div><p class="kicker eyebrow">Archive / 2026</p><h1 class="display">Works</h1></div><p class="lede">A selection of interfaces, digital experiences, and projects I’m exploring.</p></section><section class="works-grid" aria-label="Project collection">${standardCard(projects.gcs)}${standardCard(projects.riftbound)}${standardCard(projects["off-the-rack"])}<div class="empty-card"><span class="kicker">Future case study</span><span class="empty-number">Future project 01</span></div><div class="empty-card"><span class="kicker">Future case study</span><span class="empty-number">Future project 02</span></div><div class="empty-card"><span class="kicker">Future case study</span><span class="empty-number">Future project 03</span></div></section></main>${footerMarkup()}`;
}
