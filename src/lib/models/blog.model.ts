import mongoose, { Document, Schema, ObjectId } from "mongoose";

export interface IBlog extends Document {
  userId: ObjectId;
  title: string;
  category: string;
  description: string;
  content: string;
  youtubeVideo?: string;
  coverImage: string;
  likes: number;
  comments: ObjectId[];
}

const blogSchema = new Schema<IBlog>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    youtubeVideo: {
      type: String,
      optional: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [{
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    }],
  },
  {
    timestamps: true,
  }
);

export const Blog = 
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema); 