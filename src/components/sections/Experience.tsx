import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Zeidler Group",
      role: "DevOps Engineer",
      period: "Aug 2025 – Present",
      location: "Remote",
      current: true,
      link: "https://zeidler.group/",
      achievements: [
        "Terraform-based AWS infrastructure provisioning for multi-environment setups",
        "GitLab CI/CD pipelines for infrastructure and application deployments",
        "ECS container orchestration with auto-scaling and blue-green deployments",
        "Security automation with Wazuh for threat detection and compliance"
      ]
    },
    {
      company: "Atrina Technologies",
      role: "DevOps Engineer",
      period: "May 2023 – Aug 2025",
      location: "Mumbai, On-site",
      current: false,
      link: "https://atriina.com/",
      achievements: [
        "Designed highly available cloud architecture on AWS for fintech applications",
        "Built and maintained Jenkins & GitLab CI/CD pipelines for 20+ microservices",
        "Implemented Docker & ECS deployments with container security best practices",
        "Set up comprehensive monitoring using Prometheus, Grafana, and ELK Stack",
        "Automated cloud security and compliance checks for financial regulations"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">// CAREER PATH</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary-sm z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass rounded-2xl p-6 md:p-8 border-gradient group hover:scale-[1.02] transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground font-medium">{exp.company}</span>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
