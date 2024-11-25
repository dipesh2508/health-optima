import { getBlogById } from "@/lib/actions/blog.actions";
import { notFound, redirect } from "next/navigation";
import BlogEditForm from "@/components/forms/BlogEditForm";
import MotionDiv from "@/components/animations/MotionDiv";
import MotionP from "@/components/animations/MotionP";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/lib/actions/user.actions";

const Page = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogById(params.id);

  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/sign-in");
  }
  
  if (!blog) {
    notFound();
  }

  const user = await getUserByClerkId(clerkUser.id);

  console.log(blog.userId._id.toString(), user?._id.toString());
  if (blog.userId._id.toString == user?._id.toString()) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <MotionDiv
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-[140px] md:h-[180px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80"
              alt="Blog Banner - Laptop with coffee and notebook"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
            
            <div className="absolute inset-0 flex flex-col justify-center px-8">
              <MotionP
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-white text-sm font-medium tracking-wider uppercase"
              >
                Update your blog
              </MotionP>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
                  Edit Blog
                </h1>
              </MotionDiv>
            </div>
          </MotionDiv>

          <div className="p-8">
            <BlogEditForm 
              id={blog._id.toString()}
              title={blog.title}
              category={blog.category}
              description={blog.description}
              content={blog.content}
              youtubeVideo={blog.youtubeVideo || ""}
              coverImage={blog.coverImage}
            />
          </div>
        </MotionDiv>
      </div>
    </main>
  );
};

export default Page;
