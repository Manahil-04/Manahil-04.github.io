import { Preloader } from './components/ui/Preloader';
import { Cursor } from './components/cursor/Cursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Research } from './components/sections/Research';
import { Education } from './components/sections/Education';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Research />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
