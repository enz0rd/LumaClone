import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // check if user exists
        const existingUser = await db.user.findUnique({
            where: { email: body.email },
        })

        if(existingUser) {
            return NextResponse.json({
                status: 409,
                message: "User with this email already exists",
            });
        }
        
        // const newUser = await db.user.create({
        //     data: {
        //         email: body.email,
        //         verified: false,
        //     }
        // });

        return NextResponse.json({ status: 200, user: {
            id: 1,
            email: body.email
        },message: "User created successfully" });
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            status: 500,
            message: error,
        });
    }    
}
