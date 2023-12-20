import prisma from "@/server/database/database";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params; // Retrieve the ID from the query object
    console.log(id);
    const body = await request.json();
    console.log(body);
    const { name, description, designation,image,rating } = body;
    console.log(image);
    const updatedTestimonial = await prisma.testimonial.update({
      where: { id: String(id) }, // Use the retrieved ID in the update query
      data: {
        name,
        description,
        designation,
        image,
        rating
      },
    });

    return NextResponse.json(updatedTestimonial, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};

// delete  by id

export const DELETE = async (
  request: NextRequest,
  { params }:{params:{ id: string } }
) => {
  try {
    const { id } = params; // Retrieve the ID from the query object
    console.log(id);

    const deletedTestimonial = await prisma.testimonial.delete({
      where: { id: String(id) }, // Use the retrieved ID in the delete query
    });

    return NextResponse.json(deletedTestimonial, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
