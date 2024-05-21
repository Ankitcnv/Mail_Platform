import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { toast, Toaster } from "react-hot-toast";

export async function middleware(req: NextRequest) {
  if (!cookies().get("user")) {
    return NextResponse.redirect(new URL("/?error=not_authenticated", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/bulk-mail-form"],
};
