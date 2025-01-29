import { getBlogById } from "@/lib/actions/blog.actions";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { blogId: string } },
) {
  try {
    const { blogId } = params;
    if (!blogId) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const blog = await getBlogById(blogId);
    return NextResponse.json({ blog }, { status: 200 });
  } catch (e: any) {
    console.error("[GET_BLOGID] ", e.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}