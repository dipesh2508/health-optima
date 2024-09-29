import mongoose, { Document, Schema, ObjectId } from "mongoose";

export interface ILists extends Document {
  userId: ObjectId;
  listName: string;
  taskIds: ObjectId[];
}

const listSchema = new Schema<ILists>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    listName: {
      type: String,
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

export const List =
  mongoose.models.Todo || mongoose.model<ILists>("List", listSchema);
