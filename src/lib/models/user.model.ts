import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  lists: Object[];
  waterRecords: Object[];
}

const userSchema = new Schema<IUser>(
  {
    clerkId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    lists: [
      {
        type: mongoose.Types.ObjectId,
        ref: "List",
      },
    ],
    waterRecords: [
      {
        type: mongoose.Types.ObjectId,
        ref: "WaterRecord",
      },
    ],
  },
  {
    timestamps: true, 
  }
);

export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
