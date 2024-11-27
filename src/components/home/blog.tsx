import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { getPopularBlogs } from "@/lib/actions/blog.actions";

const BlogSkeleton = () => (
  <Card className="border-none shadow-custom flex flex-row overflow-hidden h-[200px]">
    <div className="w-[40%] relative">
      <Skeleton className="h-full w-full" />
    </div>
    <div className="w-[60%] flex flex-col justify-between p-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="flex justify-start mt-auto">
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  </Card>
);

const Blog = async () => {
  const blogPosts = await getPopularBlogs(4);
  const limitedPosts = blogPosts.slice(0, 4);

  return (
    <section className="mt-28 flex min-h-screen flex-col items-center">
      <h1 className="font-serif text-3xl font-bold md:text-5xl">
        Take a <span className="text-secondary">Look</span>
      </h1>

      <div className="content center mx-12 my-14 grid grid-cols-1 gap-12 md:mx-24 md:mt-28 md:grid-cols-2">
        {!blogPosts ? (
          // Show skeletons while loading
          [...Array(4)].map((_, index) => (
            <BlogSkeleton key={index} />
          ))
        ) : (
          // Show actual blog posts
          limitedPosts.map((post:any) => (
            <Card key={post._id} className="border-none shadow-custom flex flex-row overflow-hidden h-[200px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-[40%] relative">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-[60%] flex flex-col justify-between p-4">
                <div className="space-y-2">
                  <p className="font-sans text-base font-light text-muted-foreground">
                    {post.category}
                  </p>
                  <h2 className="font-serif text-xl font-semibold line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm font-light line-clamp-2 text-muted-foreground">
                    {post.description}
                  </p>
                </div>
                <div className="flex justify-start mt-auto">
                  <Link href={`/blogs/${post._id}`}>
                    <Button variant={"secondary"} size={"sm"}>
                      Read
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      <Link href="/blogs">
        <Button variant={"secondary"}>See More</Button>
      </Link>
    </section>
  );
};

export default Blog;
