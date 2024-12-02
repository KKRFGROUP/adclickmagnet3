
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'animate.css';
import NextTopLoader from 'nextjs-toploader';
import Cursor from '../components/Cursor';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ad Click Magnet",
  description: "your partner in digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Cursor />
        <NextTopLoader />
        
          {children}
      </body>
    </html>
  );
}
