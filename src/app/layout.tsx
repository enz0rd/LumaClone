import { Providers } from "./providers";
import "./globals.css";

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
