
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-me-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Separator className="bg-border/50" />
        <AboutSection />
        <Separator className="bg-border/50" />
        <ProjectsSection />
        <Separator className="bg-border/50" />
        <ContactSection />
      </main>
      <footer className="py-8 bg-card border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Garv. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          Crafted with <span className="text-primary">&hearts;</span> using Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
