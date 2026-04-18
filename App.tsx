import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BusinessImpactSection from "./components/BusinessImpactSection";
import MetricsDashboard from "./components/MetricsDashboard";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'solution', 'impact', 'metrics'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BusinessImpactSection />
        <MetricsDashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;