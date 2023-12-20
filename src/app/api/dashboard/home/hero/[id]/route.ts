import prisma from "@/server/database/database";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
 try {
   const { id } = params; // Retrieve the ID from the query object
   console.log(id);
   const body = await request.json();
   console.log(body)
   const { title, subtitle, video ,section} = body;

   const updatedHero = await prisma.heroHome.update({
     where: { id: String(id) }, // Use the retrieved ID in the update query
     data: {
       title,
       subtitle,
       section,
       video,
     },
   });

   return NextResponse.json(updatedHero, { status: 200 });
 } catch (error) {
   console.error(error);
   return NextResponse.json({ error }, { status: 500 });
 }
};


// delete  by id


export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params; // Retrieve the ID from the query object
    console.log(id);
    
   
    
    const deletedHero = await prisma.heroHome.delete({
      where: { id: String(id) }, // Use the retrieved ID in the delete query
    });

    return NextResponse.json(deletedHero, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};




// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "DELETE") {
//     try {
//       const {
//         query: { id },
//       } = req; // Retrieve the ID from the request object

//       const deletedHero = await prisma.heroHome.delete({
//         where: { id: String(id) }, // Use the retrieved ID in the delete query
//       });

//       res.status(200).json(deletedHero);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Could not delete hero" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }