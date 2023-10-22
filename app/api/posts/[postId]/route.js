import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export const DELETE = async (req, context) => {
  try {
    const { params } = context;
    await prisma.post.delete({
      where: { id: params.postId },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "Delete Data Failed" },
      { status: 500 },
      { error: error }
    );
  }
};

export const PATCH = async (req, context) => {
  try {
    const { params } = context;
    const body = await req.json();
    const post = await prisma.post.update({
      where: { id: params.postId },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tag,
      },
    });
    return NextResponse.json(
      post,
      { message: "Update Data Success" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Update Data Failed" },
      { status: 500 },
      { error: error }
    );
  }
};

export const GET = async (req, context) => {
  try {
    const { params } = context;
    const post = await prisma.post.findFirst({
      where: {
        id: params.postId,
      },
      include: { tag: true },
    });
    return NextResponse.json(
      post,
      { message: "Get Post Success" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Get Data Failed" },
      { status: 500 },
      { error: error }
    );
  }
};
