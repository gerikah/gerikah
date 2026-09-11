import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, MotionConfig, animate, motion, useAnimationControls, useReducedMotion } from 'motion/react';
import parse, { domToReact } from 'html-react-parser';
import { portfolioFolders } from '../data/folders.js';
import { ASSETS } from '../data/assets.js';
import { CONTACT_LINKS } from '../data/contact.js';
import { imageDimensions } from '../data/image-dimensions.js';
import { aboutSheet, contactSheet } from '../content/profile.js';

const ease = [0.22, 0.68, 0.22, 1];
const folderIds = new Set(portfolioFolders.map(folder => folder.id));
const tabSlots = [0, 2, 0.8, 0, 2, 1, 0];

// Server-rendered content stays visible. Only the first client mount plays the intro.
function useEntrance(delay = 0, distance = 10, background = false) {
  const controls = useAnimationControls();
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) {
      controls.set({ opacity: 1, y: 0, scale: 1 });
      return;
    }
    const smallScreen = matchMedia('(max-width: 700px)').matches;
    void controls.start(background
      ? { scale: [1.03, 1], transition: { duration: 0.85, ease } }
      : { opacity: [0, 1], y: [smallScreen ? distance / 2 : distance, 0], transition: { duration: 0.42, delay, ease } });
    return () => controls.stop();
  }, [controls, reduce, delay, distance, background]);
  return controls;
}

const Landing = memo(function Landing() {
  const background = useEntrance(0, 0, true);
  const metadata = useEntrance(0.04);
  const design = useEntrance(0.1, 14);
  const build = useEntrance(0.2, 14);
  const supporting = useEntrance(0.28);
  return <>
    <div className="landing-art" aria-hidden="true">
      <motion.div className="landing-background" initial={false} animate={background} />
    </div>
    <section className="folder-hero" aria-labelledby="hero-title">
      <motion.div className="hero-file-label" initial={false} animate={metadata}>
        <p className="file-label">Independent thinking.<br />Considered interfaces.</p>
        <span className="file-label">UI/UX Designer &amp; Developer<br />Based in the Philippines</span>
      </motion.div>
      <h1 id="hero-title">
        <motion.span className="hero-design" initial={false} animate={design}>I design it.</motion.span>
        <motion.span className="hero-build" initial={false} animate={build}>Then I build it.</motion.span>
      </h1>
      <motion.div className="hero-footnote" initial={false} animate={supporting}>
        <p>Design with a creative eye.<br />Build with an engineering mindset.</p>
        <a className="folio-link" href="#portfolio">Take a look inside <span aria-hidden="true">↓</span></a>
      </motion.div>
    </section>
  </>;
});

const Header = memo(function Header() {
  const entrance = useEntrance(0, -8);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div className={`header-shell${scrolled ? ' is-scrolled' : ''}`}>
    <motion.header className="portfolio-header" initial={false} animate={entrance}>
      <a className="brand" href="#top" aria-label="Gerikah Alday — Home"><img src={ASSETS.logo} alt="" width="40" height="40" /></a>
      <span className="identity-label">Gerikah Alday <span>/ Portfolio</span></span>
      <nav aria-label="Portfolio navigation">
        <a href="#portfolio" className="folio-link">Open portfolio <span aria-hidden="true">↘</span></a>
        {CONTACT_LINKS.resume && <a href={CONTACT_LINKS.resume} download>Résumé ↓</a>}
      </nav>
    </motion.header>
  </div>;
});

function ProjectImage({ image }) {
  const [width, height] = imageDimensions[image.src];
  return <img className="project-image" src={image.src} alt={image.alt} width={width} height={height} loading="lazy" decoding="async" />;
}

