import prisma from "@/server/database/database";
import { uploadToCloudinary } from "@/utility/imageUpload";
import { Project } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import os from "os";

export const POST = async (request: NextRequest) => {
  try {
    // receive form data
    const formData = await request.formData();
    // extract project fields
    const projectFields = Object.fromEntries(formData.entries()) as Project;
    // extract project image file
    const file = formData.get("file") as unknown as File;
    if (!file) {
      return NextResponse.json({ message: "File not found" }, { status: 404 });
    }
    const temp = os.tmpdir();

    const bytes = await file.arrayBuffer();
    const fileBuffer = Buffer.from(bytes);

    // upload file to cloudinary
    const fileUrl = await uploadToCloudinary(fileBuffer.toString("base64"));

    // create new project in database
    const newProject = await prisma.project.create({
      data: {
        projectName: projectFields.projectName,
        projectDescription: projectFields.projectDescription,
        clientDescription: projectFields.clientDescription,
        projectGoals: projectFields.projectGoals,
        projectProblem: projectFields.projectProblem,
        projectSolutions: projectFields.projectSolutions,
        projectUrl: fileUrl,
        projectOverviewVideo: projectFields.projectOverviewVideo,
      },
    });

    return NextResponse.json(newProject, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const params = {
    limit: searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : undefined,
    skip: searchParams.get("skip")
      ? parseInt(searchParams.get("skip")!)
      : undefined,
  };

  try {
    const projects = await prisma.project.findMany({
      take: params.limit,
      skip: params.skip,
    });
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
