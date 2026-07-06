import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <>
      <Hero onDemoClick={() => window.dispatchEvent(new CustomEvent("openModal"))} />
      <ProblemSection />
      <CTASection />
    </>
  );
};

export default Home;
