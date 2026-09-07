import { FLOWCHART_HERO, FLOWCHART_PROJECTS } from "../data/assets.js";

function diagramMarkup(item) {
  const label = `${item.title} full diagram`;
  return `<figure class="diagram-frame"><a href="${item.src}" target="_blank" rel="noopener" aria-label="Open ${label}"><img class="diagram-image" src="${item.src}" alt="${label}" /></a><figcaption>Supplied project asset. Open the full diagram for a larger, readable view.</figcaption></figure>`;
}

function projectMarkup(project, index) {
  const layoutClass = index > 0 ? " single-diagram" : "";
  return `<article class="collection-entry${layoutClass}"><div class="collection-entry-head"><div><p class="kicker">Project ${String(index + 1).padStart(2, "0")}</p><h2>${project.title}</h2></div><a class="text-link" href="${project.diagrams[0].src}" target="_blank" rel="noopener" aria-label="View ${project.title} diagrams in a new tab">View full diagram ↗</a></div><div class="collection-context"><div><span class="kicker">Context</span><p>${project.context}</p></div><div><span class="kicker">My contribution</span><p>${project.contribution}</p></div></div><div class="diagram-set">${project.diagrams.map(diagramMarkup).join("")}</div><div class="diagram-annotation"><span class="kicker">Design notes</span>${project.notes.map((note) => `<p>${note}</p>`).join("")}</div></article>`;
}

export function flowchartsCover() {
  return `<figure class="flowchart-cover-image"><img src="${FLOWCHART_HERO}" alt="Fiverr flowchart project collection preview" /><figcaption>Selected flowchart project preview</figcaption></figure>`;
}

export function flowchartsCaseSections() {
  return `<div class="case-body flowchart-case-body"><section class="case-section"><h2>About the collection</h2><div><p>A selection of freelance projects created in Lucidchart, covering system workflows, user journeys, and low-fidelity wireframes. I designed all the diagrams and layouts, organizing process steps, decisions, and screen connections into visual documentation.</p></div></section><section class="case-section"><h2>Project entries</h2><div class="collection-list">${FLOWCHART_PROJECTS.map(projectMarkup).join("")}</div></section><section class="case-section"><h2>Reflection</h2><div><p>[What I learned about organizing processes and communicating them visually.]</p></div></section></div>`;
}
