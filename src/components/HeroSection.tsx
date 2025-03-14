import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Full Stack Developer
              </span>
            </div>
            <h2 className="sr-only">Full Stack Developer | Portfolio of Md Momenul Islam</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Md Momenul Islam</span>
              <br />I build things for the web
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              I'm a passionate full-stack developer specializing in creating exceptional digital
              experiences that are fast, accessible, and visually appealing.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/#projects">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Link
                to={
                  "https://drive.google.com/file/d/1Q5VwSqZjAHy3DgrLyEIjFtU5yZNNN_0P/view?usp=drive_link"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-accent/60 rounded-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Developer workspace"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl filter grayscale-[30%] mix-blend-overlay"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
