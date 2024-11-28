"use server";

import { revalidatePath } from "next/cache";
import { Blog, IBlog } from "../models/blog.model";
import { User } from "../models/user.model";
import { connectToDB } from "../mongoose";
import { Comment } from "../models/comment.model";

// Create a new blog post
export const createBlog = async ({
  userId,
  title,
  category,
  description,
  content,
  youtubeVideo,
  coverImage,
}: {
  userId: string;
  title: string;
  category: string;
  description: string;
  content: string;
  youtubeVideo?: string;
  coverImage: string;
}) => {
  try {
    await connectToDB();

    // Create the blog post
    const blog = await Blog.create({
      userId,
      title,
      category,
      description,
      content,
      youtubeVideo,
      coverImage,
    });

    // Add the blog reference to the user's blogs array
    await User.findByIdAndUpdate(userId, {
      $push: { blogs: blog._id },
    });

    revalidatePath("/blogs");

    // Return a plain object instead of the Mongoose document
    return JSON.parse(JSON.stringify(blog));
  } catch (error) {
    throw error;
  }
};

// Get all blogs
export const getAllBlogs = async () => {
  try {
    await connectToDB();
    const blogs = await Blog.find()
      .populate("userId", "name username profileImage")
      .sort({ createdAt: -1 });
    return blogs;
  } catch (error) {
    throw error;
  }
};

// Get blog by ID
export const getBlogById = async (blogId: string) => {
  try {
    await connectToDB();
    const blog = await Blog.findById(blogId).populate(
      "userId",
      "name username profileImage",
    );
    if (!blog) return null;
    return blog;
  } catch (error) {
    throw error;
  }
};

// Get user's blogs
export const getUserBlogs = async (userId: string) => {
  try {
    await connectToDB();
    const blogs = await Blog.find({ userId })
      .populate("userId", "name username profileImage")
      .sort({ createdAt: -1 });
    return blogs;
  } catch (error) {
    throw error;
  }
};

// Update blog
export const updateBlog = async (
  blogId: string,
  updateData: Partial<IBlog>,
  path: string,
) => {
  try {
    await connectToDB();
    const blog = await Blog.findByIdAndUpdate(blogId, updateData, {
      new: true,
    });
    revalidatePath(path);
    return JSON.parse(JSON.stringify(blog));
  } catch (error) {
    throw error;
  }
};

// Delete blog
export const deleteBlog = async (blogId: string, path: string) => {
  try {
    await connectToDB();
    const blog = await Blog.findByIdAndDelete(blogId);
    if (!blog) throw new Error("Blog not found");

    // Remove blog reference from user's blogs array
    await User.findByIdAndUpdate(blog.userId, {
      $pull: { blogs: blogId },
    });

    revalidatePath(path);
    return blog;
  } catch (error) {
    throw error;
  }
};

export const createComment = async ({
  userId,
  blogId,
  content,
}: {
  userId: string;
  blogId: string;
  content: string;
}) => {
  try {
    await connectToDB();
    const comment = await Comment.create({
      userId,
      blogId,
      content,
    });

    const blog = await getBlogById(blogId);

    blog.comments.push(comment._id);

    blog.save();

    revalidatePath(`/blogs/${blogId}`);
    return JSON.parse(JSON.stringify(comment));
  } catch (error) {
    throw error;
  }
};

export const getComments = async (blogId: string) => {
  try {
    await connectToDB();
    const comments = await Comment.find({ blogId })
      .populate("userId", "name username profileImage")
      .sort({ createdAt: -1 });
    return comments;
  } catch (error) {
    throw error;
  }
};

export async function likeComment(commentId: string, userId: string) {
  try {
    await connectToDB();

    const comment = await Comment.findById(commentId);
    if (!comment) throw new Error("Comment not found");

    const hasLiked = comment.likes.some(
      (id: string) => id.toString() === userId,
    );

    if (hasLiked) {
      await Comment.findByIdAndUpdate(commentId, {
        $pull: { likes: userId },
      });
    } else {
      await Comment.findByIdAndUpdate(commentId, {
        $push: { likes: userId },
      });
    }

    revalidatePath(`/blogs/${comment.blogId}`);

    return JSON.parse(JSON.stringify(comment));
  } catch (error) {
    console.error("Error toggling comment like:", error);
    throw error;
  }
}

// Add this utility function to generate a daily number
const getDailySkip = () => {
  const today = new Date();
  // Use date as a number between 0-30 that changes daily
  return today.getDate() - 1; // 0-30 range
};

export const getFeaturedBlogs = async () => {
  try {
    await connectToDB();
    
    const skipCount = getDailySkip();
    const totalBlogs = await Blog.countDocuments();
    
    // Ensure we don't skip more than possible
    const safeSkip = skipCount % Math.max(totalBlogs - 3, 1);
    
    // Get blogs with consistent daily skip
    const allBlogs = await Blog.find()
      .populate("userId", "name username profileImage")
      .skip(safeSkip)
      .limit(3);

    const [mainFeatured, ...otherFeatured] = allBlogs;

    return {
      mainFeatured: JSON.parse(JSON.stringify(mainFeatured)),
      otherFeatured: JSON.parse(JSON.stringify(otherFeatured))
    };
  } catch (error) {
    throw error;
  }
};

export const getPopularBlogs = async (limit: number) => {
  try {
    await connectToDB();
    
    const skipCount = getDailySkip();
    const totalBlogs = await Blog.countDocuments();
    
    // Use a different skip count than featured blogs to ensure different results
    const safeSkip = (skipCount + limit) % Math.max(totalBlogs - limit, 1); // Offset by 3 from featured blogs
    
    // Get blogs with consistent daily skip
    const popularBlogs = await Blog.find()
      .populate("userId", "name username profileImage")
      .sort({ createdAt: -1 })
      .skip(safeSkip)
      .limit(limit);

    return JSON.parse(JSON.stringify(popularBlogs));
  } catch (error) {
    throw error;
  }
};

// Search and sort blogs
export const searchAndSortBlogs = async (
  searchQuery: string = "",
  sortOrder: "asc" | "desc" = "desc",
  page: number = 1,
  limit: number = 6
) => {
  try {
    await connectToDB();

    const query = searchQuery
      ? { title: { $regex: searchQuery, $options: "i" } }
      : {};

    const totalBlogs = await Blog.countDocuments(query);
    const totalPages = Math.ceil(totalBlogs / limit);

    const blogs = await Blog.find(query)
      .populate("userId", "name username profileImage")
      .sort({ createdAt: sortOrder === "asc" ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return {
      blogs: JSON.parse(JSON.stringify(blogs)),
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    throw error;
  }
};
