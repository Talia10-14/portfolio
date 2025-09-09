import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/services.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills';
import Education from './components/Education.tsx'; 
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;