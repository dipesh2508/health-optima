"use server";

import { Bmi, IBmi } from "../models/bmi.model";
import { User } from "../models/user.model";
import { connectToDB } from "../mongoose";
import mongoose from "mongoose";

export const createBmi = async (
  userId: string,
  height: number,
  weight: number
) => {
  try {
    await connectToDB();
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const bmi = parseFloat((weight / ((height / 100) * (height / 100))).toFixed(2));
      const bmiEntry = await Bmi.create([{
        userId,
        height,
        weight,
        bmi,
      }], { session });

      const user = await User.findByIdAndUpdate(
        userId,
        { bmi: bmiEntry[0]._id },
        { new: true, session }
      ).populate('bmi');

      if (!user) {
        throw new Error("User not found");
      }

      await session.commitTransaction();
      return bmiEntry[0];
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (error) {
    throw error;
  }
};

export const updateBmi = async (
  bmiId: string,
  height: number,
  weight: number
) => {
  try {
    await connectToDB();
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const bmi = parseFloat((weight / ((height / 100) * (height / 100))).toFixed(2));
      const updatedBmi = await Bmi.findByIdAndUpdate(
        bmiId,
        { height, weight, bmi },
        { new: true, session }
      );

      if (!updatedBmi) {
        throw new Error("BMI entry not found");
      }

      const user = await User.findOneAndUpdate(
        { bmi: bmiId },
        { bmi: updatedBmi._id },
        { new: true, session }
      ).populate('bmi');

      if (!user) {
        throw new Error("User not found");
      }

      await session.commitTransaction();
      return updatedBmi;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (error) {
    throw error;
  }
};

export const getBmiHistory = async (userId: string) => {
  try {
    await connectToDB();
    const user = await User.findById(userId).populate('bmi');
    if (!user) {
      throw new Error("User not found");
    }
    return user.bmi;
  } catch (error) {
    throw error;
  }
};

export const deleteBmi = async (bmiId: string) => {
  try {
    await connectToDB();
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const deletedBmi = await Bmi.findByIdAndDelete(bmiId).session(session);
      if (!deletedBmi) {
        throw new Error("BMI entry not found");
      }

      const user = await User.findOneAndUpdate(
        { bmi: bmiId },
        { $unset: { bmi: 1 } },
        { new: true, session }
      );

      if (!user) {
        throw new Error("User not found");
      }

      await session.commitTransaction();
      return deletedBmi;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (error) {
    throw error;
  }
};