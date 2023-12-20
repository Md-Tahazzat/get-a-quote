import prisma from "@/server/database/database";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = async (payload: string) => {
  const token = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
  return token;
};

export const POST = async (request: NextRequest) => {
  try {
    const { token } = await request.json();
    const decodedEmail = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );
    if (!decodedEmail) {
      return NextResponse.json({ error: "Invalid token", status: 403 });
    }

    // if user exist according to decodedEmail its valid user.
    const userInfo = await prisma.admin.findFirst({
      where: {
        email: decodedEmail,
      },
    });
    return NextResponse.json({ email: userInfo?.email, status: 200 });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json();
    const userInfo = await prisma.admin.findFirst({
      where: {
        email,
      },
    });

    // return for unauthorized user
    if (!userInfo?.email) {
      return NextResponse.json({
        error: "Unauthorized entry. Enter valid email",
        status: 401,
      });
    }

    // check if the password is valid or not
    const isValid = await bcrypt.compare(password, userInfo.password);
    if (!isValid) {
      return NextResponse.json({
        error: "Forbidden! Invalid password",
        status: 403,
      });
    }

    const token = await generateToken(email);
    console.log(token);
    const thirtyDaysInSeconds = 30 * 24 * 60 * 60; // 30 days in seconds
    const expirationDate = new Date();
    expirationDate.setTime(
      expirationDate.getTime() + thirtyDaysInSeconds * 1000
    );

    const response = NextResponse.json({
      user: { email, role: "admin" },
      status: 200,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      expires: expirationDate,
    });
    return response;
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
};

export const GET = async () => {
  const response = NextResponse.json({
    status: 200,
    message: "Token removed successfull",
  });
  response.cookies.set("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return response;
};
