import prisma from "@/server/database/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const author = await prisma.user.findUnique({
      where: { email: body.authorEmail },
    });
    if (!author) {
      return NextResponse.json(
        { message: "Author not found" },
        { status: 404 }
      );
    }
    const newBlog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        category: body.category,
        shortDescription: body.shortDescription,
        themeImage: body.themeImage,
        authorId: author?.id,
        tags: body.tags as string[],
      },
    });
    return NextResponse.json({ newBlog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url) ;
  console.log(searchParams);
  const params = {
    limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined,
    skip: searchParams.get('skip') ? parseInt(searchParams.get('skip')!) : undefined,
  };
  

  try {
    const blogs = await prisma.blog.findMany({
      include: {
        author: true,
      },
      take: params.limit,
      skip: params.skip,
    });
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
