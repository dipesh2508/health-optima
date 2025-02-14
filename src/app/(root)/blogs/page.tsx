import { FaTag, FaPlus } from "react-icons/fa";
import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MotionDiv from "@/components/animations/MotionDiv";
import { auth } from "@clerk/nextjs/server";
import {
  getFeaturedBlogs,
  getPopularBlogs,
} from "@/lib/actions/blog.actions";
import Pagination from "@/components/shared/Pagination";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Blogs | Health Optima',
  description: 'Explore our collection of health and wellness articles. Stay informed with the latest medical insights, health tips, and expert advice from Health Optima.',
  keywords: 'health blogs, medical articles, wellness tips, healthcare insights, Health Optima blog',
  openGraph: {
    title: 'Blogs | Health Optima',
    description: 'Explore our collection of health and wellness articles. Stay informed with the latest medical insights and expert advice.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Health Optima Logo',
      },
    ],
    type: 'website',
    siteName: 'Health Optima',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs | Health Optima',
    description: 'Explore our collection of health and wellness articles. Stay informed with the latest medical insights and expert advice.',
    images: ['/logo.png'],
    creator: '@dipeshranjan12',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://healthoptima.com/blogs',
  },
  authors: [{ name: 'Dipesh Ranjan' }, { name: 'Isheta Aggarwal' }],
};

export const viewport = {
  themeColor: '#7c3aed',
};
import AllBlogs from "@/components/shared/blogs/AllBlogs";
import { truncateText } from "@/lib/utils";

const Blogs = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = Number(searchParams?.page) || 1;
  const { mainFeatured, otherFeatured } = await getFeaturedBlogs();
  const popularBlogs = await getPopularBlogs(3);

  const session = await auth();
  return (
    <main>
      <section className="mx-8 my-8 px-2 md:mx-28">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-2xl font-semibold text-primary-10 md:text-4xl">
            Popular works
          </h1>
          {session?.sessionId && (
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/blogs/add">
                <Button
                  type={"button"}
                  variant={"secondary"}
                  className="flex items-center gap-2"
                >
                  <FaPlus size={16} />
                  <span>Create Blog</span>
                </Button>
              </Link>
            </MotionDiv>
          )}
        </div>
        <div className="my-4 flex flex-col gap-4 md:my-6 md:flex-row">
          {popularBlogs.map((blog: any, index: number) => (
            <MotionDiv
              key={blog._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="flex-1 overflow-hidden">
                <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center">
                  <div className="relative h-32 w-32 flex-shrink-0">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="rounded-full object-cover shadow-md"
                    />
                  </div>

                  <div className="flex flex-grow flex-col">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-muted-foreground text-sm font-medium">
                        {blog.category}
                      </span>
                    </div>

                    <CardTitle className="mb-2 line-clamp-1 text-lg">
                      {blog.title}
                    </CardTitle>

                    <CardDescription className="mb-3 line-clamp-2 text-sm">
                      {truncateText(blog.description, 150)}
                    </CardDescription>

                    <Link href={`/blogs/${blog._id}`}>
                      <Button size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </section>
      <section className="mx-4 md:mx-28">
        <h1 className="text-center font-serif text-2xl font-semibold text-secondary md:text-left md:text-4xl">
          Featured
        </h1>

        <div className="mt-4 grid gap-6">
          {/* Main Featured Post */}
          {mainFeatured && (
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="relative h-[400px] overflow-hidden md:h-[300px]">
                <div className="relative h-full">
                  <Image
                    src={mainFeatured.coverImage}
                    alt={mainFeatured.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-3 md:p-4">
                    <div className="flex items-start justify-between">
                      <span className="bg-primary rounded-full px-2 py-0.5 text-xs font-medium text-white md:text-sm">
                        Featured
                      </span>
                      <div className="flex items-center gap-1 rounded-full bg-black/20 px-2 py-0.5 backdrop-blur-sm">
                        <FaTag className="text-white" size={10} />
                        <span className="text-xs text-white md:text-sm">
                          {mainFeatured.category}
                        </span>
                      </div>
                    </div>

                    <div className="text-white">
                      <h2 className="mb-2 font-serif text-xl font-bold md:text-2xl">
                        {mainFeatured.title}
                      </h2>
                      <p className="line-clamp-2 max-w-xl text-xs text-gray-200 md:text-sm">
                        {mainFeatured.description}
                      </p>
                      <Link href={`/blogs/${mainFeatured._id}`}>
                        <Button
                          className="mt-2 md:mt-3"
                          size="sm"
                          variant="secondary"
                        >
                          Read Article
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </MotionDiv>
          )}

          {/* Grid for other featured posts */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Other Featured Posts */}
            {otherFeatured.map((item: any, index: number) => (
              <MotionDiv
                key={item._id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <CardHeader className="p-4">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-muted-foreground text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {truncateText(item.description, 100)}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="p-4 pt-0">
                    <Link href={`/blogs/${item._id}`}>
                      <Button variant="secondary">Read Article</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      <AllBlogs />
    </main>
  );
};

export default Blogs;
