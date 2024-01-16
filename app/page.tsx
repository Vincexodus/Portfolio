import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import IntroSection from "./components/IntroSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {

  return (
    <main>
      <IntroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
