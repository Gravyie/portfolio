
"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24 bg-background text-foreground px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:mr-12 mb-8 md:mb-0">
          <Image
            src="https://placehold.co/150x150.png"
            alt="Garv"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
            data-ai-hint="profile picture"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-headline text-5xl sm:text-6xl font-bold mb-3 text-primary">
            Garv
          </h1>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-xl mb-6">
            Full-Stack Developer | Crafting innovative digital experiences with code, passion, and precision.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://github.com/garv-codes" target="_blank" rel="noopener noreferrer" aria-label="Garv's GitHub Profile">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:scale-110">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/garv-jain-123abc/" target="_blank" rel="noopener noreferrer" aria-label="Garv's LinkedIn Profile">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Garv's Twitter Profile">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:garv.jain.dev@gmail.com" aria-label="Email Garv">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:scale-110">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
