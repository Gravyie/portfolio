
"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center bg-background relative overflow-hidden px-4 py-16 md:py-24">
      {/* Optional: Subtle background elements */}
      {/* <div className="absolute inset-0 opacity-5 [background-image:radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div> */}
      
      <div className="relative z-10">
        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-text-bg-pan">
          Garv
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Full-Stack Developer | Crafting innovative digital experiences with code, passion, and precision.
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <Link href="https://github.com/garv-codes" target="_blank" rel="noopener noreferrer" aria-label="Garv's GitHub Profile">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:scale-110">
              <Github className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/garv-jain-123abc/" target="_blank" rel="noopener noreferrer" aria-label="Garv's LinkedIn Profile">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="mailto:garv.jain.dev@gmail.com" aria-label="Email Garv">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:scale-110">
              <Mail className="h-6 w-6" />
            </Button>
          </Link>
        </div>
        <Button 
          size="lg" 
          onClick={scrollToContact}
          className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          Get In Touch
        </Button>
      </div>
       <style jsx global>{`
        @keyframes text-bg-pan {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
        .animate-text-bg-pan {
          background-size: 200%;
          animation: text-bg-pan 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
