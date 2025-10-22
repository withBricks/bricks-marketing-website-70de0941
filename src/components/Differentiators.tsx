import { Zap, LineChart, DollarSign, Rocket, BarChart3, Link } from "lucide-react";

const Differentiators = () => {
  const features = [
    {
      icon: LineChart,
      title: "Predictive Facility Analytics",
      description: "Manufacturing-grade technology applied to facility maintenance",
    },
    {
      icon: BarChart3,
      title: "Real-Time Benchmarking",
      description: "Peer data to inform better decision-making",
    },
    {
      icon: DollarSign,
      title: "Financial Impact Link",
      description: "Direct connection between operations and financial outcomes",
    },
    {
      icon: Rocket,
      title: "30-Day Implementation",
      description: "Full deployment in one month, not quarters",
    },
    {
      icon: Zap,
      title: "CFO-Grade Modeling",
      description: "Board-ready investment cases with defensible data",
    },
    {
      icon: Link,
      title: "Seamless Integration",
      description: "Works with your existing accounting and maintenance software",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Bricks?
          </h2>
          <p className="text-2xl text-accent font-semibold mb-4">
            Effortless • Fast • Defensible • Continuous
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The power of EAM & ERP, purpose-built for small to mid-sized organizations. 
            Strategic planning meets operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border-2 border-border hover:border-accent/50 transition-colors"
            >
              <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Beyond CMMS, ERP, Consultants, and Excel
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Get continuous, board-ready visibility that transforms how you make 
            facilities decisions. No more guesswork, no more spreadsheets, no more surprises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
