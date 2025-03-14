import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "NoSQL", level: 70 },
    { name: "Tailwind CSS", level: 95 },
  ];

  const softSkills = [
    "Project Management",
    "Adaptability",
    "Attention to Detail",
    "Communication",
    "Problem Solving",
    "Team Collaboration",
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-3">
            My Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="gradient-text">Technical</span> Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            I've worked with a variety of technologies and frameworks to deliver high-quality
            solutions for web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-on-scroll">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-secondary p-4 rounded-lg border border-border/50 flex items-center justify-center text-center"
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
