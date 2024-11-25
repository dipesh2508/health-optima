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

// Add this utility function at the top of the file, outside the component
const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return undefined;
  
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : undefined;
};

const Page = async ({ params }: { params: { id: string } }) => {
  const clerkUser = await currentUser();
  const user = clerkUser ? await getUserByClerkId(clerkUser.id) : null;

  const blog = await getBlogById(params.id);
  if (!blog) {
    notFound();
  }

  console.log(blog.youtubeVideo);

  const comments = await getComments(params.id);

  return (
    <main>
      {/* Title section */}
      <section
        id="headline"
        className="grid gap-8 bg-primary-5 py-12 md:grid-cols-12"
      >
        <div className="mx-8 grid content-end gap-4 md:col-span-7 md:mx-0 md:ml-28">
          {/* Headline section */}
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center font-serif text-2xl font-semibold text-white md:text-left md:text-4xl"
          >
            {blog.title}
          </MotionP>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-justify font-sans text-sm font-medium text-black md:text-base"
          >
            {blog.description}
          </MotionP>
        </div>

        {/* Cover image */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-8 md:col-span-5 md:mx-0 md:mr-28"
        >
          <div className="relative aspect-[5/3] w-full">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </MotionDiv>
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
            <div
              className="prose prose-lg max-w-none text-justify font-sans text-slate-800
                prose-headings:font-serif prose-headings:font-semibold prose-headings:text-primary-9
                prose-h1:text-4xl prose-h1:mb-0 prose-h1:mt-0
                prose-h2:text-3xl prose-h2:mb-0 prose-h2:mt-0
                prose-h3:text-2xl prose-h3:mb-0 prose-h3:mt-0
                prose-h4:text-xl prose-h4:mb-0 prose-h4:mt-0
                prose-p:mb-0 prose-p:mt-0 prose-p:leading-6
                prose-a:text-primary-7 prose-a:no-underline hover:prose-a:text-primary-8
                prose-strong:font-semibold prose-strong:text-primary-9
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-0 prose-ul:mt-0
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-0 prose-ol:mt-0
                prose-li:mb-0 prose-li:mt-0 prose-li:leading-7
                prose-blockquote:border-l-4 prose-blockquote:border-primary-5 
                prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-0
                prose-img:rounded-lg prose-img:my-0
                prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
                prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:my-0
                [&>*]:mt-0 [&>*]:mb-0"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </MotionDiv>

        {/* Right sidebar */}
        <MotionDiv
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col gap-8 md:pl-8"
        >
          {/* Author card */}
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
