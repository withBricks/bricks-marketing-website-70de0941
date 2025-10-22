import { DollarSign, Wrench, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const ValuePillars = () => {
  const pillars = [
    {
      icon: DollarSign,
      title: "Stop Wasting Money",
      benefits: [
        "Avoid premature replacements",
        "Eliminate overspend",
        "Optimize CapEx/OpEx allocation",
      ],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Wrench,
      title: "Reduce Downtime",
      benefits: [
        "Fewer unplanned failures",
        "Fewer costly emergencies",
        "Improved operational continuity",
      ],
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: TrendingUp,
      title: "Make Smarter Investments",
      benefits: [
        "Defensible repair/replace/defer choices",
        "Board-ready investment cases",
        "CFO-grade financial modeling",
      ],
      gradient: "from-stat-highlight/20 to-stat-highlight/5",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Three Ways Bricks Delivers Value
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous, board-ready visibility through streamlined facility operations 
            software paired with actionable strategic planning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className={`p-8 bg-gradient-to-br ${pillar.gradient} border-2 hover:shadow-xl transition-all`}
            >
              <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
