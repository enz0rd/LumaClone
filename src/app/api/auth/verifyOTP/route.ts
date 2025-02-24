import { db } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
    status: number;
    message: string;
}

export default async function POST(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const body = req.body;

    if (!body) {
        return res.status(400).json({ status: 400, message: "Missing body" });
    }

    const checkOtp = await db.oTPCodes.findFirst({
        where: {
            userId: body.userId,
        },
    })

    if (!checkOtp) {
        return res.status(400).json({ status: 400, message: "OTP code not found" });
    }

    if(checkOtp.code !== body.code) {
        return res.status(400).json({ status: 400, message: "Invalid OTP code" });
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

    return res.status(200).json({ status: 200, message: "OTP code verified" });
}