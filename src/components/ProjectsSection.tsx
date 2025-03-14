import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Code, Monitor } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  featured: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard. Built with modern React patterns and best practices for performance.",
      image: "https://i.ibb.co.com/2Y63gPX4/screencapture-localhost-5173-2025-03-14-15-19-26.png",
      tags: [
        "TypeScript",
        "React js",
        "Express js",
        "MongoDB",
        "Shadcn UI",
        "Redux",
        "JOD",
        "YUP",
        "JWT",
        "Tailwind",
      ],
      githubLink: "#",
      liveLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Adda (Social media)",
      description:
        "A full-stack social media platform with a responsive UI. Users can post, edit, delete content and update their profiles. Friend system: Send, accept, reject, and cancel requests. Engage with posts through likes, dislikes, and comments on posts.",
      image:
        "https://i.ibb.co.com/84XfQWdy/screencapture-localhost-5173-profile-6798786f86afcc6648f01449-2025-02-20-01-43-06.png",
      tags: [
        "TypeScript",
        "React js",
        "Express js",
        "MongoDB",
        "Shadcn UI",
        "Redux",
        "JOD",
        "YUP",
        "JWT",
        "Tailwind",
      ],
      githubLink: "https://github.com/momenul162/Adda-app-client",
      liveLink: "https://adda-with.netlify.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Nexus Coffee House",
      description:
        "This is a full stack web app. Uses a custom authentication system for registration. Supports two user roles: Admin and User. Admin (manage products, users, orders) & User (browse, add to cart). Users can securely purchase products using Stripe",
      image: "https://i.ibb.co.com/VWRgx9Db/screencapture-localhost-5173-2024-12-22-01-42-46.png",
      tags: ["Javascript", "React", "Express js", "MongoDB", "Material UI", "Easy-peasy", "JWT"],
      githubLink: "https://github.com/momenul162/Nexus-coffee-house-client",
      liveLink: "https://nexus-coffee-house.netlify.app/",
      featured: false,
    },
    {
      id: 4,
      title: "Next Tour",
      description:
        "A travel agency app showcasing available package with detailed destination information. Users can view, explore, and book trips directly. An interactive map, enabling users to explore various travel destination easily",
      image:
        "https://i.ibb.co.com/j94Xjw9T/screencapture-next-tour-swart-vercel-app-2025-03-14-21-47-41.png",
      tags: ["Javascript", "Next js", "Material UI"],
      githubLink: "https://github.com/momenul162/Next-Tour",
      liveLink: "https://next-tour-swart.vercel.app/",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-3">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my web development projects demonstrating my skills in frontend and
            backend technologies.
          </p>
        </div>

        {/* Featured Projects Showcase */}
        <div className="mb-20 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <Monitor className="inline-block mr-2 mb-1" />
            Featured Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-2 border-indigo-400 project-card"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover border-2 border-b-primary rounded-lg  transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-md">
                    Featured
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* <Tabs defaultValue="all" className="animate-on-scroll">
          <div className="flex justify-center mb-12">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category} 
                  className="capitalize"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={selectedCategory} className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border border-border/50 project-card">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
