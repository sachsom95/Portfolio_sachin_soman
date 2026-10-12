import { ArrowUpRightIcon, ArrowLeftIcon } from '@phosphor-icons/react';
import { SignalLab } from './SignalLab';
import { Artwork } from './Artwork';
import { about, notes, projects } from '../content/site';

export function ArticleContent({ selected }) {
  const article = [...projects, ...notes, about].find(item => item.id === selected);
  const isLab = selected === 'signal';
  const isProduct = selected === 'guide';
  return <article className="reader document-reader" aria-labelledby="reader-title">
    {selected && <div className="reader-inner">
      <div className="reader-top"><span className="eyebrow">{isLab ? 'An experiment from the lab' : isProduct ? 'A small preview · In the works' : article?.kind || article?.kicker}</span><a className="text-link back-link" href="/"><ArrowLeftIcon size={18} weight="light" /> Back home</a></div>
      <h1 id="reader-title">{isLab ? 'Can you find the signal?' : isProduct ? 'Make the invisible visible.' : article?.name || article?.title}</h1>
      {isLab ? <>
        <p className="reader-intro">A measurement is a clue. A hundred measurements can tell a story.</p>
        <SignalLab key="expanded" expanded />
        <h2>What you’re seeing</h2><p>The dots are synthetic measurements of a changing signal. Noise pushes them above or below the true value. The solid line averages the most recent measurements to make the pattern easier to see.</p>
        <h2>Calmer isn’t always better</h2><p>Increase the smoothing window. The line becomes less jumpy, but it also reacts more slowly when the signal changes. Reveal the underlying signal to see that delay. This is a causal moving average: it only uses measurements from the present and past.</p>
        <p className="small-note">Illustrative simulation with a fixed random seed, so you can compare settings fairly.</p>
      </> : isProduct ? <>
        <p className="reader-intro">Interactive engineering notes. A practical idea you can read, play with, and take apart.</p>
        <Artwork className="reader-product-art sketch" src="/art/books.webp" alt="Pencil sketches of a practical guide and a set of templates." />
        <h2>Lesson 01 · From noisy data to a useful signal</h2>
        <p>Start with a changing quantity: a sensor reading, a bike station’s occupancy, or the position of a person’s wrist. A single reading can be unreliable. Look across several readings and a pattern starts to emerge.</p>
        <ol className="lesson-steps"><li><strong>Observe.</strong> Increase the noise in the experiment. Notice how much the individual measurements disagree.</li><li><strong>Estimate.</strong> Average a few readings. Watch the estimate become calmer.</li><li><strong>Question.</strong> Increase the window further. What happens when the real signal changes direction?</li></ol>
        <p>The useful question is no longer “How do I remove all the noise?” It becomes “How much delay can this interaction tolerate?”</p>
        <p className="small-note">This is a sample of a possible guide. The full product is still an idea in progress.</p>
        <a className="text-link" href="/labs/signal/">Try the experiment <ArrowUpRightIcon size={18} /></a>
      </> : article && <>
        <p className="reader-intro">{article.introduction}</p>
        {article.image && <Artwork className="reader-art sketch" src={article.image} alt={article.alt} />}
        {article.paragraphs.map((text, index) => <p key={index}>{text}</p>)}
        {article.stack && <p className="stack-list">{article.stack.join(' / ')}</p>}
        {(article.source || article.extra) && <div className="reader-links">{article.source && <a className="text-link" href={article.source} target="_blank" rel="noreferrer">Explore the code <ArrowUpRightIcon size={18} /></a>}{article.extra && <a className="text-link" href={article.extra.url} target={article.extra.url.startsWith('/') ? undefined : '_blank'} rel={article.extra.url.startsWith('/') ? undefined : 'noreferrer'}>{article.extra.label} <ArrowUpRightIcon size={18} /></a>}</div>}
        {selected === 'about' && <div className="reader-links"><a className="text-link" href="https://github.com/sachsom95" target="_blank" rel="noreferrer">GitHub <ArrowUpRightIcon size={18} /></a><a className="text-link" href="https://www.linkedin.com/in/sachin-soman/" target="_blank" rel="noreferrer">Say hello on LinkedIn <ArrowUpRightIcon size={18} /></a></div>}
      </>}
    </div>}
  </article>;
}
