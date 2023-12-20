import prisma from "@/server/database/database"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json()
        // console.log(request.json())
      const heroHome = await prisma.heroHome.create({
        data: {
          title: body.title,
          subtitle: body.subtitle,
          section: body.section ,
          video: body.videoLink,
        },
      });

        return NextResponse.json({heroHome}, {status: 200})

    } catch (error) {
        console.log(error)
        return NextResponse.json({error}, {status: 200})

    }
}


export const GET = async (request: NextRequest) => {
  try {
    // Fetch users from the database using Prisma
    const users = await prisma.heroHome.findMany();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};

