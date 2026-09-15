import { useState, useEffect } from 'react';
import '../style/Header.css';

export default function Header({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (e, section) => {
    e.preventDefault();
    onNavigate?.(section);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <img src="/assets/NF.webp" className="logo" alt="logo" />
      <nav aria-label="Main sections">
        <ol className="row-list">
          <li>
            <a
              href="#about-content"
              className="link-page"
              onClick={(e) => go(e, 'about')}
            >
              <span className="li-span">01. </span>About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="link-page"
              onClick={(e) => go(e, 'projects')}
            >
              <span className="li-span">02. </span>Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="link-page"
              onClick={(e) => go(e, 'contact')}
            >
              <span className="li-span">03. </span>Contact
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
}
