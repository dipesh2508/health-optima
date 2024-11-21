"use server";

import { revalidatePath } from "next/cache";
import { IUser, User } from "../models/user.model";
import { connectToDB } from "../mongoose";
import path from "path";
import { List } from "../models/todo.model";

// Creates a new user in the database
export const createUser = async (
  clerkId: string,
  name: string,
  username: string,
  image: string,
  email: string,
) => {
  try {
    await connectToDB();

    const user = await User.create({
      clerkId,
      name,
      username,
      profileImage: image,
      email,
    });

    await user.save();

    return user;
  } catch (error) {
    throw error;
  }
};

// Retrieves a user by their MongoDB ID
export const getUserById = async (id: string) => {
  try {
    await connectToDB();

    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

// Retrieves a user by their Clerk ID
export const getUserByClerkId = async (clerkId: string) => {
  try {
    await connectToDB();

    const user = await User.findOne({ clerkId: clerkId });
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    throw error;
  }
};

interface IParams {
    clerkId: string;
  updateData: Partial<IUser>;
  path: string;
}

// Updates a user's information in the database
export const updateUser = async (params: IParams) => {
  try {
    await connectToDB();
    const { clerkId, updateData, path } = params;

    const user = await User.findOneAndUpdate({clerkId}, updateData, {
      new: true,
    });

    revalidatePath(path);
    return user;
  } catch (error) {
    throw error;
  }
};

interface DeleteUserParams {
  clerkId: string;
}

// Deletes a user and their associated lists from the database
export const deleteUser = async (params: DeleteUserParams) => {
  try {
    await connectToDB();
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("User not found");
    }
    const deletedUser = await User.findByIdAndDelete(user._id);
    if (!deletedUser) {
      throw new Error("Error deleting");
    }
    await List.deleteMany({ author: user._id });
    return deleteUser;
  } catch (error) {
    throw error;
  }
};
