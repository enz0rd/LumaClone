import { db } from "@/lib/db";
import { jwtDecrypt } from "jose";
import { NextResponse } from "next/server";
import { DecryptToken } from "../auth/generate-token/route";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // check if user exists
    const existingUser = await db.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return NextResponse.json({
        status: 409,
        slug: "not-verified",
        user: {
          id: existingUser.id,
          email: existingUser.email,
        },
        message: "User with this email exists but is not verified",
      });
    }

    const newUser = await db.user.create({
      data: {
        email: body.email,
        verified: false,
      },
    });

    return NextResponse.json({
      status: 200,
      slug: "user-created",
      user: {
        id: 1,
        email: body.email,
      },
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      slug: "server-error",
      message: error,
    });
  }
}

export async function PATCH(req: Request) {
  try {
    const token = req.headers.get("Authorization");
    if (!token) {
      return NextResponse.json({
        status: 401,
        slug: "unauthorized",
        message: "Unauthorized",
      });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return NextResponse.json({
        status: 500,
        slug: "server-error",
        message: "JWT secret is not defined",
      });
    }
    console.log(token)
    let payload;
    try {
      payload = await DecryptToken(token);
    } catch (error) {
      return NextResponse.json({
        status: 400,
        slug: "invalid-token",
        message: "Invalid token",
      });
    }
    const userId = payload;
    NextResponse.json({
      status: 200,
      slug: "user-verified",
      user: {
        id: userId,
      },
      message: "User verified successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      slug: "server-error",
      message: error,
    });
  }
}