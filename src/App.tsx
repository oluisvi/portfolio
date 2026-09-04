import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProcessSection from "./components/ProcessSection";
import ProjectsSection from "./components/ProjectsSection";
import StackSection from "./components/StackSection";

const App = () => (
  <>
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <Header />
    <main id="main-content">
      <HeroSection />
      <ProjectsSection />
      <ProcessSection />
      <StackSection />
      <AboutSection />
      <ContactSection />
    </main>
  </>
);

export default App;
