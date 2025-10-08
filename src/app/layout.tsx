
"use client";

import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useState, useEffect } from "react";
import Preloader from "@/components/layout/preloader";
import Chatbot from "@/components/layout/chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
         <title>Nexstar</title>
        <meta name="description" content="Innovating the digital space, one pixel at a time." />
      </head>
      <body className="font-body antialiased">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Header />
            <main className="pt-[4.5rem] md:pt-28">{children}</main>
            <Footer />
            <Chatbot />
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}
