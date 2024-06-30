import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  complete: boolean;
  taskName: string;
  dueTime: string;
}

const taskSchema = new Schema<ITask>(
  {
    complete: {
      type: Boolean,
      required: true,
    },
    taskName: {
      type: String,
      required: true,
    },
    dueTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Task =
  mongoose.models.Task || mongoose.model<ITask>("Task", taskSchema);
