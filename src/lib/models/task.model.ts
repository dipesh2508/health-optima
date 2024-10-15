import mongoose, { Document, Schema, ObjectId } from "mongoose";

export interface ITask extends Document {
  complete: boolean;
  taskName: string;
  dueTime: string;
  listId: ObjectId;
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
    listId: {
      type: Schema.Types.ObjectId,
      ref: "List",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Task =
  mongoose.models.Task || mongoose.model<ITask>("Task", taskSchema);
