import { JwtTokenPayloadStructure } from './../auth/generate-token/route';
import { db } from "@/lib/db";
import { jwtDecrypt } from "jose";
import { NextResponse } from "next/server";
import { DecryptToken } from "../auth/generate-token/route";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log(body.email);

    // check if user exists
    const existingUserEmail = await db.userEmails.findUnique({
      where: { email: body.email },
    }) ;

    
    if (existingUserEmail) {
      const existingUser = await db.user.findUnique({
        where: { id: existingUserEmail?.userId },
      });
      return NextResponse.json({
        status: 409,
        slug: "user-exists",
        user: {
          id: existingUserEmail.userId,
          email: existingUserEmail.email,
          username: existingUser?.username 
        },
        message: "Proceeding to OTP login",
      });
    }
    
    const newUser = await db.user.create({
      data: {
        verified: false,
      },
    });

    await db.userEmails.create({
      data: {
        email: body.email,
        userId: newUser.id,
      },
    });

    return NextResponse.json({
      status: 200,
      slug: "user-created",
      user: {
        id: newUser.id,
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
    try {
      const payload: JwtTokenPayloadStructure = await DecryptToken(token);

      const user = await db.user.findUnique({
        where: { id: payload.userId },
      });

      if (!user) {
        return NextResponse.json({
          status: 404,
          slug: "user-not-found",
          message: "User not found",
        });
      }

      console.log(user);

      const body = await req.json();

      await db.user.update({
        where: { id: user.id },
        data: {
          ...body
        }
      })

      return NextResponse.json({
        status: 200,
        slug: "user-patched",
        patched: {
          ...body
        },
        message: "User verified successfully",
      });
    } catch (error) {
      return NextResponse.json({
        status: 400,
        slug: "invalid-token",
        message: "Invalid token",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      slug: "server-error",
      message: error,
    });
  }
}
