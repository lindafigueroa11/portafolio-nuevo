import ExperiencePage from './ExperiencePage';
import { EXPERIENCES, EXPERIENCE_BY_SLUG } from '../data/experiences';

export default function ExperienceRoute({ slug }) {
  const experience = EXPERIENCE_BY_SLUG[slug];

  if (!experience) {
    return (
      <main className="experience-page">
        <section className="experience-hero">
          <div className="experience-topbar">
            <a href="/" className="experience-author">linda g.</a>
          </div>
          <h1>Project not found</h1>
          <p className="experience-intro">
            This project is not available in the portfolio right now.
          </p>
        </section>
      </main>
    );
  }

  return <ExperiencePage experience={experience} experiences={EXPERIENCES} />;
}
