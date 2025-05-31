
import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// X logo SVG
const XLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="mr-2 h-5 w-5">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6902H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.828Z"/>
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card text-card-foreground px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Reach out.
          </h2>
          <div className="inline-block w-20 h-1 bg-primary rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto font-body text-base md:text-lg">
            Feel free to contact me via email for any queries, collaboration opportunities, or further details. I'm also super active on X, so feel free to DM me there!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 transform hover:scale-105">
            <Link href="https://x.com/gravyie" target="_blank" rel="noopener noreferrer">
              <XLogo /> X (Twitter)
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors group hover:scale-105 transform duration-300">
            <Link href="mailto:garvashandilya@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Email Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
