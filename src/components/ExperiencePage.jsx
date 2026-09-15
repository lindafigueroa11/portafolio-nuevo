import '../style/ExperiencePage.css';

const DETAIL_SECTION_TITLES = new Set(['Key Features', 'Tech Stack', 'Role']);
const DEFAULT_DESCRIPTION =
  'Este caso concentra decisiones de estructura, tipografia y componentes para lograr una experiencia coherente y legible en cada estado de uso.';

function getNeighbor(experiences, index, delta) {
  const nextIndex = (index + delta + experiences.length) % experiences.length;
  return experiences[nextIndex];
}

function parseExperienceDescription(description) {
  if (!description) {
    return {
      overview: [DEFAULT_DESCRIPTION],
      sections: [],
    };
  }

  const lines = description
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const overview = [];
  const sections = [];
  let currentSection = null;

  lines.forEach((line) => {
    if (DETAIL_SECTION_TITLES.has(line)) {
      currentSection = {
        title: line,
        items: [],
      };
      sections.push(currentSection);
      return;
    }

    if (currentSection) {
      currentSection.items.push(line);
      return;
    }

    overview.push(line);
  });

  return {
    overview,
    sections,
  };
}

function formatDetailItem(item) {
  const separatorIndex = item.indexOf(':');

  if (separatorIndex <= 0 || separatorIndex > 28) {
    return item;
  }

  return (
    <>
      <strong>{item.slice(0, separatorIndex)}:</strong>
      {item.slice(separatorIndex + 1)}
    </>
  );
}

export default function ExperiencePage({ experience, experiences }) {
  const currentIndex = experiences.findIndex((item) => item.slug === experience.slug);
  const prev = getNeighbor(experiences, currentIndex, -1);
  const next = getNeighbor(experiences, currentIndex, 1);
  const { overview, sections } = parseExperienceDescription(experience.description);

  return (
    <main className="experience-page">
      <section className="experience-hero">
        <div className="experience-topbar">
          <a href="/" className="experience-author">linda g.</a>
          <div className="experience-nav">
            <a href={`/experience/${prev.slug}`}>← prev</a>
            <a href={`/experience/${next.slug}`}>next →</a>
          </div>
        </div>

        <h1>{experience.title}</h1>
        <p className="experience-intro">{experience.intro}</p>
      </section>

      <section className="experience-grid" aria-label="Galeria del proyecto">
        <article className="exp-card exp-card-lg">
          {experience.image ? (
            <img
              src={experience.image}
              alt={`${experience.title} preview`}
              decoding="async"
            />
          ) : null}
        </article>
        <article className="exp-card" />
        <article className="exp-card" />
        <article className="exp-card exp-card-wide" />
        <article className="exp-card" />
        <article className="exp-card exp-card-tall" />
        <article className="exp-card" />
      </section>

      <section className="experience-copy">
        <h2>{experience.tag}</h2>
        <div className="experience-overview">
          {overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {sections.length > 0 ? (
          <div className="experience-detail-grid">
            {sections.map((section) => (
              <article className="experience-detail-card" key={section.title}>
                <h3>{section.title}</h3>
                {section.title === 'Role' ? (
                  section.items.map((item) => <p key={item}>{item}</p>)
                ) : (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{formatDetailItem(item)}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <footer className="experience-footer">
        <a href="/">⌂ home</a>
        <div className="experience-footer-links">
          <a href="#0">twitter</a>
          <a href="#0">linkedin</a>
        </div>
      </footer>
    </main>
  );
}
