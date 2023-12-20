import prisma from "@/server/database/database";
import { NextRequest, NextResponse } from "next/server";


// add testimonial to db

export const POST = async (request: NextRequest) => {
  try {
    const { name, designation, rating, description, imageUrl } =
      await request.json();
     console.log(imageUrl);
  
      const testimonial = await prisma.testimonial.create({
        data: {
          name: name,
          designation: designation,
          rating: rating,
          description: description,
          image: imageUrl,
        },
      });
      return NextResponse.json({ testimonial }, { status: 200 });
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};


// get testimonial from db

export const GET = async (request: NextRequest) => {
  try {
    // Fetch users from the database using Prisma
    const testimonial = await prisma.testimonial.findMany();

    return NextResponse.json(testimonial, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};

