import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudra Patel — ML & Data Science Engineer",
  description:
    "Computer Science & Data Science student at Rutgers building systems that make complex data actionable. Selected work in ML pipelines, forecasting, and full-stack engineering.",
  metadataBase: new URL("https://rudrapatel.dev"),
  openGraph: {
    title: "Rudra Patel — ML & Data Science Engineer",
    description:
      "Selected work in ML pipelines, forecasting, computer vision and full-stack engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
