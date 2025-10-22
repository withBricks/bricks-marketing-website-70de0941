import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ValuePillars from "@/components/ValuePillars";
import TargetAudience from "@/components/TargetAudience";
import Differentiators from "@/components/Differentiators";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <ValuePillars />
      <TargetAudience />
      <Differentiators />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
