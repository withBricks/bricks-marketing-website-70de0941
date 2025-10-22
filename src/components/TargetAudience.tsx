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

      </div>
    </section>
  );
};

export default TargetAudience;
