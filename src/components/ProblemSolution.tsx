import { AlertCircle, TrendingDown, Shield, Users } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Financial Waste",
      description: "Poor investment decisions lead to millions in unnecessary spending",
    },
    {
      icon: AlertCircle,
      title: "Operational Disruption",
      description: "Unplanned failures cause costly downtime and service interruptions",
    },
    {
      icon: Shield,
      title: "Reputation Risk",
      description: "Facility failures directly impact customer experience and satisfaction",
    },
    {
      icon: Users,
      title: "Credibility Loss",
      description: "Lack of defensible data undermines trust with boards and stakeholders",
    },
  ];

  return (
    <section className="py-24 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The High Cost of Poor Facilities Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CFOs and COOs lack defensible, timely, and credible information for 
            high-stakes facilities decisions with 6-7 figure impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
