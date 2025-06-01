
import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Garv\'s Digital Canvas',
    }
  }

  return {
    title: `${post.title} | Garv's Digital Canvas`,
    description: post.snippet,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <>
        <div className="container mx-auto py-16 px-4 text-center min-h-screen flex flex-col justify-center items-center">
          <div>
            <h1 className="text-4xl font-bold font-headline text-primary mb-4">Blog Post Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Oops! The blog post you're trying to access doesn't exist or may have been moved.
            </p>
            <Button asChild size="lg">
              <Link href="/#blog">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Blog Posts
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <main className="py-12 md:py-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
                {post.title}
              </h1>
              <p className="font-body text-sm text-muted-foreground">
                Published on {post.date}
              </p>
            </div>
            <div
              className="prose prose-slate dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-xl 
                         prose-headings:font-headline prose-headings:text-primary 
                         prose-p:font-body prose-li:font-body
                         prose-a:text-accent hover:prose-a:text-primary transition-colors
                         max-w-none" 
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="mt-12 md:mt-16 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/#blog">
                  <ArrowLeft className="mr-2 h-5 w-5" /> Back to All Posts
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
