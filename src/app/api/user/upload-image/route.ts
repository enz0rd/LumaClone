import cloudinary from 'cloudinary';
import { NextApiResponse } from 'next';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export default async function handler(req: Request, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { image } = await req.json();
            const { secure_url } = await cloudinary.v2.uploader.upload(image, {
                upload_preset: 'lumaClone'
            });
    
            res.status(200).json({ url: secure_url });
        } catch(err) {
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}