import { NextResponse } from "next/server";
import {
  getListById,
  updateList,
  deleteList,
} from "@/lib/actions/todo.actions";

export async function GET(
  req: Request,
  { params }: { params: { listId: string } },
) {
  try {
    const { listId } = params;
    if (!listId) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const list = await getListById(listId);
    return NextResponse.json({ list }, { status: 200 });
  } catch (e: any) {
    console.error("[GET_LISTID] ", e.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { listId: string } },
) {
  try {
    const { listId } = params;

    const body = await req.json();
    const { listName } = body;

    if (!listId) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const list = await updateList(listId, listName);

    return NextResponse.json({ list }, { status: 200 });
  } catch (e: any) {
    console.error("POST_LISTID", e.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { listId: string } },
) {
  try {
    const { listId } = params;
    if (!listId) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    await deleteList(listId);
    return new NextResponse(null, { status: 204 });
  } catch (e: any) {
    console.error("[DELETE_LISTID] ", e.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
