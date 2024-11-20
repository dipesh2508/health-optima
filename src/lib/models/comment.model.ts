import mongoose, { Document, Schema, ObjectId } from "mongoose";

export interface IComment extends Document {
  userId: ObjectId;
  blogId: ObjectId;
  content: string;
}

const commentSchema = new Schema<IComment>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = 
  mongoose.models.Comment || mongoose.model<IComment>("Comment", commentSchema); 