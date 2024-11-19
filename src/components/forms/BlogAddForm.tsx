"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import MotionDiv from "@/components/animations/MotionDiv";

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
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

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
    // Add your form submission logic here
    console.log({ title, category, description, content, image });
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
        <Button type="submit" className="w-full">
          Publish Blog
        </Button>
      </MotionDiv>
    </form>
  );
};

export default BlogAddForm;
