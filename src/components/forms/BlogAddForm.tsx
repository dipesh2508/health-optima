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
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});
import "react-quill/dist/quill.snow.css";

const FormField = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <MotionDiv
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="space-y-2"
  >
    {children}
  </MotionDiv>
);

const blogSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title must be less than 100 characters"),
  category: z
    .string()
    .min(2, "Category must be at least 2 characters long")
    .max(50, "Category must be less than 50 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  content: z.string().min(50, "Content must be at least 50 characters long"),
  youtubeVideo: z.string()
    .refine(
      (value) => !value || /^https:\/\/www\.youtube\.com\/embed\/.+$/.test(value),
      "Invalid YouTube video link"
    )
    .optional(),
});

// Create a type from the schema
type BlogFormData = z.infer<typeof blogSchema>;

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

const BlogAddForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    category: "",
    description: "",
    youtubeVideo: "",
    content: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [userId, setUserId] = useState("");
  const { user } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

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
      if (file.size > MAX_FILE_SIZE) {
        setErrors({ image: "Image size must be less than 5MB" });
        e.target.value = ""; // Reset input
        setImage(null);
        setPreview(null);
        return;
      }

      setErrors((prev) => {
        const { image, ...rest } = prev;
        return rest;
      });
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form field changes
  const handleChange = (field: keyof BlogFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      const result = blogSchema.safeParse(formData);

      if (!result.success) {
        const formattedErrors: { [key: string]: string } = {};
        result.error.issues.forEach((issue) => {
          formattedErrors[issue.path[0] as string] = issue.message;
        });
        setErrors(formattedErrors);
        return;
      }

      if (!image) {
        setErrors({ image: "Please select an image" });
        return;
      }

      setIsSubmitting(true);
      await createBlog({
        userId,
        ...formData,
        coverImage: preview!,
      });

      toast({
        title: "Success!",
        description: "Your blog post has been created successfully.",
        variant: "default",
      });

      // Redirect to blogs page
      router.push("/blogs");

      // Reset form (though not necessary since we're redirecting)
      setFormData({
        title: "",
        category: "",
        description: "",
        content: "",
      });
      setImage(null);
      setPreview(null);
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Enter blog title"
          required
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title}</p>
        )}
      </FormField>

      <FormField delay={0.4}>
        <label className="block text-sm font-medium">Category</label>
        <Input
          type="text"
          value={formData.category}
          onChange={(e) => handleChange("category", e.target.value)}
          placeholder="Enter blog category"
          required
        />
        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category}</p>
        )}
      </FormField>

      <FormField delay={0.5}>
        <label className="block text-sm font-medium">Short Description</label>
        <Textarea
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Enter short description"
          required
          className="resize-none"
          rows={3}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500">{errors.description}</p>
        )}
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
        {errors.image && (
          <p className="mt-1 text-sm text-red-500">{errors.image}</p>
        )}
      </FormField>

      <FormField delay={0.65}>
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium">Embed Youtube Video (Optional)</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button type="button" variant="ghost" size="icon" className="h-5 w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-medium">How to get YouTube embed link:</h4>
                <ol className="list-decimal ml-4 text-sm space-y-1">
                  <li>Go to the YouTube video</li>
                  <li>Click &quot;Share&quot; button below the video</li>
                  <li>Click &quot;Embed&quot;</li>
                  <li>Copy the URL from the src attribute in the iframe code (starts with https://www.youtube.com/embed/)</li>
                </ol>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Input
          type="text"
          value={formData.youtubeVideo}
          onChange={(e) => handleChange("youtubeVideo", e.target.value)}
          placeholder="Enter youtube video link"
        />
        {errors.youtubeVideo && (
          <p className="mt-1 text-sm text-red-500">{errors.youtubeVideo}</p>
        )}
      </FormField>

      <FormField delay={0.7}>
        <label className="block text-sm font-medium">Content</label>
        <div className="h-[350px]">
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={(value) => handleChange("content", value)}
            modules={modules}
            className="h-[300px]"
          />
        </div>
        {errors.content && (
          <p className="mt-1 text-sm text-red-500">{errors.content}</p>
        )}
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
                className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
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
