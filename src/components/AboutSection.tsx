import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Layout, Server, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const services = [
    {
      title: "Web Development",
      icon: <Code className="h-8 w-8 text-primary" />,
      description:
        "Building responsive and performant web applications using modern frameworks and best practices.",
    },
    {
      title: "UI/UX Design",
      icon: <Layout className="h-8 w-8 text-primary" />,
      description:
        "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      description:
        "Developing robust and scalable server-side solutions and APIs for seamless data management.",
    },
    {
      title: "Consultation",
      icon: <Users className="h-8 w-8 text-primary" />,
      description:
        "Providing expert advice on tech solutions, architecture, and implementation strategies.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-3">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            I'm a developer passionate about{" "}
            <span className="gradient-text">building exceptional</span> digital experiences
          </h2>
          <p className="text-muted-foreground text-lg">
            With over 3 years of experience in the field, I specialize in creating beautiful,
            functional, and user-friendly websites and applications that meet business objectives
            and exceed user expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all"
            >
              <CardContent className="pt-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <a href="/#contact">
                  <Button variant="outline" className="w-full mt-2">
                    Book Service
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
