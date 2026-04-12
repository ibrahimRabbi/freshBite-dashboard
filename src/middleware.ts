// // src/middleware.ts
// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//     try {
//         const token = request.cookies.get("token")?.value;
//         if (!token) {
//             return NextResponse.redirect(new URL("/auth/sign-in", request.url));
//         }

//         const user = await fetch(`https://server.freshbite.ch/api/v1/auth/get-my-profile`, {
//             method: "GET",
//             headers: { "Authorization": `Bearer ${token}` },
//         })
//         const userData = await user.json();

//         if (!userData?.data || userData?.data?.role !== 'admin') {
//             return NextResponse.redirect(new URL("/auth/sign-in", request.url));
//         } else {
//             return NextResponse.next();
//         }


//     } catch (err: any) {
//         return NextResponse.redirect(new URL("/auth/sign-in", request.url));
//     }
// }


// export const config = {
//     matcher: ["/",],
// };


// src/middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const PUBLIC_ROUTES = [
    "/terms-and-conditions",
    "/delete-account",
    "/about-us",
    "/privacy-policy",
    "/auth/sign-in",
];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow public routes without authentication
    if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    try {
        const token = request.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.redirect(new URL("/auth/sign-in", request.url));
        }

        const user = await fetch(`https://server.freshbite.ch/api/v1/auth/get-my-profile`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` },
        });

        const userData = await user.json();

        if (!userData?.data || userData?.data?.role !== "admin") {
            return NextResponse.redirect(new URL("/auth/sign-in", request.url));
        }

        return NextResponse.next();
    } catch (err: any) {
        return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths EXCEPT:
         * - _next/static (static files)
         * - _next/image (image optimization)
         * - favicon.ico
         * - public folder assets
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};