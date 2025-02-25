import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const Gilroy = localFont({
  src: "../../public/fonts/Gilroy-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Anchor | home",
  description: "Your Anchor to Real Estate-Backed Loans",
  keywords: ["anchor", "real estate", "loans"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Gilroy.variable} ${Gilroy.variable} antialiased font-gilroy`}
      >
        {children}
      </body>
    </html>
  );
}
