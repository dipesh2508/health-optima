import mongoose, { Document, Schema, ObjectId } from "mongoose";

export interface ITodo extends Document {
  userId: ObjectId;
  listName: string;
  taskIds: ObjectId[];
}

const todoSchema = new Schema<ITodo>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    taskIds: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Todo =
  mongoose.models.Todo || mongoose.model<ITodo>("Todo", todoSchema);
