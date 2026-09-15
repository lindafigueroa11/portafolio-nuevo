import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import Main from './components/Main';
import Loader from './components/Loader';
import { EXPERIENCE_SUMMARIES } from './data/experienceSummaries';
import './App.css';

const ExperienceRoute = lazy(() => import('./components/ExperienceRoute'));
const preloadExperienceRoute = () => import('./components/ExperienceRoute');

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const clickHandler = (event) => {
      const link = event.target.closest('a[href^="/"]');
      if (!link || link.target === '_blank' || event.metaKey || event.ctrlKey) {
        return;
      }

      const nextPath = link.getAttribute('href');
      if (!nextPath) {
        return;
      }

      event.preventDefault();
      if (nextPath === path) {
        return;
      }

      window.history.pushState({}, '', nextPath);
      setPath(nextPath);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [path]);

  const selectedSlug = useMemo(() => {
    const match = path.match(/^\/experience\/([^/]+)$/);
    return match?.[1] ?? null;
  }, [path]);

  return (
    <div className='container'>
      {selectedSlug ? (
        <Suspense fallback={<Loader />}>
          <ExperienceRoute slug={selectedSlug} />
        </Suspense>
      ) : (
        <Main
          experiences={EXPERIENCE_SUMMARIES}
          onExperienceIntent={preloadExperienceRoute}
        />
      )}
    </div>
  );
}
export default App;
