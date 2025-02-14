import MotionDiv from "@/components/animations/MotionDiv";
import CommentForm from "@/components/forms/CommentForm";
import {
  getBlogById,
  getComments,
  likeComment,
} from "@/lib/actions/blog.actions";
import Image from "next/image";
import { notFound } from "next/navigation";
import CommentCard from "@/components/shared/CommentCard";
import { currentUser } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MotionP from "@/components/animations/MotionP";
import HtmlRenderer from "@/components/shared/blogs/HtmlRenderer";
import { PenSquare } from "lucide-react";
import { Metadata } from 'next';

const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return undefined;
  
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : undefined;
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const blog = await getBlogById(params.id);
  
  if (!blog) {
    return {
      title: 'Blog Not Found | Health Optima',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blog.title} | Health Optima`,
    description: blog.description,
    keywords: `${blog.category}, health article, medical blog, Health Optima, ${blog.title}`,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [
        {
          url: blog.coverImage,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.coverImage],
      creator: 'dipeshranjan12',
    },
    authors: [{ name: blog.userId.name }],
    alternates: {
      canonical: `https://healthoptima.com/blogs/${blog._id}`,
    },
  };
}

export const viewport = {
  themeColor: '#7c3aed',
};

const Page = async ({ params }: { params: { id: string } }) => {
  const clerkUser = await currentUser();
  const user = clerkUser ? await getUserByClerkId(clerkUser.id) : null;

  const blog = await getBlogById(params.id);
  if (!blog) {
    notFound();
  }

  const isAuthor = user?._id.toString() === blog.userId._id.toString();

  const comments = await getComments(params.id);

  return (
    <main>
      {/* Title section */}
      <section id="headline" className="relative min-h-[500px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[500px] flex-col justify-center space-y-6 px-8 md:px-28 py-20">
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl font-serif text-3xl font-semibold text-white md:text-5xl"
          >
            {blog.title}
          </MotionP>

          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-base font-medium text-gray-200 md:text-lg"
          >
            {blog.description}
          </MotionP>
        </div>
      </section>

      <section className="grid gap-12 px-8 py-12 md:grid-cols-3 md:gap-0 md:px-28">
        {/* Blog content */}
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:col-span-2 md:border-r md:border-gray-200 md:pr-8"
        >
          <div className="flex flex-col gap-4">
            {/* Add YouTube embed if video URL exists */}
            {blog.youtubeVideo && getYouTubeEmbedUrl(blog.youtubeVideo) && (
              <div className="flex justify-center mb-8">
                <iframe
                  src={getYouTubeEmbedUrl(blog.youtubeVideo)}
                  title={blog.title}
                  className="h-48 w-80 rounded-2xl drop-shadow-2xl md:h-[315px] md:w-[560px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            
            {/* Existing blog content */}
            <HtmlRenderer content={blog.content} />
          </div>
        </MotionDiv>

        {/* Author and comments section */}
        <MotionDiv
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col gap-8 md:pl-8"
        >
          {/* Author card */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-3">
              <Image
                src={blog.userId.profileImage}
                alt={blog.userId.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-2xl font-semibold text-primary-9">
                  {blog.userId.name}
                </h3>
                <h5 className="font-sans text-lg font-medium text-slate-500">
                  Published on {new Date(blog.createdAt).toLocaleDateString()}
                </h5>
              </div>
            </div>
            {isAuthor && (
              <Link href={`/blogs/${params.id}/edit`}>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-fit bg-primary-5 text-white"
                >
                  <PenSquare className="h-4 w-4 mr-2" />
                  Edit Blog
                </Button>
              </Link>
            )}
          </div>

          {/* Comments section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl font-semibold text-primary-9">
              Comments
            </h3>

            {clerkUser ? (
              <CommentForm blogId={params.id} />
            ) : (
              <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-4">
                <p className="text-gray-600">
                  Please sign in to leave a comment
                </p>
                <Link href="/sign-in">
                  <Button>Sign In</Button>
                </Link>
              </div>
            )}

            {/* Comments list */}
            <div className="flex flex-col gap-4">
              {comments.map((comment, index) => (
                <CommentCard
                  key={comment._id}
                  id={comment._id.toString()}
                  profileImage={comment.userId.profileImage}
                  name={comment.userId.name}
                  createdAt={comment.createdAt}
                  content={comment.content}
                  likes={comment.likes.map((id:any) => id.toString())}
                  index={index}
                  userId={user?._id?.toString()}
                />
              ))}
            </div>
          </div>
        </MotionDiv>
      </section>
    </main>
  );
};

export default Page;
