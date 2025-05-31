
"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// X logo SVG
const XLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="h-5 w-5">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6902H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.828Z"/>
  </svg>
);

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24 bg-background text-foreground px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:mr-12 mb-8 md:mb-0">
          <Image
            src="/images/myphotu.jpeg"
            alt="Garv"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
            data-ai-hint="profile picture"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-headline text-5xl sm:text-6xl font-bold mb-3 text-primary">
            Garv Aditya Shandilya
          </h1>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-xl mb-6">
            Full-Stack Developer | Builder
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://github.com/Gravyie" target="_blank" rel="noopener noreferrer" aria-label="Garv's GitHub Profile">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:scale-110">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/garvaditya/" target="_blank" rel="noopener noreferrer" aria-label="Garv's LinkedIn Profile">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://x.com/garvaditya" target="_blank" rel="noopener noreferrer" aria-label="Garv's X (Twitter) Profile">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:scale-110">
                <XLogo />
              </Button>
            </Link>
            <Link href="mailto:garvashandilya@gmail.com" aria-label="Email Garv">
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
