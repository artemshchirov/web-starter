import { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const App: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
