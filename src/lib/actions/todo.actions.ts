"use server";

import { Task, ITask } from "../models/task.model";
import { List, ILists } from "../models/todo.model";
import { User } from "../models/user.model";
import { connectToDB } from "../mongoose";
import mongoose from "mongoose";

// Creates a new list for a user
export const createList = async (userId: string, listName: string) => {
  try {
    await connectToDB();
    const list = await List.create({
      userId,
      listName,
    });
    await list.save();
    const user = await User.findByIdAndUpdate(userId, {
      $push: { lists: list._id },
    });
    await user.save();
    return list;
  } catch (error) {
    throw error;
  }
};

// Retrieves all lists for a given user
export const getLists = async (userId: string) => {
  try {
    await connectToDB();
    const lists = await List.find({ userId });
    if (!lists) {
      throw new Error("Lists not found");
    }
    return lists;
  } catch (error) {
    throw error;
  }
};

// Retrieves a specific list by its ID
export const getListById = async (listId: string) => {
  try {
    await connectToDB();
    const list = await List.findById(listId);
    if (!list) {
      throw new Error("List not found");
    }
    return list;
  } catch (error) {
    throw error;
  }
};

// Updates the name of a specific list
export const updateList = async (listId: string, listName: string) => {
  try {
    await connectToDB();
    const list = await List.findByIdAndUpdate(
      listId,
      { listName },
      { new: true },
    );
    return list;
  } catch (error) {
    throw error;
  }
};

// Deletes a specific list
export const deleteList = async (listId: string) => {
  try {
    await connectToDB();

    // Start a session for transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Find the list to get associated tasks and userId
      const list = await List.findById(listId);
      if (!list) {
        throw new Error("List not found");
      }

      // Delete all tasks in the list
      await Task.deleteMany({ listId: listId }).session(session);

      // Remove list reference from user's lists
      await User.findByIdAndUpdate(
        list.userId,
        { $pull: { lists: listId } },
        { session },
      );

      // Delete the list
      await List.findByIdAndDelete(listId).session(session);

      // Commit the transaction
      await session.commitTransaction();
    } catch (error) {
      // Rollback on error
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (error) {
    throw error;
  }
};

// Creates a new task in a specific list
export const createTask = async (
  listId: string,
  taskName: string,
  dueTime: string,
  complete: boolean,
) => {
  try {
    await connectToDB();
    const task = await Task.create({
      taskName,
      dueTime,
      complete,
      listId,
    });
    const list = await List.findByIdAndUpdate(listId, {
      $push: { taskIds: task._id },
    });
    await list.save();
    await task.save();
    return task;
  } catch (error) {
    throw error;
  }
};

// Retrieves all tasks for a specific list
export const getAllTasksByListId = async (listId: string) => {
  try {
    await connectToDB();
    const tasks = await Task.find({ listId });
    if (!tasks) {
      throw new Error("Tasks not found");
    }
    return tasks;
  } catch (error) {
    throw error;
  }
};

// Retrieves a specific task by its ID
export const getTask = async (listId: string, taskId: string) => {
  try {
    await connectToDB();

    const task = await Task.findOne({
      _id: taskId,
      listId: listId,
    }).lean();

    if (!task) {
      throw new Error("Task not found");
    }
    return task;
  } catch (error) {
    throw error;
  }
};

// Updates the details of a specific task
export const updateTask = async (
  taskId: string,
  taskName: string,
  dueTime: string,
  complete: boolean,
) => {
  try {
    await connectToDB();
    const task = await Task.findByIdAndUpdate(
      taskId,
      { taskName, dueTime, complete },
      { new: true },
    );
    if (!task) {
      throw new Error("Task not found");
    }

    task.save();
    return task;
  } catch (error) {
    throw error;
  }
};

// Deletes a specific task
export const deleteTask = async (taskId: string) => {
  try {
    await connectToDB();

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Find task to get listId
      const task = await Task.findById(taskId);
      if (!task) {
        throw new Error("Task not found");
      }

      // Delete task
      await Task.findByIdAndDelete(taskId).session(session);

      // Remove taskId from List
      await List.findByIdAndUpdate(
        task.listId,
        { $pull: { taskIds: taskId } },
        { session },
      );

      await session.commitTransaction();
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
