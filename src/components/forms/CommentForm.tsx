"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import MotionDiv from "@/components/animations/MotionDiv";
import { useUser } from "@clerk/nextjs";
import { getUserByClerkId } from "@/lib/actions/user.actions";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { createComment } from "@/lib/actions/blog.actions";

const commentSchema = z.object({
  content: z
    .string()
    .min(3, "Comment must be at least 3 characters long")
    .max(500, "Comment must be less than 500 characters"),
});

type CommentFormData = z.infer<typeof commentSchema>;

interface CommentFormProps {
  blogId: string;
}

const CommentForm = ({ blogId }: CommentFormProps) => {
  const { toast } = useToast();
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      const result = commentSchema.safeParse({ content });

      if (!result.success) {
        setError(result.error.issues[0].message);
        return;
      }

      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to comment",
          variant: "destructive",
        });
        return;
      }

      setIsSubmitting(true);
      const dbUser = await getUserByClerkId(user.id);
      
      const newComment = await createComment({
        userId: dbUser._id,
        blogId,
        content,
      });

      if (!newComment) {
        setError("Failed to post comment. Please try again.");
        throw new Error("Failed to post comment");
        return;
      }

      toast({
        title: "Success!",
        description: "Your comment has been posted.",
        variant: "default",
      });

      setContent("");
      router.refresh();
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment..."
          rows={3}
          disabled={isSubmitting}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

        <Button 
          type="submit" 
          className="mt-2" 
          disabled={isSubmitting}
        >
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
              Posting...
            </>
          ) : (
            "Post Comment"
          )}
        </Button>
      </MotionDiv>
    </form>
  );
};

export default CommentForm; 