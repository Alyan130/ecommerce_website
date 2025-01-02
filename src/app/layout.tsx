"use client"

import localFont from "next/font/local";
import "./globals.css";
import TopBar from "@/components/topbar";
import Header from "@/components/middlebar";
import Footer from "@/components/footer";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Providers from "./providers";

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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animations in milliseconds
      once: true, // Ensures animations happen only once
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <TopBar/>
        <Header/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
