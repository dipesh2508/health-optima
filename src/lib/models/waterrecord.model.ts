import mongoose, { Document, Schema, ObjectId } from "mongoose";

export interface IWaterRecord extends Document {
  userId: ObjectId;
  recordIds: ObjectId[];
}

const waterRecordSchema = new Schema<IWaterRecord>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recordIds: [
      {
        type: mongoose.Types.ObjectId,
        ref: "WaterRecordDetail",
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const WaterRecord =
  mongoose.models.WaterRecord ||
  mongoose.model<IWaterRecord>("WaterRecord", waterRecordSchema);
