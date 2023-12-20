import prisma from "@/server/database/database"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json()
    // console.log(request.json())
    const Faq = await prisma.faq.create({
      data: {
        question: body.question,
         answer: body.answer,
      },
    });

    return NextResponse.json( Faq , { status: 200 })

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 200 })

  }
}


export const GET = async (request: NextRequest) => {
  try {
    // Fetch users from the database using Prisma
    const Faq = await prisma.faq.findMany();

    return NextResponse.json(Faq, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};

