import prisma from "@/server/database/database";
import { uploadToCloudinary } from "@/utility/imageUpload";
import { Sponsor } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// add sponsor to db
export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();
    const sponsorFiled = Object.fromEntries(formData.entries()) as Sponsor;
    const file = formData.get("file") as unknown as File;
    if (!file) {
      return NextResponse.json({ message: "File not found" }, { status: 404 });
    }
    const bytes = await file.arrayBuffer();
    const fileBuffer = Buffer.from(bytes);
    const fileUrl = await uploadToCloudinary(fileBuffer.toString("base64"));
  

    // create new project in database
    const newProject = await prisma.sponsor.create({
      data: {
        name: sponsorFiled.name,
        image: fileUrl,
      },
    });

    return NextResponse.json(newProject, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};



export const GET = async (request: NextRequest) => {
  try {
   
    const sponsor = await prisma.sponsor.findMany();
    return NextResponse.json({ sponsor}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};
