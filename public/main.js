/**
 * main.js — rendering & interactions
 * You should never need to edit this file. Edit data.js instead.
 */

/* ============================================================
   THEME — system default + persistent manual toggle
   ============================================================ */
const html = document.documentElement;

function systemIsDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function currentIsDark() {
  const saved = html.getAttribute('data-theme');
  return saved ? saved === 'dark' : systemIsDark();
}
function syncIcons() {
  const dark = currentIsDark();
  document.getElementById('icon-sun').style.display  = dark ? 'block' : 'none';
  document.getElementById('icon-moon').style.display = dark ? 'none'  : 'block';
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) html.setAttribute('data-theme', savedTheme);
syncIcons();

document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = currentIsDark() ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  syncIcons();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (!html.getAttribute('data-theme')) syncIcons();
});

/* ============================================================
   HELPERS
   ============================================================ */
function el(tag, cls, innerHTML) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (innerHTML !== undefined) e.innerHTML = innerHTML;
  return e;
}

function socialIconSVG(type) {
  const icons = {
    email:    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    github:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    scholar:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>`,
    pdf:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    envelope: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  };
  return icons[type] || '';
}

function socialRow(d) {
  const links = [
    { url: `mailto:${d.email}`, icon: 'email',    label: 'Email'         },
    { url: d.github,            icon: 'github',   label: 'GitHub'        },
    { url: d.linkedin,          icon: 'linkedin', label: 'LinkedIn'      },
    { url: d.scholar,           icon: 'scholar',  label: 'Google Scholar'},
  ].filter(l => l.url);

  return `<div class="social-links" role="list">
    ${links.map(l => `
      <a href="${l.url}" class="social-link" aria-label="${l.label}" role="listitem"
         ${l.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
        ${socialIconSVG(l.icon)}
      </a>`).join('')}
  </div>`;
}

function tagsHtml(tags) {
  return `<div class="pub-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
}

function timelineItem(date, title, org, orgUrl, desc) {
  return `<div class="timeline-item">
    <div class="tl-dot"></div>
    <div class="tl-body">
      <span class="tl-date">${date}</span>
      <h4 class="tl-title">${title}</h4>
      <p class="tl-org">${orgUrl ? `<a href="${orgUrl}" target="_blank" rel="noopener">${org}</a>` : org}</p>
      ${desc ? `<p class="tl-desc">${desc}</p>` : ''}
    </div>
  </div>`;
}

/* ============================================================
   SECTION: ABOUT
   ============================================================ */
function renderAbout(d) {

  document.getElementById('about-root').innerHTML = `
    <div class="hero-grid">
      <div class="hero-text">
        <p class="hero-eyebrow">Hello, I'm</p>
        <h1 class="hero-name">${d.name}</h1>
        <p class="hero-role">${d.role}</p>
        <p class="hero-affil">
          <a href="${d.affiliationUrl}" target="_blank" rel="noopener">${d.affiliation}</a>
        </p>
        <p class="hero-bio">${d.bio}</p>
        <div class="hero-actions">
          <a href="${d.cvPath}" class="btn btn-primary" target="_blank" rel="noopener">
            ${socialIconSVG('pdf').replace('aria-hidden="true"', 'class="btn-icon" aria-hidden="true"')}
            Download CV
          </a>
          <a href="mailto:${d.email}" class="btn btn-secondary">
            ${socialIconSVG('envelope').replace('aria-hidden="true"', 'class="btn-icon" aria-hidden="true"')}
            Get in Touch
          </a>
        </div>
        ${socialRow(d)}
      </div>
      <div class="hero-image">
        <img src="${d.avatarPath}" alt="${d.avatarAlt}" class="avatar" width="280" height="280">
      </div>
    </div>`;
}

/* ============================================================
   SECTION: RESEARCH
   ============================================================ */
function renderResearch(d) {
  const cards = d.research.map(r => `
    <div class="research-card">
      <div class="research-icon" aria-hidden="true">${r.icon}</div>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
    </div>`).join('');

  document.getElementById('research-root').innerHTML = `
    <h2 class="section-title">Research</h2>
    <p class="section-intro">
      My work sits at the intersection of machine learning, game theory, and statistical learning
      theory. I am particularly interested in settings where the agents being classified can
      respond strategically to the classifier's decisions.
    </p>
    <div class="research-grid">${cards}</div>`;
}

/* ============================================================
   SECTION: PUBLICATIONS
   featuredOnly=true  → homepage, shows featured papers + "View all" link
   featuredOnly=false → publications page, shows everything
   ============================================================ */
function renderPublications(d, { featuredOnly = false } = {}) {
  const pubs = featuredOnly
    ? d.publications.filter(p => p.featured)
    : d.publications;

  const cards = pubs.map(p => {
    const authorsHtml = p.authors
      .map(a => a === p.myName ? `<strong>${a}</strong>` : a)
      .join(', ');

    const linkBtns = [];
    linkBtns.push(`<button class="pill-btn" onclick="toggleAbstract('${p.id}-abs', this)" aria-expanded="false">Abstract</button>`);
    if (p.links.arxiv) linkBtns.push(`<a href="${p.links.arxiv}" class="pill-btn" target="_blank" rel="noopener">arXiv</a>`);
    if (p.links.pdf)   linkBtns.push(`<a href="${p.links.pdf}"   class="pill-btn" target="_blank" rel="noopener">PDF</a>`);
    if (p.links.code)  linkBtns.push(`<a href="${p.links.code}"  class="pill-btn" target="_blank" rel="noopener">Code</a>`);
    linkBtns.push(`<button class="pill-btn" onclick="toggleBibtex('${p.id}-bib', this)" aria-expanded="false">BibTeX</button>`);

    return `<article class="pub-card">
      <div class="pub-year">${p.year}</div>
      <div class="pub-body">
        <h3 class="pub-title">${p.title}</h3>
        <p class="pub-authors">${authorsHtml}</p>
        <p class="pub-venue">${p.venue}</p>
        <div id="${p.id}-abs" class="pub-abstract" hidden>${p.abstract}</div>
        ${tagsHtml(p.tags)}
        <div class="pub-links">${linkBtns.join('')}</div>
        <pre class="bibtex" id="${p.id}-bib" hidden>${p.bibtex}</pre>
      </div>
    </article>`;
  }).join('');

  const viewAllLink = featuredOnly ? `
    <div class="view-all-wrap">
      <a href="publications.html" class="btn btn-secondary">View all publications →</a>
    </div>` : '';

  const title = featuredOnly ? 'Selected Publications' : 'Publications';

  document.getElementById('publications-root').innerHTML = `
    <h2 class="section-title">${title}</h2>
    <div class="publications-list">${cards}</div>
    ${viewAllLink}`;
}

/* ============================================================
   SECTION: PROJECTS
   ============================================================ */
function renderProjects(d) {
  const cards = d.projects.map(p => {
    // Primary link: prefer explicit url, fall back to github
    const href = p.url || p.github || '';

    // Small label in the corner showing where the card goes
    const destinationLabel = p.url
      ? `<span class="project-dest-label">Visit ↗</span>`
      : p.github
        ? `<span class="project-dest-label">GitHub ↗</span>`
        : '';

    const inner = `
      <div class="project-header">
        <h3 class="project-title">${p.title}</h3>
        ${destinationLabel}
      </div>
      <p class="project-desc">${p.desc}</p>
      ${tagsHtml(p.tags)}`;

    // Wrap in <a> if there's a link so the whole card is clickable
    return href
      ? `<a href="${href}" target="_blank" rel="noopener" class="project-card" aria-label="${p.title}">${inner}</a>`
      : `<div class="project-card">${inner}</div>`;
  }).join('');

  document.getElementById('projects-root').innerHTML = `
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">${cards}</div>`;
}

/* ============================================================
   SECTION: EXPERIENCE
   ============================================================ */
function renderExperience(d) {
  const edu = d.education.map(e =>
    timelineItem(e.dates, e.degree, e.institution, '', e.desc)
  ).join('');

  const work = d.work.map(w =>
    timelineItem(w.dates, w.role, w.company, w.companyUrl, w.desc)
  ).join('');

  document.getElementById('experience-root').innerHTML = `
    <h2 class="section-title">Experience</h2>
    <div class="experience-columns">
      <div class="tl-col">
        <h3 class="tl-group">Education</h3>
        <div class="timeline">${edu}</div>
      </div>
      <div class="tl-col">
        <h3 class="tl-group">Work</h3>
        <div class="timeline">${work}</div>
      </div>
    </div>`;
}

/* ============================================================
   SECTION: CONTACT
   ============================================================ */
function renderContact(d) {
  document.getElementById('contact-root').innerHTML = `
    <div class="contact-wrap">
      <h2 class="section-title">Get in Touch</h2>
      <p class="section-intro">
        I'm always happy to discuss research, potential collaborations, or opportunities.
        The best way to reach me is by email.
      </p>
      <a href="mailto:${d.email}" class="contact-email">${d.email}</a>
      ${socialRow(d)}
    </div>`;
}

/* ============================================================
   FOOTER
   ============================================================ */
function renderFooter(d) {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.getElementById('footer-name').textContent = d.name;
}

/* ============================================================
   BOOTSTRAP — detect page and render accordingly
   ============================================================ */
const IS_PUB_PAGE = document.body.dataset.page === 'publications';

// Set nav logo on every page
const logoEl = document.getElementById('nav-logo');
if (logoEl) logoEl.textContent = SITE.name;

if (IS_PUB_PAGE) {
  // Full publications page — just the list and footer
  renderPublications(SITE, { featuredOnly: false });
  renderFooter(SITE);
} else {
  // Homepage — hero, research, selected papers, projects, experience, contact
  renderAbout(SITE);
  renderResearch(SITE);
  renderPublications(SITE, { featuredOnly: true });
  renderProjects(SITE);
  renderExperience(SITE);
  renderContact(SITE);
  renderFooter(SITE);
}

/* ============================================================
   NAV — active link on scroll (homepage only)
   On publications page the active state is set statically in the HTML.
   ============================================================ */
if (!IS_PUB_PAGE) {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = '#' + entry.target.id;
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
    });
  }, { rootMargin: '-15% 0px -75% 0px' });

  document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));
}

