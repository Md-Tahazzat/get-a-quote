import prisma from "@/server/database/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const params = {
    limit: searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : undefined,
  };
  try {
    const teamMember = await prisma.teamMember.findMany({
      take: params.limit,
    });
    return NextResponse.json({ teamMember }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const employeeInfo = await request.json();
    const result = await prisma.teamMember.create({ data: employeeInfo });
    NextResponse.json(result);
    return NextResponse.json({ result, status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const DELETE = async (request: NextRequest, response: NextResponse) => {
  try {
    const { id } = await request.json();
    const result = await prisma.teamMember.delete({
      where: { id },
    });
    return NextResponse.json({ result, status: 200 });
  } catch (error) {
    return NextResponse.json({ error, status: 500 });
  }
};
