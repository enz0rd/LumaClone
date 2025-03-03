import { Providers } from "./providers";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Luma ∙ Eventos Encantadores Começam Aqui",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
        >
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
