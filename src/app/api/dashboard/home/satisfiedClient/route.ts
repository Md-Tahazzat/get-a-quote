import prisma from "@/server/database/database";
import { NextRequest, NextResponse } from "next/server";

// add sponsor to db

export const POST = async (request: NextRequest) => {
  try {
    const { name, image } = await request.json();

    // // Upload image buffer to Cloudinary
    //  const ImageURl = await uploadToCloudinary();
    // //   console.log(ImageURl);

    const satisfiedClient = await prisma.satisfiedClient.create({
      data: {
        name: name,
        image: image,
      },
    });
    return NextResponse.json(satisfiedClient, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};

export const GET = async (request: NextRequest) => {
  try {
    const satisfiedClient = await prisma.satisfiedClient.findMany();
    return NextResponse.json(satisfiedClient , { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};
