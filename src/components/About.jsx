import { about } from '../data.js';

export default function About() {
  return (
    <section className="block" aria-label="About">
      <h2 className="section-label">About</h2>
      <p className="prose">{about}</p>
    </section>
  );
}
