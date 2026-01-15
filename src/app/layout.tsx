import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudra Patel | Portfolio",
  description: "Rudra Patel — Computer Science & Data Science student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
