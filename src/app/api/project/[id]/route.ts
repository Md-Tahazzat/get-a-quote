import prisma from "@/server/database/database";
import { uploadToCloudinary } from "@/utility/imageUpload";
import { Project } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import os from "os";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const project = await prisma.project.findUnique({ where: { id } });

    return NextResponse.json({ project }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

// delete project

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const project = await prisma.project.delete({ where: { id } });
    const projects = await prisma.project.findMany();

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

// update project

export const PUT = async (
  request: NextRequest,
  { params, body }: { params: { id: string }; body: { name: string } }
) => {
  try {
    // receive form data
    const formData = await request.formData();
    // extract project fields
    const projectFields = Object.fromEntries(formData.entries()) as Project;
    // extract project image file
    const file = formData.get("file") as unknown as File;
    // console.log(projectFields, file);

    if (!file) {
      const newProject = await prisma.project.update({
        where: { id: params.id },
        data: {
          projectName: projectFields.projectName,
          projectDescription: projectFields.projectDescription,
          clientDescription: projectFields.clientDescription,
          projectGoals: projectFields.projectGoals,
          projectProblem: projectFields.projectProblem,
          projectSolutions: projectFields.projectSolutions,
          projectOverviewVideo: projectFields.projectOverviewVideo,
        },
      });

      const updatedProjects = await prisma.project.findMany();
      return NextResponse.json({ updatedProjects }, { status: 200 });
    }
    const temp = os.tmpdir();

    const bytes = await file.arrayBuffer();
    const fileBuffer = Buffer.from(bytes);

    // upload file to cloudinary
    const fileUrl = await uploadToCloudinary(fileBuffer.toString("base64"));

    // create new project in database
    const updatedProjects = await prisma.project.update({
      where: { id: params.id },
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

    return NextResponse.json({ updatedProjects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
