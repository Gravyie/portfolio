
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ChevronDown } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card text-card-foreground px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <div className="inline-block w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto font-body text-base md:text-lg text-muted-foreground space-y-6 mb-16 text-center">
          <p>
            Hello! I'm Garv, a passionate and dedicated Full-Stack Developer with a strong foundation in Computer Science. My journey into the world of technology began with a curiosity for how things work, which quickly evolved into a deep-seated love for coding and problem-solving.
          </p>
          <p>
            I specialize in building robust and scalable web applications, leveraging modern technologies across the entire stack. From crafting intuitive user interfaces with React and Next.js to designing efficient backend systems with Node.js and Python, I thrive on turning complex ideas into elegant digital solutions.
          </p>
          <p>
            Continuous learning is at the heart of my approach. I'm always exploring new tools, frameworks, and best practices to stay at the forefront of web development and deliver high-quality, impactful products.
          </p>
        </div>

        <Accordion type="multiple" className="w-full max-w-3xl mx-auto space-y-4">
          <Card className="bg-background border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <AccordionItem value="school-achievements" className="border-b-0">
              <AccordionTrigger className="p-6 hover:no-underline">
                <CardTitle className="font-headline text-2xl text-primary flex items-center justify-between w-full">
                  School Achievements
                  {/* The ChevronDown icon is part of AccordionTrigger by default */}
                </CardTitle>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-muted-foreground space-y-3 pt-0">
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Consistently ranked among top 5% of students academically.</p>
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Led the school's coding club, organizing workshops and competitions.</p>
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Received 'Excellence in Computer Science' award in final year.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Card>

          <Card className="bg-background border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <AccordionItem value="college-achievements" className="border-b-0">
               <AccordionTrigger className="p-6 hover:no-underline">
                <CardTitle className="font-headline text-2xl text-primary flex items-center justify-between w-full">
                  College Achievements
                  {/* The ChevronDown icon is part of AccordionTrigger by default */}
                </CardTitle>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-muted-foreground space-y-3 pt-0">
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Graduated with Honors in Computer Science (e.g., GPA 3.8/4.0).</p>
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Key contributor to an award-winning final year capstone project.</p>
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Active member of the university's tech society, mentoring junior students.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
      </div>
    </section>
  );
}
