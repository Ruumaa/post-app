import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json()
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            tagId: body.tag
        }
    });
    return NextResponse.json(post,
      { message: "Post Data Success" },
      { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Post Data Failed" },
      { status: 500 },
      { error: error }
    );
  }
};
