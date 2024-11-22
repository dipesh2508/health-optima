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
import { Heart } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/lib/actions/user.actions";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = async ({ params }: { params: { id: string } }) => {
  const clerkUser = await currentUser();
  const user = clerkUser ? await getUserByClerkId(clerkUser.id) : null;

  const blog = await getBlogById(params.id);
  if (!blog) {
    notFound();
  }

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
          <h1 className="text-center font-serif text-2xl font-semibold text-white md:text-left md:text-4xl">
            {blog.title}
          </h1>
          <p className="text-justify font-sans text-sm font-medium text-black md:text-base">
            {blog.description}
          </p>
        </div>

        {/* Cover image */}
        <div className="mx-8 md:col-span-5 md:mx-0 md:mr-28">
          <div className="relative aspect-[5/3] w-full">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-12 px-8 py-12 md:grid-cols-3 md:gap-0 md:px-28">
        {/* Blog content */}
        <div className="md:col-span-2 md:border-r md:border-gray-200 md:pr-8">
          <div className="flex flex-col gap-4">
            <div
              className="text-justify font-sans text-base text-slate-800"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-8 md:pl-8">
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
        </div>
      </section>
    </main>
  );
};

export default Page;
