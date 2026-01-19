import { Star, Trophy, Award } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: Star,
      title: "Star of the Month",
      date: "March 2024",
      description: "Recognized for exceptional performance and contribution to DevOps excellence",
      color: "text-accent"
    },
    {
      icon: Star,
      title: "Star of the Month",
      date: "November 2023",
      description: "Outstanding achievement in infrastructure automation and reliability",
      color: "text-accent"
    },
    {
      icon: Trophy,
      title: "Best Customer Service Award",
      date: "2024",
      description: "Excellence in client communication and delivering solutions that exceed expectations",
      color: "text-primary"
    }
  ];

  return (
    <section id="awards" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">// RECOGNITION</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Awards & <span className="text-accent">Achievements</span>
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={`${award.title}-${award.date}`}
              className="group relative rounded-2xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:scale-105 hover:border-accent/30"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-4 ${award.color} group-hover:scale-110 transition-transform`}>
                  <award.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-1">{award.title}</h3>
                <p className="text-sm font-mono text-primary mb-3">{award.date}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
