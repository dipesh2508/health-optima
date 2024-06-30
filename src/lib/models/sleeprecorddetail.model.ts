import mongoose, { Document, Schema } from "mongoose";

export interface ISleepRecordDetail extends Document {
  date: string;
  duration: number;
  quality: string;
}

const sleepRecordDetailSchema = new Schema<ISleepRecordDetail>(
  {
    date: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    quality: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const SleepRecordDetail =
  mongoose.models.SleepRecordDetail ||
  mongoose.model<ISleepRecordDetail>(
    "SleepRecordDetail",
    sleepRecordDetailSchema,
  );
