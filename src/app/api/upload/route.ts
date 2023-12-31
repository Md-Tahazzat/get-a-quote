
import { mkdir, readdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import {v2 as cloudinary} from 'cloudinary';
import { uploadToCloudinary } from "@/utility/imageUpload";
import prisma from "@/server/database/database";
          
cloudinary.config({ 
  cloud_name: 'ndmorsalin', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret:  process.env.CLOUDINARY_API_SECRET
});


export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as unknown as File;
    if (!file) {
      return NextResponse.json({ message: "File not found" }, { status: 404 });
    }

    
    const bytes = await file.arrayBuffer();
    const fileBuffer = Buffer.from(bytes);

    const fileUrl = await uploadToCloudinary(fileBuffer.toString('base64'));

    const savedUrl = await prisma.imageUrl.create({
      data: {
        url: fileUrl
      }
    })

    
    // cloudinary.uploader.upload(`data:image/png;base64,${fileBuffer.toString('base64')}`)
    /*  const fileName = `${Date.now()}-${file.name}`;
    const directoryPath = path.join(process.cwd(),"/public/blog/images/");
    const filepath = path.join(directoryPath, fileName); */

    // Create the directory if it doesn't exist
    // const makeDir = await mkdir(directoryPath, { recursive: true });

    // write file
    // const savedFile = await writeFile(filepath, fileBuffer);
    
    // Read the contents of the directory
    // const savedImages = await readdir(directoryPath);
   
    return NextResponse.json( savedUrl, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  try {
   
    const savedImages = await prisma.imageUrl.findMany({
      orderBy:{
        id: 'desc'
      }
    });
     
// console.log({savedImages})
    return NextResponse.json(savedImages , { status: 200 });
  } catch (error) {
    console.log('get all saved images error',error);
    return NextResponse.json({ error }, { status: 500 });
  }
}