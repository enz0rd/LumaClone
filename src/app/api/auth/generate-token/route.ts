import { importJWK, jwtDecrypt, jwtVerify, SignJWT } from "jose";
import { NextResponse } from "next/server";

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

export interface JwtTokenPayloadStructure {
    email: string;
    userId: string;
    iat: number;
    exp: number;
    iss: string;
    aud: string;
}

export async function DecryptToken(token: string) {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }
        const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload }: { payload: JwtTokenPayloadStructure } = await jwtVerify(token, secretKey);
        return payload;
    } catch (error) {
        console.error('Decryption error:', error);
        if ((error as any).code === 'ERR_JWE_INVALID') {
            throw new Error('Invalid token format');
        }
        throw new Error('Invalid token');
    }
}