import { useEffect, useRef, useState } from 'react';
import { TILE_IMAGES } from '../data/cardImages';
import '../style/Home.css';

const TILE_CONFIG = TILE_IMAGES.map((image, index) => ({
  id: index + 1,
  className: 'tile tile-project',
  experienceIndex: index,
  image,
}));

const WRITING_ITEMS = [
  'How Apple beat Swiss watchmakers at their own game',
  'My chatbot is dead',
  'The rise of Anti-notifications',
];

const SPEAKING_ITEMS = [
  {
    id: 1,
    title: 'Frontend Development',
    subtitle: 'React, Vite, responsive UI',
    icon: 'speak-icon-chat',
  },
  {
    id: 2,
    title: 'Business Websites',
    subtitle: 'Landing pages, portfolios, service sites',
    icon: 'speak-icon-eye',
  },
  {
    id: 3,
    title: 'Ecommerce Interfaces',
    subtitle: 'Catalogs, product cards, checkout flows',
    icon: 'speak-icon-cube',
  },
  {
    id: 4,
    title: 'Admin Dashboards',
    subtitle: 'Tables, filters, metrics, workflows',
    icon: 'speak-icon-dots',
  },
  {
    id: 5,
    title: 'Performance & UX',
    subtitle: 'Fast loading, clean structure, usability',
    icon: 'speak-icon-w',
  },
];

