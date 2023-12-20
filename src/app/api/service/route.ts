import prisma from "@/server/database/database";
import { ServiceState } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  // console.log(searchParams);
  const params = {
    limit: searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : undefined,
    skip: searchParams.get("skip")
      ? parseInt(searchParams.get("skip")!)
      : undefined,
  };

  try {
    const services = await prisma.service.findMany({
      take: params.limit,
      skip: params.skip,
    });
    return NextResponse.json({ services }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const body = (await request.json()) as ServiceState;

    const service = await prisma.service.create({
      data: {
        badge: body.badge,
        descriptions: body.descriptions,
        duration: body.duration,
        name: body.name,
        price: body.price,
        serviceTypes: body.serviceTypes,
      },
    });

    return NextResponse.json({ body, service }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 200 });
  }
};
