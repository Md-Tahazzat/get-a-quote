import prisma from "@/server/database/database";
import hashPassword from "@/utility/hashpassword";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const userData = await request.json();
    // console.log(userData);

    const savedUser = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashPassword(userData.password),
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    console.log(savedUser);

    return NextResponse.json(savedUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
