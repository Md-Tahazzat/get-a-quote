import prisma from "@/server/database/database";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// delete  by id
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params; // Retrieve the ID from the query object
    // console.log(id);

    const deleteSatisfiedClient = await prisma.satisfiedClient.delete({
      where: { id: String(id) }, // Use the retrieved ID in the delete query
    });

    return NextResponse.json(deleteSatisfiedClient, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params; // Retrieve the ID from the query object
    console.log(id);
    const body = await request.json();
    console.log(body);
    const { updatedName, image } = body;

    const updateSatisfiedClient = await prisma.satisfiedClient.update({
      where: { id: String(id) }, // Use the retrieved ID in the update query
      data: {
        name: updatedName,
        image,
      },
    });

    return NextResponse.json(updateSatisfiedClient, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
