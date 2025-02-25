import { NextResponse } from "next/server";

import { jwtVerify } from "jose";

export async function POST(req: Request) {
    const token = req.headers.get("Authorization");
    
    if (!token) {
        return NextResponse.json({ status: 400, slug: 'not-authorized', message: "Missing token" });
    }

    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return NextResponse.json({ status: 200, slug: 'valid-token', message: "Valid token", payload });
    } catch (error) {
        return NextResponse.json({ status: 401, slug: 'invalid-token', message: "Invalid token" });
    }

}