function ProjectPreview({ project }) {
  return <div className="project-preview">
    <div className="project-sheet-heading">
      <p className="file-label">Project {project.number} / {project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-sheet-subtitle">{project.subtitle}</p>
      <p className="project-sheet-description">{project.context}</p>
    </div>
    <div className="preview-composition">
      <figure className="folder-project-image"><ProjectImage image={project.previewImages[0]} />
        {project.previewImages[0].caption && <figcaption>{project.previewImages[0].caption}</figcaption>}
      </figure>
      <dl className="project-sheet-meta">
        {[['My role', project.role], ['Project type', project.projectType], ['Status', project.status], ['Tools & technologies', project.tools]].map(([label, value]) =>
          <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
    </div>
    <div className="project-focus"><p className="file-label">Design focus</p><p>{project.designFocus}</p></div>
    {project.previewImages.length > 1 && <div className="preview-supporting">{project.previewImages.slice(1, 3).map(image => <ProjectImage key={image.src} image={image} />)}</div>}
    {project.liveUrl && <a className="folio-link project-live-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit live site ↗</a>}
  </div>;
}

const FullCaseStudy = memo(function FullCaseStudy({ markup, reduce }) {
  let section = 0;
  const options = {
    replace(node) {
      if (node.type === 'tag' && node.name === 'section' && node.attribs.class?.split(' ').includes('case-section')) {
        const delay = reduce ? 0 : Math.min(section++ * 0.045, 0.2);
        return <motion.section className={node.attribs.class}
          initial={{ opacity: 0, y: reduce ? 0 : 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.06 : 0.3, delay, ease }}>
          {domToReact(node.children, options)}
        </motion.section>;
      }
    },
  };
  return parse(markup, options);
});

function Folder({ folder, index, open, full, onToggle, onFull, onClose, onKeys, reduce }) {
  const entrance = useEntrance(0.25 + index * 0.035, 14);
  const duration = reduce ? 0 : 0.38;
  const heightTransition = { duration, ease };
  const peekImage = folder.kind === 'project' ? folder.previewImages[0].src : folder.kind === 'about' ? ASSETS.logo : null;
  return <motion.article layout={reduce ? false : 'position'}
    className={`folder-sheet folder-${folder.kind}${open ? ' is-open' : ''}`}
    id={folder.id} data-folder={folder.id} data-state={open ? full ? 'full' : 'preview' : 'closed'}
    style={{ '--tab-slot': tabSlots[index], zIndex: index + 1 }} initial={false} animate={entrance}
    transition={{ layout: { duration, ease } }}>
    <h2 className="folder-heading">
      <motion.button type="button" className="folder-tab" id={`tab-${folder.id}`}
        aria-expanded={open} aria-controls={`panel-${folder.id}`} onClick={onToggle} onKeyDown={onKeys}
        initial={false} whileHover={reduce ? undefined : 'hover'} animate="rest"
        variants={{ rest: { y: 0, borderColor: '#636b65' }, hover: { y: open ? 0 : -4, borderColor: '#a9b8ae' } }}
        transition={{ duration: 0.18, ease }}>
        <span className="tab-number" aria-hidden="true">{folder.number}</span>
        <motion.span className="tab-label" variants={{ rest: { x: 0 }, hover: { x: 3 } }}>{folder.label}</motion.span>
        <motion.span className="folder-toggle" aria-hidden="true" variants={{ rest: { rotate: 0 }, hover: { rotate: open ? 0 : 90 } }}>{open ? '−' : '+'}</motion.span>
      </motion.button>
    </h2>
    <div className="folder-surface">
      <motion.div className="folder-peek" aria-hidden="true" initial={false}
        animate={{ height: open ? 0 : 'auto', opacity: open ? 0 : 1 }} transition={heightTransition}>
        <div className="folder-peek-content">
          {peekImage ? <img src={peekImage} alt="" loading="lazy" decoding="async" />
            : <span className="contact-peek-type">Let’s make something worth using.</span>}
        </div>
      </motion.div>
      <div className="folder-expansion" id={`panel-${folder.id}`} role="region" aria-labelledby={`tab-${folder.id}`} inert={!open} aria-hidden={!open}>
        <AnimatePresence initial={false}>
          {open && <motion.div key="contents" className="folder-clip" initial={reduce ? false : { height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={heightTransition}>
            <motion.div className="folder-content" initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduce ? 0 : 0.24, ease }}>
              {folder.kind === 'project' ? <>
                <ProjectPreview project={folder} />
                <motion.button id={`more-${folder.id}`} className="project-disclosure" type="button"
                  aria-expanded={full} aria-controls={`full-${folder.id}`} onClick={onFull} whileHover={reduce ? undefined : 'hover'}>
                  <span className="file-label" aria-hidden="true">{folder.number} / Read on</span>
                  <span>{full ? 'Show less' : 'Know more about this project'}</span>
                  <motion.span className="disclosure-arrow" aria-hidden="true" variants={{ hover: { x: 5 } }}>{full ? '↑' : '↓'}</motion.span>
                </motion.button>
                <div id={`full-${folder.id}`} role="region" aria-labelledby={`more-${folder.id}`} inert={!full} aria-hidden={!full}>
                  <AnimatePresence initial={false}>
                    {full && <motion.div key="study" className="full-study" initial={reduce ? false : { height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0, opacity: 0 }} transition={heightTransition}>
                      <FullCaseStudy markup={folder.fullContent} reduce={reduce} />
                      <button type="button" className="show-less-end folio-link" onClick={onFull}>Show less <span aria-hidden="true">↑</span></button>
                    </motion.div>}
                  </AnimatePresence>
                </div>
              </> : parse(folder.kind === 'about' ? aboutSheet() : contactSheet())}
              <button className="close-file file-label" type="button" data-close-folder={folder.id} onClick={onClose}>Close file ↑</button>
            </motion.div>
          </motion.div>}
        </AnimatePresence>
      </div>
    </div>
  </motion.article>;
}

export function Portfolio() {
  const [openFolder, setOpenFolder] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const reduce = useReducedMotion();
  const [scrollRequest, setScrollRequest] = useState(null);
  const scrollJob = useRef({ serial: 0, timer: null, animation: null });
  const requestScroll = useCallback((id, focus = false) => {
    const job = scrollJob.current;
    const serial = ++job.serial;
    clearTimeout(job.timer);
    job.animation?.stop();
    setScrollRequest({ id, focus, serial });
  }, []);

  useEffect(() => {
    if (!scrollRequest) return;
    const { id, focus, serial } = scrollRequest;
    const job = scrollJob.current;
    // Schedule after React commits the folder state, so the initial hash cannot
    // scroll against the shorter, closed stack and clamp at its document bottom.
    // Motion animates real height so images never scale. Wait for the new layout
    // before measuring; a newer request cancels any pending or running scroll.
    job.timer = setTimeout(async () => {
      await document.fonts.ready;
      await new Promise(requestAnimationFrame);
      if (serial !== job.serial) return;
      const target = document.getElementById(id);
      if (!target) return;
      if (focus) target.focus({ preventScroll: true });
      const headerHeight = document.querySelector('.header-shell').getBoundingClientRect().height;
      const destination = id === 'top' ? 0 : Math.max(0, target.getBoundingClientRect().top + scrollY - headerHeight - 16);
      if (reduce) window.scrollTo({ top: destination, behavior: 'instant' });
      else job.animation = animate(scrollY, destination, { duration: 0.42, ease, onUpdate: top => window.scrollTo({ top, behavior: 'instant' }) });
    }, reduce ? 0 : 440);
    return () => {
      clearTimeout(job.timer);
      job.animation?.stop();
    };
  }, [scrollRequest, reduce]);

  const writeHash = useCallback(id => {
    const hash = `#${id || 'portfolio'}`;
    if (location.hash !== hash) history.pushState(null, '', `/${hash}`);
  }, []);

  const navigate = useCallback((id, focus = false) => {
    const folder = folderIds.has(id) ? id : null;
    setExpandedProject(null);
    setOpenFolder(folder);
    requestScroll(folder ? `tab-${folder}` : id === 'portfolio' ? 'portfolio' : 'top', focus && Boolean(folder));
    if (focus && !folder) document.querySelector(id === 'portfolio' ? '#tab-about' : '.brand')?.focus({ preventScroll: true });
  }, [requestScroll]);

  const navigation = useRef(navigate);
  useEffect(() => { navigation.current = navigate; }, [navigate]);
  useEffect(() => {
    const restore = () => navigation.current(location.hash.slice(1) || 'top');
    // Delay hash navigation until hydration; the initial server/client trees match.
    if (location.hash) restore();
    window.addEventListener('hashchange', restore);
    return () => window.removeEventListener('hashchange', restore);
  }, []);
  useEffect(() => () => {
    ++scrollJob.current.serial;
    clearTimeout(scrollJob.current.timer);
    scrollJob.current.animation?.stop();
  }, []);

  function closeFolder(id) {
    setOpenFolder(null);
    setExpandedProject(null);
    writeHash(null);
    document.getElementById(`tab-${id}`)?.focus({ preventScroll: true });
    requestScroll(`tab-${id}`);
  }
  function toggleFolder(id) {
    if (openFolder === id) closeFolder(id);
    else {
      setOpenFolder(id);
      setExpandedProject(null);
      writeHash(id);
      requestScroll(`tab-${id}`, true);
    }
  }
  function toggleFull(id) {
    setExpandedProject(expandedProject === id ? null : id);
    document.getElementById(`more-${id}`)?.focus({ preventScroll: true });
    requestScroll(`more-${id}`);
  }
  function onKeys(event, index) {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? portfolioFolders.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + portfolioFolders.length) % portfolioFolders.length;
    document.getElementById(`tab-${portfolioFolders[next].id}`)?.focus();
  }
  function onLink(event) {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname !== '/' || !url.hash) return;
    const id = url.hash.slice(1);
    if (!folderIds.has(id) && !['portfolio', 'top'].includes(id)) return;
    event.preventDefault();
    writeHash(id);
    navigate(id, true);
  }
  return <MotionConfig reducedMotion="user">
    <div className="portfolio-page" onClick={onLink} onKeyDown={event => {
      if (event.key === 'Escape' && openFolder) { event.preventDefault(); closeFolder(openFolder); }
    }}>
      <a className="portfolio-skip" href="#portfolio">Skip to portfolio</a>
      <Header />
      <main id="top" className="folder-home">
        <Landing />
        <section id="portfolio" className="portfolio-index" aria-labelledby="portfolio-title">
          <div className="portfolio-index-heading"><h2 id="portfolio-title" className="file-label">The portfolio / 07 files</h2><p className="file-label">Select a tab to open</p></div>
          <LayoutGroup id="portfolio-folders">
            <div className="folder-stack">
              {portfolioFolders.map((folder, index) => <Folder key={folder.id} folder={folder} index={index}
                open={openFolder === folder.id} full={openFolder === folder.id && expandedProject === folder.id}
                reduce={reduce} onToggle={() => toggleFolder(folder.id)} onFull={() => toggleFull(folder.id)}
                onClose={() => closeFolder(folder.id)} onKeys={event => onKeys(event, index)} />)}
            </div>
          </LayoutGroup>
        </section>
      </main>
    </div>
  </MotionConfig>;
}
