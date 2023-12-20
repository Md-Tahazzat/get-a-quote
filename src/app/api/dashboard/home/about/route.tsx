import prisma from "@/server/database/database";
import { NextRequest, NextResponse } from "next/server";

// add sponsor to db
export const POST = async (request: NextRequest) => {
  try {
   const {title,subtitle,imageUrl}= await request.json()
    // create new project in database
    const CreateAbout = await prisma.heroAbout.create({
      data: {
        title:title,
        subtitle:subtitle,
        image: imageUrl,
      },
    });

    return NextResponse.json(CreateAbout, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};



export const GET = async (request: NextRequest) => {
  try {

    const about = await prisma.heroAbout.findMany();
    return NextResponse.json(about, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};
