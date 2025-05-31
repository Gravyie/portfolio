
"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle, CheckCircle } from "lucide-react";

export default function AboutMeSection() {
  const [showSchoolAchievements, setShowSchoolAchievements] = useState(false);
  const [showCollegeAchievements, setShowCollegeAchievements] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-card text-card-foreground px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <div className="inline-block w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <UserCircle className="w-48 h-48 md:w-64 md:h-64 text-primary opacity-80" />
          </div>
          <div className="font-body text-base md:text-lg text-muted-foreground space-y-6">
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
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-background border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-headline text-2xl text-primary">School Achievements</CardTitle>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="school-achievements"
                    checked={showSchoolAchievements}
                    onCheckedChange={setShowSchoolAchievements}
                    aria-label="Toggle school achievements"
                  />
                  <Label htmlFor="school-achievements" className="text-sm text-muted-foreground">Show</Label>
                </div>
              </div>
            </CardHeader>
            {showSchoolAchievements && (
              <CardContent className="text-muted-foreground space-y-3 pt-0">
                <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Consistently ranked among top 5% of students academically.</p>
                <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Led the school's coding club, organizing workshops and competitions.</p>
                <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Received 'Excellence in Computer Science' award in final year.</p>
              </CardContent>
            )}
          </Card>

          <Card className="bg-background border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-headline text-2xl text-primary">College Achievements</CardTitle>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="college-achievements"
                    checked={showCollegeAchievements}
                    onCheckedChange={setShowCollegeAchievements}
                    aria-label="Toggle college achievements"
                  />
                  <Label htmlFor="college-achievements" className="text-sm text-muted-foreground">Show</Label>
                </div>
              </div>
            </CardHeader>
            {showCollegeAchievements && (
              <CardContent className="text-muted-foreground space-y-3 pt-0">
                <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Graduated with Honors in Computer Science (e.g., GPA 3.8/4.0).</p>
                <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Key contributor to an award-winning final year capstone project.</p>
                <p className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 shrink-0" /> Active member of the university's tech society, mentoring junior students.</p>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
