import { NextResponse } from "next/server";
import {
  getTask,
  updateTask,
  deleteTask,
} from "@/lib/actions/todo.actions";

export async function GET(
  req: Request,
  { params }: { params: { listId: string; taskId: string } },
) {
  try {
    const { listId, taskId } = params;

    if (!listId || !taskId) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const task = await getTask(listId, taskId);

    return NextResponse.json(task, { status: 200 });
  } catch (e: any) {
    console.error("[GET_TASKID]", e.message);
  }
}

export async function PUT(
    req: Request,
    { params }: { params: { listId: string; taskId: string } },
){
    try {
        const { listId, taskId } = params;

        if (!listId || !taskId) {
            return new NextResponse("Invalid request", { status: 400 });
        }

        const body = await req.json();

        const { title, description, completed } = body;

        const updatedTask = await updateTask(taskId, title, description, completed);

        return NextResponse.json(updatedTask, { status: 200 });
    } catch (e: any) {
        console.error("[PUT_TASKID]", e.message);
        return new NextResponse("Internal server error", { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { listId: string; taskId: string } },
){
    try {
        const { listId, taskId } = params;

        if (!listId || !taskId) {
            return new NextResponse("Invalid request", { status: 400 });
        }
        
        await deleteTask(taskId);

        return new NextResponse(null, { status: 204 });
    } catch (e: any) {
        console.error("[DELETE_TASKID]", e.message);
        return new NextResponse("Internal server error", { status: 500 });
    }
}