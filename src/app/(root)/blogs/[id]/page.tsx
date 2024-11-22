import { getBlogById } from "@/lib/actions/blog.actions";
import Image from "next/image";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogById(params.id);
  if (!blog) {
    notFound();
  }

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

      <section className="grid gap-4 py-12 md:gap-8 md:grid-cols-3 md:px-28">
        {/* Blog content */}
        <div className="order-last md:order-first md:col-span-2">
          <div className="flex flex-col gap-4">
            <div 
              className="text-justify font-sans text-base text-slate-800"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>

        {/* Right sidebar */}
        <div className="order-first md:order-last">
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
        </div>
      </section>
    </main>
  );
};

export default Page;
