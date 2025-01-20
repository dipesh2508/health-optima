import { NextResponse } from "next/server";
import { createBmi, getBmiHistory, updateBmi, deleteBmi } from "@/lib/actions/bmi.actions";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, height, weight, bmi, gender, age } = body;

    if (!userId || !height || !weight) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const bmiEntry = await createBmi(userId, height, weight, bmi, gender, age);
    return NextResponse.json({ bmiEntry }, { status: 201 });
  } catch (e: any) {
    console.error("[POST_BMI] ", e.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return new NextResponse("User ID is required", { status: 400 });
    }

    const bmiHistory = await getBmiHistory(userId);
    return NextResponse.json({ bmiHistory }, { status: 200 });
  } catch (e: any) {
    console.error("[GET_BMI] ", e.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { bmiId, height, weight, bmi, gender, age } = body;

    if (!bmiId || !height || !weight ) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const updatedBmi = await updateBmi(bmiId, height, weight, bmi, gender, age);
    return NextResponse.json({ updatedBmi }, { status: 200 });
  } catch (e: any) {
    console.error("[PUT_BMI] ", e.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const bmiId = searchParams.get('bmiId');

    if (!bmiId) {
      return new NextResponse("BMI ID is required", { status: 400 });
    }

    const deletedBmi = await deleteBmi(bmiId);
    return NextResponse.json({ deletedBmi }, { status: 200 });
  } catch (e: any) {
    console.error("[DELETE_BMI] ", e.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}