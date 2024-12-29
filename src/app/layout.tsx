
import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from 'next/head'
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>ACM Digital Marketing - Digital with Finesse</title>
        <meta name="description" content="ACM" />
        {/* Optional: add more icon formats 
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      </Head>
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
