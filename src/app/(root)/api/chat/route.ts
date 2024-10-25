import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const POST = async (req: NextRequest) => {
  try {
    const { message } = await req.json();
    if (!process.env.GOOGLE_API_KEY || !process.env.MODEL_URL) {
      throw new Error("Missing API key or model URL");
    }
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: process.env.MODEL_URL });
    const result = await model.generateContent(message);
    return NextResponse.json({ message: result.response.text() });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
};
