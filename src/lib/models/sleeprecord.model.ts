import mongoose, { Document, Schema, ObjectId } from "mongoose";

export interface ISleepRecord extends Document {
  userId: ObjectId;
  recordIds: ObjectId[];
}

const sleepRecordSchema = new Schema<ISleepRecord>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recordIds: [
      {
        type: mongoose.Types.ObjectId,
        ref: "SleepRecordDetail",
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const SleepRecord =
  mongoose.models.SleepRecord ||
  mongoose.model<ISleepRecord>("SleepRecord", sleepRecordSchema);
