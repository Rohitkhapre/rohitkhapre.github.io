import { Github, ExternalLink, Cloud, Server, Shield, Layers, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
const Projects = () => {
  const projects = [
    {
      title: "P2P Lending Platform – 1Finance",
      description: "Production-grade P2P lending platform serving real users. Worked as DevOps Engineer responsible for cloud infrastructure, CI/CD, container orchestration, monitoring, and security automation.",
      icon: Cloud,
      color: "primary",
      features: [
        "Designed AWS VPC, ECS, ALB, Auto Scaling",
        "Built CI/CD pipelines using Jenkins & GitLab",
        "Dockerized services & managed ECS deployments",
        "Monitoring with Prometheus, Grafana, ELK",
        "Security scanning & Wazuh SIEM integration",
        "Managed backups, DR, and IAM policies"
      ],
      tech: ["AWS", "Docker", "Jenkins", "GitLab", "Prometheus", "Grafana"],
      liveUrl: "https://1financep2p.com",
      isPrivate: true
    },
    {
      title: "AWS Infrastructure Setup with Terraform",
      description: "Production-grade IaC-based AWS provisioning with comprehensive networking, compute, and storage resources.",
      icon: Cloud,
      color: "secondary",
      features: [
        "VPC with public/private subnets",
        "EC2, RDS, S3 provisioning",
        "Security groups & IAM automation",
        "Multi-environment support"
      ],
      tech: ["Terraform", "AWS", "Python"],
      github: "https://github.com/Rohitkhapre/AWS-Infrastructure-Setup-with-Terraform.git"
    },
    {
      title: "Multi-Node Kubernetes Cluster",
      description: "Enterprise-grade Kubernetes deployment with security hardening and auto-scaling capabilities.",
      icon: Server,
      color: "accent",
      features: [
        "AWS & Azure-based cluster setup",
        "RBAC & Network Policies",
        "TLS/SSL configuration",
        "Auto-scaling & workload optimization"
      ],
      tech: ["Kubernetes", "Helm", "AWS", "Azure"],
      github: "https://github.com/Rohitkhapre"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "End-to-end automated deployment pipeline with security scanning and rollback capabilities.",
      icon: Layers,
      color: "destructive",
      features: [
        "Jenkins & GitLab CI integration",
        "Container security scanning",
        "Blue-green deployments",
        "Automated rollback mechanisms"
      ],
      tech: ["Jenkins", "GitLab CI", "Docker", "Trivy"],
      github: "https://github.com/Rohitkhapre"
    },
    {
      title: "Security Monitoring Stack",
      description: "Comprehensive security and compliance automation with real-time threat detection.",
      icon: Shield,
      color: "primary",
      features: [
        "Wazuh SIEM integration",
        "Vulnerability scanning with Trivy",
        "Compliance automation",
        "Alert management & response"
      ],
      tech: ["Wazuh", "Prometheus", "Grafana", "ELK"],
      github: "https://github.com/Rohitkhapre"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/30",
        glow: "group-hover:shadow-primary/20"
      },
      secondary: {
        bg: "bg-secondary/10",
        text: "text-secondary",
        border: "border-secondary/30",
        glow: "group-hover:shadow-secondary/20"
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/30",
        glow: "group-hover:shadow-accent/20"
      },
      destructive: {
        bg: "bg-destructive/10",
        text: "text-destructive",
        border: "border-destructive/30",
        glow: "group-hover:shadow-destructive/20"
      }
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">// FEATURED WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Projects & <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world DevOps implementations that power production environments
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div
                key={project.title}
                className={`group relative rounded-2xl border border-border/50 bg-card p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${colorClasses.glow}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${colorClasses.bg}`}>
                    <project.icon className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                        aria-label="View Live"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    {project.isPrivate ? (
                      <div
                        className="p-2 rounded-lg bg-muted text-muted-foreground cursor-not-allowed"
                        title="Source Code: Private (Company-owned)"
                      >
                        <Lock className="w-5 h-5" />
                      </div>
                    ) : project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${colorClasses.text} bg-current`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-muted rounded-md border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Rohitkhapre" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
