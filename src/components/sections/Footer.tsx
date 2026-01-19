import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Rohitkhapre",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rohit-khapre",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:rkhapre111@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">RK</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">DevOps Engineer</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© 2026 Rohit Khapre</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">
              DevOps guy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
