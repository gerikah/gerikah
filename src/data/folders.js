import { projectDocument } from '../content/projects.js';
import { GCS_ASSETS, OFF_THE_RACK_ASSETS, RIFTBOUND_ASSETS, FLOWCHART_HERO, REAL_ESTATE_ASSETS } from './assets.js';
﻿import { projects } from './projects.js';

const previewAssets = {
  gcs: GCS_ASSETS.hero,
  'off-the-rack': OFF_THE_RACK_ASSETS.hero,
  riftbound: RIFTBOUND_ASSETS.hero,
  'flowcharts-process-mapping': FLOWCHART_HERO,
  'marci-metzger-homes': REAL_ESTATE_ASSETS.hero,
};

// Project facts stay in projects.js; this index supplies the folder presentation.
export const projectFolders = [
  { slug: 'gcs', label: 'Ground Control Station', type: 'Computer Engineering Capstone Project', focus: 'Make flight information, live camera feeds, and detection data understandable within one clear operator workflow.' },
  { slug: 'off-the-rack', label: 'Off the Rack', focus: 'Connect a distinctive fashion identity with clear product discovery, availability, and purchase inquiries.' },
  { slug: 'riftbound', label: 'Riftbound', type: 'Personal project · Game UI/UX concept', focus: 'Balance the personality of a pixel RPG with readable navigation, character information, and battle controls.' },
  { slug: 'flowcharts-process-mapping', label: 'Flowcharts & Process Mapping', type: 'Freelance project collection', focus: 'Translate system logic, user journeys, and screen connections into clear visual documentation.' },
  { slug: 'marci-metzger-homes', label: 'Marci Metzger Homes', focus: 'Refresh the homepage hierarchy while preserving its existing copy and photography across screen sizes.' },
].map((folder, index) => {
  const project = projects[folder.slug];
  const document = projectDocument(project.slug);
  return {
    id: folder.slug,
    kind: 'project',
    number: String(index + 1).padStart(2, '0'),
    title: project.title,
    label: folder.label,
    subtitle: project.fullTitle,
    category: project.category,
    context: project.description,
    role: project.role,
    projectType: project.projectType || folder.type,
    status: project.status,
    tools: project.tools,
    previewImages: [{
      src: previewAssets[folder.slug],
      alt: document.cover.match(/alt="([^"]+)"/)[1],
      caption: document.cover.match(/<figcaption>(.*?)<\/figcaption>/)?.[1],
    }],
    designFocus: folder.focus,
    liveUrl: project.liveUrl,
    fullContent: document.body,
  };
});

export const portfolioFolders = [
  { id: 'about', label: 'About Gerikah', kind: 'about', number: '00' },
  ...projectFolders,
  { id: 'contact', label: 'Contact', kind: 'contact', number: '06' },
];
