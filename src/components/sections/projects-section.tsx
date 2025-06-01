
import ProjectCard from "./project-card";

const projects = [
  {
    title: "Konet Hub",
    description: "A platform connecting students, faculty, alumni, and staff of an institution to raise concerns, share announcements, and organize events. Focused on secure, authenticated access and community-driven communication.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"], // techStack remains for data, not displayed
    liveLink: "https://konet-hub.vercel.app/",
    repoLink: "https://github.com/Gravyie/KonetHub",
    imageUrl: "/images/konethub-image.png",
    imageHint: "Konet-Hub app interface showing discussion and event sections"
  },
  {
    title: "Nuvue",
    description: "A real-time theme engine that dynamically adapts website themes based on system preferences, user input, and time of day. Built for seamless accessibility and smoother user experience.",
    techStack: ["React", "CSS Variables", "Context API", "Local Storage", "Tailwind CSS"],
    liveLink: "https://nuvue-vibe.vercel.app/",
    repoLink: "https://github.com/Gravyie/Nuvue",
    imageUrl: "/images/nuvue-image.png",
    imageHint: "Theme switcher interface with light dark auto modes"
  },
  {
    title: "Lumine",
    description: "Lumine is a web application that visualizes 2D images as 3D objects within an interactive Three.js scene. Users can upload images, manipulate the 3D model, and customize the scene by toggling wireframe mode, adjusting ambient and directional lighting, and changing the background color.",
    techStack: ["NextJS", "React", "TypeScript", "Three.js", "ShadCN UI", "Tailwind CSS"],
    liveLink: "https://lumine3d.vercel.app/",
    repoLink: "https://github.com/Gravyie/lumine",
    imageUrl: "/images/lumine-image.png",
    imageHint: "abstract light"
  },
  {
    title: "Lokal",
    description: "A local service and business platform designed to connect users with nearby household helpers and small vendors. Built with a user-first approach, Lokal simplifies access to trusted, location-based services.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Google Maps API"],
    // liveLink and repoLink removed/commented out for Lokal
    // liveLink: "#", 
    // repoLink: "https://github.com/garv-codes/lokal",
    status: "development", // Added status for Lokal
    imageUrl: "/images/lokal-image.png",
    imageHint: "Lokal interface service categories nearby providers"
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
