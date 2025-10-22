import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import brickLogo from "@/assets/brick-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end" />
      
      {/* Hero Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <img src={brickLogo} alt="Bricks Logo" className="w-16 h-16 md:w-20 md:h-20" />
            <span className="text-4xl md:text-5xl font-bold text-primary-foreground">Bricks</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Facilities Intelligence for Mission-Driven Organizations
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Board-ready visibility into facilities spend and risk. Make defensible, 
            high-stakes CapEx/OpEx decisions with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg">
              Request a Demo
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-3xl font-bold text-stat-highlight mb-2">30 Days</div>
              <div className="text-primary-foreground/80">Full Implementation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stat-highlight mb-2">$3M+</div>
              <div className="text-primary-foreground/80">Annual Facilities Spend</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stat-highlight mb-2">500k+</div>
              <div className="text-primary-foreground/80">Sq Ft Under Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
