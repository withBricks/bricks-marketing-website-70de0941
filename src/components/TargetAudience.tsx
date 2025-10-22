import { Building2, Heart, GraduationCap, Users } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Heart,
      title: "Senior Living",
      description: "Facilities where resident experience and safety are paramount",
    },
    {
      icon: Building2,
      title: "Healthcare",
      description: "Mission-critical facilities that cannot afford downtime",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Campus facilities supporting learning and community",
    },
    {
      icon: Users,
      title: "Nonprofits",
      description: "Organizations maximizing impact with every dollar",
    },
  ];

  return (
    <section className="py-24 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for Facility-Dependent Organizations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Serving CFOs and COOs of growth-minded organizations where facilities 
            are central to customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Ideal Customer Profile
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-accent">$3M+</span>
                <span className="text-muted-foreground">Annual facilities OpEx/CapEx</span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-accent">500k+</span>
                <span className="text-muted-foreground">Square feet under management</span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-accent">10+</span>
                <span className="text-muted-foreground">On-staff technicians</span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-accent">✓</span>
                <span className="text-muted-foreground">Board oversight of facilities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
