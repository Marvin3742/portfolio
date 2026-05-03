import { profile } from '../data.js';

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-photo-wrap">
        <img
          className="hero-photo"
          src={profile.image}
          alt={profile.name}
          width="520"
          height="600"
        />
      </div>
      <div className="hero-text">
        <p className="eyebrow">Machine Learning · Data Science</p>
        <h1>{profile.name}</h1>
        <p className="lede">{profile.tagline}</p>
        <p className="status">{profile.status}</p>
        <div className="cta">
          <a href="#projects" className="btn primary">See projects</a>
          <a href={profile.medium} className="btn" target="_blank" rel="noreferrer">
            Medium →
          </a>
          <a href={profile.resume} className="btn ghost" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
