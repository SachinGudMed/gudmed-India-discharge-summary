import { useState, useEffect } from "react";
import ComplianceSection from "./components/ComplianceSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IntegrationSection from "./components/IntegrationSection";
import OutputSection from "./components/OutputSection";
import ProblemSection from "./components/ProblemSection";
import RequestDemoModal from "./components/RequestDemoModal";
import ROISection from "./components/ROISection";
import StepsSection from "./components/StepsSection";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <RequestDemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Hero />
      <ProblemSection />
      <StepsSection/>
      <OutputSection/>
      <ComplianceSection />
      <ROISection />
      <IntegrationSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;