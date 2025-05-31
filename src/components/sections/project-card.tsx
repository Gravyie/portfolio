
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[]; // Keep for data structure, but won't display
  liveLink?: string;
  repoLink?: string;
  imageUrl: string;
  imageHint: string;
}

export default function ProjectCard({
  title,
  description,
  // techStack, // No longer used for display
  liveLink,
  repoLink,
  imageUrl,
  imageHint
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden rounded-lg group">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
            data-ai-hint={imageHint}
          />
        </div>
        <div className="p-6">
          <CardTitle className="font-headline text-2xl mb-2 text-primary group-hover:text-accent transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="font-body text-muted-foreground min-h-[60px]">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        {/* Tech stack display removed */}
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t border-border/50 mt-auto">
        <div className="flex space-x-4">
          <Button asChild variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors group-hover:border-accent group-hover:text-accent-foreground">
            <Link href={liveLink || "#"} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="hover:bg-secondary hover:text-secondary-foreground transition-colors group-hover:border-accent group-hover:text-accent-foreground">
            <Link href={repoLink || "#"} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Code
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
