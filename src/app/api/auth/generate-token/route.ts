import { jwtDecrypt, SignJWT } from "jose";
import { NextResponse } from "next/server";
import jose from "jose"

export async function POST(req: Request) {
    const body = await req.json();
    const { email, userId } = body || {};
    console.log('Request body:', email + " " + userId);
    if (!userId || !email) {
        return NextResponse.json({ status: 400, slug: "missing-parameters", message: 'Missing userId or email' });
    }

    try {
        const token = await new SignJWT({ email, userId })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setIssuer("https://lumaclone.vercel.app")
            .setAudience("https://lumaclone.vercel.app")
            .setExpirationTime("6h")
            .sign(new TextEncoder().encode(process.env.JWT_SECRET));
        console.log('Generated token:', token);
        return NextResponse.json({ status: 200, slug: "generated-token", token });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, slug: "server-error", message: "Internal server error" });
    }
}

export async function DecryptToken(token: string) {
    try {
        console.log("teste ")
        const { payload } = await jwtDecrypt(token, new TextEncoder().encode(process.env.JWT_SECRET));
        console.log("teste 2")
        return payload;
    } catch (error) {
        console.error('Decryption error:', error);
        throw new Error('Invalid token');
    }
}