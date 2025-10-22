import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Stop Wasting Money on Facilities?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join mission-driven organizations that have transformed their facilities 
            decision-making with continuous, board-ready visibility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg">
              <Calendar className="mr-2" />
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Learn More
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-3">30 Days</div>
              <div className="text-muted-foreground">
                From contract to full implementation
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-3">Board-Ready</div>
              <div className="text-muted-foreground">
                Defensible data for high-stakes decisions
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-3">Continuous</div>
              <div className="text-muted-foreground">
                Real-time visibility, not quarterly reports
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
