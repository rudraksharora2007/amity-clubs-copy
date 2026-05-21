import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Clubs@AIIT | Amity University",
  description: "Official club ecosystem of Amity Institute of Information Technology. Innovation, Leadership, and Excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
