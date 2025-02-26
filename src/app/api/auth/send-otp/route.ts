import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'noreply.enz0rd@gmail.com',
        pass: 'eqgovabozjxitvsq',
    },
});

export async function POST(req: Request) {
    const body = await req.json();
    const { email, userId } = body || {};
    if (!userId || !email) {
        return NextResponse.json({ status: 400, slug: "missing-parameters", message: 'Missing userId or email' });
    }

    try {
        console.log('Sending OTP code to email:', email);
        console.log('User ID:', userId);
        const otpCode = Array.from(crypto.getRandomValues(new Uint8Array(2)), num => num.toString().padStart(3, '0')).join('');
        const userExists = await db.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!userExists) {
            return NextResponse.json({ status: 404, slug: "user-not-found", message: 'User not found' });
        }

        const existingOTP = await db.oTPCodes.findFirst({
            where: {
                userId: userId,
            },
        });
        
        if(existingOTP) {
            await db.oTPCodes.delete({
                where: {
                    id: existingOTP.id,
                },
            });
        }
        
        await db.oTPCodes.create({
            data: {
                userId: userId,
                code: otpCode,
            },
        });

        const mailOptions = {
            from: '"LumaClone - enz0rd Project" <noreply.enz0rd@gmail.com>',
            to: email,
            subject: "LumaClone - OTP",
            html: `
            <html>
                <head>
                <style>
                    body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    }
                    .container {
                    width: 100%;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    }
                    .header {
                    font-size: 24px;
                    margin-bottom: 20px;
                    }
                    .otp {
                    font-size: 20px;
                    font-weight: bold;
                    margin: 10px 0;
                    }
                    .footer {
                    font-size: 12px;
                    color: #888888;
                    margin-top: 20px;
                    }
                </style>
                </head>
                <body>
                <div class="container">
                    <div class="header">OTP Verification</div>
                    <div class="otp">Your OTP code is: <b>${otpCode}</b></div>
                    <div class="footer">This code is valid for 15 minutes</div>
                </div>
                </body>
            </html>
            `,
        };

        transporter.sendMail(mailOptions);

        return NextResponse.json({ status: 200, slug: "otp-sent", message: 'OTP code sent to email' });
    } catch (error) {
        console.error(JSON.stringify(error));
        return NextResponse.json({ status: 500, slug: "server-error", message: JSON.stringify(error) });
    }
}