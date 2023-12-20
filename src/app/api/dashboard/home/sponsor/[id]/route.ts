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

    const deleteSponsor = await prisma.sponsor.delete({
      where: { id: String(id) }, // Use the retrieved ID in the delete query
    });

    return NextResponse.json(deleteSponsor, { status: 200 });
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

   const { name,image} = body;

   const updatedHero = await prisma.sponsor.update({
     where: { id: String(id) }, // Use the retrieved ID in the update query
     data: {
       name,
       image
     },
   });

   return NextResponse.json(updatedHero, { status: 200 });
 } catch (error) {
   console.error(error);
   return NextResponse.json({ error }, { status: 500 });
 }
};