/* ============================================================
   NAV — mobile hamburger
   ============================================================ */
const navToggle  = document.getElementById('nav-toggle');
const navLinksEl = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinksEl.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ============================================================
   NAV — shadow on scroll
   ============================================================ */
const navHeader = document.getElementById('nav-header');
window.addEventListener('scroll', () => {
  navHeader.style.boxShadow = window.scrollY > 8 ? '0 2px 12px rgba(0,0,0,0.08)' : '';
}, { passive: true });

/* ============================================================
   PUBLICATIONS — abstract toggle
   ============================================================ */
function toggleAbstract(id, btn) {
  const panel = document.getElementById(id);
  const nowHidden = !panel.hidden;
  panel.hidden = nowHidden;
  btn.setAttribute('aria-expanded', String(!nowHidden));
  btn.textContent = nowHidden ? 'Abstract' : 'Hide abstract';
}

/* ============================================================
   PUBLICATIONS — BibTeX reveal + clipboard copy
   ============================================================ */
function toggleBibtex(id, btn) {
  const panel = document.getElementById(id);
  const nowHidden = !panel.hidden;
  panel.hidden = nowHidden;
  btn.setAttribute('aria-expanded', String(!nowHidden));
  btn.textContent = nowHidden ? 'BibTeX' : 'Hide BibTeX';

  if (!nowHidden) {
    navigator.clipboard.writeText(panel.textContent.trim()).then(showToast).catch(() => {
      const range = document.createRange();
      range.selectNodeContents(panel);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    });
  }
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer;
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
