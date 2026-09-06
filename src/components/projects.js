import { GCS_ASSETS, RIFTBOUND_ASSETS } from "../data/assets.js";

function previewLabel(kind) {
  if (kind === "gcs") return "GCS preview asset";
  if (kind === "riftbound") return "Riftbound preview asset";
  return "Off the Rack preview asset";
}

export function previewMarkup(kind, tone = "mist") {
  if (kind === "gcs") {
    return `<div class="project-canvas ${tone}"><img class="preview-image preview-image-main" src="${GCS_ASSETS.hero}" alt="GCS smart mosquito control drone interface" /><img class="preview-image preview-image-support mobile" src="${GCS_ASSETS.mobileDashboard}" alt="GCS mobile dashboard interface" /></div>`;
  }
  if (kind === "riftbound") {
    return `<div class="project-canvas ${tone}"><img class="preview-image preview-image-main" src="${RIFTBOUND_ASSETS.hero}" alt="Riftbound pixel RPG interface concept" /><img class="preview-image preview-image-support detail" src="${RIFTBOUND_ASSETS.heroes}" alt="Riftbound character interface" /></div>`;
  }
  return `<div class="project-canvas ${tone}"><span class="preview-ghost"></span><span class="preview-ghost detail"></span><span class="placeholder-copy">${previewLabel(kind)}</span></div>`;
}

export function featuredCard(project) {
  return `<a class="project-card reveal" href="/works/${project.slug}">
    ${previewMarkup(project.slug, project.tone)}
    <div class="project-meta"><p class="kicker">${project.category}</p><h3>${project.title} — ${project.fullTitle}</h3><p>${project.slug === "gcs" ? "A web and mobile experience for organizing drone operations and flight information." : project.description}</p><span class="text-link">View project ↗</span></div>
  </a>`;
}

export function standardCard(project) {
  return `<a class="project-card standard-card" href="/works/${project.slug}">${previewMarkup(project.slug, project.tone)}<div class="project-meta"><p class="kicker">${project.category}</p><h3>${project.title} — ${project.fullTitle}</h3><p>${project.description}</p><div class="project-details"><span>Role: ${project.role}</span><span>Tools: ${project.tools}</span><span>Status: ${project.status}</span></div><span class="text-link">${project.slug === "off-the-rack" ? "View progress ↗" : "View project ↗"}</span></div></a>`;
}
