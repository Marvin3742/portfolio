import { profile } from '../data.js';

export default function Contact() {
  return (
    <section className="block" aria-label="Contact">
      <h2 className="section-label">More From Me</h2>
      <ul className="contact">
        <li><a href={profile.medium} target="_blank" rel="noreferrer">Medium</a></li>
        <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href={`mailto:${profile.email}`}>Email</a></li>
      </ul>
    </section>
  );
}
