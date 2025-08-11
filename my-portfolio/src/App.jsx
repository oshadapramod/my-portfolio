// src/App.jsx
// Performance optimizations (no visual changes):
// 1. Lazy load all below-the-fold sections to shrink initial JS payload.
// 2. Removed duplicate scroll listener (Navbar already manages its own scroll state).
// 3. Keep Hero eagerly loaded for faster LCP.
import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

// Lazy loaded (code-split) sections
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Certifications = lazy(() => import('./components/certifications'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  // Idle prefetch: after initial paint, warm up lazy component chunks so scroll feels instant.
  useEffect(() => {
    const prefetchLazy = () => {
      import('./components/Services');
      import('./components/About');
      import('./components/certifications');
      import('./components/Portfolio');
      import('./components/Contact');
      import('./components/Footer');
    };
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(prefetchLazy, { timeout: 2500 });
      } else {
        setTimeout(prefetchLazy, 1800);
      }
    }
  }, []);
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        {/* Suspense boundary batches below-the-fold content; minimal fallback to avoid layout shift */}
        <Suspense fallback={null}>
          <Services />
          <About />
          <Certifications />
          <Portfolio />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;