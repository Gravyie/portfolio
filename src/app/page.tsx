
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-me-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectsSection from '@/components/sections/projects-section';
import BlogSection from '@/components/sections/blog-section';
import ContactSection from '@/components/sections/contact-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <HeroSection />
        <Separator className="bg-border/50" />
        <AboutSection />
        <Separator className="bg-border/50" />
        <SkillsSection />
        <Separator className="bg-border/50" />
        <ProjectsSection />
        <Separator className="bg-border/50" />
        <BlogSection />
        <Separator className="bg-border/50" />
        <ContactSection />
      </main>
    </div>
  );
}
