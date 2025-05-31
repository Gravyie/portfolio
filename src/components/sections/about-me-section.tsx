
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
            Hello! I'm Garv, and IT undergrad and a passionate and dedicated Full-Stack Developer with a strong foundation in Computer Science. I build for purpose and for adventure and fun.
          </p>
          <p>
            I’ve built tools like Nuvue (a dynamic theme engine), Konet Hub (a modular portfolio system), and Lokal (a hyperlocal service platform) — each focused on solving actual user problems.
          </p>
          <p>
            If you’re building something meaningful — or want to — let’s talk.
          </p>
        </div>

        <Accordion type="multiple" className="w-full max-w-3xl mx-auto space-y-4">

          <Card className="bg-background border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <AccordionItem value="college-achievements" className="border-b-0">
               <AccordionTrigger className="p-6 hover:no-underline">
                <CardTitle className="font-headline text-2xl text-primary flex items-center justify-between w-full">
                  College Stuff
                  {/* The ChevronDown icon is part of AccordionTrigger by default */}
                </CardTitle>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-muted-foreground space-y-3 pt-0">
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> In my first year of college, I’ve built a strong academic base with an expected CGPA of 9+. Alongside theory, I’ve worked with CAD, IoT, Data Structures in C, and Python, exploring libraries like NumPy, Pandas, and Matplotlib through hands-on projects and presentations.</p>
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Outside the classroom, I’m part of Spark Fashion Club, Innogeeks, and FOSSCU-K, where I stay actively involved in creative, tech, and open-source initiatives.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Card>

          <Card className="bg-background border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <AccordionItem value="school-achievements" className="border-b-0">
              <AccordionTrigger className="p-6 hover:no-underline">
                <CardTitle className="font-headline text-2xl text-primary flex items-center justify-between w-full">
                  School Stuff
                  {/* The ChevronDown icon is part of AccordionTrigger by default */}
                </CardTitle>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-muted-foreground space-y-3 pt-0">
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Scored 94.5% in ISC(highest in my batch), and 94.8% in ICSE(second highest)</p>
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Top ranks in Math and General Knowledge Olympiads (gold and silver medals)</p>
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Represented school in creative writing, quiz competitions and Basketball at the Zonal level.</p>
                  <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Vice-Headboy of the Student Government in Junior year.</p>

                </div>
              </AccordionContent>
            </AccordionItem>
          </Card>

        </Accordion>
      </div>
    </section>
  );
}
