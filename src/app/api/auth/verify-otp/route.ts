import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

    if (!body) {
        return NextResponse.json({ status: 400, message: "Missing body" });
    }

    const checkOtp = await db.oTPCodes.findFirst({
        where: {
            userId: body.userId,
        },
    })

    if (!checkOtp) {
        return NextResponse.json({ status: 400, message: "OTP code not found" });
    }

    if((new Date(checkOtp.createdAt).getTime() - Date.now()) > ( 15 * 60 * 1000 ) || checkOtp.code !== body.code) {
        return NextResponse.json({ status: 400, message: "Invalid OTP code" });
    }

    await db.oTPCodes.delete({
        where: {
            id: checkOtp.id,
        },
    });
    
    await db.user.update({
        where: {
            id: body.userId,
        },
        data: {
            verified: true,
        },
    })

    const hasUsername = await db.user.findUnique({
        where: {
            id: body.userId,
        },
        select: {
            username: true,
        },
    });

    return NextResponse.json({ status: 200, hasUsername: hasUsername?.username, message: "OTP code verified" });
}