import BlogAddForm from "@/components/forms/BlogAddForm";
import MotionDiv from "@/components/animations/MotionDiv";
import MotionP from "@/components/animations/MotionP";
import Image from "next/image";

const AddBlog = () => {
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
                Share your thoughts
              </MotionP>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
                  Create New Blog
                </h1>
              </MotionDiv>
            </div>
          </MotionDiv>

          <div className="p-8">
            <BlogAddForm />
          </div>
        </MotionDiv>
      </div>
    </main>
  );
};

export default AddBlog;
