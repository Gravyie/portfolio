
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cog, Wind, Palette } from "lucide-react"; // Example icons

const skills = [
  { name: "Java", icon: <Code className="h-5 w-5" /> },
  { name: "JavaScript", icon: <Code className="h-5 w-5" /> },
  { name: "TypeScript", icon: <Code className="h-5 w-5" /> },
  { name: "React", icon: <Cog className="h-5 w-5" /> }, // Using Cog as a generic for frameworks
  { name: "Next.js", icon: <Cog className="h-5 w-5" /> },
  { name: "Tailwind CSS", icon: <Palette className="h-5 w-5" /> }, // Using Palette for styling
  { name: "Node.js", icon: <Database className="h-5 w-5" /> }, // Using Database as generic for backend
  { name: "Firebase", icon: <Database className="h-5 w-5" /> },
  { name: "Python", icon: <Code className="h-5 w-5" /> },
  { name: "Genkit", icon: <Wind className="h-5 w-5" /> }, // Using Wind as a generic for AI/GenAI
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background text-foreground px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="inline-block w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <Card className="max-w-3xl mx-auto bg-card border-border shadow-xl">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="text-sm md:text-base px-4 py-2 bg-secondary/70 hover:bg-secondary text-secondary-foreground transition-colors duration-200 flex items-center gap-2 shadow-md"
                >
                  {skill.icon}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
