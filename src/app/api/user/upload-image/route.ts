import cloudinary from "cloudinary";
import next, { NextApiResponse } from "next";
import { DecryptToken } from "../../auth/generate-token/route";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request, res: NextResponse) {
  try {
    // get user details
    const token = req.headers.get("Authorization");
    if (!token) {
      return NextResponse.json({ message: "User not authorized" }, { status: 401 });
    }
    const tokenInfo = await DecryptToken(token as string);

    const formData = await req.formData();
    const file = formData.get('image') as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = `data:${file.type};base64,${buffer.toString('base64')}`;

    const preset = "lumaClone_" + tokenInfo.userId;

    // verify if user already have an image uploaded to cloudinary
    const isImageAlreadyUploaded = await cloudinary.v2.api.resource(preset).then(result => {
        return result
    }).catch(error => {
        console.log(error)
        if(error.message == `Resource not found - ${preset}`) {
            next
        }
    })
    if(isImageAlreadyUploaded) {
        await cloudinary.v2.uploader.destroy(preset)
    }

    // upload image
    const { secure_url } = await cloudinary.v2.uploader.upload(base64Image, {
        public_id: preset
    });

    //save image url to user's record
    await db.$executeRaw`UPDATE "User" SET "imageUrl" = ${secure_url} WHERE id = ${tokenInfo.userId}`

    console.log({
        userId: tokenInfo.userId,
        secure_url,
    });

    return NextResponse.json({ url: secure_url }, { status: 200 });
  } catch (err: any) {
    console.log(err)
    return NextResponse.json({ message: "Internal server error" }, { status: 500  });
  }
}
