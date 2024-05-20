import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest){
    if(!cookies().get('user')){
        return NextResponse.redirect(
            new URL('/', req.url)
        )
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/dashboard/bulk-mail-form']
}