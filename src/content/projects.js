import { imageDimensions } from '../data/image-dimensions.js';
import { GCS_ASSETS, RIFTBOUND_ASSETS } from '../data/assets.js';
import { gcsCaseSections, gcsImage } from './gcs.js';
import { offRackCaseSections, offRackCover } from './off-the-rack.js';
import { riftboundCaseSections, riftboundCover } from './riftbound.js';
import { flowchartsCaseSections, flowchartsCover } from './flowcharts.js';
import { realEstateCaseSections, realEstateCover } from './real-estate.js';

const documents = {
  gcs: { cover: () => gcsImage(GCS_ASSETS.hero, 'GCS smart mosquito control drone hero image', 'gcs-cover-image'), sections: gcsCaseSections },
  'off-the-rack': { cover: offRackCover, sections: offRackCaseSections },
  riftbound: { cover: riftboundCover, sections: riftboundCaseSections },
  'flowcharts-process-mapping': { cover: flowchartsCover, sections: flowchartsCaseSections },
  'marci-metzger-homes': { cover: realEstateCover, sections: realEstateCaseSections },
};
function reserveImageSpace(markup) {
  return markup.replace(/<img\b[^>]*>/g, tag => {
    const src = tag.match(/src="([^"]+)"/)[1];
    const [width, height] = imageDimensions[src];
    return tag.replace(/\s(?:loading|fetchpriority|decoding)="[^"]*"/g, '').replace(' />', '>').replace(/>$/, ' width="'+width+'" height="'+height+'" loading="lazy" decoding="async" />');
  });
}
export function projectDocument(slug) {
  const document = documents[slug];
  // Preserve the source copy; nest its heading levels beneath the folder title.
  const body = document.sections().replace(/<(\/?)(h2|h3)(?=[\s>])/g, (_, slash, tag) => `<${slash}${tag === 'h2' ? 'h4' : 'h5'}`);
  const extra = slug === 'riftbound' ? `<figure class="supplementary-media"><img src="${RIFTBOUND_ASSETS.logo}" alt="Riftbound logo" loading="lazy" /><figcaption>Riftbound logo</figcaption></figure>` : slug === 'flowcharts-process-mapping' ? '<figure class="supplementary-media"><a href="/assets/projects/05.flows%20and%20wireframes/FIVERR%20-%2007.jpg" target="_blank" rel="noopener"><img src="/assets/projects/05.flows%20and%20wireframes/FIVERR%20-%2007.jpg" alt="Additional flowchart from the supplied project collection" loading="lazy" /></a><figcaption>Additional flowchart from the supplied project collection</figcaption></figure>' : '';
  return { cover: reserveImageSpace(document.cover()), body: reserveImageSpace(`<div class="folder-document">${body}${extra}</div>`) };
}
