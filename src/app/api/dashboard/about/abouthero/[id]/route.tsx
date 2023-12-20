import prisma from "@/server/database/database";
import { NextRequest, NextResponse } from "next/server";

// delete  by id
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params; // Retrieve the ID from the query object
    console.log(id);

    const deleteAboutHero = await prisma.aboutHero.delete({
      where: { id: String(id) }, // Use the retrieved ID in the delete query
    });

    return NextResponse.json(deleteAboutHero, { status: 200 });
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

    const body = await request.json();

    const { updatedTitle, updatedSubtitle, image } = body;

    const updatedAboutHero = await prisma.aboutHero.update({
      where: { id: String(id) }, // Use the retrieved ID in the update query
      data: {
        AboutTitle: updatedTitle,
        AboutSubtitle: updatedSubtitle,
        AboutImage: image,
      },
    });

    return NextResponse.json(updatedAboutHero, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};

