import type { Metadata } from "next";
import localFont from "next/font/local";
import 'animate.css';
import "./globals.css";
import { LoadingProvider } from '@/components/Loading';
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
  title: "adClickMagnet - Digital with Finesse",
  description: "adClickMagnet",
  icons: {
    icon: '/favicon.ico',
    // Optional: add more icon formats
    // apple: '/apple-touch-icon.png',
    // shortcut: '/favicon-16x16.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning
        className={`${geistSans?.variable || ''} ${geistMono?.variable || ''} antialiased`}
      >
        <Cursor />
        <NextTopLoader />
        
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}