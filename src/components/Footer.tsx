import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code,
  Heart,
  Monitor,
  Video,
  PenTool,
  Mail,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/momenul162",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "www.linkedin.com/in/md-momenul-islam-a84964292",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/momenul162",
      label: "Twitter",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/momenul.6076",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#" },
  ];

  const services = [
    {
      name: "Web Design",
      href: "#",
      icon: <Monitor className="h-4 w-4 mr-2" />,
    },
    {
      name: "Web Development",
      href: "#",
      icon: <Monitor className="h-4 w-4 mr-2" />,
    },
  ];

  return (
    <footer className="py-8 bg-secondary/80">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              Momenul's<span className="text-foreground">Portfolio</span>
            </a>
            <p className="text-muted-foreground mt-4">
              Specialized in creating modern, responsive web applications with cutting-edge
              technologies and best practices.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    {service.icon}
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>momenul.dev@gmail.com</li>
              <li>+88 01869284237</li>
              <li>Rajshahi, Bangladesh</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center flex-wrap gap-1">
            &copy; {year} Md Momenul Islam. Built with
            <Code className="h-4 w-4 mx-1" /> and
            <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" />
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
