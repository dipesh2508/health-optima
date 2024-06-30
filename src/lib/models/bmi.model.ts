import mongoose, { Document, Schema, ObjectId } from "mongoose";

export interface IBmi extends Document {
  userId: ObjectId;
  height: number;
  weight: number;
  bmi: number;
}

const bmiSchema = new Schema<IBmi>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    bmi: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Bmi =
  mongoose.models.Bmi || mongoose.model<IBmi>("Bmi", bmiSchema);
