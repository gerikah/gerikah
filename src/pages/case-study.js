import { GCS_ASSETS } from "../data/assets.js";
import { footerMarkup, navMarkup } from "../components/site.js";
import { realEstateCaseSections, realEstateCover } from "./real-estate-case-study.js";
import { gcsCaseSections, gcsImage } from "./gcs-case-study.js";
import { riftboundCaseSections, riftboundCover } from "./riftbound-case-study.js";
import { flowchartsCaseSections, flowchartsCover } from "./flowcharts-case-study.js";
import { offRackCaseSections, offRackCover } from "./off-the-rack-case-study.js";

function genericCaseSections(project, isOffRack) {
  return `<div class="case-body">
    <section class="case-section"><h2>The challenge</h2><div><p>${isOffRack ? "[Add the problem, intended users, and constraints as the project develops.]" : "[Add the design prompt, intended players, and constraints behind this UI/UX concept.]"}</p></div></section>
    <section class="case-section"><h2>Mapping the experience</h2><div><p>[Add selected workflows, wireframes, or diagrams and a short explanation of how they informed the interface.]</p><div class="asset-placeholder">[Add workflow, wireframe, or diagram]</div></div></section>
    <section class="case-section"><h2>Design decisions</h2><div><div class="design-decision"><div class="asset-placeholder">[Add screen or detail crop]</div><div><h3>${isOffRack ? "Early exploration" : "Information with a little personality"}</h3><p>[Add a concise explanation of this meaningful design decision.]</p></div></div><div class="design-decision"><div class="asset-placeholder">[Add screen or detail crop]</div><div><h3>[Add design decision]</h3><p>[Add supporting rationale.]</p></div></div></div></section>
    <section class="case-section"><h2>The interface</h2><div><p>[Add final screens where available, supported by short captions. Keep this section hidden or replace this placeholder when assets are ready.]</p><div class="asset-placeholder">[Add final interface screens]</div></div></section>
    <section class="case-section"><h2>What I learned</h2><div><p>[Add honest reflections, limitations, and next steps.]</p></div></section>
  </div>`;
}

export function casePage(project) {
  const isRealEstate = project.slug === "marci-metzger-homes";
  const isOffRack = project.slug === "off-the-rack";
  const isGcs = project.slug === "gcs";
  const isRiftbound = project.slug === "riftbound";
  const isFlowcharts = project.slug === "flowcharts-process-mapping";
  const caseContent = isRealEstate ? realEstateCaseSections() : isGcs ? gcsCaseSections() : isRiftbound ? riftboundCaseSections() : isFlowcharts ? flowchartsCaseSections() : isOffRack ? offRackCaseSections() : genericCaseSections(project, isOffRack);
  const cover = isRealEstate ? realEstateCover() : isGcs
    ? gcsImage(GCS_ASSETS.hero, "GCS smart mosquito control drone hero image", "gcs-cover-image")
    : isOffRack
      ? offRackCover()
      : isFlowcharts ? flowchartsCover() : riftboundCover();
  const projectType = project.projectType || (isOffRack ? "E-commerce experience" : isGcs ? "Computer Engineering Capstone Project" : isFlowcharts ? "Freelance project collection" : "Personal project · Game UI/UX concept");

  return `${navMarkup("works")}<main class="page"><article class="case-study"><header class="case-head"><p class="kicker eyebrow">${project.category}</p><h1 class="display">${project.title}<br /><em>${project.fullTitle}</em></h1><p class="case-summary">${project.description}</p>${project.liveUrl ? `<div class="hero-actions"><a class="button" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Visit live website &nearr;</a></div>` : ""}</header><div class="case-cover ${project.tone}">${cover}</div><div class="case-overview"><div><span class="kicker">Role</span><p>${project.role}</p></div><div><span class="kicker">Project type</span><p>${projectType}</p></div><div><span class="kicker">${isFlowcharts ? "Collection status" : "Status"}</span><p>${project.status}</p></div><div><span class="kicker">Tools &amp; technologies</span><p>${project.tools}</p></div></div>${caseContent}<nav class="case-nav" aria-label="Project navigation"><a class="text-link" href="/works">← All works</a><a class="text-link" href="/works/${project.next}">Next: ${project.nextLabel} ↗</a></nav></article></main>${footerMarkup()}`;
}
