import { projects } from '../data.js';

export default function Projects() {
  return (
    <section className="block" id="projects" aria-label="Projects">
      <div className="section-head">
        <h2 className="section-label">Projects</h2>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <a
              className="project-image-link"
              href={p.writeup}
              target="_blank"
              rel="noreferrer"
              aria-label={`Read the ${p.title} write-up`}
            >
              <img className="project-image" src={p.image} alt={`${p.title} preview`} loading="lazy" />
            </a>

            <div className="project-body">
              <header className="project-head">
                <h3>{p.title}</h3>
                <span className="muted small">{p.date}</span>
              </header>

              <p className="project-summary">{p.summary}</p>

              <ul className="tags" aria-label="Technologies">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>

              <div className="project-actions">
                <a className="btn" href={p.github} target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
