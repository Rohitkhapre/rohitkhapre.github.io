import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Cloud, Server, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating icons */}
      <div className="absolute top-1/3 left-[15%] animate-float opacity-20">
        <Cloud className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute top-1/2 right-[15%] animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Server className="w-12 h-12 text-secondary" />
      </div>
      <div className="absolute bottom-1/3 left-[20%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Shield className="w-14 h-14 text-accent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up opacity-0 stagger-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0 stagger-2">
            <span className="text-foreground">Rohit </span>
            <span className="text-primary text-glow">Khapre</span>
          </h1>

          {/* Role */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up opacity-0 stagger-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-xl md:text-2xl font-mono text-muted-foreground">DevOps Engineer</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0 stagger-4">
            Designing <span className="text-secondary">secure</span>, <span className="text-primary">scalable</span>, and <span className="text-accent">automated</span> cloud systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 stagger-5">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Tech stack preview */}
          <div className="mt-16 pt-8 border-t border-border/30 animate-fade-up opacity-0 stagger-6">
            <p className="text-sm text-muted-foreground mb-4">Expertise in</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              {['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins', 'Prometheus'].map((tech) => (
                <span key={tech} className="font-mono text-sm px-3 py-1 rounded-md bg-muted/50 border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
