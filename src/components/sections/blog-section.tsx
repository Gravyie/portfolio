
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts, type BlogPost } from "@/lib/blog-data"; // Updated import

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background text-foreground px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Blogs
          </h2>
          <div className="inline-block w-20 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref legacyBehavior>
              <a className="block h-full">
                <Card className="flex flex-col bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden rounded-lg group h-full cursor-pointer">
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
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
