import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.tag.findMany();
    return NextResponse.json(data,
      { message: "Get Data Success" },
      { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Get Data Failed" },
      { status: 500 },
      { error: error }
    );
  }
};
