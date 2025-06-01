
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPost {
  title: string;
  date: string;
  snippet: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "My Journey into Web Development",
    date: "June 1, 2024",
    snippet: "A brief look into how I started my journey in the world of web development, the challenges I faced, and the exciting projects I've worked on. Stay tuned for more insights!",
  },
  {
    title: "Understanding Next.js Server Components",
    date: "May 15, 2024",
    snippet: "Server Components are a powerful feature in Next.js. This post offers a breakdown of what they are, how they work, and why you should consider using them for your next project.",
  },
  {
    title: "Tips for Effective Project Management",
    date: "April 28, 2024",
    snippet: "Managing projects effectively is key to success. In this post, I share some tips and strategies that have helped me stay organized and deliver results on time.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background text-foreground px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Latest Posts
          </h2>
          <div className="inline-block w-20 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden rounded-lg group h-full">
              <CardHeader>
                <CardTitle className="font-headline text-xl lg:text-2xl mb-1 text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="font-body text-xs text-muted-foreground">
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-body text-sm text-card-foreground">
                  {post.snippet}
                </p>
              </CardContent>
              {/* You can add a CardFooter here if you want "Read More" links later */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
