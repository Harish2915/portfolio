import { useState } from "react";
import Welcome from "./components/Welcome";

import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import BackgroundBlobs from './components/BackgroundBlobs';
import Hero from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

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
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
