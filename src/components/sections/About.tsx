import { Terminal, Cloud, Lock, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Cloud, label: "Cloud Native", color: "text-primary" },
    { icon: Lock, label: "Security First", color: "text-secondary" },
    { icon: Terminal, label: "IaC Expert", color: "text-accent" },
    { icon: Zap, label: "Automation", color: "text-primary" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-sm tracking-wider">// ABOUT ME</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Building the <span className="text-primary">Infrastructure</span> of Tomorrow
            </h2>
          </div>

          {/* Main content */}
          <div className="glass rounded-2xl p-8 md:p-12 border-gradient">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              DevOps Engineer with <span className="text-foreground font-semibold">2+ years of experience</span> building and managing secure, scalable cloud infrastructure across{" "}
              <span className="text-primary">AWS</span>, <span className="text-primary">Azure</span>, and <span className="text-primary">GCP</span>.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              Strong expertise in <span className="text-secondary">Infrastructure as Code</span>, <span className="text-secondary">CI/CD pipelines</span>, <span className="text-secondary">container orchestration</span>, <span className="text-accent">monitoring</span>, and <span className="text-accent">security automation</span> for production environments.
            </p>

            {/* Highlight badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className={`p-2 rounded-lg bg-muted ${color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
