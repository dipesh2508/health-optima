import mongoose, { Document, Schema } from "mongoose";

export interface IWaterRecordDetail extends Document {
  time: string;
  quantity: number;
}

const waterRecordDetailSchema = new Schema<IWaterRecordDetail>(
  {
    time: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const WaterRecordDetail =
  mongoose.models.WaterRecordDetail ||
  mongoose.model<IWaterRecordDetail>(
    "WaterRecordDetail",
    waterRecordDetailSchema,
  );
