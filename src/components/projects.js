function previewLabel(kind) {
  if (kind === "gcs") return "GCS preview asset";
  if (kind === "riftbound") return "Riftbound preview asset";
  return "Off the Rack preview asset";
}

export function previewMarkup(kind, tone = "mist") {
  const extra = kind === "gcs" ? '<span class="preview-ghost mobile"></span>' : '<span class="preview-ghost detail"></span>';
  return `<div class="project-canvas ${tone}"><span class="preview-ghost"></span>${extra}<span class="placeholder-copy">${previewLabel(kind)}</span></div>`;
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