export default function Main({ experiences = [], onExperienceIntent }) {
  const cursorRef = useRef(null);
  const tilesRef = useRef(null);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    mergeZone: null,
  });
  const frameRef = useRef(null);
  const [tilesReady, setTilesReady] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) {
      return undefined;
    }

    const updateCursor = () => {
      const cursor = cursorRef.current;
      const { x, y, mergeZone } = pointerRef.current;

      if (!cursor) {
        frameRef.current = null;
        return;
      }

      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      cursor.classList.add('is-visible');
      cursor.classList.toggle('is-merged', Boolean(mergeZone));

      if (mergeZone && !mergeZone.classList.contains('workgrid_item')) {
        const bounds = mergeZone.getBoundingClientRect();
        mergeZone.style.setProperty('--mx', `${x - bounds.left}px`);
        mergeZone.style.setProperty('--my', `${y - bounds.top}px`);
      }

      frameRef.current = null;
    };

    const requestCursorUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateCursor);
      }
    };

    const handleMouseMove = (event) => {
      const target = event.target instanceof Element ? event.target : null;

      pointerRef.current = {
        x: event.clientX,
        y: event.clientY,
        mergeZone: target?.closest('.cursor-merge-zone') ?? null,
      };

      requestCursorUpdate();
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove('is-visible', 'is-merged');
    };

    const listenerOptions = { passive: true };

    window.addEventListener('mousemove', handleMouseMove, listenerOptions);
    window.addEventListener('mouseout', handleMouseLeave, listenerOptions);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove, listenerOptions);
      window.removeEventListener('mouseout', handleMouseLeave, listenerOptions);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const tilesElement = tilesRef.current;
    if (!tilesElement || tilesReady) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setTilesReady(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTilesReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: '360px 0px' },
    );

    observer.observe(tilesElement);
    return () => observer.disconnect();
  }, [tilesReady]);

  useEffect(() => {
    if (!isContactOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsContactOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isContactOpen]);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const body = `Nombre: ${name}\n\nMensaje:\n${message}`;

    window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsContactOpen(false);
  };

  const tiles = TILE_CONFIG;

  return (
    <main className="home">
      <div
        ref={cursorRef}
        className="custom-cursor"
        aria-hidden="true"
      />
      <section className="hero" aria-label="Presentacion principal">
        <h1 className="hero-title">
          <span>hi.</span>
          <span>i&apos;m</span>
          <span>linda.</span>
        </h1>
        <p className="hero-description">
          I&apos;m a designer focused on interfaces, motion and digital products.
          I create emotional experiences at the intersection of design and AI.
        </p>
        <button
          className="hero-button cursor-merge-zone"
          type="button"
          onClick={() => setIsContactOpen(true)}
        >
          <span className="hero-button-text">→say hi</span>
        </button>
      </section>

      {isContactOpen ? (
        <div className="contact-modal" role="presentation">
          <button
            className="contact-modal-backdrop"
            type="button"
            aria-label="Cerrar formulario"
            onClick={() => setIsContactOpen(false)}
          />
          <section
            className="contact-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
          >
            <div className="contact-dialog-header">
              <div>
                <p className="contact-kicker">Enviar mensaje</p>
                <h2 id="contact-title">Cuéntame sobre tu proyecto</h2>
              </div>
              <button
                className="contact-close cursor-merge-zone"
                type="button"
                aria-label="Cerrar formulario"
                onClick={() => setIsContactOpen(false)}
              >
                ×
              </button>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                <span>Nombre</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>Asunto</span>
                <input name="subject" type="text" required />
              </label>
              <label>
                <span>Mensaje</span>
                <textarea name="message" rows="5" required />
              </label>
              <button className="contact-submit cursor-merge-zone" type="submit">
                enviar mensaje
              </button>
            </form>
          </section>
        </div>
      ) : null}

      <section ref={tilesRef} className="tiles workgrid projects-grid" aria-label="Proyectos del portafolio">
        {tiles.map((tile) => {
          const experience = experiences[tile.experienceIndex];
          const label = experience?.title ?? 'Experience';
          const href = experience ? `/experience/${experience.slug}` : '/';
          const tileStyle = tilesReady ? { '--tile-image': `url("${tile.image}")` } : undefined;

          return (
            <article
              key={tile.id}
              className={`${tile.className} workgrid_item workgrid_item-${tile.id} cursor-merge-zone`}
              style={tileStyle}
            >
              <div className="tile-flip">
                <div className="tile-face tile-front">
                  <a
                    className="workgrid_item_container"
                    href={href}
                    aria-label={label}
                    onFocus={onExperienceIntent}
                    onPointerEnter={onExperienceIntent}
                  >
                    <div className="workgrid_item_title">{label}</div>
                    <div className="workgrid_item_content" />
                  </a>
                </div>
                <div className="tile-face tile-back">
                  <span className="tile-title">{label}</span>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="build-section" aria-label="Seccion Build">
        <h2 className="build-title">Build</h2>
        <p className="build-description">
          Building is an essential part of my process. These are some of my
          latest projects and explorations.
        </p>
        <div className="build-cards">
          <article className="build-item">
            <div className="build-card build-card-one cursor-merge-zone" aria-label="Card build 1">
              <div className="card-icon icon-v" aria-hidden="true" />
            </div>
            <p className="build-item-title">{WRITING_ITEMS[0]}</p>
          </article>
          <article className="build-item">
            <div className="build-card build-card-two cursor-merge-zone" aria-label="Card build 2">
              <div className="card-icon icon-squares" aria-hidden="true" />
            </div>
            <p className="build-item-title">{WRITING_ITEMS[1]}</p>
          </article>
          <article className="build-item">
            <div className="build-card build-card-three cursor-merge-zone" aria-label="Card build 3">
              <div className="card-icon icon-dot" aria-hidden="true" />
            </div>
            <p className="build-item-title">{WRITING_ITEMS[2]}</p>
          </article>
        </div>
      </section>

      <section className="simple-section" aria-label="Web development section">
        <div className="play-layout">
          <div className="play-copy">
            <h2>Web Dev</h2>
            <p>
              I build responsive web experiences with clean interfaces, reusable
              components, and a strong focus on performance and usability.
            </p>
            <a className="section-link cursor-merge-zone" href="#0">
              → view work
            </a>
          </div>
          <div className="play-image-wrap">
            <img
              src="/assets/play-hand.png"
              alt="Play visual"
              className="play-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="simple-section speak-section" aria-label="Development skills section">
        <h2>Code</h2>
        <p>
          I turn business ideas into polished web interfaces, combining frontend
          development, responsive layouts, reusable components, and clear user flows.
        </p>
        <div className="speak-grid">
          {SPEAKING_ITEMS.map((item) => (
            <article key={item.id} className="speak-item cursor-merge-zone">
              <div className={`speak-icon ${item.icon}`} aria-hidden="true" />
              <div className="speak-item-text">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-links">
          <a className="cursor-merge-zone" href="#0">twitter</a>
          <a className="cursor-merge-zone" href="#0">linkedin</a>
        </div>
      </footer>
    </main>
  );
}
