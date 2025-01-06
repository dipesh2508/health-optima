import { NextResponse } from "next/server";
import { createList, getLists } from "@/lib/actions/todo.actions";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, listName } = body;

    if (!userId || !listName) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const list = await createList(userId, listName);
    return NextResponse.json({ list }, { status: 201 });
  } catch (e: any) {
    console.error("[POST_TASKLIST] ", e);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const lists = await getLists(userId);
    return NextResponse.json({ lists }, { status: 200 });
  } catch (e: any) {
    console.error("[GET_TASKLIST] ", e);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
