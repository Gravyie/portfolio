
import { Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card text-card-foreground px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Reach out to me.
          </h2>
          <div className="inline-block w-20 h-1 bg-primary rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto font-body text-base md:text-lg">
            Feel free to contact me via email for any queries, collaboration opportunities, or further details. I'm also super active on X (formerly Twitter), so feel free to DM me there!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 transform hover:scale-105">
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-5 w-5" /> X (Twitter)
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors group hover:scale-105 transform duration-300">
            <Link href="mailto:garv.jain.dev@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Email Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
