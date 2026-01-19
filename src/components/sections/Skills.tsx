import { 
  Cloud, 
  Container, 
  GitBranch, 
  Shield, 
  Terminal, 
  Activity,
  Database,
  Layers
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Terminal,
      color: "from-primary/20 to-primary/5",
      borderColor: "hover:border-primary/50",
      iconColor: "text-primary",
      skills: ["Python", "Bash", "YAML", "HCL"]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "from-primary/20 to-primary/5",
      borderColor: "hover:border-primary/50",
      iconColor: "text-primary",
      skills: ["AWS (EC2, ECS, VPC, IAM, S3)", "Azure (AKS, Monitor, RBAC)", "GCP"]
    },
    {
      title: "Containers & Orchestration",
      icon: Container,
      color: "from-secondary/20 to-secondary/5",
      borderColor: "hover:border-secondary/50",
      iconColor: "text-secondary",
      skills: ["Docker", "Kubernetes", "ECS", "Helm"]
    },
    {
      title: "Infrastructure as Code",
      icon: Layers,
      color: "from-secondary/20 to-secondary/5",
      borderColor: "hover:border-secondary/50",
      iconColor: "text-secondary",
      skills: ["Terraform", "Ansible", "CloudFormation"]
    },
    {
      title: "CI/CD & Automation",
      icon: GitBranch,
      color: "from-accent/20 to-accent/5",
      borderColor: "hover:border-accent/50",
      iconColor: "text-accent",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"]
    },
    {
      title: "Monitoring & Observability",
      icon: Activity,
      color: "from-accent/20 to-accent/5",
      borderColor: "hover:border-accent/50",
      iconColor: "text-accent",
      skills: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "from-destructive/20 to-destructive/5",
      borderColor: "hover:border-destructive/50",
      iconColor: "text-destructive",
      skills: ["Wazuh", "Trivy", "SonarQube", "OWASP"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-primary/20 to-primary/5",
      borderColor: "hover:border-primary/50",
      iconColor: "text-primary",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">// TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building and maintaining modern cloud infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${category.borderColor}`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-muted ${category.iconColor}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${category.iconColor} bg-current`} />
                      <span className="font-mono">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
