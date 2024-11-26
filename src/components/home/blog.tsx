import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { getPopularBlogs } from "@/lib/actions/blog.actions";

const Blog = async () => {
  const blogPosts = await getPopularBlogs(4);
  const limitedPosts = blogPosts.slice(0, 4);

  return (
    <section 
      className="mt-28 flex min-h-screen flex-col items-center"
      aria-label="Featured Blog Posts"
    >
      <h2 className="font-serif text-3xl font-bold md:text-5xl">
        Latest Health <span className="text-secondary">Insights</span>
      </h2>

      <div 
        className="content center mx-12 my-14 grid grid-cols-1 gap-12 md:mx-24 md:mt-16 md:grid-cols-2"
        role="feed"
        aria-label="Blog posts grid"
      >
        {limitedPosts.map((post:any) => (
          <Card 
            key={post._id} 
            className="border-none shadow-custom flex flex-col md:flex-row overflow-hidden h-auto md:h-[200px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-full h-[200px] md:w-[40%] md:h-auto relative">
              <Image
                src={post.coverImage}
                alt={`Featured image for article: ${post.title}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-[60%] flex flex-col justify-between p-4">
              <div className="space-y-2">
                <p className="font-sans text-sm md:text-base font-light text-muted-foreground">
                  {post.category}
                </p>
                <h3 className="font-serif text-lg md:text-xl font-semibold line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-sans text-xs md:text-sm font-light line-clamp-2 text-muted-foreground">
                  {post.description}
                </p>
              </div>
              <div className="flex justify-start mt-4 md:mt-auto">
                <Link 
                  href={`/blogs/${post._id}`}
                  aria-label={`Read full article about ${post.title}`}
                >
                  <Button variant={"secondary"} size={"sm"}>
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Link 
        href="/blogs"
        aria-label="View all blog posts"
      >
        <Button variant={"secondary"}>Explore All Articles</Button>
      </Link>
    </section>
  );
};

export default Blog;
