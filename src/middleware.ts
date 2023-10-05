import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/time-entry", "/history"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // console.log("middleware called");
  // console.log(request.cookies.get("user-credentials"));

  // if (
  //   protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  // ) {
  if (!request.cookies.get("user-credentials")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();

  //  if (cookies().get("user-credentials")) {
  //    redirect("/time-entry");
  //  } else {
  //    redirect("/login");
  //  }

  // return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: ["/time-entry/:path*", "/history/:path*"],
};
