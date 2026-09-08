import { projects } from "../data/projects.js";
import { footerMarkup, navMarkup } from "../components/site.js";
import { standardCard } from "../components/projects.js";

export function worksPage() {
  return `${navMarkup("works")}<main class="page"><section class="page-header"><div><p class="kicker eyebrow">Archive / 2026</p><h1 class="display">Works</h1></div><p class="lede">A selection of interfaces, digital experiences, and projects I’m exploring.</p></section><section class="works-grid" aria-label="Project collection">${standardCard(projects["marci-metzger-homes"])}${standardCard(projects.gcs)}${standardCard(projects.riftbound)}${standardCard(projects["off-the-rack"])}${standardCard(projects["flowcharts-process-mapping"])}</section></main>${footerMarkup()}`;
}
