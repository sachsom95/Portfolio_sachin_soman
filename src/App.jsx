import { useEffect, useState } from 'react';
import { ArrowRightIcon, ArrowUpRightIcon, FileTextIcon, MoonIcon, SunIcon } from '@phosphor-icons/react';
import { projects, notes, pages, articlePath } from './content/site';
import { SignalLab } from './components/SignalLab';
import { ArticleContent } from './components/ArticleContent';
import { Artwork, ThemeContext } from './components/Artwork';

function getTheme() {
  try { const saved = localStorage.getItem('sachin-theme'); if (saved === 'light' || saved === 'dark') return saved; } catch {}
  return 'light';
}

export function App({ path = '/' }) {
  const [theme, setTheme] = useState('light');
  const page = pages.find(page => page.path === path);
  const selected = page?.id;
  useEffect(() => { setTheme(getTheme()); }, []);
  useEffect(() => {
    const legacy = { 'learning-by-making': 'noise-and-delay', exploring: 'about', projects: null };
    const id = window.location.hash.slice(1);
    const mapped = legacy[id] || id;
    if (pages.some(page => page.id === mapped)) window.location.replace(articlePath(mapped));
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#1a1717' : '#ffffff');
  }, [theme]);
  const toggleTheme = () => setTheme(current => { const next = current === 'light' ? 'dark' : 'light'; try { localStorage.setItem('sachin-theme', next); } catch {} return next; });
  return <ThemeContext.Provider value={theme}>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="site-frame">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Sachin Soman, home">Sachin Soman<span className="wordmark-dot">.</span></a>
        <nav aria-label="Main navigation"><a href="/#work">Work</a><a href="/#labs">Labs</a><a href="/#products">Products</a><a href="/#writing">Writing</a><a href="/about/">About</a></nav>
        <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? <MoonIcon size={21} weight="light" /> : <SunIcon size={21} weight="light" />}</button>
      </header>
      <main id="main">
        {!page ? <article className="reader document-reader"><div className="reader-inner"><h1>Nothing here. Yet.</h1><p>This page may have moved. There’s more to explore on the homepage.</p><a className="text-link" href="/">Back home <ArrowRightIcon size={20} /></a></div></article> : selected ? <ArticleContent selected={selected} /> : <>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy"><p className="eyebrow">Engineer & builder</p><h1 id="hero-title">Useful things.<br />Curious questions.</h1><p className="hero-description">I build software and explore how things work.</p><p className="hero-role">Founding engineer at <a href="https://www.protex.ai/" target="_blank" rel="noreferrer">Protex AI</a> · Dublin</p><a className="text-link" href="/about/">A little about me <ArrowRightIcon size={20} weight="light" /></a></div>
          <Artwork className="hero-art sketch" src="/art/hero.webp" alt="A pencil sketch of a code cube, a pencil, and a question: always figuring something out." width="1200" height="900" fetchPriority="high" />
        </section>
        <section id="work" className="work-section ruled-section" aria-labelledby="work-title">
          <h2 id="work-title" className="section-label">Selected work</h2><p className="work-intro">A couple of personal projects. Built to explore an idea.</p>
          <div className="project-grid">{projects.map(project => <article className="project" key={project.id}>
            <a className="project-image-link" href={articlePath(project.id)} aria-label={`Read the ${project.name} story`}><Artwork className="project-image sketch" src={project.image} alt={project.alt} width="1536" height="1024" /></a>
            <h3><a href={articlePath(project.id)}>{project.name}</a></h3><p className="project-kind">{project.kind}</p><p className="project-description">{project.description}</p><a className="text-link" href={articlePath(project.id)}>Read the story <ArrowRightIcon size={20} weight="light" /></a>
          </article>)}</div>
          <a className="text-link experience-link" href="/about/">My work at Protex & how I got here <ArrowRightIcon size={20} weight="light" /></a>
        </section>
        <section id="labs" className="lab-section ruled-section" aria-labelledby="lab-title">
          <p className="section-label">From the lab</p><h2 id="lab-title">Can you find the signal?</h2>
          <div className="lab-body"><div className="lab-copy"><p className="lab-description">A little noise. A hidden pattern.<br />An idea you can get your hands on.</p><p className="lab-invitation">Move a slider. See what changes.</p><a className="text-link" href="/labs/signal/">Open the experiment <ArrowRightIcon size={20} weight="light" /></a></div><SignalLab /></div>
        </section>
        <section id="products" className="products-section ruled-section" aria-labelledby="products-title">
          <Artwork className="products-art sketch" src="/art/books.webp" alt="Pencil drawings of a practical guide and a stack of templates." width="1000" height="700" loading="lazy" />
          <div className="products-copy"><h2 id="products-title">Things to take with you</h2><p className="product-subtitle">Interactive engineering notes</p><p className="product-description">Small, practical guides for curious builders.<br /><span>Something I’m working towards.</span></p></div>
          <a className="text-link product-cta" href="/products/engineering-notes/">Preview a lesson <ArrowRightIcon size={20} weight="light" /></a>
        </section>
        <section id="writing" className="writing-section ruled-section" aria-labelledby="writing-title"><h2 id="writing-title" className="section-label">Notes from the workbench</h2><div className="notes-grid">{notes.map(note => <a className="note" key={note.id} href={note.url || articlePath(note.id)} target={note.url ? '_blank' : undefined} rel={note.url ? 'noreferrer' : undefined}><FileTextIcon className="note-icon" size={35} weight="thin" /><span><span className="note-title">{note.title}<ArrowRightIcon size={20} weight="light" /></span><span className="note-description">{note.description}</span></span></a>)}</div></section>
      </>}
      </main>
      <footer className="site-footer"><div className="footer-links"><a href="https://github.com/sachsom95" target="_blank" rel="noreferrer">GitHub <ArrowUpRightIcon size={13} /></a><a href="https://www.linkedin.com/in/sachin-soman/" target="_blank" rel="noreferrer">Contact <ArrowUpRightIcon size={13} /></a><a href="/feed.xml">RSS</a></div><span>A work in progress. Just like me.</span></footer>
    </div>
  </ThemeContext.Provider>;
}
