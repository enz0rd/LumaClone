import axios from "axios";

export async function GET() {
    try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?query=event%20invite%20minimalist&orientation=squarish&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
        
        const dataJson = response.data;
        const result = dataJson.urls.small;

        const parsedDate = new Date(dataJson.created_at);
        const formattedDate = `${parsedDate.getMonth() + 1}/${parsedDate.getFullYear()}`;

        const imageObject = {
            image: result,
            credits: `${dataJson.user.name} | ${formattedDate}`,
            from: "Unsplash",
            alt: dataJson.alt_description,
            source: dataJson.links.html
        };

        return new Response(JSON.stringify(imageObject), {status: 200, headers: { "Content-Type": "application/json" }});
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response("Error fetching data", { status: 500 });
    }
}