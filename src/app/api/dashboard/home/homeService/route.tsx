import prisma from "@/server/database/database";
import { NextRequest, NextResponse } from "next/server";

// add sponsor to db

export const POST = async (request: NextRequest) => {
  try {
    const { name, image } = await request.json();

  
    const HomeService = await prisma.homeService.create({
      data: {
        image,
        name
      },
    });
    return NextResponse.json(HomeService, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};

export const GET = async (request: NextRequest) => {
  try {
    const HomeService = await prisma.homeService.findMany();
    return NextResponse.json(HomeService, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};
