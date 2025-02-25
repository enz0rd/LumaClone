import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

    if (!body) {
        return NextResponse.json({ status: 400, message: "Missing body" });
    }

    const checkOtp = await db.oTPCodes.findFirst({
        where: {
            userId: Number(body.userId),
        },
    })

    if (!checkOtp) {
        return NextResponse.json({ status: 400, message: "OTP code not found" });
    }

    if(checkOtp.code !== body.code) {
        return NextResponse.json({ status: 400, message: "Invalid OTP code" });
    }

    await db.oTPCodes.delete({
        where: {
            id: checkOtp.id,
        },
    });
    
    await db.user.update({
        where: {
            id: Number(body.userId),
        },
        data: {
            verified: true,
        },
    })

    return NextResponse.json({ status: 200, message: "OTP code verified" });
}