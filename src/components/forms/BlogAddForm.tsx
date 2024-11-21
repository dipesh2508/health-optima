"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import MotionDiv from "@/components/animations/MotionDiv";
import { useUser } from "@clerk/nextjs";
import { getUserByClerkId } from "@/lib/actions/user.actions";
import { createBlog } from "@/lib/actions/blog.actions";
import { useToast } from "@/hooks/use-toast"

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});
import "react-quill/dist/quill.snow.css";

const FormField = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <MotionDiv
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="space-y-2"
  >
    {children}
  </MotionDiv>
);

const BlogAddForm = () => {
  const { toast } = useToast()
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [userId, setUserId] = useState("");
  const { user } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      if (user?.id) {
        const dbUser = await getUserByClerkId(user.id);
        if (dbUser) {
          setUserId(dbUser._id);
        }
      }
    };
    fetchUser();
  }, [user]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!image) {
        throw new Error("Please select an image");
      }
      
      setIsSubmitting(true)
      await createBlog({
        userId,
        title,
        category,
        description,
        content,
        coverImage: preview!,
      });

      toast({
        title: "Success!",
        description: "Your blog post has been created successfully.",
        variant: "default",
      })

      // Reset form
      setTitle("");
      setCategory("");
      setDescription("");
      setContent("");
      setImage(null);
      setPreview(null);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField delay={0.3}>
        <label className="block text-sm font-medium">Blog Title</label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
          required
        />
      </FormField>

      <FormField delay={0.4}>
        <label className="block text-sm font-medium">Category</label>
        <Input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter blog category"
          required
        />
      </FormField>

      <FormField delay={0.5}>
        <label className="block text-sm font-medium">Short Description</label>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter short description"
          required
        />
      </FormField>

      <FormField delay={0.6}>
        <label className="block text-sm font-medium">Cover Image</label>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {preview && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <Image
              src={preview}
              alt="Preview"
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
          </MotionDiv>
        )}
      </FormField>

      <FormField delay={0.7}>
        <label className="block text-sm font-medium">Content</label>
        <div className="h-[400px]">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            className="h-[300px]"
          />
        </div>
      </FormField>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Creating Post...
            </>
          ) : (
            "Create Post"
          )}
        </Button>
      </MotionDiv>
    </form>
  );
};

export default BlogAddForm;
