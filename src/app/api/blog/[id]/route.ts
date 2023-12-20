import prisma from "@/server/database/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const blog = await prisma.blog.findUnique({ where: { id },include:{author:true} });

    return NextResponse.json({blog}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

