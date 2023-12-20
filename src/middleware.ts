import { validateToken } from "@/utility/validateToken/validateToken";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export const middleware = async (request: NextRequest) => {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;

  // redirect if the user has no access token and the user wants to login.
  if ((!token && path === "/admin/login") || path === "/admin/signup") {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // redirect if the user wants to visit dashboard and has no valid token
  if (!token) {
    return NextResponse.redirect(
      new URL(`/admin/login?redirect-path=${path}`, request.url)
    );
  }

  // if the user has the access token check the validation
  try {
    await validateToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(
      new URL(`/admin/login?redirect-path=${path}`, request.url)
    );
  }
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*"],
};
