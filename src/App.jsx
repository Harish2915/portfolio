import { useState, lazy, Suspense } from "react";
import Welcome from "./components/Welcome";

import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import BackgroundBlobs from './components/BackgroundBlobs';
import Hero from './sections/Home';

const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Education = lazy(() => import('./sections/Education'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {

  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <Welcome onFinish={() => setShowWelcome(false)} />;
  }

  return (
    <div className="min-h-screen bg-bg text-text relative">
      <ScrollProgress />
      <CursorGlow />
      <BackgroundBlobs />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="min-h-[100vh]" />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
