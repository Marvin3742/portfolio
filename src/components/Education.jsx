import { education } from '../data.js';

export default function Education() {
  return (
    <section className="block" aria-label="Education">
      <h2 className="section-label">Education</h2>
      <ul className="edu">
        {education.map((e) => (
          <li key={e.school}>
            <div className="edu-row">
              <strong>{e.school}</strong>
              <span className="muted small">{e.location} · {e.date}</span>
            </div>
            <span className="muted">{e.degree}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
