import prisma from "@/server/database/database";
import { ServiceState } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest) => {
  try {
    const body = (await request.json()) as ServiceState;
    console.log(body)
    const service = await prisma.service.update({
      where: { id: body.id },
      data: {
        badge: body.badge,
        descriptions: body.descriptions,
        duration: body.duration,
        name: body.name,
        price: body.price,
        serviceTypes: body.serviceTypes,
      },
    });

    return NextResponse.json({ service }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const service = await prisma.service.delete({
      where: { id: id },
    });
    console.log("delete services", service);
    return NextResponse.json({ service }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const service = await prisma.service.findUnique({ where: { id } });

    return NextResponse.json({ service }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};
