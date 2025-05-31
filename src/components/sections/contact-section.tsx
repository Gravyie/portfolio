
import ContactForm from "./contact-form";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card text-card-foreground px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="inline-block w-20 h-1 bg-primary rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind, a question, or just want to connect? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-background p-8 rounded-lg shadow-xl border border-border">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl text-primary mb-3">Contact Information</h3>
              <p className="text-muted-foreground mb-4">
                You can also reach me directly or connect on social media.
              </p>
              <div className="space-y-3">
                <Link href="mailto:garv.jain.dev@gmail.com" className="flex items-center text-foreground hover:text-accent transition-colors group">
                  <Mail className="h-5 w-5 mr-3 text-primary group-hover:text-accent transition-colors" />
                  garv.jain.dev@gmail.com
                </Link>
                 <Link href="https://www.linkedin.com/in/garv-jain-123abc/" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-accent transition-colors group">
                  <Linkedin className="h-5 w-5 mr-3 text-primary group-hover:text-accent transition-colors" />
                  linkedin.com/in/garv-jain-123abc
                </Link>
                 <Link href="https://github.com/garv-codes" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-accent transition-colors group">
                  <Github className="h-5 w-5 mr-3 text-primary group-hover:text-accent transition-colors" />
                  github.com/garv-codes
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-headline text-2xl text-primary mb-3">Availability</h3>
              <p className="text-muted-foreground">
                I'm currently open to new project collaborations and freelance opportunities. Let's build something great together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
