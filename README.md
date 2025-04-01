# LumaClone
### The clone of [Luma](https://lu.ma)'s web application

![Luma Welcome](./image.png)

> **Attention:**  
> This project is only for educational purposes. There are no commercial plans or any type of subscription.

Hello! Welcome to this beautiful project. I'm developing it using:
- Bun 
- Next.js
- React.js
- Zod
- Motion
- Lucide React icons
- Supabase
- i18next

### To run the project
First, clone the repository using:
```bash
git clone "https://github.com/enz0rd/lumaclone.git"
```
Then, once inside the project's folder, install the dependencies:
```bash
bun install --force
```
After this, you need to set up your environment:
- Create a .env file on the root of the project
- Then, set the items below
```ini
DATABASE_URL="db connection url"
DIRECT_URL="direct db connection url"
JWT_SECRET="*JWT Secret key*"
EMAIL_SERVER_HOST="*smtp host*"
EMAIL_SERVER_PORT=*smtp port*
EMAIL_SERVER_USER="*smtp email*"
EMAIL_SERVER_PASSWORD="*smtp email password*"
UNSPLASH_ACCES_KEY="*unsplash api key*"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="*cloudinary cloud name link*"
CLOUDINARY_CLOUD_NAME="*cloudinary cloud name*"
CLOUDINARY_API_KEY="*cloudinary api key*"
CLOUDINARY_API_SECRET="*cloudinary api secret*"
```
Migrate the database using prisma:
```bash
bun prisma migrate dev --name init
```
Finally, run the project using:
```bash
bun run dev
```
### You're ready to roll! 
If you have any questions, please reach out to [my email](mailto:enzorossidaltoe@hotmail.com.br)
