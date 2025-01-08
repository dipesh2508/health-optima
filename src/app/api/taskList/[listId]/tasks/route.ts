import { NextResponse } from "next/server";
import { createTask, getAllTasksByListId } from "@/lib/actions/todo.actions";

export async function GET(
  req: Request,
  { params }: { params: { listId: string } },
) {
  try {
    const { listId } = params;

    if (!listId) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const tasks = await getAllTasksByListId(listId);

    return NextResponse.json({ tasks }, { status: 200 });
  } catch (e: any) {
    console.error("[GET_TASKS] ", e.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { listId: string } },
) {
  try {
    const { listId } = params;
    if (!listId) {
      return new NextResponse("Invalid request", { status: 400 });
    }
    const body = await req.json();
    const { taskName, dueTime, complete = false } = body;

    if (!taskName || !dueTime) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const task = await createTask(listId, taskName, dueTime, complete);
    return NextResponse.json({ task }, { status: 200 });
  } catch (e: any) {
    console.error("[POST_TASKS] ", e.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
