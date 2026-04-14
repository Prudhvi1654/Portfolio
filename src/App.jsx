import { useScrollReveal } from "./useScrollReveal";
import Navigation from "./components/Navigation";
import ResumeButton from "./components/resumebutton";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useScrollReveal();

  return (
    <>
      <div className="bg-dots" aria-hidden="true">
        <span className="bg-dot s1"></span>
        <span className="bg-dot s2"></span>
        <span className="bg-dot s3"></span>
        <span className="bg-dot s4"></span>
        <span className="bg-dot s5"></span>
        <span className="bg-dot s6"></span>
        <span className="bg-dot s7"></span>
        <span className="bg-dot s8"></span>
        <span className="bg-dot s9"></span>
        <span className="bg-dot s10"></span>
      </div>
      <Navigation />
      <ResumeButton />
      <Header id="header" />
      <About id="about" />
      <Skills />
      <Projects />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;