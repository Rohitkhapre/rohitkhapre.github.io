import { Mail, Linkedin, Github, BookOpen, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "rkhapre111@gmail.com",
      href: "mailto:rkhapre111@gmail.com",
      color: "hover:text-primary hover:border-primary/50"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rohit-khapre",
      href: "https://linkedin.com/in/rohit-khapre",
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Rohitkhapre",
      href: "https://github.com/Rohitkhapre",
      color: "hover:text-foreground hover:border-foreground/50"
    },
    {
      icon: BookOpen,
      label: "Blog / Medium",
      value: "DevOps articles & tutorials",
      href: "https://medium.com/@khaprerohit47",
      color: "hover:text-secondary hover:border-secondary/50"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">// GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Open to DevOps opportunities, consulting, or just a chat about cloud infrastructure
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 border-gradient">
            {/* CTA Section */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Let's build <span className="text-secondary">reliable systems</span> together
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Whether you need to scale your infrastructure, automate deployments, or improve security — I'm here to help you build systems that just work.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:rkhapre111@gmail.com">
                  <Send className="w-5 h-5" />
                  Send me an email
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-sm">or connect via</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={`group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-muted/30 transition-all duration-300 ${link.color}`}
                >
                  <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="font-medium truncate">{link.value}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
