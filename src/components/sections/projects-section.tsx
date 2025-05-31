
import ProjectCard from "./project-card";

const projects = [
  {
    title: "My Digital Canvas",
    description: "The personal portfolio website you are currently viewing. Built with Next.js and styled with Tailwind CSS, featuring a modern and minimalist design.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    liveLink: "#hero", 
    repoLink: "https://github.com/garv-codes/portfolio",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "portfolio website design"
  },
  {
    title: "AI Powered Blog Generator",
    description: "A full-stack application that leverages AI (Gemini Pro) to generate blog posts based on user prompts. Features user authentication and blog management.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Gemini Pro API", "Firebase Auth", "Firestore"],
    repoLink: "https://github.com/garv-codes/ai-blog-generator",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "artificial intelligence writing"
  },
  {
    title: "Real-time Collaborative Whiteboard",
    description: "A web application enabling multiple users to draw and collaborate on a shared whiteboard in real-time using WebSockets.",
    techStack: ["React", "Node.js", "Express", "Socket.io", "Canvas API"],
    repoLink: "https://github.com/garv-codes/collaborative-whiteboard",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "team collaboration drawing"
  },
   {
    title: "Weather Forecast PWA",
    description: "A Progressive Web App that provides current weather information and forecasts using a third-party weather API. Optimized for mobile and offline use.",
    techStack: ["Vue.js", "PWA", "OpenWeatherMap API", "Axios"],
    repoLink: "https://github.com/garv-codes/weather-pwa",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "weather application interface"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background text-foreground px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            My Projects
          </h2>
          <div className="inline-block w-20 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
