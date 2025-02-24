import { db } from '@/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ResponseData {
    status: number;
    message: string;
}

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'noreply.enz0rd@gmail.com',
        pass: 'eqgovabozjxitvsq',
    },
});

export default async function POST(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const { userId, email } = req.body;

    if (!userId || !email) {
        return res.status(400).json({ status: 400, message: 'Missing userId or email' });
    }

    try {
        console.log('Sending OTP code to email:', email);
        console.log('User ID:', userId);
        const otpCode = Array.from(crypto.getRandomValues(new Uint8Array(2)), num => num.toString().padStart(3, '0')).join('');

        const existingOTP = await db.oTPCodes.findFirst({
            where: {
                userId,
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
                userId,
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

        return res.status(200).json({ status: 200, message: 'OTP code sent to email' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: String(error) });
    }
}