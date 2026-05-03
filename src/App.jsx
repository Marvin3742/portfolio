import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import { profile } from './data.js';

export default function App() {
  return (
    <div className="page">
      <main className="container">
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
        <footer className="footer">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </div>
  );
}
